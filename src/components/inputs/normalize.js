const onlyDigits = (val) => val.replace(/[^\d]/g, '');
const noConsecutiveZeros = (val) => val.replace(/0{2}/g, '0');

export const inRange = (min, max) => (val) => {
  val = noConsecutiveZeros(onlyDigits(val));
  return (val < min && min) || (val > max && max) || val;
};

export const phone = val => {
  val = onlyDigits(val);
  if (val.length < 3) return '+' + val;
  if (val.length < 6) return `+${val.slice(0, 2)} ${val.slice(2)}`;
  if (val.length < 10) return `+${val.slice(0, 2)} ${val.slice(2, 5)} ${val.slice(5, 9)}`;
  return `+${val.slice(0, 2)} ${val.slice(2, 5)} ${val.slice(5, 9)} ${val.slice(9, 13)}`;
};

export const zip = val => onlyDigits(val).slice(0, 5);