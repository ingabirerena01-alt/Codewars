console.log("A");

async function foo() {
  console.log("B");
  await null;
  console.log("C");
  throw new Error("fail in foo");
}

foo().catch((e) => console.log("D:", e.message));

Promise.resolve()
  .then(() => console.log("E"))
  .then(() => console.log("F"));

console.log("G");

setTimeout(() => console.log("H"), 0);

(async () => {
  console.log("I");
  try {
    await foo();
  } catch (e) {
    console.log("J:", e.message);
  }
  console.log("K");
})();

console.log("L");
