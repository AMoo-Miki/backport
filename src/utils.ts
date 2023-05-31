/**
 * Converts a comma-delimited string into an array of strings while eliminating
 * empty strings.
 */
export const parseCommaDelimitedStrings = (input?: string): string[] => {
  return input?.split?.(',')
      .map(item => item.trim())
      .filter(item => item)
      .filter((item, idx, arr) => arr.indexOf(item) === idx) || [];
};

