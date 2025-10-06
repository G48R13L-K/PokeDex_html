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

//https://pokeapi.co/api/v2/pokemon
async function getPokemons(){
console.log("rodou função")

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    console.log(response,"pokemons")
    const pokemons = await response.json()
    console.log(pokemons.results,"result")
    const ul = document.querySelector("ul")
    pokemons.results.forEach(async(pokemon)=>{
        console.log(pokemon,"pokemon")
        const liId = document.createElement("li")
        const li = document.createElement("li")
        const liBack = document.createElement("li")
        const p = document.createElement("p")
        p.innerText = pokemon.name
        //pegando mais infos
        liId.innerText = pokemon.url.split("/")[6]

        

        //imagem do pokemon
        const response = await fetch(pokemon.url)
        const infos = await response.json()
        console.log(infos,"infos")
        li.addEventListener("click",()=>{
           //JSON.
            localStorage.setItem("pokemon",JSON.stringify(infos))
            location.href = "/pokemon.html"
        })

        const img = document.createElement("img")
        img.src = infos.sprites.front_default

        //imagem de trás
        const imgBack = document.createElement("img")
        const infosBack = await fetch(pokemon.url)
        const infosBackJson = await infosBack.json()
        imgBack.src = infosBackJson.sprites.back_default
        
        const pShiny = document.createElement("p")
        pShiny.innerText = "shiny"
        //imagem shiny
        const imgBackShiny = document.createElement("img")
        const infosBackShiny = await fetch(pokemon.url)
        const infosBackShinyJson = await infosBackShiny.json()
        imgBackShiny.src = infosBackShinyJson.sprites.back_shiny
        //imagem shiny de trás
        const imgShyne = document.createElement("img")
        const infosShyne = await fetch(pokemon.url)
        const infosShyneJson = await infosShyne.json()
        console.log(infosShyneJson,"infosShyne")
        imgShyne.src = infosShyneJson.sprites.front_shiny


        //foreach para cada tipo
        const pType = document.createElement("p")
        infos.types.forEach((typeInfo)=>{
            console.log(typeInfo.type.name,"typeInfo")
            li.classList.add(typeInfo.type.name)
            liBack.classList.add(typeInfo.type.name)
            const spanType = document.createElement("span")
            spanType.innerText = typeInfo.type.name
            spanType.style.backgroundColor = colorsTypes[typeInfo.type.name]
            pType.append(spanType)
        })
        

        li.append(img,imgShyne,)
        liBack.append(imgBack,imgBackShiny)
        const liCard = document.createElement("li")
        liCard.classList.add("liCard")
        liCard.append(liId,li,liBack,pType,p)
        ul.append(liCard)
    })
    
}
getPokemons()