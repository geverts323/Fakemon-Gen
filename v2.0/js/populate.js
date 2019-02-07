function movePopulate() {
    var box = document.getElementById('moveSearchSection');
    //loops through movesByType var and go into each type
    for (i in movesByType) {
        //loops through each type and grabs each move - most of the page all happens in this function
        //creates all the elements in each individual move, sets classes and ids as necessary and creates SOME events on this page
        for (k in movesByType[i]) {
            //creates div to hold each move
            var moveDiv = document.createElement('div');
            moveDiv.className = ('innerMoveBox ' + i + 'MoveBox')
            moveDiv.id = ('moveNumber' + movesByType[i][k].move_number);
            //creates name element
            var nameElement = document.createElement('h4');
            nameElement.innerHTML = movesByType[i][k].name.replace(/-/g, " ");
            nameElement.className = "moveSearchClass";
            //creates accuracy element
            var accElement = document.createElement('p');

            //handling accuracy for status condition moves - if null show "--" in place
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
            dmgElement.className = "dmg_type_img";

            //decides which img to show
            if (movesByType[i][k].damage_class == "physical") {
                dmgElement.src = "../media/physDmgIcon.jpg";
            }
            else if (movesByType[i][k].damage_class == "special") {
                dmgElement.src = "../media/SpecAtkIcon.jpg";
            }
            else if (movesByType[i][k].damage_class == "status") {
                dmgElement.src = "../media/statusAtkIcon.jpg";
            }
            else {
                dmgElement.src = "../media/oops.jpg";
            }

            //creates pp element and fills in with move pp
            var ppElement = document.createElement('p');
            ppElement.innerHTML = movesByType[i][k].pp;
            //creates move type element and fills in
            var moveTypeElement = document.createElement('p');
            moveTypeElement.innerHTML = i;

            //appending first elements for each move box and the box
            box.append(moveDiv);
            moveDiv.append(nameElement);
            moveDiv.append(powElement);
            moveDiv.append(accElement);
            moveDiv.append(ppElement);
            moveDiv.append(moveTypeElement);
            moveDiv.append(dmgElement);

            //this div will default to hidden but will show when the move is clicked on
            var detailDiv = document.createElement('div');
            detailDiv.className = ('moveDetailDiv');
            detailDiv.id = 'moveNumber' + movesByType[i][k].move_number + 'Child';
            //detailDiv.style.display = 'none';

            //hidden detail div guts all created down here

            //creates move number element
            var moveNumber = document.createElement('h5');
            moveNumber.innerHTML = '&#35;' + movesByType[i][k].move_number;

            //creates move effect text element
            var moveEffect = document.createElement('p');
            moveEffect.className = ('moveEffectDetail')

            //if a move has effect_chance filler spot (as some do in data.js) this gets the effect_chance value and replaces it
            var moveEffectEntry = movesByType[i][k].effect_entries.replace('$effect_chance', movesByType[i][k].effect_chance);
            moveEffect.innerHTML = "Description: " + moveEffectEntry;

            //creates move target element
            var moveTargets = document.createElement('p');
            moveTargets.className = ('moveTargetsDetail');
            moveTargets.innerHTML = 'Target: ' + movesByType[i][k].target.replace(/-/g, " ");

            //down here is all the typeEffectiveness details
            //these will also be hidden but expand with onClick event displayMoveDetail()
            var typeEffectDetail = document.createElement('div');
            typeEffectDetail.className = ('typeEffectDiv');

            // creating empty arrays to append the types to their appropriate list
            var superEffective = [];
            var notVeryEffective = [];
            var dealsNormalDamage = [];
            var ineffective = [];

            console.log("i: " + i);

            //for loop going through value for i (should be a type eg. "Normal") in atkTypes in data.js

            for (j in atkTypes[i]) {
                console.log("j: " + j);
                if (atkTypes[i][j] == 2) {
                    superEffective.push(j);
                    console.log('superEffective: ' + j);
                }
                else if (atkTypes[i][j] == 0.5) {
                    notVeryEffective.push(j);
                    console.log('notVeryEffective: ' + j);
                }
                else if (atkTypes[i][j] == 1) {
                    dealsNormalDamage.push(j);
                    console.log('normalDamage: ' + j);
                }
                else if (atkTypes[i][j] == 0) {
                    ineffective.push(j);
                    console.log('ineffective' + j);
                }
                else {
                    console.log("shouldn't have gotten here: " + i);
                }
            }
            console.log(superEffective);
            //getting through the above, seeing the logs but not 100% sure they are actually being appended


            var x2div = document.createElement('div');
            x2div.className = 'x2div moveEffectivenessDiv';
            var superEffectiveList = document.createElement('div');                 
            // superEffectiveList.append(superEffective);                         
            var xHalfdiv = document.createElement('div');
            xHalfdiv.className = 'xHalfdiv moveEffectivenessDiv';
            var notVeryEffectiveList = document.createElement('div');
            // notVeryEffectiveList.append(notVeryEffective);
            var x1div = document.createElement('div');
            x1div.className = 'x1div moveEffectivenessDiv';
            var dealsNormalDamageList = document.createElement('div');
            // dealsNormalDamageList.append(dealsNormalDamage);
            var x0div = document.createElement('div');
            x0div.className = 'x0div moveEffectivenessDiv';
            var ineffectiveList = document.createElement('div');
            // ineffectiveList.append(ineffective);

            var superListContent = makeImgList(superEffective, superEffectiveList);
            var superEffectiveTitle = document.createElement('h3');
            superEffectiveTitle.innerHTML = "x2 Damage:";

            var notVeryListContent = makeImgList(notVeryEffective, notVeryEffectiveList);
            var notVeryEffectiveTitle = document.createElement('h3');
            notVeryEffectiveTitle.innerHTML = "x0.5 Damage:";

            var dealsNormalListContent = makeImgList(dealsNormalDamage, dealsNormalDamageList);
            var dealsNormalTitle = document.createElement('h3');
            dealsNormalTitle.innerHTML = "x1 Damage:";

            var ineffectiveListContent = makeImgList(ineffective, ineffectiveList);
            var ineffectiveTitle = document.createElement('h3');
            ineffectiveTitle.innerHTML = "x0 Damage:";

            var typeEffectiveDiv = document.createElement('div');
            typeEffectiveDiv.className = ("typeEffectiveDiv");

            x2div.append(superEffectiveTitle, superListContent);

            xHalfdiv.append(notVeryEffectiveTitle, notVeryListContent);

            x1div.append(dealsNormalTitle, dealsNormalListContent);

            x0div.append(ineffectiveTitle, ineffectiveListContent);

            typeEffectiveDiv.append(x2div, x1div, xHalfdiv, x0div);

            typeEffectDetail.append(typeEffectiveDiv);

            //typeEffectDetail.append(superEffectiveList, notVeryEffectiveList, dealsNormalDamageList, ineffectiveList);

            moveDiv.append(detailDiv);
            detailDiv.append(moveNumber, moveEffect, moveTargets, typeEffectDetail);
            moveDiv.addEventListener('click', displayMoveDetail);
            console.log(typeEffectDetail)
            //moveDiv.onclick = displayMoveDetail;
            detailDiv.style.display = 'none';
        }
    }
}

//trying to speed up the process, now calls on sorted_moves so only need 1 loop
function move_populate() {
    var move_display_box = $('#dynamic_move_div'); //Box to append all this_moves_div to at the end of loop

    for (m in sorted_moves) {
        var this_move = sorted_moves[m];
        var this_move_div = document.createElement('div'); //box to append elements to
        this_move_div.className = 'inner_move_box';
        this_move_div.id = this_move.name + '_move_box'
        var move_name = this_move.name.replace(/-/g, ' ');
        var name_element = create_html_element('h4', move_name); //name element
        name.className = 'move_name_element move_element';
        
        var acc_content; 
        if (this_move.accuray == null) {
            acc_content = '--';
        }
        else {
            acc_content = this_move.accuracy;
        }
        var acc_element = create_html_element('p', acc_content); //accuracy element
        acc_element.className = 'move_acc_element move_element';
        
        var pow_content;
        if (this_move.power == null) {
            pow_content = '--';
        }
        else {
            pow_content = this_move.power;
        }
        var pow_element = create_html_element('p', pow_content); //power element
        pow_element.className = 'move_pow_element move_element';

        var dmg_element = document.createElement('img'); //damage type element
        dmg_element.className = 'move_dmg_element move_element'
        if (this_move.damage_class == 'physical') {
            dmg_element.src = '../media/physDmgIcon.jpg';
        }
        else if (this_move.damage_class == 'special') {
            dmg_element.src = '../media/SpecAtkIcon.jpg';
        }
        else if (this_move.damage_class == 'status') {
            dmg_element.src = '../media/statusAtkIcon.jpg';
        }
        else {
            dmg_element.src = '../media/oops.jpg';
        }

        var pp_element = create_html_element('p', this_move.pp); //pp element
        pp_element.className = 'move_pp_element move_element';

        var move_type_element = create_html_element('p', this_move.move_type.replace(/-/g, ' '));


        this_move_div.append(name_element);
        this_move_div.append(acc_element);
        this_move_div.append(pow_element);
        this_move_div.append(pp_element);
        this_move_div.append(dmg_element);
        this_move_div.append(move_type_element);

        move_display_box.append(this_move_div);
        

        // var detail_div = create_move_detail(this_move);
        // this_move_div.append(detail_div);
        // // detail_div.style.display = none;

        this_move_div.onclick = create_move_detail(this_move, this_move_div);
        
    }
}

function create_move_detail(object, target) {
    var detail_div = document.createElement('div');
    detail_div.className = 'move_detail_div';
    detail_div.id = 'move_number_' + object.move_number + '_div';

    var move_effect_entry = object.effect_entries.replace('$effect_chance', object.effect_chance);


    var move_number_element = create_html_element('h5', '&#35' + object.move_number);
    move_number_element.className = 'move_detail_element';
    var move_effect_element = create_html_element('p', move_effect_entry);
    move_effect_element.className = 'move_detail_element';
    var move_target_element = create_html_element('p', object.target.replace(/-/g, ' '));
    move_target_element.className = 'move_detail_element';

    var super_effective_list = [];
    var not_very_effective_list = [];
    var deals_normal_damage_list = [];
    var ineffective_list = [];

    for (e in atkTypes[object.move_type]) {
        var type = atkTypes[object.move_type];
        if ( type[e] == 2) {
            super_effective_list.push(e);
        }
        else if (type[e] == 0.5) {
            not_very_effective_list.push(e);
        }
        else if (type[e] == 1) {
            deals_normal_damage_list.push(e);
        }
        else if (type[e] == 0) {
            ineffective_list.push(e);
        }
        else {
            console.log("something is wrong: " + object.move_number);
        }
    }

    var move_type_effect_div = document.createElement('div');

    var super_effective_img_div = document.createElement('div');
    var not_very_effective_img_div = document.createElement('div');
    var deals_normal_damage_img_div = document.createElement('div');
    var ineffective_img_div = document.createElement('div');


    var super_effective_title = create_html_element('h4', 'x2');
    super_effective_img_div.append(super_effective_title);
    makeImgList(super_effective_list, super_effective_img_div);
    var not_very_effective_title = create_html_element('h4', 'x0.5');
    makeImgList(not_very_effective_list, not_very_effective_img_div);
    var deals_normal_damage_title = create_html_element('h4', 'x1');
    makeImgList(deals_normal_damage_list, deals_normal_damage_img_div);
    var ineffective_img_title = create_html_element('h4', 'x0');
    makeImgList(ineffective_list, ineffective_img_div);

    var effectiveness_title_div = document.createElement('div');
    effectiveness_title_div.append(super_effective_title);
    effectiveness_title_div.append(deals_normal_damage_title);
    effectiveness_title_div.append(not_very_effective_title);
    effectiveness_title_div.append(ineffective_img_title);

    move_type_effect_div.append(super_effective_img_div);
    move_type_effect_div.append(deals_normal_damage_img_div);
    move_type_effect_div.append(not_very_effective_img_div);
    move_type_effect_div.append(ineffective_img_div);

    var imgs_w_title_eff_div = document.createElement('div');
    imgs_w_title_eff_div.append(effectiveness_title_div);
    imgs_w_title_eff_div.append(move_type_effect_div);

    detail_div.append(move_number_element);
    detail_div.append(move_effect_element);
    detail_div.append(move_target_element);
    detail_div.append(move_type_effect_div)

    //details need to be appended and titles need to be added

    target.append(detail_div);
    return detail_div
}