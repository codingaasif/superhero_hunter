const fetchCharacterApi = "https://gateway.marvel.com/v1/public/characters";

// ?ts=1&apikey=7269fb0c70af5fcbdc952a3bce50f685&hash=1a9d41554193f4d05560816ff1d0f12f";

var url =
  "https://gateway.marvel.com/v1/public/characters/1011334%3Fnjn?ts=1&apikey=7269fb0c70af5fcbdc952a3bce50f685&hash=1a9d41554193f4d05560816ff1d0f12f";

const ts = 1;
const superheroList = document.getElementById("superhero-list");
const searchKey = document.getElementById("search-key");

const publicKey = "7269fb0c70af5fcbdc952a3bce50f685";
const hash = "1a9d41554193f4d05560816ff1d0f12f";

var SuperheroArrayList = [];

function showchar(e) {
  e.preventDefault();
  location.reload();
  let id = e.target.closest("a").getAttribute("data-charid");
  console.log(id);
  localStorage.setItem("charid", id);
  location.href = "./Details.html";
}

async function fetchAllSuperhero() {
  var resp = await fetch(
    `${fetchCharacterApi}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );

  var data = await resp.json();

  var results = data.data.results;

  superheroArrayList = results;
  addToList(results);
  console.log("result", results);
}

async function fetchSuperheroWithName(name) {
  var resp = await fetch(
    `${fetchCharacterApi}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${name}`
  );

  var data = await resp.json();
  var results = data.data.results;

  superheroArrayList = results;

  addToList(results);
}
function addToList(results) {
  superheroList.innerHTML = "";
  const li = document.createElement("li");
  results.map((item) => {
    console.log(item);
    const li = document.createElement("li");
    li.innerHTML = `<div class="img-main" >
                                <div class='card-data'>
                        <p class='title'> ${item.name}</p>
                        <img height="170" width="170" src="${item.thumbnail.path}.${item.thumbnail.extension}"/>

                        <a target="_blank" data-charid=${item.id} onclick="showchar(event)" href="Details.html"><button class='btn'>Click For Details</button></a>
                            </div>
                        </div>`;

    superheroList.append(li);
  });
}

searchKey.addEventListener("keyup", () => {
  let searchKeyVal = searchKey.value.trim();

  if (searchKeyVal.length < 2) {
    return;
  }

  fetchSuperheroWithName(searchKeyVal);
  console.log("searchKey", searchKeyVal);
});
fetchAllSuperhero();
