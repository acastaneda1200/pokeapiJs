const cardDiv = document.getElementById("cards");
const cardJq = $('#cards');

const generarCard = pokemon => {

  let apiImagem = pokemon.sprites.other['official-artwork'].front_default
  let nombre = pokemon.name;
  let type = pokemon.types[0].type.name;
  let habilidad = pokemon.abilities[0].ability.name;
  let habilidadHidden = pokemon.abilities[1].ability.name;
  let HP = pokemon.stats[0].base_stat;
  let attack = pokemon.stats[1].base_stat;
  let defense = pokemon.stats[2].base_stat;
  let special_attack = pokemon.stats[3].base_stat;
  let special_defense = pokemon.stats[4].base_stat;
  let speed = pokemon.stats[5].base_stat;

  let typeArr = [pokemon.types];
  let typesCard = []

  for (const element of typeArr) {
    for (let [i, types] of element.entries()) {

      types = element[i].type.name;

      typesCard +=
        `<h3 class="cards__type t_${types}">
        ${types} 
        </h3>`;
    }
  }




  let pokecardHtml = `<figure class="cards cards--${type}">
    <div class="cards__image-container">
      <img src="${apiImagem}" alt="" class="cards__image">   
    </div>
    
    <figcaption class="cards__caption">
      <h1 class="cards__name">${nombre}</h1>  
      ${typesCard}
      <table class="cards__stats">
        <tbody><tr>
          <th>HP</th>
          <td>${HP}</td>
        </tr>
        <tr>
          <th>Attack</th>
          <td>${attack}</td>
        </tr>
        
        <tr>
          <th>Defense</th>
          <td>${defense}</td>
        </tr>
  
        <tr>
          <th>Special Attack</th>
          <td>${special_attack}</td>
        </tr>
        <tr>
          <th>Special Defense</th>
          <td>${special_defense}</td>
        </tr>
        <tr>
          <th>Speed</th>  
          <td>${speed}</td>
        </tr>
      </tbody></table>
      
      <div class="cards__abilities">
        <h4 class="cards__ability">
          <span class="cards__label">Ability</span>
          ${habilidad}
        </h4>
        <h4 class="cards__ability">
          <span class="cards__label">Hidden Ability</span>
          ${habilidadHidden}
        </h4>
      </div>
    </figcaption>
  </figure>`;

  cardDiv.innerHTML = cardDiv.innerHTML + pokecardHtml
  //cardDiv.append(pokecardHtml);




}


const dataApi = async idPokemon => {

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
  const pokemon = await res.json();

  generarCard(pokemon);
}

const fetchPokemons = async () => {
  for (let i = 1; i < 10; i++) {

    await dataApi(i);
  }

}
fetchPokemons();
