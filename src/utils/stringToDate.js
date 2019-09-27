export function stringToDate(strDate) {
  const bits = strDate.split(/\D/);
  return new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);
}
