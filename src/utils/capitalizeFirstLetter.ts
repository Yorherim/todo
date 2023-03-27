/**
 * get first char in string and to upper case it
 * @param str
 */
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
