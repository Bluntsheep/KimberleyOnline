export const FormatePhoneNumber = (numStr) => {
  return `${numStr.slice(0, 3)} ${numStr.slice(3, 6)} ${numStr.slice(6, 10)}`;
};
