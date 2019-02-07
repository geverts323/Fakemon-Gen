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
    else if (isNaN(n) || n == "" || n == null {
        return NaN;
    }
    else {
        return "oops";
    }
}