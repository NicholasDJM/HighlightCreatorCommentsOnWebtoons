// ==UserScript==
// @name         Highlight Creator Comments on Webtoons
// @namespace    https://github.com/NicholasDJM/HighlightCreatorCommentsOnWebtoons
// @version      0.4
// @description  Highlights comments made by the creator of the comic.
// @author       Nicholas Miller
// @updateURL    https://raw.githubusercontent.com/NicholasDJM/HighlightCreatorCommentsOnWebtoons/main/HighlightComments.js
// @downloadURL  https://raw.githubusercontent.com/NicholasDJM/HighlightCreatorCommentsOnWebtoons/main/HighlightComments.js
// @match        https://www.webtoons.com/*
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
                // Detect if Creator comment is a reply:
                if (elem.parents(".u_cbox_reply_area").length===0) {
                    elem.css("padding", "5px");
                } else {
                    // Check if u_cbox_area is a child of u_cbox_reply_area, then add 'padding: 17px 5px 17px 33px;', and a 10px to top and bottom margins.
                    elem.css("padding", "17px 5px 17px 33px");
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
