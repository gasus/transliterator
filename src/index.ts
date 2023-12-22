const alphabets: { [key: string]: { jp: string; en: string } } = {
  а: { jp: "丹", en: "A" },
  б: { jp: "五", en: "6" },
  в: { jp: "乃", en: "B" },
  г: { jp: "厂", en: "G" },
  д: { jp: "亼", en: "g" },
  е: { jp: "巳", en: "E" },
  ё: { jp: "它", en: "E" },
  ж: { jp: "米", en: ">|<" },
  з: { jp: "弓", en: "3" },
  и: { jp: "仈", en: "U" },
  й: { jp: "认", en: "U" },
  к: { jp: "片", en: "K" },
  л: { jp: "几", en: "JI" },
  м: { jp: "从", en: "M" },
  н: { jp: "廾", en: "H" },
  о: { jp: "口", en: "0" },
  п: { jp: "刀", en: "I7" },
  р: { jp: "尸", en: "P" },
  с: { jp: "仁", en: "C" },
  т: { jp: "丁", en: "T" },
  у: { jp: "丫", en: "Y" },
  ф: { jp: "中", en: "<|>" },
  х: { jp: "乂", en: "X" },
  ц: { jp: "凵", en: "u" },
  ч: { jp: "丩", en: "4" },
  ш: { jp: "山", en: "III" },
  щ: { jp: "山", en: "III" },
  ъ: { jp: "ら", en: "b" },
  ы: { jp: "お", en: "bl" },
  ь: { jp: "ら", en: "b" },
  э: { jp: "彐", en: "3" },
  ю: { jp: "扣", en: "IO" },
  я: { jp: "牙", en: "9" },
};

export const transliteration = ({
  text,
  mode,
}: {
  text: string;
  mode: "jp" | "en";
}): string =>
  text
    .toLowerCase()
    .split("")
    .map((i: string) => alphabets?.[i]?.[mode] || i)
    .join("");
