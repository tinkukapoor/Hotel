$(document).ready(function () {
    var $htmlContent = $("#htmlContent"),
        $html = $("#html"),
        $jsContent = $("#jsContent"),
        $javascript = $("#javascript");
    if ($htmlContent.length && $html.length) {
        $htmlContent.text($html.html());
    }
    if ($jsContent.length && $javascript.length) {
        $jsContent.text($javascript.html());
    }
});