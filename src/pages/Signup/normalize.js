export const phone = (val) => (
  val.replace(/[^ +\d]/g, '').replace(/ {2}/g, ' ')
)

export const inRange = (min, max) => (val) => {
  val = val.replace(/[^\d]/g, '').replace(/0{2}/g, '0');
  return (val < min && min) || (val > max && max) || val;
};