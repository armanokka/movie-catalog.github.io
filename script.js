'use strict';

import OverlayManager from './overlay.js'
const overlayManager = new OverlayManager();


document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        overlayManager.hideAllOverlays();
    }
}, false);

let films = document.querySelectorAll(".film-card");
films.forEach((item)=>{
    item.addEventListener('click', ()=>{
        overlayManager.showFilmOverlay()
    })
})

let badges = document.querySelectorAll(".film-card__badge__rating")
badges.forEach((item)=>{
    let rate = item.querySelector(".film-card__badge__rating__rate")
    let icon = item.querySelector(".film-card__badge__rating__icon")
    let n = Number.parseFloat(item.textContent)
    if (n >= 6) {
        rate.style.color = '#6db741';
        icon.style.color = '#6db741';
    } else if (n >= 5) {
        rate.style.color = '#feeb23';
        icon.style.color = '#feeb23';
    }  else {
        rate.style.color = '#847e75';
        icon.style.color = '#847e75';
    }
})

// let selectors = document.querySelectorAll(".select")
// selectors.forEach((item)=>{
//     item.addEventListener('click', ()=>{
//         let select = item.querySelector("select")
//         select.
//     })
// })

