
$(document).ready(function () {
    $(".mapview").click(function () {
        $(".map").css("display", "block");

        function adjustLine(from, to, line) {

            var fT = from.offsetTop + from.offsetHeight / 2;
            var tT = to.offsetTop + to.offsetHeight / 2;
            var fL = from.offsetLeft + from.offsetWidth / 2;
            var tL = to.offsetLeft + to.offsetWidth / 2;

            var CA = Math.abs(tT - fT);
            var CO = Math.abs(tL - fL);
            var H = Math.sqrt(CA * CA + CO * CO);
            var ANG = 180 / Math.PI * Math.acos(CA / H);

            if (tT > fT) {
                var top = (tT - fT) / 2 + fT;
            } else {
                var top = (fT - tT) / 2 + tT;
            }
            if (tL > fL) {
                var left = (tL - fL) / 2 + fL;
            } else {
                var left = (fL - tL) / 2 + tL;
            }

            if ((fT < tT && fL < tL) || (tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)) {
                ANG *= -1;
            }
            top -= H / 2;

            line.style["-webkit-transform"] = 'rotate(' + ANG + 'deg)';
            line.style["-moz-transform"] = 'rotate(' + ANG + 'deg)';
            line.style["-ms-transform"] = 'rotate(' + ANG + 'deg)';
            line.style["-o-transform"] = 'rotate(' + ANG + 'deg)';
            line.style["-transform"] = 'rotate(' + ANG + 'deg)';
            line.style.top = top + 'px';
            line.style.left = left + 'px';
            line.style.height = H + 'px';
        }
        adjustLine(
            document.getElementById('div1'),
            document.getElementById('div2'),
            document.getElementById('line')
        );
        function adjustLine2(from, to, line) {

            var fT = from.offsetTop + from.offsetHeight / 2;
            var tT = to.offsetTop + to.offsetHeight / 2;
            var fL = from.offsetLeft + from.offsetWidth / 2;
            var tL = to.offsetLeft + to.offsetWidth / 2;

            var CA = Math.abs(tT - fT);
            var CO = Math.abs(tL - fL);
            var H = Math.sqrt(CA * CA + CO * CO);
            var ANG = 180 / Math.PI * Math.acos(CA / H);

            if (tT > fT) {
                var top = (tT - fT) / 2 + fT;
            } else {
                var top = (fT - tT) / 2 + tT;
            }
            if (tL > fL) {
                var left = (tL - fL) / 2 + fL;
            } else {
                var left = (fL - tL) / 2 + tL;
            }

            if ((fT < tT && fL < tL) || (tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)) {
                ANG *= -1;
            }
            top -= H / 2;

            line.style["-webkit-transform"] = 'rotate(' + ANG + 'deg)';
            line.style["-moz-transform"] = 'rotate(' + ANG + 'deg)';
            line.style["-ms-transform"] = 'rotate(' + ANG + 'deg)';
            line.style["-o-transform"] = 'rotate(' + ANG + 'deg)';
            line.style["-transform"] = 'rotate(' + ANG + 'deg)';
            line.style.top = top + 'px';
            line.style.left = left + 'px';
            line.style.height = H + 'px';
        }
        adjustLine2(
            document.getElementById('div1'),
            document.getElementById('div3'),
            document.getElementById('line2')
        );

    });
});

$(window).on('resize', function () {
    function adjustLine(from, to, line) {

        var fT = from.offsetTop + from.offsetHeight / 2;
        var tT = to.offsetTop + to.offsetHeight / 2;
        var fL = from.offsetLeft + from.offsetWidth / 2;
        var tL = to.offsetLeft + to.offsetWidth / 2;

        var CA = Math.abs(tT - fT);
        var CO = Math.abs(tL - fL);
        var H = Math.sqrt(CA * CA + CO * CO);
        var ANG = 180 / Math.PI * Math.acos(CA / H);

        if (tT > fT) {
            var top = (tT - fT) / 2 + fT;
        } else {
            var top = (fT - tT) / 2 + tT;
        }
        if (tL > fL) {
            var left = (tL - fL) / 2 + fL;
        } else {
            var left = (fL - tL) / 2 + tL;
        }

        if ((fT < tT && fL < tL) || (tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)) {
            ANG *= -1;
        }
        top -= H / 2;

        line.style["-webkit-transform"] = 'rotate(' + ANG + 'deg)';
        line.style["-moz-transform"] = 'rotate(' + ANG + 'deg)';
        line.style["-ms-transform"] = 'rotate(' + ANG + 'deg)';
        line.style["-o-transform"] = 'rotate(' + ANG + 'deg)';
        line.style["-transform"] = 'rotate(' + ANG + 'deg)';
        line.style.top = top + 'px';
        line.style.left = left + 'px';
        line.style.height = H + 'px';
    }
    adjustLine(
        document.getElementById('div1'),
        document.getElementById('div2'),
        document.getElementById('line')
    );

    function adjustLine2(from, to, line) {

        var fT = from.offsetTop + from.offsetHeight / 2;
        var tT = to.offsetTop + to.offsetHeight / 2;
        var fL = from.offsetLeft + from.offsetWidth / 2;
        var tL = to.offsetLeft + to.offsetWidth / 2;

        var CA = Math.abs(tT - fT);
        var CO = Math.abs(tL - fL);
        var H = Math.sqrt(CA * CA + CO * CO);
        var ANG = 180 / Math.PI * Math.acos(CA / H);

        if (tT > fT) {
            var top = (tT - fT) / 2 + fT;
        } else {
            var top = (fT - tT) / 2 + tT;
        }
        if (tL > fL) {
            var left = (tL - fL) / 2 + fL;
        } else {
            var left = (fL - tL) / 2 + tL;
        }

        if ((fT < tT && fL < tL) || (tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)) {
            ANG *= -1;
        }
        top -= H / 2;

        line.style["-webkit-transform"] = 'rotate(' + ANG + 'deg)';
        line.style["-moz-transform"] = 'rotate(' + ANG + 'deg)';
        line.style["-ms-transform"] = 'rotate(' + ANG + 'deg)';
        line.style["-o-transform"] = 'rotate(' + ANG + 'deg)';
        line.style["-transform"] = 'rotate(' + ANG + 'deg)';
        line.style.top = top + 'px';
        line.style.left = left + 'px';
        line.style.height = H + 'px';
    }
    adjustLine2(
        document.getElementById('div1'),
        document.getElementById('div3'),
        document.getElementById('line2')
    );

    function adjustLine3(from, to, line) {

        var fT = from.offsetTop + from.offsetHeight / 2;
        var tT = to.offsetTop + to.offsetHeight / 2;
        var fL = from.offsetLeft + from.offsetWidth / 2;
        var tL = to.offsetLeft + to.offsetWidth / 2;

        var CA = Math.abs(tT - fT);
        var CO = Math.abs(tL - fL);
        var H = Math.sqrt(CA * CA + CO * CO);
        var ANG = 180 / Math.PI * Math.acos(CA / H);

        if (tT > fT) {
            var top = (tT - fT) / 2 + fT;
        } else {
            var top = (fT - tT) / 2 + tT;
        }
        if (tL > fL) {
            var left = (tL - fL) / 2 + fL;
        } else {
            var left = (fL - tL) / 2 + tL;
        }

        if ((fT < tT && fL < tL) || (tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)) {
            ANG *= -1;
        }
        top -= H / 2;

        line.style["-webkit-transform"] = 'rotate(' + ANG + 'deg)';
        line.style["-moz-transform"] = 'rotate(' + ANG + 'deg)';
        line.style["-ms-transform"] = 'rotate(' + ANG + 'deg)';
        line.style["-o-transform"] = 'rotate(' + ANG + 'deg)';
        line.style["-transform"] = 'rotate(' + ANG + 'deg)';
        line.style.top = top + 'px';
        line.style.left = left + 'px';
        line.style.height = H + 'px';
    }
    adjustLine3(
        document.getElementById('div1'),
        document.getElementById('div4'),
        document.getElementById('line3')
    );
});
