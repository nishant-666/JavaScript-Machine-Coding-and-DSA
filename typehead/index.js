const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", searchData);

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

  let p = document.createElement("div");
  p.innerHTML = filteredData.map((d) => `<p>${d.name}</p>`).join("");

  container.append(p);
}

function searchData() {
  if (searchInput.value.length > 0) {
    const debouncedSearchFunction = debouncedSearch(
      searchInput,
      1000,
      callbackFn
    );

    debouncedSearchFunction();

    container.innerHTML = "";
  }
}

(async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();

  APIData.push(...data);
})();
