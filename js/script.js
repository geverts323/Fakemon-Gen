// returns error if lvl>100 and returns level as variable
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
        };
    }
}

// returns name as variable for printing in table
function getName() {
    "use strict";
    var pokemonName = document.getElementById("pokemonName").value;
    pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    console.log(pokemonName);
    return pokemonName;
}

// each function calculates the individual stats
function hpStat(pokemonLevel) {
    "use strict";
    var baseHP = Number(document.getElementById("baseHP").value);
    var hpIV = Number(document.getElementById("hpIV").value);

    var hp = Math.floor((((hpIV + baseHP) * 2) * (pokemonLevel / 100)) + 10 + pokemonLevel);
    return hp;
}

function atkStat(pokemonLevel, atkNat) {
    "use strict";
    var baseAtk = Number(document.getElementById("baseAtk").value);
    var atkIV = Number(document.getElementById("atkIV").value);

    var atk = Math.floor(((((baseAtk + atkIV) * 2) * (pokemonLevel / 100)) + 5) * atkNat);
    return atk;
}

function defStat(pokemonLevel, defNat) {
    "use strict";
    var baseDef = Number(document.getElementById("baseDef").value);
    var defIV = Number(document.getElementById("defIV").value);

    var def = Math.floor(((((baseDef * 2) + defIV) * (pokemonLevel / 100)) + 5) * defNat);
    return def;
}

function spDefStat(pokemonLevel, spDefNat) {
    "use strict";
    var baseSpDef = Number(document.getElementById("baseSpDef").value);
    var spDefIV = Number(document.getElementById("spDefIV").value);

    var spDef = Math.floor(((((baseSpDef * 2) + spDefIV) * (pokemonLevel / 100)) + 5) * spDefNat);
    return spDef;
}

function spAtkStat(pokemonLevel, spAtkNat) {
    "use strict";
    var baseSpAtk = Number(document.getElementById("baseSpAtk").value);
    var spAtkIV = Number(document.getElementById("spAtkIV").value);

    var spAtk = Math.floor(((((baseSpAtk * 2) + spAtkIV) * (pokemonLevel / 100)) + 5) * spAtkNat);
    return spAtk;
}

function speedStat(pokemonLevel, speedNat) {
    "use strict";
    var baseSpeed = Number(document.getElementById("baseSpeed").value);
    var speedIV = Number(document.getElementById("speedIV").value);

    var speed = Math.floor(((((baseSpeed * 2) + speedIV) * (pokemonLevel / 100)) + 5) * speedNat);
    return speed;
}

// global variables to use in ^above stat functions and createPokemon
var atkNat;
var defNat;
var spDefNat;
var spAtkNat;
var speedNat;

//set mon's nat modifiers
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

//gather's final data and prints on webpage
//this is the called function in index.html >> line 145(ish) <button>
function createPokemon() {
    var result = getLevel();
    var level = result.level;
    var nat = document.getElementById("pokemonNature").value;
    getNature();

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
        "<td>" + atkStat(level, atkNat) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><b>Def<b></td>" +
        "<td>" + defStat(level, defNat) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><b>Sp.Atk<b></td>" +
        "<td>" + spAtkStat(level, spAtkNat) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><b>Sp.Def<b></td>" +
        "<td>" + spDefStat(level, spDefNat) + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><b>Speed<b></td>" +
        "<td>" + speedStat(level, speedNat) + "</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>" +
        "</div> "

    var divStart = document.getElementById("pokeGen");
    divStart.insertAdjacentHTML("beforeend", createNewPoke);


}

var dmgType;

//shows Physical stat header and input
function showPhys() {
    document.getElementById('physAtkDef').style.display = 'block';
    document.getElementById('spAtkDef').style.display = 'none';
    console.log("Physical Damage");
    dmgType = "phys";

}

//shows Special stat header and input
function showSpec() {
    document.getElementById('spAtkDef').style.display = 'block';
    document.getElementById('physAtkDef').style.display = 'none';
    console.log("Special Damage");
    dmgType = "spec";
}

//used to get # of sides for Dice Roll
function dMax() {
    var power = (Number(document.getElementById("movePow").value)) / 10;
    console.log("dMax: " + power);
    return Math.floor(power);
}

//dice roll function
function getDiceRoll() {
    var n = dMax();
    var roll = Math.floor(Math.random() * n) + 1;
    console.log("roll: " + roll);
    document.getElementById("diceResult").innerHTML = roll;
    return roll;
}

//determines if STAB bonus is applied
function stab() {
    var _moveType = document.getElementById("moveType").value;
    var atkType1 = document.getElementById("atkTypeOne").value;
    var atkType2 = document.getElementById("atkTypeTwo").value;
    var stabDmg;
    if (atkType1 == _moveType || atkType2 == _moveType) {
        stabDmg = 1.5;
    } else {
        stabDmg = 1;
    }
    console.log("stabDmg: " + stabDmg);
    return stabDmg;
}

//determines how effective the move is on defending mon
function moveEff() {
    var effDmg;
    var moveTyping = types[document.getElementById("moveType").value];
    var defType1 = moveTyping[document.getElementById("defTypeOne").value];
    var defType2 = moveTyping[document.getElementById("defTypeTwo").value];
    effDmg = Number(defType1 * defType2);
    console.log("effDmg: " + effDmg);
    return effDmg;
}

//calculates damage done - This is the function called on dmg.html line 370ish <button>
function dmgCalc() {
    var diceRoll = getDiceRoll();
    var dmgDone;
    var atkDmg = ((Number(document.getElementById("atkDmg").value)) - 10) / 5;
    console.log("atkDmg: "+ atkDmg);
    var defDmg = ((Number(document.getElementById("defDmg").value)) - 10) / 5;
    console.log("defDmg: " + defDmg);
    var spAtkDmg = ((Number(document.getElementById("spAtkDmg").value)) - 10) / 5;
    console.log("spAtkDmg: " + spAtkDmg);
    var spDefDmg = ((Number(document.getElementById("spDefDmg").value)) - 10) / 5;
    console.log("spDefDmg: " + spDefDmg);


    if (dmgType == "phys") {
        dmgDone = Number(diceRoll + ((atkDmg) - (defDmg)) * stab() * moveEff());

    }
    else if (dmgType == "spec") {
        dmgDone = Number(diceRoll + ((spAtkDmg) - (spDefDmg)) * stab() * moveEff());

    }
    else {
        alert("Select Damage Type");
    }
    console.log("dmgDone: " + dmgDone);
    document.getElementById("dmgResult").innerHTML = dmgDone;
    return dmgDone;
}

$(document).ready(function(){
    $.ajax({
        url: "https://pokeapi.co/api/v2/type/1/",
        type: "GET",
        // contentType: "application/json",
        success: function (data, error) {
            gotTypeInfo(data);
        },
        error: function (data, error) {
            console.log(data, error);
        }
    });
});

// var types = {};
// function gotTypes(data) {
//     console.log(data);
//
//     for (i in data.results) {
//         $.ajax({
//             url: data.results[i].url,
//             type: "GET",
//             // contentType: "application/json",
//             success: function (data, error) {
//                 gotTypeInfo(data);
//             },
//             error: function (data, error) {
//                 console.log(data, error);
//             }
//         });
//     }
//
//
// }

function gotTypeInfo(data) {
    type[data.name] = {};

    for (i in data.moves) {
        $.ajax({
            url: data.moves.url,
            type: "GET",
            // contentType: "application/json",
            success: function (data, error) {
                gotMoveInfo(data);
            },
            error: function (data, error) {
                console.log(data, error);
            }
        });
    }
        setTimeout(function(){console.log(JSON.stringify(types));}, 60000);
}

function gotMoveInfo(data) {
    type[data.type.name][data.name] = {
        "effect_chance": data.effect_chance,
        "id": data.id,
        "pp": data.pp,
        "effect_entries": data.effect_entries.effect,
        "accuracy": data.accuracy,
        "power": data.power,
        "name": data.name,
        "meta": data.meta,
        "contest_type": data.contest_type.name,
        "priority": data.priority,
        "power": data.power,
        "target": data.target.name,
        "damage_class": data.damage_class.name,

    };
}
