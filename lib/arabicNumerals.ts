const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

export function toArabicNumerals(value: string | number) {
  return String(value).replace(/\d/g, (digit) => arabicDigits[Number(digit)]);
}
