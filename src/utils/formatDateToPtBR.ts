export function formatDateToPtBR(dateString: string | null | undefined) {
  if (!dateString) return "-";

  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}
