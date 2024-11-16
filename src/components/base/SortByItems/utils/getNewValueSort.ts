export const getNewValueSort = (
  key: string,
  result: {
    option: string;
    value: string;
  }
) => {
  const changed = result.value === "asc" ? "desc" : "asc";

  const newValue =
    result.option === key || (result.option !== key && result.value === "asc")
      ? changed
      : result.value;

  return newValue;
};
