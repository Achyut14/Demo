
//Making request to get facts about fav number.
const favNum = 19
let url = "http://numbersapi.com";

$.getJSON(`http://numbersapi.com/${favNum}?json`).then(data => {
    console.log(data)
})

//Getting data on multiple numbers in a single request.

let favNums = [3, 8, 19];
$.getJSON(`${url}/${favNums}?json`).then(data => {
    console.log(data)
})


//Getting facts on 4 fav numbers
Promise.all(
    Array.from({length:4}, () => {
        return $.getJSON(`${url}/${favNum}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`))
});
