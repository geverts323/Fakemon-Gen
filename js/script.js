function getLevel() {
    "use strict";
    var pokemonLevel = document.getElementById("pokemonLevel").value;

    if (isNaN(pokemonLevel) || pokemonLevel == "" || pokemonLevel > 100) {
        alert("Enter a better Level");
        return {
            "success": false,
            "level": 0
        };
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

function atkStat(pokemonLevel, atkNat) {
    "use strict";
    var baseAtk = document.getElementById("baseAtk").value;

    var atk = Math.floor(((baseAtk * 2) * (pokemonLevel / 100) + 5) * atkNat);
    return atk;
}

function defStat(pokemonLevel, defNat) {
    "use strict";
    var baseDef = document.getElementById("baseDef").value;

    var def = Math.floor(((baseDef * 2) * (pokemonLevel / 100) + 5) * defNat);
    return def;
}

function spDefStat(pokemonLevel, spDefNat) {
    "use strict";
    var baseSpDef = document.getElementById("baseSpDef").value;

    var spDef = Math.floor(((baseSpDef * 2) * (pokemonLevel / 100) + 5) * spDefNat);
    return spDef;
}

function spAtkStat(pokemonLevel, spAtkNat) {
    "use strict";
    var baseSpAtk = document.getElementById("baseSpAtk").value;

    var spAtk = Math.floor(((baseSpAtk * 2) * (pokemonLevel / 100) + 5) * spAtkNat);
    return spAtk;
}

function speedStat(pokemonLevel, speedNat) {
    "use strict";
    var baseSpeed = document.getElementById("baseSpeed").value;

    var speed = Math.floor(((baseSpeed * 2) * (pokemonLevel / 100) + 5) * speedNat);
    return speed;
}

var atkNat;
var defNat;
var spDefNat;
var spAtkNat;
var speedNat;

function getNature() {
    var nat = document.getElementById("pokemonNature").value;
    atkNat = natures[nat]["atkNat"];
    defNat = natures[nat]["defNat"];
    spDefNat = natures[nat]["spDefNat"];
    spAtkNat = natures[nat]["spAtkNat"];
    speedNat = natures[nat]["speedNat"];
    console.log(atkNat);
    console.log(defNat);
    console.log(spDefNat);
    console.log(spAtkNat);
    console.log(speedNat);
}

var natures = {
    "Adamant": {
        "atkNat": 1.1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 0.9,
        "speedNat": 1
    },
    "Bashful": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1

    },
    "Bold": {
        "atkNat": 0.9,
        "defNat": 1.1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Brave": {
        "atkNat": 1.1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 0.9
    },
    "Calm": {
        "atkNat": 0.9,
        "defNat": 1,
        "spDefNat": 1.1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Careful": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1.1,
        "spAtkNat": 0.9,
        "speedNat": 1
    },
    "Docile": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Gentle": {
        "atkNat": 1,
        "defNat": 0.9,
        "spDefNat": 1.1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Hardy": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Hasty": {
        "atkNat": 1,
        "defNat": 0.9,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1.1
    },
    "Impish": {
        "atkNat": 1,
        "defNat": 1.1,
        "spDefNat": 1,
        "spAtkNat": 0.9,
        "speedNat": 1
    },
    "Lax": {
        "atkNat": 1,
        "defNat": 1.1,
        "spDefNat": 0.9,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Lonely": {
        "atkNat": 1.1,
        "defNat": 0.9,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Mild": {
        "atkNat": 1,
        "defNat": 0.9,
        "spDefNat": 1,
        "spAtkNat": 1.1,
        "speedNat": 1
    },
    "Modest": {
        "atkNat": 0.9,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1.1,
        "speedNat": 1
    },
    "Naive": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 0.9,
        "spAtkNat": 1,
        "speedNat": 1.1
    },
    "Naughty": {
        "atkNat": 1.1,
        "defNat": 1,
        "spDefNat": 0.9,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Quiet": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1.1,
        "speedNat": 0.9
    },
    "Quirky": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Rash": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 0.9,
        "spAtkNat": 1.1,
        "speedNat": 1
    },
    "Relaxed": {
        "atkNat": 1,
        "defNat": 1.1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 0.9
    },
    "Sassy": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1.1,
        "spAtkNat": 1,
        "speedNat": 0.9
    },
    "Serious": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Timid": {
        "atkNat": 0.9,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1.1
    }
}


function createPokemon() {
    var result = getLevel();
    var level = result.level;
    var nature = getNature();
    console.log(nature);

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
        "<td>" + atkStat(level, atkNat) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Def</td>" +
        "<td>" + defStat(level, defNat) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Sp.Atk</td>" +
        "<td>" + spAtkStat(level, spAtkNat) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Sp.Def</td>" +
        "<td>" + spDefStat(level, spDefNat) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Speed</td>" +
        "<td>" + speedStat(level, speedNat) + "</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>" +
        "</div> "


    var divStart = document.getElementById("pokeGen");
    divStart.insertAdjacentHTML("beforeend", createNewPoke);


}
