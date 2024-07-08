const pokemonai = [
  {
    pavadinimas: "Venusaur",
    spalva: "žalia",
    paveiksliukas:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    tipas: "žolė",
    silpnybe: "ugnis",
    nuoroda: "https://www.pokemon.com/us/pokedex/venusaur",
  },
  {
    pavadinimas: "Blastoise",
    spalva: "mėlyna",
    paveiksliukas:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    tipas: "vanduo",
    silpnybe: "elektra",
    nuoroda: "https://www.pokemon.com/us/pokedex/blastoise",
  },
  {
    pavadinimas: "Charizard",
    spalva: "oranžinė",
    paveiksliukas:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    tipas: "ugnis",
    silpnybe: "vanduo",
    nuoroda: "https://www.pokemon.com/us/pokedex/charizard",
  },
  {
    pavadinimas: "Raichu",
    spalva: "geltona",
    paveiksliukas:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    tipas: "elektra",
    silpnybe: "žemė",
    nuoroda: "https://www.pokemon.com/us/pokedex/raichu",
  },
  {
    pavadinimas: "Wigglytuff",
    spalva: "rožinė",
    paveiksliukas:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
    tipas: "fėja",
    silpnybe: "plienas",
    nuoroda: "https://www.pokemon.com/us/pokedex/wigglytuff",
  },
  {
    pavadinimas: "Gengar",
    spalva: "violetinė",
    paveiksliukas:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    tipas: "vaiduoklis",
    silpnybe: "tamsa",
    nuoroda: "https://www.pokemon.com/us/pokedex/gengar",
  },
  {
    pavadinimas: "Flareon",
    spalva: "oranžinė",
    paveiksliukas:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
    tipas: "ugnis",
    silpnybe: "vanduo",
    nuoroda: "https://www.pokemon.com/us/pokedex/flareon",
  },
  {
    pavadinimas: "Snorlax",
    spalva: "mėlyna",
    paveiksliukas:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    tipas: "normalus",
    silpnybe: "kova",
    nuoroda: "https://www.pokemon.com/us/pokedex/snorlax",
  },
  {
    pavadinimas: "Mewtwo",
    spalva: "violetinė",
    paveiksliukas:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    tipas: "psichika",
    silpnybe: "tamsa",
    nuoroda: "https://www.pokemon.com/us/pokedex/mewtwo",
  },
  {
    pavadinimas: "Butterfree",
    spalva: "violetinė",
    paveiksliukas:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    tipas: "vabzdys",
    silpnybe: "ugnis",
    nuoroda: "https://www.pokemon.com/us/pokedex/butterfree",
  },
];

const container = document.getElementById("pokemon-container");

pokemonai.forEach((pokemon) => {
  const article = document.createElement("article");

  const img = document.createElement("img");
  img.src = pokemon.paveiksliukas;

  const pavadinimas = document.createElement("p");
  pavadinimas.textContent = pokemon.pavadinimas;

  const tipas = document.createElement("p");
  tipas.innerHTML = `<strong>Tipas:</strong> ${pokemon.tipas}`;

  const silpnybe = document.createElement("p");
  silpnybe.innerHTML = `<strong>Silpnybė:</strong> ${pokemon.silpnybe}`;

  const spalva = document.createElement("p");
  spalva.innerHTML = `<strong>Spalva:</strong> ${pokemon.spalva}`;

  const link = document.createElement("a");
  link.href = pokemon.nuoroda;
  link.textContent = "Read more";
  link.target = "_blank";

  article.appendChild(img);
  article.appendChild(pavadinimas);
  article.appendChild(tipas);
  article.appendChild(silpnybe);
  article.appendChild(spalva);
  article.appendChild(link);

  container.appendChild(article);
});
