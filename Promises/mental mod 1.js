const fetching = async (url, time) => {
  const controller = new AbortController();
  const cleari = setTimeout(() => {
    controller.abort();
  }, time);
  try {
    const data = await fetch(url, { signal: controller.signal });
    clearTimeout(cleari);
    if (!data.ok) {
      throw new Error(`Oops something went went wrong ${data.status}`);
    }
    return await data.json();
  } catch (error) {
    clearTimeout(cleari);
    if (error.name === "AbortError") {
      throw new Error(`Request to ${url} timed out after ${time}ms`);
    }
    throw error;
  }
};

console.log(
  await fetching("https://jsonplaceholder.typicode.com/posts/4", 5000),
);
