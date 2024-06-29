const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", searchData);

(async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();

  APIData.push(...data);
})();

let APIData = [];

function debouncedSearch(searchInput, interval, callback) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      filteredData = APIData.filter((data) =>
        data.name.toLowerCase().includes(searchInput.value.toLowerCase())
      );
      callback(filteredData);
    }, interval);
  };
}

function callbackFn(filteredData) {
  console.log(filteredData);

  if (filteredData.length > 0) {
    let p = document.createElement("div");
    p.innerHTML = filteredData.map((d) => `<p>${d.name}</p>`).join("");

    container.append(p);
  }
}

function searchData() {
  const debouncedSearchFunction = debouncedSearch(
    searchInput,
    1000,
    callbackFn
  );

  debouncedSearchFunction();

  container.innerHTML = "";
}
