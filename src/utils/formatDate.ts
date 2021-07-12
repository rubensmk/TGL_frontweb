export const formatDate = (date: string): string => {
  const result = date.split(' ', 1);
  return result[0];
};
