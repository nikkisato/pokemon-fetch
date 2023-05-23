// split it up in several functions


async function getPokemon(mm = "pikachu") {
  const image = document.getElementById("image");
  const name = document.getElementById("name");
  const abilities = document.getElementById("abilities");
  const type = document.getElementById("type");
  const error = document.getElementById("error");

  // const newPokemon = getInputValue();
  //GET https://pokeapi.co/api/v2/pokemon-color/{id or name}/

  await fetch(`https://pokeapi.co/api/v2/pokemon/${mm}`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        console.log("Something is wrong with this pokemon data, Please try again");
      }
    })
    .then((data) => {
      console.log(data);

      // split this out
      image.innerHTML = `<img src=${data.sprites.front_default} />`;
      name.innerHTML = data.name;

      for (let i = 0; i < data.abilities.length; i++) {
        console.log(data.abilities[i].ability.name);
        // Can only get 1 ?? ask Chris about this
        abilities.innerHTML = `<li>${data.abilities[i].ability.name}</li>`;
      }

      for (let i = 0; i < data.types.length; i++) {
        type.innerHTML = data.types[i].type.name;
      }
    })
    .catch((error) => {
      error.innerHTML = "That pokemon doesn't exist!";
      console.error(error);
    });
}

getPokemon();

const pokemonForm = document.getElementById("search-pokemon");
pokemonForm.addEventListener("submit", updatePokemon);

// function decleration?
function updatePokemon(event) {
  event.preventDefault();
  // const data = new FormData(event.target);
  const data = new FormData(this);
  const pokemon = data.get("pokemon");
  getPokemon(pokemon);

  //this keyword
}

//function expression
// const updatePokemon = (event) => {
//   event.preventDefault();
//   const data = new FormData(event.target);
//   const pokemon = data.get("pokemon");
//   getPokemon(pokemon);
// };

//this
// pokemonForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("this1", this);
// });

// pokemonForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("this2", this);
// });
