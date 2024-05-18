export function formatDateTime(time) {
  const dt = new Date(time);

  return dt.toLocaleString();
}
