// var list = document.getElementById('list');
// const SUPERHERO_KEY = 'superhero';

const favouriteData = localStorage.getItem("favourite");

const removeHero = (id) => {
  console.log(id, "id of Item");
  location.reload();
  const updatedFavData = getFavData.filter((item, i) => i !== id);

  localStorage.setItem("favourite", JSON.stringify(updatedFavData));

  addToList(updatedFavData);
  console.log("deleted", updatedFavData);
};

const favList = document.getElementById("fav-list");
var getFavData = JSON.parse(favouriteData);
addToList(getFavData);

function addToList(favouriteData) {
  favList.innerHTML = "";
  const li = document.createElement("li");
  favouriteData?.map((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="img-main" >
								  <div class='card-data'>
						  <p class='title'>${item?.name}</p>
						  <img height="150" width="150" src="${item?.thumbnail?.path}.${item?.thumbnail.extension}"/>
  
						  <a data-charid=${item?.id}><button class='btn' onclick="removeHero(${i})">Remove Hero</button></a>
							  </div>
					</div>`;

    favList.append(li);
  });
}

//****************************************************

// function getItemFromLS(){
// 	var favSuperHeroArray = JSON.parse(localStorage.getItem(SUPERHERO_KEY));
// 	if(!favSuperHeroArray){
// 		favSuperHeroArray = [];
// 	}
// 	return favSuperHeroArray;
// }

// function removeItemFromLS(item){
// 	var favSuperHeroArray = getItemFromLS();
// 	favSuperHeroArray = favSuperHeroArray.filter((tempItem)=>{
// 		return item != tempItem;
// 	});
// 	localStorage.setItem(SUPERHERO_KEY,JSON.stringify(favSuperHeroArray));
// }

// async function getAllSuperhero(){
// 	var favouriteSuperHeroArray = getItemFromLS();
// 	favouriteSuperHeroArray.map(async (item)=>{
// 		let resp = await fetch(`https://gateway.marvel.com/v1/public/characters/${item}?ts=1&apikey=6bc6a9a01d71939ddb9b6d50a5782b61&hash=0bd260bb5cda72489c2a0d59bad11992`);
// 		let data = await resp.json();
// 		data = data.data.results[0];
// 		var li = document.createElement('li');
// 		console.log(data);
//         li.innerHTML = `<div class="container">
// 							<p data-id=${data.id}>${data.name}</p>
// 							<img height="250" width="250" src=${data.thumbnail.path}.${data.thumbnail.extension}>
// 							<button class='removeFromFav'><u>Remove from Favourites</u></button>
// 						</div>`;
// 		list.append(li);
//         li.getElementsByClassName('removeFromFav')[0].addEventListener('click',function (){
//             removeItemFromLS(data.id);
// 			location.reload();
//         });
// 	})
// }

// getAllSuperhero();
