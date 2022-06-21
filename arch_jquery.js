$(document).ready(function archiveBorders(){

    // lexia top divs
    $(".lexia-number")
    .wrapAll(`<div class="arch-black-out">`)/* creates outline for top and sides of lexia number */
    .wrapInner(`<div class="arch-text">`)/* creates div with styles for borders and background around lexia */
    .append(`<div class="faux-close"><div>`);/* creates divs for faux close */

    // lexia body divs
    $(".body").wrapInner(`<div class="border-high"><div class="border-back"><div class="border-shadow"><div class="outline body-pad">`);
    // .border-high creates highlight of window
    // .border-back creates space between highlight and shadow inside of .border-high
    // .border-shadow creates shadows of boarder inside of .border-back
    // .outline creates outline around content inside of .border-shadow

    // nav control divs
    $(".nav-control")
    .wrapAll(`<div class="nav-border shadow">`)/* creates div for outline and grey background at top of window */
    .before(`<div class="outline">`);/* creates div for faux-close box */

    // map window divs
    $(".map").attr("id","map")/* creates map id for targeting purposes */
    .wrapAll(`<div id="map-border" class="outline shadow"><div id="map-window-top" class="window-top border-high lexia-number"><div class="map-border border-back"><div class="border-shadow"><div class="outline">`);/* creates outline div for map window */

    $(".map-border").before(`<div class="arch-text">Map</div>`)/* creates highlight div for top of window */
    $("#map-close").appendTo("#map-window-top").wrap(`<div class="faux-close">`)/* .attr("class","faux-close") */;

    // navigator window divs
    $(".navigator").attr({"id":"navigator","class":"outline shadow"}).wrapInner(`<div id="nav-window-top" class="window-top border-high lexia-number"><div class="navigator-border border-back"><div class="border-shadow"><div class="outline">`);
    $(".navigator-border").before(`<div class="arch-text">Navigator</div>`);
    $("#nav-close").appendTo("#nav-window-top").wrap(`<div class="faux-close">`);
});

