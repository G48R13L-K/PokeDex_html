
const colorsTypes = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
}
function getPokemon(){

    const infos = JSON.parse(localStorage.getItem("pokemon"))
    console.log(infos,"pokemon")
    const div = document.querySelector("ul")
    div.style.backgroundColor = colorsTypes[infos.types[0].type.name]
    const h1 = document.createElement("h1")
    h1.innerText = infos.name
    const imgPoke = document.createElement("img")
    imgPoke.src = infos.sprites.other["official-artwork"].front_default
    
    const divDefault = document.createElement("div")
    const divShiny = document.createElement("div")
    const divImagens = document.createElement("div")
    divImagens.classList.add("divImagens")
    divImagens.append(divDefault,divShiny)
    div.append(h1,imgPoke)
    
    divDefault.classList.add("divDefault")
    const pDefault = document.createElement("p")
    pDefault.innerText = "default"
    const img = document.createElement("img")
    img.src = infos.sprites.other.showdown.front_default
    const imgBack = document.createElement("img")
    imgBack.src = infos.sprites.other.showdown.back_default

    divDefault.append(pDefault,img,imgBack)

    divShiny.classList.add("divShiny")
    const pShiny = document.createElement("p")
    pShiny.innerText = "shiny"
    const imgShiny = document.createElement("img")
    imgShiny.src = infos.sprites.other.showdown.front_shiny
    const imgShinyBack = document.createElement("img")
    imgShinyBack.src = infos.sprites.other.showdown.back_shiny
    divShiny.append(pShiny,imgShiny,imgShinyBack)

    
    const liSprites = document.querySelector("li")
    liSprites.classList.add("liSprites")
    liSprites.style.backgroundColor = colorsTypes[infos.types[0].type.name]
    const pSprites = document.createElement("p")
    pSprites.innerText = "sprites"
    liSprites.append(pSprites,divImagens)

    const liInfos = document.querySelector(".type")
    liInfos.classList.add("liInfos")
    const p = document.createElement("p")
    p.innerText = "Tipo(s)"
    const pTipo = document.createElement("p")
    pTipo.innerText = [infos.types[0].type.name]
    const pInfo = document.createElement("p")
    
    liInfos.append(p,pTipo)
    
    

}
getPokemon()

