function create_html_element(elementType, content) {
    var element = document.createElement(elementType);
    element.innerHTML = content;
    return element;
}

function check_number_in_range(min, max, n) {
    if (n >= min && n <= max) {
        return true;
    }
    else if (n < min || n > max) {
        return false;
    }
    else if (isNaN(n) || n == "" || n == null) {
        return NaN;
    }
    else {
        return "oops";
    }
}

function check_move_type_eff(move_type) {
    var type_eff_object = {
        "sup_eff": [],
        "not_very": [],
        "norm_dmg": [],
        "not_eff": []
    };

    for (e in atkTypes[move_type]) {
        var type = atkTypes[move_type];
        if ( type[e] == 2) {
            type_eff_object.sup_eff.push(e);
        }
        else if (type[e] == 0.5) {
            type_eff_object.not_very.push(e);
        }
        else if (type[e] == 1) {
            type_eff_object.norm_dmg.push(e);
        }
        else if (type[e] == 0) {
            type_eff_object.not_eff.push(e);
        }
        else {
            console.log("something is wrong");
        }
    }

    return type_eff_object;
}


//move page appears to all be working. Need to style it all and make sure everything is accurate
//will also need to check that I have the most recent move info
