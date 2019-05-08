function toggleShowHide(hiddenText) {
    var element = document.getElementById(hiddenText);
    if (element) {
        if (element.style.display == 'none')
            element.style.display = 'inline';
        else
            element.style.display = 'none';
    }
}