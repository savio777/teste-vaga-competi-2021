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

interface IPaginationDataDTO {
  data: Array<any>;
  numberItens?: number;
  pageNumber?: number;
}

export function paginationData({
  data,
  numberItens = 6,
  pageNumber = 1,
}: IPaginationDataDTO): Array<any> {
  const indexInit = (pageNumber - 1) * numberItens;
  const indexLimit = pageNumber * numberItens;

  const newArray = data.slice(indexInit, indexLimit);

  return newArray;
}
