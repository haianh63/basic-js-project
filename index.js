const colours = {
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
$(".get-pkm-btn").click(function () {
    let showHideFunction = "";
    showHideFunction += 'if ($(this).text() == "Hide"){';
    showHideFunction += '$(this).nextUntil(".pkm").removeClass("visible");';
    showHideFunction += '$(this).nextUntil(".pkm").addClass("hidden");';
    showHideFunction += '$(this).text("Show");';
    showHideFunction += '} else if ($(this).text() == "Show") {';
    showHideFunction += '$(this).nextUntil(".pkm").removeClass("hidden");';
    showHideFunction += '$(this).nextUntil(".pkm").addClass("visible");';
    showHideFunction += '$(this).text("Hide");';
    showHideFunction += '}';

    for (let i = 1; i < 400; ++ i) {
        $.get(`https://pokeapi.co/api/v2/pokemon/${i}/`, function(data, status) {
            let type = data["types"];
            let a = '<div class="pkm">';
            let button = `<button onclick='${showHideFunction}'>Hide</button>`;
            let img = `<img src= "${data["sprites"]["front_default"]}" alt="pokemon" width="100%"/>`;
            let name = `<p>${data["name"]}</p>`;
            let b = '<div class="pkm-type">';
            for (let j = 0; j < type.length; ++ j) {
                let t = type[j]["type"]["name"];
                b += `<p style="background-color:${colours[t]}">${t}</p>`
            }
            b += '</div>'
            let c = '</div>';
            let insert = a + button + img + name + b + c;
            $(".container").append(insert); 
        })
    }
});
