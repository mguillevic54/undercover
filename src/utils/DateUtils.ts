import Nullable from '@customTypes/utils/Nullable';

export const DateUtils = {
  /**
   * Get year from release date
   * @param dateStr to get the year from
   * @returns the year
   */
  convertToYear(dateStr: Nullable<string>): string {
    if (!dateStr) {
      return '';
    }
    const date = new Date(dateStr);
    return date.getFullYear().toString();
  },
  /**
   * Converts minutes to hours string
   * @param duration the duration to convert
   * @returns the duration in hour and minutes
   */
  convertMinToHours(duration: Nullable<number>): string {
    if (!duration) {
      return '';
    }
    const hours = Math.floor(duration / 60);
    const hoursDuration = hours !== 0 ? `${hours}h` : '';
    const minutes = duration % 60;
    return minutes !== 0 ? `${hoursDuration}${minutes}min` : hoursDuration;
  }
};
