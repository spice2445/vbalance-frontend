export const truncateAddress = (
  address: string | undefined,
  firstCharsCount: number = 4,
  lastCharsCount: number = 4
) => {
  if (!address) return '';
  if (address.length <= firstCharsCount + lastCharsCount) {
    return String(address);
  }

  const firstPart = address.substring(0, firstCharsCount);
  const lastPart = address.substring(address.length - lastCharsCount);
  const middlePart = '...';

  return `${firstPart}${middlePart}${lastPart}`;
};
