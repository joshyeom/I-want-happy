export const urlTrans = (url: string) => {
  let transUrl;
  switch (url) {
    case '1-100':
      transUrl = '01\n~100';
      break;
    case '100-200':
      transUrl = '100\n~200';
      break;
    case '200-300':
      transUrl = '200\n~300';
      break;
    default:
      transUrl = 'Unknown range';
  }
  return transUrl;
};
