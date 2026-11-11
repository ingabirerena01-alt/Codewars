function meeting(s) {
  const namearr = [];
  const finalname = [];
  const names = s.toUpperCase().split(";");
  for (let name of names) {
    const namess = name.split(":");
    namearr.push(namess);
  }
  namearr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    } else {
      return a[1].localeCompare(b[1]);
    }
  });
  for (let name of namearr) {
    finalname.push(`(${name.reverse().join(", ")})`);
  }
  return finalname.join("");
}
