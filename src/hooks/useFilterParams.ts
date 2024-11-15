import { useNavigate, useLocation } from "react-router-dom";
import { useCallback, useMemo } from "react";
import { PATHS_ENUM } from "../enums/paths-enum";

interface IFilterParams<T> {
  filters?: T;
}

export default function useFilterParams<T = Record<string, string>>({
  filters,
}: IFilterParams<T>) {
  const navigate = useNavigate();
  const { search } = useLocation();

  const changeFilter = useCallback(
    (name: keyof T, value: string) => {
      const current = new URLSearchParams(search);

      if (!value) {
        current.delete(name as string);
      } else {
        current.set(name as string, value);
      }

      const query = `?${current.toString()}`;
      navigate(query);
    },
    [navigate, search]
  );

  const changeMultiple = useCallback(
    (params: Record<keyof T, string | undefined>) => {
      const current = new URLSearchParams(search);

      Object.entries(params).forEach(([key, value]) => {
        if (!value) {
          current.delete(key);
        } else {
          current.set(key, value as string);
        }
      });

      const query = `?${current.toString()}`;
      navigate(query);
    },
    [navigate, search]
  );

  const changeMultipleNavigate = useCallback(
    (params: Record<keyof T, string | undefined>, url: PATHS_ENUM) => {
      const current = new URLSearchParams(search);

      Object.entries(params).forEach(([key, value]) => {
        if (!value) {
          current.delete(key);
        } else {
          current.set(key, value as string);
        }
      });

      const query = `?${current.toString()}`;
      navigate(`${url}${query}`);
    },
    [navigate, search]
  );

  const clearFilterName = useCallback(
    (name: keyof T) => {
      const current = new URLSearchParams(search);

      current.delete(name as string);

      const query = `?${current.toString()}`;
      navigate(query);
    },
    [navigate, search]
  );

  const clearAll = () => {
    navigate("?");
  };

  const prepareFilter = useCallback(() => {
    if (!filters) return {} as T;

    const filterParams: Record<string, unknown> = {};

    Object.keys(filters).forEach((el) => {
      const f: Record<string, string> = filters;

      const defaultValue = f[el];

      const paramValue = new URLSearchParams(search).get(el);
      filterParams[el] = paramValue ?? defaultValue;
    });

    return filterParams as T;
  }, [filters, search]);

  const params: T = useMemo(() => prepareFilter(), [prepareFilter]);

  return {
    changeFilter,
    changeMultiple,
    clearAll,
    changeMultipleNavigate,
    params,
    clearFilterName,
  };
}
