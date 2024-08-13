import '../depotify_kit/mithril.js/mithril.min.js';
import { router } from './router/router.js';
import { Home, About } from './App.js';
var root = document.getElementById("root");

router(root, "/", {
    "/": Home,
    "/about": About,
    /* 
        "/404": NotFound 
    */
});