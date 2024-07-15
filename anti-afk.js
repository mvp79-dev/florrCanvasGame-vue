// ==UserScript==
// @name Anti-AFK
// @author kit2d2
// @namespace Tampermonkey Scripts
// @match https://florr.io/*
// @grant none
// ==/UserScript==

(function() {
    function clickImHereButton() {
        var buttons = document.querySelectorAll('button'); 
        buttons.forEach(function(button) {
            if (button.textContent.trim() === "I'm here") { // case sens
                button.click();
            }
        });
    }

    function getRandomTime(min, max) {
        return Math.random() * (max - min) + min;
    }

    var delay = getRandomTime(2001, 5005);
    setTimeout(function() {
        clickImHereButton();
    }, delay);
})();
