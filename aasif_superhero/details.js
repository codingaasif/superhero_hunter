const fetchCharracterApi = "https://gateway.marvel.com/v1/public/characters";

const charid = localStorage.getItem("charid");

const ts = 1;
const hash = "1a9d41554193f4d05560816ff1d0f12f";
const publicKey = "7269fb0c70af5fcbdc952a3bce50f685";

const mainContainer = document.getElementById("main-container");

var results;

async function fetchSuperWithId() {
  var resp = await fetch(
    `https://gateway.marvel.com/v1/public/characters/${charid}?ts=1&apikey=7269fb0c70af5fcbdc952a3bce50f685&hash=1a9d41554193f4d05560816ff1d0f12f`
  );

  var data = await resp.json();

  results = data.data.results;
  console.log(results);

  superheroArrayList = results;

  addToList(results);
}

const getItemFromLS = () => {
  console.log(results[0]);
  location.reload();
  // let favList=[];
  // favList.push(results[0])
  var getFav = localStorage.getItem("favourite");
  var favparseData = JSON.parse(getFav);
  if (favparseData?.length !== 0 && favparseData) {
    let updateFavData = favparseData.concat(results);
    localStorage.setItem("favourite", JSON.stringify(updateFavData));
  } else localStorage.setItem("favourite", JSON.stringify(results));
};

function addToList(results) {
  if (!results || results.length < 1) {
    return;
  }
  const [item] = results;
  mainContainer.innerHTML = `<div class="img-back">
                        <p>Name : ${item?.name}</p>
                        <img height="200" width="300" src="${
                          item.thumbnail.path
                        }.${item?.thumbnail.extension}"/>
                        <p id="des">Description :- ${
                          item?.description
                            ? item?.description
                            : "description is not available"
                        }</p>
                        <p>Modified :- ${item.modified}</p>
                        <p>Resourse URI :- <a href={${
                          item.resourceURI
                        }} target="_blank">Click here</a></p>
                        <p>ID :- ${item.id}</p>
                        <a target="_self" data-charid=${
                          item.id
                        } onclick="getItemFromLS()" href="favourite.html"><button class="favourite">Add To Favourite</button></a>
                        </div>`;
}

fetchSuperWithId();

//******************************************************/

// document.addEventListener("DOMContentLoaded", function(){
//   console.log('a',window.location.href);
//   console.log(getParams(window.location.href));

//   var resp = getParams(window.location.href);
//   fetchSuperWithId(resp.id);
// });

// var getParams = function(url){
//   var queryParams = url.split("?")[1];
//   queryParamters = queryParamters.split("&");
//   var resp = {};
//   queryParamters.forEach((item)=>{
//     item = "id=5"
//     [id,5]
//     var temp = item.split("=");
//     resp[temp[0]] = temp[1];
//   });
//     return resp;
//   };

//     var c = getParams(a);
//     console.log(c);
//     var favBtn =  document.getElementsByClassName('add-fav');
//     function addFnc(){
//     alert("adjfh")
//     console.log("slkjghdh")

// favBtn.addEventListener('click',addFnc());
