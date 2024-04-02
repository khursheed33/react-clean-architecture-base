// Function to capitalize the first letter of a string.
function toCapitalized(str: string): string {
    return str.length > 0 ? `${str[0].toUpperCase()}${str.substring(1).toLowerCase()}` : '';
  }
  
  // Function to convert a string to title case.
  function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => toCapitalized(txt));
  }
  
  // Function to replace underscores with spaces in a string.
  function replaceUnderscore(str: string): string {
    return str.replace(/_/g, ' ');
  }
  
  export { toCapitalized, toTitleCase, replaceUnderscore };
  