console.log("Let's get this party started!");
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const form =document.querySelector('#gif-form');
const input =document.querySelector('#text');
const removeBtn =document.querySelector('#remove-gif');
const gifContainer=document.querySelector('#gif-container')

form.addEventListener("submit", function(e){
    e.preventDefault();
    const search=input.value;
    searchGIFs(search)

});

removeBtn.addEventListener("click", function(){
    clearGIFs();
});

function searchGIFs(search){
    const url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}`;

    axios.get(url)
    .then(function (response) {
        const gifData = response.data.data;
        appendGIFs(gifData);
      })
      .catch(function (error) {
        console.log("Error fetching GIFs:", error);
      });
  }

  function appendGIFs(gifData){
    clearGIFs();

    gifData.forEach(function (gif){
        const gifUrl =gif.images.fixed_height.url;
        const gifElement=document.createElement('img');
        gifElement.src=gifUrl;
        gifElement.classList.add("gif");
        gifContainer.appendChild(gifElement);
    });
  }
  function clearGIFs(){
    gifContainer.innerHTML='';
  }





