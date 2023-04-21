export const formatNumber = (num: number): string => {
  const regex = /\B(?=(\d{3})+(?!\d))/g; // Regular expression for matching thousands separators
  const strNum = num.toFixed(2); // Convert the number to a string with two decimal places
  const parts = strNum.split("."); // Split the string into integer and decimal parts
  parts[0] = parts[0].replace(regex, ","); // Add commas for thousands separators
  return parts.join("."); // Join the parts back together with a decimal point
};
