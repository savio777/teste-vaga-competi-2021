export function capitalizeFirstLetter(word: string): string {
  const capitalizedFirstLetter = word[0].toUpperCase();
  const wordString = word.slice(1);

  //return firstLetter.toUpperCase() + word.join();
  return capitalizedFirstLetter + wordString;
}
