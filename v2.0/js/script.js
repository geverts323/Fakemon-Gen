function statCalc(lvl, stat) {
    var nature = $("#pokemonNature").val();
    var statNat = Number(natures[nature][stat + "Nat"]);
    var statBase = $("#base" + stat).val();
    var statIV = $("#" + stat + "IV").val();
    var statEV = $("#" + stat + "EV").val();


    var statFinal = Math.floor((((((2 * statBase) + Number(statIV) + ((statEV) / 4)) * lvl) / 100) + 5) * statNat);

    return statFinal;
}
function hpStat(lvl) {
    var baseHP = $("#basehp").val();
    var hpIV = $("#hpIV").val();
    var hpEV = $("#hpEV").val();

    console.log(baseHP, hpIV, hpEV);

    var hpFinal = Math.floor(((((2 * baseHP) + Number(hpIV) + (hpEV / 4)) * lvl) / 100) + Number(lvl) + 10);
    return hpFinal;
}
function getName() {
    var pokemonName = document.getElementById("pokemonName").value;
    pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    console.log(pokemonName);
    return pokemonName;
}
function checkLevel() {
    var pokemonLevel = $("#pokemonLevel").val();

    if (check_number_in_range(1, 100, pokemonLevel) == true) {
        checkIVs();
    }
    else if (check_number_in_range(1, 100, pokemonLevel) == false) {
        alert("Level Range is 1-100");
    }
    else if (check_number_in_range(1, 100, pokemonLevel) == NaN) {
        alert("Level should be a number");
    }
    else if (check_number_in_range(1, 100, pokemonLevel) == "oops") {
        alert("How did you do that?");
    }
    else {
        console.log("huh. don't know how i got here");
    }
}

function checkIVs() {
    var atk_IV = $('#atkIV').val();
    var spAtk_IV = $('#spatkIV').val();
    var def_IV = $('#defIV').val();
    var spDef_IV = $('#spdefIV').val();
    var hp_IV = $('#hpIV').val();
    var speed_IV = $('#speedIV').val();

    if (check_number_in_range(0, 31, atk_IV) == true) {
        continue;
    }
    else {
        alert("IV's need to be a number between 0 and 31");
    }

    if (check_number_in_range(0, 31, def_IV) == true) {
        continue;
    }
    else {
        alert("IV's need to be a number between 0 and 31");
    }

    if (check_number_in_range(0, 31, spAtk_IV) == true) {
        continue;
    }
    else {
        alert("IV's need to be a number between 0 and 31");
    }

    if (check_number_in_range(0, 31, spDef_IV) == true) {
        continue;
    }
    else {
        alert("IV's need to be a number between 0 and 31");
    }

    if (check_number_in_range(0, 31, hp_IV) == true) {
        continue;
    }
    else {
        alert("IV's need to be a number between 0 and 31");
    }

    if (check_number_in_range(0, 31, speed_IV) == true) {
        continue;
    }
    else {
        alert("IV's need to be a number between 0 and 31");
    }

    checkEVs();
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
function searchMoves() {
    var input = document.getElementById('moveSearchBar');
    var filter = input.value.toLowerCase();
    console.log(filter);
    var eachMoveBox = document.getElementsByClassName('innerMoveBox');

    for (i = 0; i < eachMoveBox.length; i++) {

        a = eachMoveBox[i].getElementsByTagName("h4")[0];
        console.log("a: " + a);

        if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
            eachMoveBox[i].style.display = "";
        }
        else {
            eachMoveBox[i].style.display = "none";
        }
    }
}
function makeImgList(array, list) {
    console.log("array: " + array);
    for (var i = 0; i < array.length; i++) {
        //creates list element
        if (array[i] == 'null') {
            console.log("doesn't matter");
        }
        else {
            var img = document.createElement('img');
            img.src = "../media/types_imgs/" + array[i] + "_type.png";
            list.append(img);
        }

    }

    // Finally, return the constructed list:
    console.log(list);
    return list;
}
function displayMoveDetail() {
    //in movePopulate need to create className on each move as well as a specific id
    //onClick will call this and it will (style.display = none;) all details of other moves and (style.display = inline-block;) the move clicked
    //get the element by id by either:
    //using the args to create the id in function
    //OR
    //get id of element that called function
    console.log('onClick Event Happened!');
    var clickDiv = $(this).attr('id');
    console.log('should be element id: ' + clickDiv);
    var hiddenDiv = clickDiv + 'Child';
    console.log('should be hidden Element id: ' + hiddenDiv);
    //document.getElementById(hiddenDiv).style.display = '';
    $('.moveDetailDiv').hide();

    $('#' + hiddenDiv).show();
    //console.log(document.getElementsByClassName('moveDetailDiv'));//.style.display = 'none';
}
