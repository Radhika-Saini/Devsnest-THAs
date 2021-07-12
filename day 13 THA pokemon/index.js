console.log("hello js");
const brd=document.querySelector(".input1");
const search=document.querySelector(".button");
const article=document.querySelector("article");

search.addEventListener("click",()=>{
    const val=brd.value;
    if(val){
fetch(`https://pokeapi.co/api/v2/pokemon/${val}`)
        .then(response => response.json())
        .then(data=>getdata(data))
    }
    else{
        article.innerHTML=""
        alert("invalid search");
}})




const getdata = (data) => {
    console.log(data)
    
    const html = `
    <div class="full">
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class="details">
            <span>Height: ${data.height}</span>
            <span>Weight: ${data.weight}</span>
        </div>
    </div>
    `
    
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}