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

// each function calculates each individual stat
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

// global var to calculate based on sp or phys dmg
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
    var moveTyping = atkTypes[document.getElementById("moveType").value];
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
    console.log("atkDmg: " + atkDmg);
    var defDmg = ((Number(document.getElementById("defDmg").value)) - 10) / 5;
    console.log("defDmg: " + defDmg);
    var spAtkDmg = ((Number(document.getElementById("spAtkDmg").value)) - 10) / 5;
    console.log("spAtkDmg: " + spAtkDmg);
    var spDefDmg = ((Number(document.getElementById("spDefDmg").value)) - 10) / 5;
    console.log("spDefDmg: " + spDefDmg);


    if (dmgType == "phys") {

        dmgDone = (Math.floor(Number((diceRoll + ((atkDmg) - (defDmg))) * stab() * moveEff()) * getCrit()));

    } else if (dmgType == "spec") {
        dmgDone = (Math.floor(Number((diceRoll + ((spAtkDmg) - (spDefDmg))) * stab() * moveEff()) * getCrit()));

    } else {
        alert("Select Damage Type");
    }
    console.log("dmgDone: " + dmgDone);
    document.getElementById("dmgResult").innerHTML = dmgDone;
    return dmgDone;
}


//determines if move is critical hit or not
function getCrit() {
    if (document.getElementById('critDmg').checked) {
        return 2;
    } else {
        return 1;
    };

}

//calculates defensive type effectiveness
function typeDefEff() {
    var defDmgOne = $("#defDmg1").val();
    var defDmgTwo = $("#defDmg2").val();
    var dualTypes = {};
    console.log(defDmgOne);
    console.log(defDmgTwo);
    for (i in defTypes[defDmgOne]) {
        dualTypes[i] = defTypes[defDmgOne][i] * defTypes[defDmgTwo][i];
    }
    console.log(dualTypes);
    typeDefPrint(dualTypes, defDmgOne, defDmgTwo);
}

//prints table with info from typeDefEff()
function typeDefPrint(dualTypes, typeOne, typeTwo) {
    var totalDefDmg;
    var createTypeChart = "<div class='typesTable'>" + "<h3>" + typeOne + "/" + typeTwo + "</h3>" +
        "<table class='defTypeTable'>" + "<tbody>" +
        "<tr>" + "<th>" + "Normal:" + "</th>" + "<td>" + "x" + dualTypes['Normal'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Fighting:" + "</th>" + "<td>" + "x" + dualTypes['Fighting'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Flying:" + "</th>" + "<td>" + "x" + dualTypes['Flying'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Poison:" + "</th>" + "<td>" + "x" + dualTypes['Poison'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Ground:" + "</th>" + "<td>" + "x" + dualTypes['Ground'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Rock:" + "</th>" + "<td>" + "x" + dualTypes['Rock'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Bug:" + "</th>" + "<td>" + "x" + dualTypes['Bug'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Ghost:" + "</th>" + "<td>" + "x" + dualTypes['Ghost'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Steel:" + "</th>" + "<td>" + "x" + dualTypes['Steel'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Fire:" + "</th>" + "<td>" + "x" + dualTypes['Fire'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Water:" + "</th>" + "<td>" + "x" + dualTypes['Water'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Grass:" + "</th>" + "<td>" + "x" + dualTypes['Grass'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Electric:" + "</th>" + "<td>" + "x" + dualTypes['Electric'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Psychic:" + "</th>" + "<td>" + "x" + dualTypes['Psychic'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Ice:" + "</th>" + "<td>" + "x" + dualTypes['Ice'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Dragon:" + "</th>" + "<td>" + "x" + dualTypes['Dragon'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Dark:" + "</th>" + "<td>" + "x" + dualTypes['Dark'] + "</td>" + "</tr>" +
        "<tr>" + "<th>" + "Fairy:" + "</th>" + "<td>" + "x" + dualTypes['Fairy'] + "</td>" + "</tr>" +
        "</tbody>" + "<tfoot>" +
        // "<th>" + "Total: " + "</th>" + "<td>" + "NotYet" + "</td>"
        "</tfoot>" + "</table>" + "</div>"

    var divStart = document.getElementById("defDmgSect");
    divStart.insertAdjacentHTML("beforeend", createTypeChart);
}

//initially called function for encounter generation
function encounterGenCall() {
    var land = $("#landscape").val();
    var numPlayers = $("#numberPlayers").val();
    var haunt = $("#haunted").val();
    var lvlRange = $("#levelRange").val();
    console.log(land);
    console.log(numPlayers);
    console.log(haunt);
    console.log(lvlRange);
    calcEncounterGen(land, numPlayers, haunt, lvlRange);
}

//need poke/move data before can complete this
function calcEncounterGen(land, numMon, haunt, range) {

}


//functions to show different Item Gen input fields
function showMonDrop() {
    document.getElementById('monDrop').style.display = 'block';
    document.getElementById('ballFind').style.display = 'none';
    document.getElementById('itemFind').style.display = 'none';
    document.getElementById('randItem').style.display = 'none';
    document.getElementById('randBerry').style.display = 'none';
    document.getElementById('itemSearch').style.display = 'none';
    console.log('MonDrop');
}

function showBallDrop() {
    document.getElementById('monDrop').style.display = 'none';
    document.getElementById('ballFind').style.display = 'block';
    document.getElementById('itemFind').style.display = 'none';
    document.getElementById('randItem').style.display = 'none';
    document.getElementById('randBerry').style.display = 'none';
    document.getElementById('itemSearch').style.display = 'none';
    console.log('BallFind');
}

function showItemFind() {
    document.getElementById('monDrop').style.display = 'none';
    document.getElementById('ballFind').style.display = 'none';
    document.getElementById('itemFind').style.display = 'block';
    document.getElementById('randItem').style.display = 'none';
    document.getElementById('randBerry').style.display = 'none';
    document.getElementById('itemSearch').style.display = 'none';
    console.log('ItemFind');
}

function showRandItem() {
    document.getElementById('monDrop').style.display = 'none';
    document.getElementById('ballFind').style.display = 'none';
    document.getElementById('itemFind').style.display = 'none';
    document.getElementById('randItem').style.display = 'block';
    document.getElementById('randBerry').style.display = 'none';
    document.getElementById('itemSearch').style.display = 'none';
    console.log('RandDrop');
}

function showRandBerry() {
    document.getElementById('monDrop').style.display = 'none';
    document.getElementById('ballFind').style.display = 'none';
    document.getElementById('itemFind').style.display = 'none';
    document.getElementById('randItem').style.display = 'none';
    document.getElementById('randBerry').style.display = 'block';
    document.getElementById('itemSearch').style.display = 'none';
    console.log('RandBerry');
}

function showItemSearch() {
    document.getElementById('monDrop').style.display = 'none';
    document.getElementById('ballFind').style.display = 'none';
    document.getElementById('itemFind').style.display = 'none';
    document.getElementById('randItem').style.display = 'none';
    document.getElementById('randBerry').style.display = 'none';
    document.getElementById('itemSearch').style.display = 'block';
    console.log('ItemSearch');
}

function getRandomBerry() {
    var berryNum = Number(getRandomNumber(64));
    console.log(berryNum);
    var berry = berries[berryNum].name;
    document.getElementById("berryBox").innerHTML = berry[0].toUpperCase() + berry.slice(1) + " Berry";

}

function getRandomNumber(num) {
    var randNum = Math.floor(Math.random() * num) + 1;
    console.log("Random Number: " + randNum);
    return randNum;
}

function getEncounter() {
    var land = document.getElementById('landscape').value;
    var players = document.getElementById('numberPlayers').value;
    var lvlRange = document.getElementById('levelRange').value;
    var haunt = document.getElementById('haunted').value;


}

function showPoison() {
    document.getElementById('poisonStatus').style.display = 'block';
    document.getElementById('badPoisonStatus').style.display = 'none';
    document.getElementById('paralysisStatus').style.display = 'none';
    document.getElementById('sleepStatus').style.display = 'none';
    document.getElementById('freezeStatus').style.display = 'none';
    document.getElementById('burnStatus').style.display = 'none';
    document.getElementById('infatStatus').style.display = 'none';
    document.getElementById('confStatus').style.display = 'none';
    document.getElementById('flinchStatus').style.display = 'none';
    document.getElementById('statusCalc').style.display = 'block';
}

function showBadPoison() {
    document.getElementById('poisonStatus').style.display = 'none';
    document.getElementById('badPoisonStatus').style.display = 'block';
    document.getElementById('paralysisStatus').style.display = 'none';
    document.getElementById('sleepStatus').style.display = 'none';
    document.getElementById('freezeStatus').style.display = 'none';
    document.getElementById('burnStatus').style.display = 'none';
    document.getElementById('infatStatus').style.display = 'none';
    document.getElementById('confStatus').style.display = 'none';
    document.getElementById('flinchStatus').style.display = 'none';
    document.getElementById('statusCalc').style.display = 'block';
}

function showParalysis() {
    document.getElementById('poisonStatus').style.display = 'none';
    document.getElementById('badPoisonStatus').style.display = 'none';
    document.getElementById('paralysisStatus').style.display = 'block';
    document.getElementById('sleepStatus').style.display = 'none';
    document.getElementById('freezeStatus').style.display = 'none';
    document.getElementById('burnStatus').style.display = 'none';
    document.getElementById('infatStatus').style.display = 'none';
    document.getElementById('confStatus').style.display = 'none';
    document.getElementById('flinchStatus').style.display = 'none';
    document.getElementById('statusCalc').style.display = 'block';
}

function showSleep() {
    document.getElementById('poisonStatus').style.display = 'none';
    document.getElementById('badPoisonStatus').style.display = 'none';
    document.getElementById('paralysisStatus').style.display = 'none';
    document.getElementById('sleepStatus').style.display = 'block';
    document.getElementById('freezeStatus').style.display = 'none';
    document.getElementById('burnStatus').style.display = 'none';
    document.getElementById('infatStatus').style.display = 'none';
    document.getElementById('confStatus').style.display = 'none';
    document.getElementById('flinchStatus').style.display = 'none';
    document.getElementById('statusCalc').style.display = 'block';
}

function showFreeze() {
    document.getElementById('poisonStatus').style.display = 'none';
    document.getElementById('badPoisonStatus').style.display = 'none';
    document.getElementById('paralysisStatus').style.display = 'none';
    document.getElementById('sleepStatus').style.display = 'none';
    document.getElementById('freezeStatus').style.display = 'block';
    document.getElementById('burnStatus').style.display = 'none';
    document.getElementById('infatStatus').style.display = 'none';
    document.getElementById('confStatus').style.display = 'none';
    document.getElementById('flinchStatus').style.display = 'none';
    document.getElementById('statusCalc').style.display = 'block';
}

function showBurn() {
    document.getElementById('poisonStatus').style.display = 'none';
    document.getElementById('badPoisonStatus').style.display = 'none';
    document.getElementById('paralysisStatus').style.display = 'none';
    document.getElementById('sleepStatus').style.display = 'none';
    document.getElementById('freezeStatus').style.display = 'none';
    document.getElementById('burnStatus').style.display = 'block';
    document.getElementById('infatStatus').style.display = 'none';
    document.getElementById('confStatus').style.display = 'none';
    document.getElementById('flinchStatus').style.display = 'none';
    document.getElementById('statusCalc').style.display = 'block';
}

function showInfatuation() {
    document.getElementById('poisonStatus').style.display = 'none';
    document.getElementById('badPoisonStatus').style.display = 'none';
    document.getElementById('paralysisStatus').style.display = 'none';
    document.getElementById('sleepStatus').style.display = 'none';
    document.getElementById('freezeStatus').style.display = 'none';
    document.getElementById('burnStatus').style.display = 'none';
    document.getElementById('infatStatus').style.display = 'block';
    document.getElementById('confStatus').style.display = 'none';
    document.getElementById('flinchStatus').style.display = 'none';
    document.getElementById('statusCalc').style.display = 'block';
}

function showConfusion() {
    document.getElementById('poisonStatus').style.display = 'none';
    document.getElementById('badPoisonStatus').style.display = 'none';
    document.getElementById('paralysisStatus').style.display = 'none';
    document.getElementById('sleepStatus').style.display = 'none';
    document.getElementById('freezeStatus').style.display = 'none';
    document.getElementById('burnStatus').style.display = 'none';
    document.getElementById('infatStatus').style.display = 'none';
    document.getElementById('confStatus').style.display = 'block';
    document.getElementById('flinchStatus').style.display = 'none';
    document.getElementById('statusCalc').style.display = 'block';
}

function showFlinch() {
    document.getElementById('poisonStatus').style.display = 'none';
    document.getElementById('badPoisonStatus').style.display = 'none';
    document.getElementById('paralysisStatus').style.display = 'none';
    document.getElementById('sleepStatus').style.display = 'none';
    document.getElementById('freezeStatus').style.display = 'none';
    document.getElementById('burnStatus').style.display = 'none';
    document.getElementById('infatStatus').style.display = 'none';
    document.getElementById('confStatus').style.display = 'none';
    document.getElementById('flinchStatus').style.display = 'block';
    document.getElementById('statusCalc').style.display = 'none';
}

function anySidedDiceRoll() {
    var diceSides = $('#anySidedDice').val();
    console.log(diceSides);
    var roll = getRandomNumber(diceSides);
    document.getElementById('dicePrintBox').style.display = 'block';
    document.getElementById('dicePrint').innerHTML = "Roll: " + roll;
}

//grabs selected %chance and gets random number to see if status was inflicted or not
//need to add if statement for flinch items
function statusCalc() {
    var chance = parseInt(document.getElementById("statusChance").selectedIndex) + 1;
    console.log("Percent Chance: " + chance + "0");
    var roll = getRandomNumber(10) + 1;
    console.log("roll: " + roll);

    if (roll > (10 - chance)) {
        console.log("Status Condition Inflicted!")
        getStatusCondition()
        return true;
    }
    else {
        console.log("Status Condition Not Inflicted!")
    }
}

// function grabs selected radio button status condition
// and shows the fields for that status condition
function getStatusCondition () {
    var statusCondition = $("input[type='radio'][name='statusType']:checked").val();
    console.log(statusCondition);

    if (statusCondition == "poison") {
        showPoison();
    }
    else if (statusCondition == "badPoison") {
        showBadPoison();
    }
    else if (statusCondition == "paral") {
        showParalysis();
    }
    else if (statusCondition == "sleep") {
        showSleep();
    }
    else if (statusCondition == "freeze") {
        showFreeze();
    }
    else if (statusCondition == "burn") {
        showBurn();
    }
    else if (statusCondition == "infat") {
        showInfatuation();
    }
    else if (statusCondition == "confusion") {
        showConfusion();
    }
    else {
        console.log("either something went wrong, or flinch is selected")
    }

}
//might need this to keep count of turns, on each function if "snapped out" should reset to 0
var turnCount;
//hopefully one function to calculate handling for status condition controls
//may need to split these into different functions
function poiDmg() {
    var maxHP = document.getElementById("poiMaxHP").value;
    var currHP = document.getElementById("poiCurrHP").value;
    console.log("max HP: " + maxHP);
    console.log("current HP: " + currHP);
    turnCount += 1;

    var newCurrHP = parseInt(currHP - (maxHP*(1/8)));
    console.log("new current HP: " + newCurrHP);
    return newCurrHP = currHP;
}

// initial populate when moves.html loads -- NEED TO SET UP document.ready function in <script> in moves.html
function movePopulate() {
    //selects box where elements will go
    var box = document.getElementById('moveSearchSection');
    //loops through movesByType var and go into each type
    for (i in movesByType) {
        //loops through each type and grabs each move
        for (k in movesByType[i]) {
            //creates div to hold each move
            var moveDiv = document.createElement('div');
            moveDiv.className = 'innerMoveBox'
            console.log("created div!")
            //creates name element
            var nameElement = document.createElement('h4');
            nameElement.innerHTML = movesByType[i][k].name.replace(/-/g, " ");
            //creates accuracy element
            var accElement = document.createElement('p');
            if (movesByType[i][k].accuracy == null) {
                accElement.innerHTML = '--';
            }
            else {
                accElement.innerHTML = movesByType[i][k].accuracy;
            }
            //creates move power element
            var powElement = document.createElement('p');

            if (movesByType[i][k].power == null) {
                powElement.innerHTML = '--';
            }
            else {
                powElement.innerHTML = movesByType[i][k].power;
            }
        //creates damage type element -- will display small image representing damage type
            var dmgElement = document.createElement('img');
                if (movesByType[i][k].damage_class == "physical") {
                    dmgElement.src = "media/physDmgIcon.jpg";
                }
                else if (movesByType[i][k].damage_class == "special") {
                    dmgElement.src = "media/SpecAtkIcon.jpg";
                }
                else if (movesByType[i][k].damage_class == "status") {
                    dmgElement.src = "media/statusAtkIcon.jpg";
                }
                else {
                    dmgElement.src = "media/oops.jpg";
                }

            var moveTypeElement = document.createElement('p');
            moveTypeElement.innerHTML = i;

            box.append(moveDiv);
            moveDiv.append(nameElement);
            moveDiv.append(powElement);
            moveDiv.append(accElement);
            moveDiv.append(moveTypeElement);
            moveDiv.append(dmgElement);

        }
    }
}

function searchMoves() {
    var input = document.getElementById('moveSearchBar');
    var filter = input.value.toLowerCase()
    var allMoveBox = document.getElementById('moveSearchSection')
    var eachMoveBox = allMoveBox.getElementsByTagName('div');

    for (i = 0; i < eachMoveBox.length; i++) {

        a = eachMoveBox[i].getElementsByTagName("h4")[0];

        if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
            eachMoveBox[i].style.display = "";
        }
        else {
            eachMoveBox[i].style.display = "none";
        }
    }
}
