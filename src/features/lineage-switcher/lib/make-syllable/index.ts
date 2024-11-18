export const makeSyllable = (number: number): string | number => {
  const syllables: { [key: number]: string } = {
    1: 'Первая',
    2: 'Вторая',
    3: 'Третья',
    4: 'Четвертая',
    5: 'Пятая',
    6: 'Шестая',
    7: 'Седьмая',
    8: 'Восьмая',
    9: 'Девятая',
    10: 'Десятая'
  };

  if (syllables[number]) return syllables[number];
  return number;
};
