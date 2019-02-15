function display_menu_section() {
    $(".side_nav_section").show();
}
function hide_menu_section() {
    $(".side_nav_section").hide();
    $(".inner_nav_btns").hide();
}
function display_gm_tools() {
    $(".gm_tool_btns").show();
}
function hide_gm_tools() {
    $(".gm_tool_btns").hide();
}
function display_player_tools() {
    $(".player_tool_btns").show();
}
function hide_player_tools() {
    $(".player_tool_btns").hide();
}
function display_info_tools() {
    $(".game_info_btns").show();
}
function hide_info_tools() {
    $(".game_info_btns").hide();
}
function display_mon_gen_section() {
    $(".mon_gen_section").show();
    $(".encounter_gen_section").hide();
    $(".item_gen_section").hide();
    $(".battle_dmg_section").hide();
    $(".type_dmg_section").hide();
    $(".dice_roll_section").hide();
    $(".mon_db_section").hide();
    $(".move_db_section").hide();
    $(".item_db_section").hide();
}
function display_encounter_gen_section() {
    $(".mon_gen_section").hide();
    $(".encounter_gen_section").show();
    $(".item_gen_section").hide();
    $(".battle_dmg_section").hide();
    $(".type_dmg_section").hide();
    $(".dice_roll_section").hide();
    $(".mon_db_section").hide();
    $(".move_db_section").hide();
    $(".item_db_section").hide();
}
function display_item_gen_section() {
    $(".mon_gen_section").hide();
    $(".encounter_gen_section").hide();
    $(".item_gen_section").show();
    $(".battle_dmg_section").hide();
    $(".type_dmg_section").hide();
    $(".dice_roll_section").hide();
    $(".mon_db_section").hide();
    $(".move_db_section").hide();
    $(".item_db_section").hide();
}
function display_battle_dmg_section() {
    $(".mon_gen_section").hide();
    $(".encounter_gen_section").hide();
    $(".item_gen_section").hide();
    $(".battle_dmg_section").show();
    $(".type_dmg_section").hide();
    $(".dice_roll_section").hide();
    $(".mon_db_section").hide();
    $(".move_db_section").hide();
    $(".item_db_section").hide();
}
function display_type_dmg_section() {
    $(".mon_gen_section").hide();
    $(".encounter_gen_section").hide();
    $(".item_gen_section").hide();
    $(".battle_dmg_section").hide();
    $(".type_dmg_section").hide();
    $(".dice_roll_section").hide();
    $(".mon_db_section").hide();
    $(".move_db_section").hide();
    $(".item_db_section").hide();
}
function display_dice_roll_section() {
    $(".mon_gen_section").hide();
    $(".encounter_gen_section").hide();
    $(".item_gen_section").hide();
    $(".battle_dmg_section").hide();
    $(".type_dmg_section").hide();
    $(".dice_roll_section").show();
    $(".mon_db_section").hide();
    $(".move_db_section").hide();
    $(".item_db_section").hide();
}
function display_mon_db_section() {
    $(".mon_gen_section").hide();
    $(".encounter_gen_section").hide();
    $(".item_gen_section").hide();
    $(".battle_dmg_section").hide();
    $(".type_dmg_section").hide();
    $(".dice_roll_section").hide();
    $(".mon_db_section").show();
    $(".move_db_section").hide();
    $(".item_db_section").hide();
}
function display_move_db_section() {
    $(".mon_gen_section").hide();
    $(".encounter_gen_section").hide();
    $(".item_gen_section").hide();
    $(".battle_dmg_section").hide();
    $(".type_dmg_section").hide();
    $(".dice_roll_section").hide();
    $(".mon_db_section").hide();
    $(".move_db_section").show();
    $(".item_db_section").hide();
}
function display_item_db_section() {
    $(".mon_gen_section").hide();
    $(".encounter_gen_section").hide();
    $(".item_gen_section").hide();
    $(".battle_dmg_section").hide();
    $(".type_dmg_section").hide();
    $(".dice_roll_section").hide();
    $(".mon_db_section").hide();
    $(".move_db_section").hide();
    $(".item_db_section").show();
}
function display_move_detail(number) {
    var click_id = number + "_move_box";
    var click_div_detail = click_id + '_detail';

    if ($('#' + click_div_detail).css('display') == 'none') {
        $('.move_detail_div').hide();
        $('#' + click_div_detail).show();
    }
    else {
        $('.move_detail_div').hide();
    }
}
function search_moves() {
    var input = document.getElementById('move_search_bar');
    var filter = input.value.toLowerCase();
    console.log(filter);
    var eachMoveBox = document.getElementsByClassName('inner_move_box');

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
