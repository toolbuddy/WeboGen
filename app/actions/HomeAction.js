$(document).ready(function() {
    $('.ui.sidebar').sidebar('toggle');

    const newsLabelShake = setInterval(function() {
        $('.newsLabel').transition('shake');
    }, 3000);

    const examsLabalBounce = setInterval(function() {
        $('.examsLabel').transition('bounce');
    }, 3000);

    const callPapersLabelTada = setInterval(function() {
        $('.callPapersLabel').transition('tada');
    }, 3000);
});