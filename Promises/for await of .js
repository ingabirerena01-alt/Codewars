/*const getPromise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${time} ms`);
    }, time);
  });
};

let asyncArray = [getPromise(1000), getPromise(2000), getPromise(3000)];
const loopAsync = async () => {
  for await (let promise of asyncArray) {
    console.log(promise);
  }
};

loopAsync();*/

// Mock fetch function that waits 1 second per URL
/*async function* fetchPages(urls) {
  for (const url of urls) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield { url, status: 200, data: `Content of ${url}` };
  }
}

async function processPagesInSequence(urls) {
  // TODO: Implement for await...of loop here
  for await (const page of fetchPages(urls)) {
    console.log(`processing: ${page.url} and then finished: ${page.data}`);
  }
}

// Test:
processPagesInSequence(["https://example.com", "https://example.com"]);*/

/*function fetchData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

fetchData("https://pokeapi.co/api/v2/pokemon/pikachu");*/

/*async function fetchDataAsync(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchDataAsync("https://pokeapi.co/api/v2/pokemon/pikachu");
*/
async function processTask() {
  const taskPromises = [asyncTask1(), asyncTask2(), asyncTask3()];
  const results = await Promise.all(taskPromises);
  return results;
}

async function fetchdata() {
  const urls = [
    "https://pokeapi.co/api/v2/pokemon/pikachu",
    "https://pokeapi.co/api/v2/pokemon/squirtle",
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
  ];
  for await (const url of urls) {
  }
}
