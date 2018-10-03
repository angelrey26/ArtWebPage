let state = {
    webImage: '',
    title: '',
    principalOrFirstMaker: '',
}

const apiUrl = 'https://www.rijksmuseum.nl/api/en/collection?key=AGBxapaO&format=json?p=5&ps=4'

let getartObjectsUsingAsync = async function() {
    try {   
        const response = await fetch(apiUrl);
        state = await response.json();
        updateContent();
   } catch (err) {
       console.log('something went wrong. :(')
       console.log(err);
   }
}  

let updateContent = function() {
    console.log(state);
  
    const img = document.querySelector("#webImage>img");
    const title = document.getElementById('title');
    const principalOrFirstMaker = document.getElementById('principalOrFirstMaker');
    const maincontent = document.getElementById('main-content-container');

    img.src= state.artObjects[0].webImage.url;
    title.innerText = state.artObjects[0].title;
    principalOrFirstMaker.innerText = state.artObjects[0].principalOrFirstMaker;

}
getartObjectsUsingAsync();

let i = 0

let newImage = function(var_artObjects_array) {
  console.log(state);

  ++i;

  const img = document.querySelector("#webImage>img");
  const title = document.getElementById('title');
  const principalOrFirstMaker = document.getElementById('principalOrFirstMaker');
  const maincontent = document.getElementById('main-content-container');

  img.src= state.artObjects[i].webImage.url;
  title.innerText = state.artObjects[i].title;
  principalOrFirstMaker.innerText = state.artObjects[i].principalOrFirstMaker;

}
document.getElementById('newImage')
        .addEventListener('click', getnewImage);
        

