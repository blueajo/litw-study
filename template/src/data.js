/*************************************************************
 * test.js
 *
 * Raw data for the LITW demo study.
 *
 * Author: Trevor Croxson
 *
 * Last Modified: February 5, 2017
 *
 * © Copyright 2017 LabintheWild.
 * For questions about this file and permission to use
 * the code, contact us at info@labinthewild.org
 *************************************************************/

require("../js/jsPsych-5.0.3/plugins/jspsych-animation");
require("../js/jsPsych-5.0.3/plugins/jspsych-button-response");
var part2searching1Template = require("../templates/part2searching1.html");

// generates a shuffled array of numbers 0 (inclusive) through max (noninclusive)
function randomNum(max, complexity) {
  allNumbers = new Array();
  for (var i = 0; i < max; i++) {
    allNumbers.push(complexity + "/" + i);
  }
  shuffle(allNumbers);
  return allNumbers;
};

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function getPrompt(selection, section, part) {
  // parse prompt to get
  var complexity = selection.charAt(0);
  var idx = parseInt(selection.charAt(3));

  var prompt = "";

  // section is B1
  if(section == "B1") {
    if(complexity == "l") {
      prompt = loPromptsB1[idx];
    } else if (complexity == "m") {
      prompt = mdPromptsB1[idx];
    }
    prompt = hiPromptsB1[idx];
  } else { // section is B2
    if(complexity == "l") {
      prompt = loPromptsB2[idx];
    } else if (complexity == "m") {
      prompt = mdPromptsB2[idx];
    }
    prompt = hiPromptsB2[idx];
  }

  // return whole prompt or just TASK
  if(part == "whole") {
    if(section == "B1") {
      return "<strong>Your scenario:</strong> " + prompt.prompt + " <strong>" + prompt.task + "</strong><br><br>Remember to complete the task as quickly as possible. Press space to begin.";
    }
    return "<strong>Your scenario:</strong> " + prompt.prompt + " You want to find out <strong>" + prompt.task.toLowerCase() + "</strong><br><br>As soon as you find the answer, click anywhere on the image to proceed. Remember to complete the task as quickly as possible. Press space to begin.";
  }
  return "<strong>" + prompt.task + "</strong>";
}

var loPromptsB1 = [{prompt: "You are on a website trying to do something.", task: "Click on the..."},
                   {prompt: "You are on a website trying to do something.", task: "Click on the..."},
                   {prompt: "You are on a website trying to do something.", task: "Click on the..."}];
var mdPromptsB1 = [{prompt: "You are on a website trying to do something.", task: "Click on the..."},
                   {prompt: "You are on a website trying to do something.", task: "Click on the..."},
                   {prompt: "You are on a website trying to do something.", task: "Click on the..."}];
var hiPromptsB1 = [{prompt: "You are on a website trying to do something.", task: "Click on the..."},
                   {prompt: "You are on a website trying to do something.", task: "Click on the..."},
                   {prompt: "You are on a website trying to do something.", task: "Click on the..."}];

var loPromptsB2 = [{prompt: "You are on a website trying to do something.", task: "What is the...?"},
                   {prompt: "You are on a website trying to do something.", task: "What is the...?"},
                   {prompt: "You are on a website trying to do something.", task: "What is the...?"}];
var mdPromptsB2 = [{prompt: "You are on a website trying to do something.", task: "What is the...?"},
                   {prompt: "You are on a website trying to do something.", task: "What is the...?"},
                   {prompt: "You are on a website trying to do something.", task: "What is the...?"}];
var hiPromptsB2 = [{prompt: "You are on a website trying to do something.", task: "What is the...?"},
                   {prompt: "You are on a website trying to do something.", task: "What is the...?"},
                   {prompt: "You are on a website trying to do something.", task: "What is the...?"}];

var loImgsA = randomNum(4, "lo")
var mdImgsA = randomNum(4, "md")
var hiImgsA = randomNum(4, "hi")

var loImgsB1 = randomNum(2, "lo")
var mdImgsB1 = randomNum(2, "md")
var hiImgsB1 = randomNum(2, "hi")

var loImgsB2 = randomNum(2, "lo")
var mdImgsB2 = randomNum(2, "md")
var hiImgsB2 = randomNum(2, "hi")

var partA1imgs = loImgsA.slice(0, 4).concat(mdImgsA.slice(0, 4), hiImgsA.slice(0, 4));
var partB1imgs = loImgsB1.slice(0, 2).concat(mdImgsB1.slice(0, 2), hiImgsB1.slice(0, 2));
var partB2imgs = loImgsB2.slice(0, 2).concat(mdImgsB2.slice(0, 2), hiImgsB2.slice(0, 2)); // slice to allow adding more stimuli if needed
shuffle(partA1imgs);
shuffle(partB1imgs);
shuffle(partB2imgs);

module.exports = {
   "preTrial": {
      "header": "Nice job!",
      "body": [
         "Now that you have the hang of it, we'll start the study.",
         "Click the arrow or press the <strong>spacebar</strong> when you are ready to begin."
      ],
      "bodyWithTouch": [
         "Now that you have the hang of it, we'll start the study.",
         "Tap the arrow when you are ready to begin."
      ],
   },
   "midTrial": {
      "header": "You're doing great! Take a breather."
   },
   "practiceRating": [
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/trial.png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      }
   ],
   "trialComplexity": [
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA1imgs[0] + ".png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      },
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA1imgs[1] + ".png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      },
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA1imgs[2] + ".png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      },
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA1imgs[3] + ".png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      },
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA1imgs[4] + ".png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      },
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA1imgs[5] + ".png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      },
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA1imgs[6] + ".png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      },
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA1imgs[7] + ".png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      },
            {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA1imgs[8] + ".png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      },
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA1imgs[9] + ".png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      },
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA1imgs[10] + ".png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      },
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA1imgs[11] + ".png"]
      },
      {
        "type": "button-response",
        "prompt": "<p>Please rate the website you have just seen based on visual appeal<p>",
        "choices": ["Very unappealing","","","","","","","","","","Very appealing"],
        "button_html":["<button class='jspsych-btn' disabled>Very unappealing</button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>","<button class='jspsych-btn'></button>",
        "<button class='jspsych-btn' disabled>Very appealing</button>"]
      }
   ],
   "practiceTaskB1": [
     {
       "type": "single-stim",
       "is_html": true,
       "prompt": "Click to access the 'Parks & Outdoors Travel Guide. When ready, press space",
       "choices": [32], // the numbers 1 - 2
    },
    {
      "type": "display-search",
      "display_element": $("#trials"),
      "name": "part2searching1",
      "template": part2searching1Template({withTouch: window.litwWithTouch}),
      "img": "img/stim-img/B1/trialimg.png",
      "prompt": "Click to access the 'Parks & Outdoors Travel Guide. When ready, press space"
    },
    {
      "type": "button-response",
      "stimulus": "img/stim-img/B1/trialicon.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
"prompt": "<p>Did this image appear on the previous website screenshot?</p>",
      "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
    }
   ],
   "trialTasksB1": [
		 // 1
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB1imgs[0], "B1", "whole"),
				"choices": [32], // the numbers 1 - 2
		 },
		 {
				"type": "display-search",
        "display_element": $("#trials"),
        "name": "part2searching1",
        "template": part2searching1Template({withTouch: window.litwWithTouch}),
        "img": "img/stim-img/B1/" + partB1imgs[0] + "img.png",
        "prompt": getPrompt(partB1imgs[0], "B1", "part")
		 },
     {
       "type": "button-response",
       "stimulus": "img/stim-img/B1/" + partB1imgs[0] + "icon.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
     },
		 // 2
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB1imgs[1], "B1", "whole"),
				"choices": [32], // the numbers 1 - 2
		 },
		 {
        "type": "display-search",
        "display_element": $("#trials"),
        "name": "part2searching1",
        "template": part2searching1Template({withTouch: window.litwWithTouch}),
        "img": "img/stim-img/B1/" + partB1imgs[1] + "img.png",
        "prompt": getPrompt(partB1imgs[1], "B1", "part")
		 },
     {
       "type": "button-response",
       "stimulus": "img/stim-img/B1/" + partB1imgs[1] + "icon.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
     },
		 // 3
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB1imgs[2], "B1", "whole"),
				"choices": [32], // the numbers 1 - 2
		 },
		 {
       "type": "display-search",
       "display_element": $("#trials"),
       "name": "part2searching1",
       "template": part2searching1Template({withTouch: window.litwWithTouch}),
       "img": "img/stim-img/B1/" + partB1imgs[2] + "img.png",
       "prompt": getPrompt(partB1imgs[2], "B1", "part")
		 },
     {
       "preamble": "<img src='img/stim-img/B1/" + partB1imgs[2] + "icon.png'/>",
       "type": 'survey-multi-choice',
       "questions": [{prompt: "Did this image appear on the previous website screenshot?", options: ["Yes", "No", "I don't know"], required:true,}]
     },
     // 4
    {
       "type": "single-stim",
       "is_html": true,
       "prompt": getPrompt(partB1imgs[3], "B1", "whole"),
       "choices": [32], // the numbers 1 - 2
    },
    {
       "type": "display-search",
        "display_element": $("#trials"),
        "name": "part2searching1",
        "template": part2searching1Template({withTouch: window.litwWithTouch}),
        "img": "img/stim-img/B1/" + partB1imgs[3] + "img.png",
        "prompt": getPrompt(partB1imgs[3], "B1", "part")
    },
    {
      "type": "button-response",
      "stimulus": "img/stim-img/B1/" + partB1imgs[3] + "icon.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
    },
    // 5
    {
       "type": "single-stim",
       "is_html": true,
       "prompt": getPrompt(partB1imgs[4], "B1", "whole"),
       "choices": [32], // the numbers 1 - 2
    },
    {
        "type": "display-search",
        "display_element": $("#trials"),
        "name": "part2searching1",
        "template": part2searching1Template({withTouch: window.litwWithTouch}),
        "img": "img/stim-img/B1/" + partB1imgs[4] + "img.png",
        "prompt": getPrompt(partB1imgs[4], "B1", "part")
    },
    {
      "type": "button-response",
      "stimulus": "img/stim-img/B1/" + partB1imgs[4] + "icon.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
    },
    // 6
    {
       "type": "single-stim",
       "is_html": true,
       "prompt": getPrompt(partB1imgs[5], "B1", "whole"),
       "choices": [32], // the numbers 1 - 2
    },
    {
       "type": "display-search",
       "display_element": $("#trials"),
       "name": "part2searching1",
       "template": part2searching1Template({withTouch: window.litwWithTouch}),
       "img": "img/stim-img/B1/" + partB1imgs[5] + "img.png",
       "prompt": getPrompt(partB1imgs[5], "B1", "part")
    },
    {
      "type": "button-response",
      "stimulus": "img/stim-img/B1/" + partB1imgs[5] + "icon.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
    }
   ],
   "practiceTaskB2": [
     {
       "type": "single-stim",
       "is_html": true,
       "prompt": "Click to access the 'Parks & Outdoors Travel Guide. When ready, press space",
       "choices": [32], // the numbers 1 - 2
    },
    {
      "type": 'single-stim',
      "stimulus": "img/stim-img/B2/trialimg.png'>",
      "choices": [32],
      "prompt": "Click to access the 'Parks & Outdoors Travel Guide. When ready, press space",
      "response_ends_trial": true
    },
    {
      "type": 'survey-text',
      "questions": ["Click to access the 'Parks & Outdoors Travel Guide.<br>Leave the answer blank if you don't know or forgot."],
    },
    {
      "type": "button-response",
      "stimulus": "img/stim-img/B2/trialicon.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
    }
   ],
   "trialTasksB2": [
		 // 1
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB2imgs[0], "B2", "whole"),
				"choices": [32], // the numbers 1 - 2
		 },
		 {
       "type": 'single-stim',
       "stimulus": "img/stim-img/B2/" + partB2imgs[0] + "img.png'>",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[0], "B2", "part"),
       "response_ends_trial": true
		 },
     {
       "type": 'survey-text',
       "questions": [getPrompt(partB2imgs[0], "B2", "part") + "<br>Leave the answer blank if you don't know or forgot."]
     },
     {
       "type": "button-response",
       "stimulus": "img/stim-img/B2/" + partB2imgs[0] + "icon.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
     },
		 // 2
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB2imgs[1], "B2", "whole"),
				"choices": [32], // the numbers 1 - 2
		 },
     {
       "type": 'single-stim',
       "stimulus": "img/stim-img/B2/" + partB2imgs[1] + "img.png'>",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[1], "B2", "part"),
       "response_ends_trial": true
		 },
     {
       "type": 'survey-text',
       "questions": [getPrompt(partB2imgs[1], "B2", "part") + "<br>Leave the answer blank if you don't know or forgot."]
     },
     {
       "type": "button-response",
       "stimulus": "img/stim-img/B2/" + partB2imgs[1] + "icon.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
     },
		 // 3
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB2imgs[2], "B2", "whole"),
				"choices": [32], // the numbers 1 - 2
		 },
     {
       "type": 'single-stim',
       "stimulus": "img/stim-img/B2/" + partB2imgs[2] + "img.png'>",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[2], "B2", "part"),
       "response_ends_trial": true
		 },
     {
       "type": 'survey-text',
       "questions": [getPrompt(partB2imgs[2], "B2", "part") + "<br>Leave the answer blank if you don't know or forgot."]
     },
     {
       "type": "button-response",
       "stimulus": "img/stim-img/B2/" + partB2imgs[2] + "icon.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
     },
     // 4
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB2imgs[0], "B2", "whole"),
				"choices": [32], // the numbers 1 - 2
		 },
		 {
       "type": 'single-stim',
       "stimulus": "img/stim-img/B2/" + partB2imgs[3] + "img.png'>",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[0], "B2", "part"),
       "response_ends_trial": true
		 },
     {
       "type": 'survey-text',
       "questions": [getPrompt(partB2imgs[3], "B2", "part") + "<br>Leave the answer blank if you don't know or forgot."]
     },
     {
       "type": "button-response",
       "stimulus": "img/stim-img/B2/" + partB2imgs[3] + "icon.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
     },
		 // 5
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB2imgs[1], "B2", "whole"),
				"choices": [32], // the numbers 1 - 2
		 },
     {
       "type": 'single-stim',
       "stimulus": "img/stim-img/B2/" + partB2imgs[4] + "img.png'>",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[1], "B2", "part"),
       "response_ends_trial": true
		 },
     {
       "type": 'survey-text',
       "questions": [getPrompt(partB2imgs[4], "B2", "part") + "<br>Leave the answer blank if you don't know or forgot."]
     },
     {
       "type": "button-response",
       "stimulus": "img/stim-img/B2/" + partB2imgs[4] + "icon.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
     },
		 // 6
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB2imgs[2], "B2", "whole"),
				"choices": [32], // the numbers 1 - 2
		 },
     {
       "type": 'single-stim',
       "stimulus": "img/stim-img/B2/" + partB2imgs[5] + "img.png'>",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[2], "B2", "part"),
       "response_ends_trial": true
		 },
     {
       "type": 'survey-text',
       "questions": [getPrompt(partB2imgs[5], "B2", "part") + "<br>Leave the answer blank if you don't know or forgot."]
     },
     {
       "type": "button-response",
       "stimulus": "img/stim-img/B2/" + partB2imgs[5] + "icon.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Did this image appear on the previous website screenshot?</p>"
     }
   ],
   "loadingMsg": "Loading resources:",
   "progressMsg": "Progress:",
   "results": {
      "header": "Have a look at your results!",
      "predictionMsg": "Based on your responses, we think you might like to take this cat home!",
      "predictionMsgBoth": "Based on your responses, we think you might like to take both these cats home!"
   },
   "resultsExplanation": ["The task you completed in this study is one measure of cat preference [1]. We determined your cat preference based on the set of features exhibited by the cats you chose, such as posture.", "We are interested in learning whether cat preferences are consistent across cultures. We will report on this result on our blog."],
   "citations": ["[1] Buttons, C.W., Patches, R.A. (2012). Evaluation of a method for determining cat preference: the cat selection task. Journal of Cats: Applied, 8:2, 75-84."]
};

function isElement() {
   return true;
}
