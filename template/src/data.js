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

function getPrompt(selection, part) {
  var complexity = selection.charAt(0);
  var idx = parseInt(selection.charAt(3));
  // part is B1
  if(part == "B1") {
    if(complexity == "l") {
      return loPromptsB1[idx];
    } else if (complexity == "m") {
      return mdPromptsB1[idx];
    }
    return hiPromptsB1[idx];
  }
  // part is B2
  if(complexity == "l") {
    return loPromptsB2[idx];
  } else if (complexity == "m") {
    return mdPromptsB2[idx];
  }
  return hiPromptsB2[idx];
}

var loPromptsB1 = ["Click to sign up for a new account. When ready, press space"];
var mdPromptsB1 = ["Click to change the language. When ready, press space"];
var hiPromptsB1 = ["Click on the the title of the quiz that was staff created and has 5 stars. When ready, press space"];

var loPromptsB2 = ["Click to sign up for a new account. When ready, press space"];
var mdPromptsB2 = ["Click to change the language. When ready, press space"];
var hiPromptsB2 = ["Click on the the title of the quiz that was staff created and has 5 stars. When ready, press space"];

var loImgsA = randomNum(4, "lo")
var mdImgsA = randomNum(4, "md")
var hiImgsA = randomNum(4, "hi")

var loImgsB1 = randomNum(1, "lo")
var mdImgsB1 = randomNum(1, "md")
var hiImgsB1 = randomNum(1, "hi")

var loImgsB2 = randomNum(1, "lo")
var mdImgsB2 = randomNum(1, "md")
var hiImgsB2 = randomNum(1, "hi")

var partA1imgs = loImgsA.slice(0, 2).concat(mdImgsA.slice(0, 2), hiImgsA.slice(0, 2));
var partA2imgs = loImgsA.slice(2, 4).concat(mdImgsA.slice(2, 4), hiImgsA.slice(2, 4));
var partB1imgs = loImgsB1.slice(0, 1).concat(mdImgsB1.slice(0, 1), hiImgsB1.slice(0, 1));
var partB2imgs = loImgsB2.slice(0, 1).concat(mdImgsB2.slice(0, 1), hiImgsB2.slice(0, 1)); // change this
shuffle(partA1imgs);
shuffle(partA2imgs);
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
   ],
   "trialUsability": [
      {
        "type": "animation",
        "frame_time": 500,
        "stimuli": ["img/stim-img/A/" + partA2imgs[0] + ".png"]
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
        "stimuli": ["img/stim-img/A/" + partA2imgs[1] + ".png"]
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
        "stimuli": ["img/stim-img/A/" + partA2imgs[2] + ".png"]
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
        "stimuli": ["img/stim-img/A/" + partA2imgs[3] + ".png"]
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
        "stimuli": ["img/stim-img/A/" + partA2imgs[4] + ".png"]
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
        "stimuli": ["img/stim-img/A/" + partA2imgs[5] + ".png"]
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
       "type": "single-stim",
       "stimulus": "<img src='img/stim-img/B1/trialicon.png' class='trialsImgs' /><p>Which quadrant is this image in?</p>",
       "is_html": true,
       "prompt": "Type [1] for Top Left, [2] for Top Right, [3] for Bottom Left, [4] for Bottom Right",
       "choices": [49, 50, 51, 52], // the numbers 1 - 2
    }
   ],
   "trialTasksB1": [
		 // 1
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB1imgs[0], "B1"),
				"choices": [32], // the numbers 1 - 2
		 },
		 {
				"type": "display-search",
        "display_element": $("#trials"),
        "name": "part2searching1",
        "template": part2searching1Template({withTouch: window.litwWithTouch}),
        "img": "img/stim-img/B1/" + partB1imgs[0] + "img.png",
        "prompt": getPrompt(partB1imgs[2], "B1")
		 },
		 {
				"type": "single-stim",
				"stimulus": "<img src='img/stim-img/B1/" + partB1imgs[0] + "icon.png' class='trialsImgs'/><p>Which quadrant is this image in?</p>",
				"is_html": true,
				"prompt": "Type [1] for Top Left, [2] for Top Right, [3] for Bottom Left, [4] for Bottom Right",
				"choices": [49, 50, 51, 52], // the numbers 1 - 2
		 },
		 // 2
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB1imgs[1], "B1"),
				"choices": [32], // the numbers 1 - 2
		 },
		 {
        "type": "display-search",
        "display_element": $("#trials"),
        "name": "part2searching1",
        "template": part2searching1Template({withTouch: window.litwWithTouch}),
        "img": "img/stim-img/B1/" + partB1imgs[1] + "img.png",
        "prompt": getPrompt(partB1imgs[2], "B1")
		 },
		 {
				"type": "single-stim",
				"stimulus": "<img src='img/stim-img/B1/" + partB1imgs[1] + "icon.png' class='trialsImgs'/><p>Which quadrant is this image in?</p>",
				"is_html": true,
				"prompt": "Type [1] for Top Left, [2] for Top Right, [3] for Bottom Left, [4] for Bottom Right",
				"choices": [49, 50, 51, 52], // the numbers 1 - 2
		 },
		 // 3
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB1imgs[2], "B1"),
				"choices": [32], // the numbers 1 - 2
		 },
		 {
       "type": "display-search",
       "display_element": $("#trials"),
       "name": "part2searching1",
       "template": part2searching1Template({withTouch: window.litwWithTouch}),
       "img": "img/stim-img/B1/" + partB1imgs[2] + "img.png",
       "prompt": getPrompt(partB1imgs[2], "B1")
		 },
		 {
       "type": "single-stim",
       "stimulus": "<img src='img/stim-img/B1/" + partB1imgs[2] + "icon.png' class='trialsImgs'/><p>Which quadrant is this image in?</p>",
       "is_html": true,
       "prompt": "Type [1] for Top Left, [2] for Top Right, [3] for Bottom Left, [4] for Bottom Right",
       "choices": [49, 50, 51, 52], // the numbers 1 - 2
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
      "stimulus": "<img src='img/stim-img/B2/trialimg.png'>",
      "choices": [32],
      "prompt": "Click to access the 'Parks & Outdoors Travel Guide. When ready, press space",
      "response_ends_trial": true
    },
    {
      type: 'survey-text',
      questions: ["Click to access the 'Parks & Outdoors Travel Guide. When ready, press space"],
    },
    {
       "type": "single-stim",
       "stimulus": "<img src='img/stim-img/B2/trialicon.png' class='trialsImgs' /><p>Which quadrant is this image in?</p>",
       "is_html": true,
       "prompt": "Type [1] for Top Left, [2] for Top Right, [3] for Bottom Left, [4] for Bottom Right",
       "choices": [49, 50, 51, 52], // the numbers 1 - 2
    }
   ],
   "trialTasksB2": [
		 // 1
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB2imgs[0], "B2"),
				"choices": [32], // the numbers 1 - 2
		 },
		 {
       "type": 'single-stim',
       "stimulus": "<img src='img/stim-img/B2/" + partB2imgs[0] + "img.png'>",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[0], "B2"),
       "response_ends_trial": true
		 },
     {
       type: 'survey-text',
       questions: [{prompt: getPrompt(partB2imgs[0], "B2")}],
     },
		 {
				"type": "single-stim",
				"stimulus": "<img src='img/stim-img/B2/" + partB2imgs[0] + "icon.png' class='trialsImgs'/><p>Which quadrant is this image in?</p>",
				"is_html": true,
				"prompt": "Type [1] for Top Left, [2] for Top Right, [3] for Bottom Left, [4] for Bottom Right",
				"choices": [49, 50, 51, 52], // the numbers 1 - 2
		 },
		 // 2
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB2imgs[1], "B2"),
				"choices": [32], // the numbers 1 - 2
		 },
     {
       "type": 'single-stim',
       "stimulus": "<img src='img/stim-img/B2/" + partB2imgs[1] + "img.png'>",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[1], "B2"),
       "response_ends_trial": true
		 },
     {
       type: 'survey-text',
       questions: [{prompt: getPrompt(partB2imgs[1], "B2")}],
     },
		 {
				"type": "single-stim",
				"stimulus": "<img src='img/stim-img/B2/" + partB2imgs[1] + "icon.png' class='trialsImgs'/><p>Which quadrant is this image in?</p>",
				"is_html": true,
				"prompt": "Type [1] for Top Left, [2] for Top Right, [3] for Bottom Left, [4] for Bottom Right",
				"choices": [49, 50, 51, 52], // the numbers 1 - 2
		 },
		 // 3
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": getPrompt(partB2imgs[2], "B2"),
				"choices": [32], // the numbers 1 - 2
		 },
     {
       "type": 'single-stim',
       "stimulus": "<img src='img/stim-img/B2/" + partB2imgs[2] + "img.png'>",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[2], "B2"),
       "response_ends_trial": true
		 },
     {
       type: 'survey-text',
       questions: [{prompt: getPrompt(partB2imgs[2], "B2")}],
     },
		 {
       "type": "single-stim",
       "stimulus": "<img src='img/stim-img/B2/" + partB2imgs[2] + "icon.png' class='trialsImgs'/><p>Which quadrant is this image in?</p>",
       "is_html": true,
       "prompt": "Type [1] for Top Left, [2] for Top Right, [3] for Bottom Left, [4] for Bottom Right",
       "choices": [49, 50, 51, 52], // the numbers 1 - 2
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
