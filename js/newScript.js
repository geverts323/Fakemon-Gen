function statCalc(lvl, stat) {
    var nature = $("#pokemonNature").val();
    var statNat = Number(natures[nature][stat + "Nat"]);
    var statBase = $("#base" + stat).val();
    var statIV = $("#" + stat + "IV").val();
    var statEV = $("#" + stat + "EV").val();


    var statFinal = Math.floor((((((2 * statBase) + Number(statIV) + ((statEV)/4)) * lvl)/100) + 5) * statNat);

    return statFinal;
}


function hpStat(lvl) {
    var baseHP = $("#basehp").val();
    var hpIV = $("#hpIV").val();
    var hpEV = $("#hpEV").val();

    console.log(baseHP, hpIV, hpEV);

    var hpFinal = Math.floor(((((2 * baseHP) + Number(hpIV) + (hpEV/4)) * lvl)/100) + Number(lvl) + 10);
    return hpFinal;
}

function getName() {
    var pokemonName = document.getElementById("pokemonName").value;
    pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    console.log(pokemonName);
    return pokemonName;
}


function checkMon() {
    var pokemonLevel = $("#pokemonLevel").val();

    if (isNaN(pokemonLevel) || pokemonLevel == "" || pokemonLevel > 100 || pokemonLevel <= 0) {
        alert("Enter a better Level");
        return {
            "success": false,
            "level": null
        };
    } else {
        createMon(parseInt(pokemonLevel));
        };
}

function createMon(level) {

    var nat = $("#pokemonNature").val();

    var createNewPoke = "<div class= 'pokeTable'>" +
        "<h3 class='newHead'>" + getName() + "</h3>" +
        "<h4 class='newHead'>Level: " + level + "</h4>" +
        "<h4 class='newHead' id='naturePrint'>Nature: " + nat + "</h4>" +
        "<table>" +
        "<thead>" +
        "<tr>" +
        "<th>Stat</th>" +
        "<th>Value</th>" +
        "<tbody>" +
        "<tr>" +
        "<td><b>HP<b></td>" +
        "<td>" + hpStat(level) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><b>Atk<b></td>" +
        "<td>" + statCalc(level, "atk") + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><b>Def<b></td>" +
        "<td>" + statCalc(level, "def") + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><b>Sp.Atk<b></td>" +
        "<td>" + statCalc(level, "spatk") + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><b>Sp.Def<b></td>" +
        "<td>" + statCalc(level, "spdef") + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><b>Speed<b></td>" +
        "<td>" + statCalc(level, "speed") + "</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>" +
        "</div> "

    var divStart = document.getElementById("pokeGen");
    divStart.insertAdjacentHTML("beforeend", createNewPoke);

}
