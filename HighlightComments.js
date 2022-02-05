// ==UserScript==
// @name         Highlight Creator Comments on Webtoons
// @namespace    https://github.com/NicholasDJM/HighlightCreatorCommentsOnWebtoons
// @version      0.2
// @description  Highlights comments made by the creator of the comic.
// @author       Nicholas Miller
// @include      https://www.webtoons.com/*
// @icon         https://icons.duckduckgo.com/ip2/webtoons.com.ico
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js#sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=
// @grant        GM_log
// ==/UserScript==

/* global $ jQuery */

function log(text) {
    GM_log("Highlight Creator Comments: " + text);
}
if (jQuery.fn.jquery == "3.6.0") {
    log("Loading userscript...");
    $(()=>{
        // This jQuery function needs to be in a setInterval because Webtoons uses a lot of AJAX calls to replace elements.
        setInterval(()=>{
            $(".u_cbox_ico_editor").each((index, element)=>{
                const elem = $(element).parents(".u_cbox_area");
                elem.css("border", "#00dc64 solid 3px");
                elem.css("border-radius", "5px");
                if (elem.parents(".u_cbox_reply_area").length===0) {
                    elem.css("padding", "5px");
                } else {
                    // Detect if Creator comment is a reply, and add this instead: 'padding: 17px 5px 17px 33px;'
                    // Check if u_cbox_area is a child of u_cbox_reply_area
                    elem.css("padding", "17px 5px 17px 33px");
                    // If comment is a reply, also add a margin to the top and bottom
                    elem.css("margin-top", "10px");
                    elem.css("margin-bottom", "10px");
                }
            });
        },100);
    });
    log("Done!");
} else {
    log("Incorrent jQuery version. Expecting 3.6.0");
}
