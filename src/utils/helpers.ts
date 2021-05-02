export function capitalizeFirstLetter(word: string): string {
  const capitalizedFirstLetter = word[0].toUpperCase();
  const restWord = word.slice(1);

  return capitalizedFirstLetter + restWord;
}

export function getLinkSprite(urlPokemon: string): string {
  const idPokemon = urlPokemon
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");

  const urlSpritePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`;

  return urlSpritePokemon;
}
