/*const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

*/

async function fetchMultipleAPIs(urls) {
  try {
    const fetchdata = urls.map(async (urls) => {
      const response = await fetch(urls);
      if (!response.ok) {
        throw new Error(`Something wemt wrong at : ${response.status}`);
      } else {
        return response.json();
      }
    });
    const combined = Promise.all(fetchdata);
    return combined;
  } catch (e) {
    console.log("Data not found");
  }
}
fetchMultipleAPIs([
  "https://jsonplaceholder.typicode.com/posts/4",
  "https://jsonplaceholder.typicode.com/posts/5",
  "https://jsonplaceholder.typicode.com/posts/6",
])
  .then((results) => {
    console.log("Combined Results:", results);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
