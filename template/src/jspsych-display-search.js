/*************************************************************
 * jspsych-display-slide.js
 *
 * A jsPsych plugin that displays slides based on their name.
 *
 *
 * © Copyright 2017 LabintheWild
 * For questions about this file and permission to use
 * the code, contact us at info@labinthewild.org
 *************************************************************/

module.exports = jsPsych.plugins["display-search"] = (function() {

    var plugin = {};

    plugin.trial = function(display_element, trial) {
        display_element.append("<p id='imagetouse' style='display: none;'>" + trial.img + "</p>");
        display_element.append("<p id='prompttouse' style='display: none;'>" + trial.prompt + "</p>");
        display_element.append(trial.template);
        display_element.i18n();
        var point = {};
        display_element.find("canvas").click(function(e) {
            var canvas = $("#myCanvas")[0];
            var context = canvas.getContext("2d");
            var offset = display_element.offset();
            x = e.pageX - offset.left;
            y = e.pageY - offset.top;
            context.beginPath();
            context.arc(x, y, 25, 0, 2 * Math.PI);
            context.stroke();
            context.fillStyle = "red";
            context.fill();
            context.closePath();
            point["x"] = x;
            point["y"] = y;
            if(trial.finish)  {
                trial.finish();
            }
            display_element.empty();
            jsPsych.finishTrial(point);
        });

        LITW.utils.showSlide(display_element[0].id);
        LITW.tracking.recordCheckpoint(display_element[0].id);
    };

    return plugin;

})();
