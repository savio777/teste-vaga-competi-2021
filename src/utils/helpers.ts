export function capitalizeFirstLetter(word: string): string {
  if (word) {
    const capitalizedFirstLetter = word[0].toUpperCase();
    const restWord = word.slice(1);

    return capitalizedFirstLetter + restWord;
  }
  return word;
}

export function getLinkSprite(urlPokemon: string): string {
  if (urlPokemon) {
    const idPokemon = urlPokemon
      .replace("https://pokeapi.co/api/v2/pokemon/", "")
      .replace("/", "");

    const urlSpritePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`;

    return urlSpritePokemon;
  }
  return urlPokemon;
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

  console.log(newArray);
  return newArray;
}
