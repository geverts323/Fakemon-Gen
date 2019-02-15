function move_populate() {
    var move_display_box = $('#dynamic_move_div'); //Box to append all this_moves_div to at the end of loop

    for (m in sorted_moves) {
        var this_move = sorted_moves[m];
        move_display_box.append(make_move_row(this_move));
    }
}

function create_move_detail(object, target) {
    var detail_div = document.createElement('div');
    detail_div.className = 'move_detail_div';
    detail_div.id = object.move_number + '_move_box_detail';

    var move_effect_entry = object.effect_entries.replace('$effect_chance', object.effect_chance);


    var move_number_element = create_html_element('h5', '&#35;' + object.move_number);
    move_number_element.className = 'move_detail_element';
    var move_effect_element = create_html_element('p', move_effect_entry);
    move_effect_element.className = 'move_detail_element';
    var move_target_element = create_html_element('p', object.target.replace(/-/g, ' '));
    move_target_element.className = 'move_detail_element';

    var move_type_eff = check_move_type_eff(object.move_type);

    var super_effective_list = move_type_eff.sup_eff;
    var not_very_effective_list = move_type_eff.not_very;
    var deals_normal_damage_list = move_type_eff.norm_dmg;
    var ineffective_list = move_type_eff.not_eff;


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
    var move_number = object.move_number;

    target.append(detail_div);
    detail_div.style.display = 'none';
    return detail_div;
}

function make_move_row(move) {
    var move_div = document.createElement('div'); //box to append elements to
    move_div.className = 'inner_move_box';
    move_div.id = move.move_number + '_move_box'
    var move_name = move.name.replace(/-/g, ' ');
    var name_element = create_html_element('h4', move_name); //name element
    name.className = 'move_name_element move_element';

    var acc_content;
    if (move.accuray == null) {
        acc_content = '--';
    }
    else {
        acc_content = move.accuracy;
    }
    var acc_element = create_html_element('p', acc_content); //accuracy element
    acc_element.className = 'move_acc_element move_element';

    var pow_content;
    if (move.power == null) {
        pow_content = '--';
    }
    else {
        pow_content = move.power;
    }
    var pow_element = create_html_element('p', pow_content); //power element
    pow_element.className = 'move_pow_element move_element';

    var dmg_element = document.createElement('img'); //damage type element
    dmg_element.className = 'move_dmg_element move_element'
    if (move.damage_class == 'physical') {
        dmg_element.src = '../media/physDmgIcon.jpg';
    }
    else if (move.damage_class == 'special') {
        dmg_element.src = '../media/SpecAtkIcon.jpg';
    }
    else if (move.damage_class == 'status') {
        dmg_element.src = '../media/statusAtkIcon.jpg';
    }
    else {
        dmg_element.src = '../media/oops.jpg';
    }

    var pp_element = create_html_element('p', move.pp); //pp element
    pp_element.className = 'move_pp_element move_element';

    var move_type_element = create_html_element('p', move.move_type.replace(/-/g, ' '));


    move_div.append(name_element);
    move_div.append(acc_element);
    move_div.append(pow_element);
    move_div.append(pp_element);
    move_div.append(dmg_element);
    move_div.append(move_type_element);

    create_move_detail(move, move_div);
    move_div.addEventListener('click', function() {display_move_detail(move.move_number);}, false);
    return move_div;
}
