async function Rose(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

Rose("https://api.example.com/users");
