function myfetch(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return;
    else if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      callback(null, data);
    } else {
      callback(new Error(`SOmething went wrong at ${xhr.status}`), null);
    }
  };
  xhr.onerror = () => {
    callback(new Error(`SOmething went wrong`), null);
  };
  xhr.open("GET", url);
  xhr.send();
}

myfetch("https://my-random-api.com/data", (error, data) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(data);
  }
});
// .then(data => console.log(data))
//.catch(error => console.log('Error:', error));
