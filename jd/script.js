function getLevel() {
    "use strict";
    var pokemonLevel = document.getElementById("pokemonLevel").value;

    if (isNaN(pokemonLevel) || pokemonLevel == "" || pokemonLevel > 100) {
        alert("Enter a better Level");
        return {
            "success": false,
            "level": 0
        }
    } else {
        pokemonLevel = parseInt(pokemonLevel);
        return {
            "level": pokemonLevel,
            "success": true
        }
    }
}




function getName() {
    "use strict";
    var pokemonName = document.getElementById("pokemonName").value;
    pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    console.log(pokemonName);
    return pokemonName;
}


function hpStat(pokemonLevel) {
    "use strict";
    var baseHP = document.getElementById("baseHP").value;

    var hp = Math.floor(((baseHP * 2) * (pokemonLevel / 100)) + 10 + pokemonLevel);
    return hp;
}

function atkStat(pokemonLevel) {
    "use strict";
    var baseAtk = document.getElementById("baseAtk").value;

    var atk = Math.floor((baseAtk * 2) * (pokemonLevel / 100) + 5);
    return atk;
}

function defStat(pokemonLevel) {
    "use strict";
    var baseDef = document.getElementById("baseDef").value;

    var def = Math.floor((baseDef * 2) * (pokemonLevel / 100) + 5);
    return def;
}

function spDefStat(pokemonLevel) {
    "use strict";
    var baseSpDef = document.getElementById("baseSpDef").value;

    var spDef = Math.floor((baseSpDef * 2) * (pokemonLevel / 100) + 5);
    return spDef;
}

function spAtkStat(pokemonLevel) {
    "use strict";
    var baseSpAtk = document.getElementById("baseSpAtk").value;

    var spAtk = Math.floor((baseSpAtk * 2) * (pokemonLevel / 100) + 5);
    return spAtk;
}

function speedStat(pokemonLevel) {
    "use strict";
    var baseSpeed = document.getElementById("baseSpeed").value;

    var speed = Math.floor((baseSpeed * 2) * (pokemonLevel / 100) + 5);
    return speed;
}


function HTMLTableLine(statName, statValue) {
    console.log("TableLine");
    var result = getLevel();
    var level = result.level;
    var tblBody = document.getElementById(getName() + level);

    var newRow = tblBody.insertRow();

    var statNameCell = newRow.insertCell();
    statNameCell.innerHTML = statName;

    var statValueCell = newRow.insertCell();
    statValueCell.innerHTML = statValue;
    console.log(statName, statValue);
}


function createPokemon() {
    var result = getLevel();
    var level = result.level;

    var createNewPoke = "<div class= 'pokeTable'>" +
        "<h3>" + getName() + "</h3>" +
        "<h4>Level: " + level + "</h4>" +
        "<table>" +
        "<thead>" +
        "<tr>" +
        "<th>Stat</th>" +
        "<th>Value</th>" +
        "<tbody>" +
        "<tr>" +
        "<td>HP</td>" +
        "<td>" + hpStat(level) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Atk</td>" +
        "<td>" + atkStat(level) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Def</td>" +
        "<td>" + defStat(level) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Sp.Atk</td>" +
        "<td>" + spAtkStat(level) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Sp.Def</td>" +
        "<td>" + spDefStat(level) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Speed</td>" +
        "<td>" + speedStat(level) + "</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>" +
        "</div> "


    var divStart = document.getElementById("pokeGen");
    divStart.insertAdjacentHTML("beforeend", createNewPoke);


}
