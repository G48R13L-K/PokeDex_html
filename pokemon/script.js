
// cor tipo
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
};

// stats
const statNamesPT = {
    hp: 'Vida (HP)',
    attack: 'Ataque',
    defense: 'Defesa',
    'special-attack': 'Ataque Especial',
    'special-defense': 'Defesa Especial',
    speed: 'Velocidade'
};

function getPokemon() {
    const infosJson = localStorage.getItem("pokemon");

    const infos = JSON.parse(infosJson);
    console.log(infos, "pokemon");

    const ul = document.querySelector("ul");
    

    // fundo por tipo
    const firstType = infos.types[0].type.name;
    ul.style.backgroundColor = colorsTypes[firstType];

    // nome
    const h1 = document.createElement("h1");
    h1.innerText = infos.name.charAt(0).toUpperCase() + infos.name.slice(1); 
    ul.appendChild(h1);
    

    // tipo
    const typesDiv = document.createElement("div");
    typesDiv.classList.add("types-div");
    infos.types.forEach(typeObj => {
        const typeName = typeObj.type.name;
        const typeSpan = document.createElement("span");
        typeSpan.innerText = typeName.charAt(0).toUpperCase() + typeName.slice(1);
        typeSpan.classList.add("type-badge");
        typeSpan.style.backgroundColor = colorsTypes[typeName];
        typesDiv.appendChild(typeSpan);
    });
    ul.appendChild(typesDiv);

    // Imagem 
    const imgPoke = document.createElement("img");
    imgPoke.src = infos.sprites.other["official-artwork"].front_default || infos.sprites.front_default;
    imgPoke.alt = `${infos.name} oficial`;
    imgPoke.classList.add("official-img");
    ul.appendChild(imgPoke);

    //sprites do jogo
    const liSprites = document.querySelector(".sprites-li") || createLiSprites(ul);
    liSprites.classList.add("liSprites");
    liSprites.style.backgroundColor = colorsTypes[firstType];

    const pSprites = document.createElement("p");
    pSprites.innerText = "Sprites"; 
    pSprites.style.fontWeight = "bold";
    pSprites.style.textAlign = "center";

    const divImagens = document.createElement("div");
    divImagens.classList.add("divImagens");

    
    const divDefault = document.createElement("div");
    divDefault.classList.add("divDefault");
    const pDefault = document.createElement("p");
    pDefault.innerText = "Default"; 

    const imgFront = document.createElement("img");
    imgFront.src = infos.sprites.other?.showdown?.front_default || infos.sprites.front_default;
    imgFront.alt = "Frente default";
    const imgBack = document.createElement("img");
    imgBack.src = infos.sprites.other?.showdown?.back_default || infos.sprites.back_default;
    imgBack.alt = "Costas default";

    divDefault.append(pDefault, imgFront, imgBack);

    
    const divShiny = document.createElement("div");
    divShiny.classList.add("divShiny");
    const pShiny = document.createElement("p");
    pShiny.innerText = "Shiny";

    const imgShinyFront = document.createElement("img");
    imgShinyFront.src = infos.sprites.other?.showdown?.front_shiny || infos.sprites.front_shiny;
    imgShinyFront.alt = "Frente shiny";
    const imgShinyBack = document.createElement("img");
    imgShinyBack.src = infos.sprites.other?.showdown?.back_shiny || infos.sprites.back_shiny;
    imgShinyBack.alt = "Costas shiny";
    
    divShiny.append(pShiny, imgShinyFront, imgShinyBack);

    divImagens.append(divDefault, divShiny);
    liSprites.append(pSprites, divImagens);

    // infos
    const liInfos = document.querySelector(".type.liInfos") || createLiInfos(ul);
    createAbilities(infos, liInfos);
    createStats(infos, liInfos);
}

// criando li
function createLiSprites(ul) {
    const li = document.createElement("li");
    li.classList.add("sprites-li");
    ul.appendChild(li);
    return li;
}

// criando li
function createLiInfos(ul) {
    const li = document.createElement("li");
    li.classList.add("type", "liInfos");
    ul.appendChild(li);
    return li;
}

// habilidades
function createAbilities(infos, liInfos) {
    const pHabilidades = document.createElement("p");
    pHabilidades.innerText = "Habilidades:";
    pHabilidades.style.fontWeight = "bold";
    liInfos.appendChild(pHabilidades);

    const abilitiesList = infos.abilities.map(abilityObj => 
        abilityObj.ability.name.charAt(0).toUpperCase() + abilityObj.ability.name.slice(1)
    ).join(", ");
    const pAbilities = document.createElement("p");
    pAbilities.innerText = abilitiesList;
    liInfos.appendChild(pAbilities);
}

// funcão para status base
function createStats(infos, liInfos) {
    const pStats = document.createElement("p");
    pStats.innerText = "Status Base:";
    pStats.style.fontWeight = "bold";
    pStats.style.marginTop = "20px";
    liInfos.appendChild(pStats);

    infos.stats.forEach((statusbar) => {
        const pStatus = document.createElement("p");
        const statName = statusbar.stat.name;
        const displayName = statNamesPT[statName] || statName.charAt(0).toUpperCase() + statName.slice(1);
        const baseValue = statusbar.base_stat;
        pStatus.innerText = `${displayName}: ${baseValue}`;
        liInfos.appendChild(pStatus); 
    });

    
}


    
 getPokemon();
