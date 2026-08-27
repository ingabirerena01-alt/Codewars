fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    if (!response.ok) {
      throw new Error("could not fetch data");
    }
    return response.json();
  })
  .then((data) => console.log(data.id))
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

async function fetchdata() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/spongebob-squarepants",
    );
    if (!response.ok) {
      throw new Error("could not fetch data");
    }
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.error("Error fetching data:");
  }
}
