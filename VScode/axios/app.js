
async function getData(){
    const response = await axios.get('https://swapi.co/api/planets/');
    console.log(response)
    console.log("This line is after axios");

}









