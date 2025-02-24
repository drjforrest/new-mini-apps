export const getRandomCountries = (countries: string[], count: number = 3): string[] => {
  const shuffled = [...countries].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
