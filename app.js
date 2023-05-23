// function getInputValue() {
//   return (inputValue = document.getElementById("pokemon").value);
// }

async function getPokemon() {
  const image = document.getElementById("image");
  const name = document.getElementById("name");
  const abilities = document.getElementById("abilities");
  const type = document.getElementById("type");
  const error = document.getElementById("error");
  // const newPokemon = getInputValue();
  //GET https://pokeapi.co/api/v2/pokemon-color/{id or name}/

  await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`, {
    Method: "POST",
    Headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
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
