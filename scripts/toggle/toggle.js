function tabSwap(tabName, contentSet) {
    $('#'+contentSet).children().hide();
    $('#'+tabName).show();
    switch(tabName) {
        case 'main-page':
            $('#logo').show();
            $('#main-page').css("height", "60%");
            break;
        case 'spring':
            $('#weather').show();
            $('#weather').css("background-image", 'url(res/spring-cherry-blossoms.gif)');
            break;
        case 'summer':
            $('#weather').show();
            $('#weather').css("background-image", 'url(res/clouds.gif)');
            break;
        case 'fall':
            $('#weather').show();
            $('#weather').css("background-image", 'url(res/red-leaves-fall.gif)');
            break;
        case 'winter':
            $('#weather').show();
            $('#weather').css("background-image", 'url(res/snow-fall-2.gif)');
            break;
        default:
            break;
    }
}
function toggleSection(sectionName) {
    $('#'+sectionName).toggle('fast');
    if (sectionName=='logo') $('#main-page').css("height", "80%");
}
$("content mCustomScrollbar").mCustomScrollbar({
    theme: "content-scroll"
});