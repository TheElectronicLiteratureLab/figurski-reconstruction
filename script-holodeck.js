var switchBackground = document.getElementsByClassName("slider");
$(document).ready(function () {

    $(document).bind('keydown', function (e) {
        if ((e.keyCode === 18) || (e.keyCode === 91)) {
            $(".hidden-link").css("border", "0px solid black").animate({
                'borderWidth': '.5px',
            }, 500).delay(5000).animate({
                'borderWidth': '0px',
            }, 500)
        }
    });
    $(".mapview").click(function () {
        $(".map").css("display", "block");
        $("#map-close").css("display", "block");
        $("#map-border").css("display", "grid");
    });

    $(".navigator-open").click(function () {
        $("#navigator-border").css("display", "grid");
        $("#nav-close").css("display", "block");
    });

    $(".modal-right-close").click(function () {
        // $(".map").css("display", "none");
        $("#map-border").css("display", "none");
        $(".navigator").css("display", "none");
        $(".choose-link-modal").css("display", "none");
        $(".choose-link-modal-1").css("display", "none");
        $(".choose-link-modal-2").css("display", "none");
        $(".choose-link-modal-3").css("display", "none");
        $(".choose-link-modal-4").css("display", "none");
        $(".choose-link-modal-5").css("display", "none");
        $(".choose-link-modal-6").css("display", "none");
        $(".choose-link-modal-7").css("display", "none");
    });

    $(".global-map").click(function () {
        $(".global-map").next().css("display", "none");
        $(".open-global-map").css("display", "block");
        $(".global-map").css("display", "none");
        $(".lexia-map-open").css("display", "block");
    });

    $(".lexia-map-open").click(function () {
        $(".global-map").css("display", "block");
        $(".global-map").next().css("display", "grid");
        $(".lexia-map-open").css("display", "none");
        $(".open-global-map").css("display", "none");
    });

    $("#nav-map-open").on("click", function () {
        $("#main-map").fadeOut(10);
        $("#time-map").fadeIn(100);
    });

    $("#open-character").on("click", function () {
        $("#main-map").fadeOut(10);
        $("#character-map").fadeIn(100);
    });

    $("#open-notes").on("click", function () {
        $("#main-map").fadeOut(10);
        $("#notes-map").fadeIn(100);
    });

    $("#places").on("click", function () {
        $("#main-map").fadeOut(10);
        $("#places-map").fadeIn(100);
    });

    $("#artifacts").on("click", function () {
        $("#main-map").fadeOut(10);
        $("#artifacts-map").fadeIn(100);
    });

    $("#oneex").on("click", function () {
        $("#main-map").fadeOut(10);
        $("#oneex-map").fadeIn(100);
    });

    $("#twoex").on("click", function () {
        $("#main-map").fadeOut(10);
        $("#twoex-map").fadeIn(100);
    });

    $("#threeex").on("click", function () {
        $("#main-map").fadeOut(10);
        $("#threeex-map").fadeIn(100);
    });

    $("#notes-open").on("click", function () {
        $("#main-map").fadeOut(10);
        $("#notes-map").fadeIn(100);
    });
    $("#time-open").on("click", function () {
        $("#time-map").fadeOut(10);
        $("#chronology-map").fadeIn(100);
    });


    $("#fig-open").on("click", function () {
        $("#character-map").fadeOut(10);
        $("#fig-map").fadeIn(100);
    });

    $("#vieu-open").on("click", function () {
        $("#character-map").fadeOut(10);
        $("#vieu-map").fadeIn(100);
    });

    $("#cup-open").on("click", function () {
        $("#character-map").fadeOut(10);
        $("#cup-map").fadeIn(100);
    });

    $("#pig-open").on("click", function () {
        $("#artifacts-map").fadeOut(10);
        $("#pig-map").fadeIn(100);
    });

    $("#spam-open").on("click", function () {
        $("#artifacts-map").fadeOut(10);
        $("#spam-map").fadeIn(100);
    });

    $("#acid-open").on("click", function () {
        $("#artifacts-map").fadeOut(10);
        $("#acid-map").fadeIn(100);
    });

    $("#find-open").on("click", function () {
        $("#places-map").fadeOut(10);
        $("#find-map").fadeIn(100);
    });

    $("#shower-open").on("click", function () {
        $("#places-map").fadeOut(10);
        $("#shower-map").fadeIn(100);
    });

    $("#holodeck-open").on("click", function () {
        $("#places-map").fadeOut(10);
        $("#holodeck-map").fadeIn(100);
    });

    $("#oneone-open").on("click", function () {
        $("#oneex-map").fadeOut(10);
        $("#oneone-map").fadeIn(100);
    });

    $("#onetwo-open").on("click", function () {
        $("#oneex-map").fadeOut(10);
        $("#onetwo-map").fadeIn(100);
    });

    $("#onethree-open").on("click", function () {
        $("#oneex-map").fadeOut(10);
        $("#onethree-map").fadeIn(100);
    });

    $("#twoone-open").on("click", function () {
        $("#twoex-map").fadeOut(10);
        $("#twoone-map").fadeIn(100);
    });

    $("#twotwo-open").on("click", function () {
        $("#twoex-map").fadeOut(10);
        $("#twotwo-map").fadeIn(100);
    });

    $("#twothree-open").on("click", function () {
        $("#twoex-map").fadeOut(10);
        $("#twothree-map").fadeIn(100);
    });

    $("#threeone-open").on("click", function () {
        $("#threeex-map").fadeOut(10);
        $("#threeone-map").fadeIn(100);
    });

    $("#threetwo-open").on("click", function () {
        $("#threeex-map").fadeOut(10);
        $("#threetwo-map").fadeIn(100);
    });

    $("#threethree-open").on("click", function () {
        $("#threeex-map").fadeOut(10);
        $("#threethree-map").fadeIn(100);
    });

    $('.note-node-link').click(function(e){
        e.stopPropagation();
    });

    $("#open-doorway").on("click", function () {
        $("#notes-map").fadeOut(10);
        $("#doorway-open").fadeIn(100);
    });

    $("#open-hallucination").on("click", function () {
        $("#notes-map").fadeOut(10);
        $("#hallucination-open").fadeIn(100);
    });

    $("#open-freedom").on("click", function () {
        $("#notes-map").fadeOut(10);
        $("#freedom-open").fadeIn(100);
    });

    $("#open-piglove").on("click", function () {
        $("#notes-map").fadeOut(10);
        $("#piglove-open").fadeIn(100);
    });

    $("#open-automaton").on("click", function () {
        $("#notes-map").fadeOut(10);
        $("#automaton-open").fadeIn(100);
    });

    $("#open-meat").on("click", function () {
        $("#notes-map").fadeOut(10);
        $("#meat-open").fadeIn(100);
    });

    $("#open-devil").on("click", function () {
        $("#notes-map").fadeOut(10);
        $("#devil-open").fadeIn(100);
    });

    $("#open-digestion").on("click", function () {
        $("#notes-map").fadeOut(10);
        $("#digestion-open").fadeIn(100);
    });

    $("#open-timeend").on("click", function () {
        $("#notes-map").fadeOut(10);
        $("#time-end").fadeIn(100);
    });

});


var x = document.getElementById("swap");

if (x.innerHTML === "Contemporary Edition") {
    document.body.classList.add("contemporary");
    document.body.classList.remove("archive");
    $(switchBackground).css("background-color", "#017171");
}




if (window.localStorage.getItem('key') === "1") {
    x.innerHTML = "Classic Edition";

    var i;
    document.body.classList.add("archive");
    document.body.classList.remove("contemporary");
    $(switchBackground).css("background-color", "#A3A2A2");
}

function modeSwitch() {

    var x = document.getElementById("swap");
    if (x.innerHTML === "Contemporary Edition") {
        $(".preloader").css("display", "block");
        $(".preloader").fadeOut("slow");;
        window.localStorage.setItem('key', "1"); x.innerHTML = "Classic Edition";
        document.body.classList.add("archive");
        document.body.classList.remove("contemporary");
        $(switchBackground).css("background-color", "#A3A2A2");


    } else {
        $(".preloader").css("display", "block");
        $(".preloader").fadeOut("slow");;
        x.innerHTML = "Contemporary Edition"; localStorage.removeItem("key");
        document.body.classList.add("contemporary");
        document.body.classList.remove("archive");
        $(switchBackground).css("background-color", "#017171");

    }
}