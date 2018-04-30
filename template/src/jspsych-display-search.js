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
        console.clear();
        var start_time = Date.now();
        display_element.append("<p id='imagetouse' style='display: none;'>" + trial.img + "</p>");
        display_element.append("<p id='prompttouse' style='display: none;'>" + trial.prompt + "</p>");
        display_element.append(trial.template);
        display_element.append("<p id='errorMessage' style='color: red; display: none;'"
            +"<b>You have clicked wrongly.  Please try again.</b></p>")
        var topY = trial.boundaries[0];
        var bottomY = trial.boundaries[1];
        var leftX = trial.boundaries[2];
        var rightX = trial.boundaries[3];
        console.log("Top : " + topY);
        console.log("Bottom : " + bottomY);
        console.log("left : " + leftX);
        console.log("right : " + rightX);
        display_element.i18n();
        var point = {};
        var wrongAttempts = 0;
        display_element.find("canvas").click(function(e) {
            var offset = $(this).offset();
            x = e.pageX - offset.left;
            y = e.pageY - offset.top;
            point["x"] = x;
            point["y"] = y;
            console.log("clicked y: " + y);
            console.log("clicked x: " + x);
            if ((x >= leftX && x <= rightX) &&
                (y >= topY && y <= bottomY)) {
                var response_time = (Date.now() - start_time) / 1000;
                if(trial.finish)  {
                    trial.finish();
                }

                var trial_data = {
                    "wrong": wrongAttempts,
                    "point": point,
                    "time": response_time
                };
                display_element.empty();
                jsPsych.finishTrial(trial_data);
            } else {
                $("#errorMessage").show();
                wrongAttempts++;
            }
        });

        LITW.utils.showSlide(display_element[0].id);
        LITW.tracking.recordCheckpoint(display_element[0].id);
    };

    return plugin;

})();
