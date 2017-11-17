function createPokemon() {
  HTMLTableHead(getName(), getLevel());
  HTMLTableLine("HP:", hpStat());
  HTMLTableLine("Atk:", atkStat());
  HTMLTableLine("Def:", defStat());
  HTMLTableLine("Sp. Atk:", spAtkStat());
  HTMLTableLine("Sp. Def:", spDefStat());
  HTMLTableLine("Speed", speedStat());
}


function getLevel() {
    pokemonLevel = document.getElementById("pokemonLevel").value;

    if (isNaN(aronLvl) || aronLvl == "") {
        alert("Enter a better Level");
        return false;
    } else {
        aronLvl = parseInt(aronLvl);
        return true;
      }

function getName() {
  pokemonName = document.getElementById("pokemonName").value;
}

function hpStat() {
        "use strict";
        baseHP = document.getElementById("baseHP").value

        var hp = Math.floor(((baseHP * 2 + 31) * (pokeLvl / 100)) + 10 + aronLvl);
        return hp    }
function atkStat() {
        "use strict";
        baseAtk = document.getElementById("baseAtk").value

        var atk = Math.floor((baseAtk * 2 + 31) * (pokeLvl / 100) + 5);
        return atk;
    }
function defStat() {
        "use strict";
        baseDef = document.getElementById("baseDef").value

        var def = Math.floor((baseDef * 2 + 31) * (pokeLvl / 100) + 5);
        return def;
    }
function spDefStat() {
        "use strict";
        baseSpDef = document.getElementById("baseSpDef").value

        var spDef = Math.floor((baseSpDef * 2 + 31) * (pokeLvl / 100) + 5);
        return spDef;
    }
function spAtkStat() {
        "use strict";
        baseSpAtk = document.getElementById("baseSpAtk").value

        var spAtk = Math.floor((baseSpAtk * 2 + 31) * (pokeLvl / 100) + 5);
        return spAtk;
    }
function speedStat() {
        "use strict";
        baseSpeed = document.getElementById("baseSpeed").value

        var speed = Math.floor((baseSpeed * 2 + 31) * (pokeLvl / 100) + 5);
        return speed;
    }


function HTMLTableLine(statName, statValue) {
    var tableBody = document.querySelector("#monTableBody");

    var newRow = tableBody.insertRow();

    var statNameCell = newRow.insertCell();
    statNameCell.innerHTML = statName;

    var statValueCell = newRow.insertCell();
    statValueCell.innerHTML = statValue;
      }

function HTMLTableHead(pokemonName, pokemonLevel) {
  var tableHead = document.querySelector)"#monTableHead");

  var newRow = tableHead.insertRow();

  var pokeNameCell = newRow.insertCell();
  pokeNameCell.innerHTML = pokemonName;

  var pokeLevelCell = newRow.insertCell();
  pokeLevelCell.innerHTML = pokemonLevel;
}
