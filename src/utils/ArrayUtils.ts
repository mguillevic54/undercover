import Nullable from '@customTypes/utils/Nullable';

export const ArrayUtils = {
  /**
   * Checks if array is not empty
   * @param arr array to check
   * @returns true if not empty
   */
  isNotEmpty<T>(arr: Nullable<Readonly<T[]>>): arr is Readonly<T[]> {
    return Array.isArray(arr) && arr.length > 0;
  },
  /**
   * Checks if array is  empty
   * @param arr array to check
   * @returns true if empty
   */
  isEmpty<T>(arr: Nullable<Readonly<T[]>>): arr is Readonly<T[]> {
    return !ArrayUtils.isNotEmpty(arr);
  }
};
