export function formatDateTime(time) {
  const dt = new Date(time);

  return dt.toLocaleString();
}

export const generateUid = () => {
  return Date.now() + "" + Math.round(Math.random() * 1000);
};
