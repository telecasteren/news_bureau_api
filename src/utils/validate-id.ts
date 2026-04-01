export const isValidId = (id: any): boolean => {
  return Number.isInteger(id) && id > 0;
};
