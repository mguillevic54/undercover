export const StringUtils = {
  /**
   * Capitalize string
   * @param str string to capitalize
   * @returns capitalized string
   */
  capitalize(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }
};
