'use strict';

export default class OverlayManager {
    #filmOverlayShown = false;
    #searchOverlayShown = false;

    #body;
    #overlayShadow;
    #overlaySearch;
    #overlayFilm;
    #closeOverlayWindow;
    constructor() {
        this.#overlayShadow = document.querySelector(".overlay")
        this.#body = document.querySelector("body")
        this.#overlaySearch = document.querySelector(".overlay__search")
        this.#overlayFilm = document.querySelector(".overlay__film")
        this.#closeOverlayWindow = document.querySelector(".overlay__film__close-icon")

        this.#overlayShadow.addEventListener('click', (e)=>{
            console.log()
            if (e.target.tagName === "svg" || e.target.classList.contains("overlay__film") || e.target.classList.contains("overlay__search")) {
                this.hideAllOverlays();
            }
        })
        this.#closeOverlayWindow.addEventListener('click', ()=> {
            this.hideAllOverlays();
        })
    }
    showFilmOverlay() {
        if (this.#filmOverlayShown) {
            return
        }
        this.#overlayShadow.classList.add("displayed")
        this.#overlayFilm.classList.add("displayed")
        this.#body.style.overflowY = 'hidden';
        this.#filmOverlayShown = true;
    }
    showSearchOverlay() {
        if (this.#searchOverlayShown) {
            return
        }
        this.#overlayShadow.classList.add("displayed")
        this.#overlaySearch.classList.add("displayed")
        this.#body.style.overflowY = 'hidden';
        this.#searchOverlayShown = true;
    }
    hideAllOverlays() {
        if (!this.#filmOverlayShown && !this.#filmOverlayShown) {
            return
        }
        this.#overlayShadow.classList.remove("displayed")
        if (this.#searchOverlayShown)  {
            this.#overlaySearch.classList.remove("displayed")
            this.#searchOverlayShown = false;
        }
        if (this.#filmOverlayShown)  {
            this.#overlayFilm.classList.remove("displayed")
            this.#filmOverlayShown = false;
        }
        this.#body.style.overflowY = 'visible';
    }

}
