function increaseBar(perc){
	$("#progress").css('background', 'green');
    $("#progress").animate({width: perc + "%"},"slow");//css("width", perc + "%");
    $("#labelProg").text(perc + "%");
}

/*
 * original method without changes
 */
/*function increaseBar(perc){
	$("#progress").css('background', 'green');
    $("#progress").css("width", perc + "%");
    $("#labelProg").text(perc + "%");
}*/


function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "% ");
}