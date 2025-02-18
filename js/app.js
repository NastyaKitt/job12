const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const reviewItems = document.querySelectorAll('.reviewItem');
let currentIndex = 0;

function showReview(index) {
    reviewItems.forEach((item, idx) => {
        item.classList.remove('active');
        if (idx === index) {
            item.classList.add('active');
        }
    });
}

leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : reviewItems.length - 1;
    showReview(currentIndex);
});

rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex < reviewItems.length - 1) ? currentIndex + 1 : 0;
    showReview(currentIndex);
});

showReview(currentIndex);


// попапы


function togglePopup(popup, action) {
    if (action === 'show') {
        popup.classList.add('show');
    } else if (action === 'hide') {
        popup.classList.remove('show');
    }
}

let popupWin = document.getElementById('popupWin');
let clsForm = document.getElementById('clsForm');
let callForms = [document.getElementById('callForm'), document.getElementById('callForm1')];

callForms.forEach(callForm => {
    callForm.addEventListener('click', () => togglePopup(popupWin, 'show'));
});

clsForm.addEventListener('click', () => togglePopup(popupWin, 'hide'));

let popupPolitWin = document.getElementById('popupPolitWin');
let callPolit1 = document.getElementById('callPolit1');
let clsPolit = document.getElementById('clsPolit');

callPolit1.addEventListener('click', () => togglePopup(popupPolitWin, 'show'));
clsPolit.addEventListener('click', () => togglePopup(popupPolitWin, 'hide'));


// маска

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) {
        e.setSelectionRange(pos, pos);
    } else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

function mask(e) {
    var matrix = this.placeholder,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_";
    });
    
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
}

window.addEventListener("DOMContentLoaded", function() {
    var inputs = [document.querySelector("#tel"), document.querySelector("#tel1")];

    inputs.forEach(function(input) {
        input.addEventListener("input", mask, false);
        input.focus();
        setCursorPosition(3, input);
    });
});
