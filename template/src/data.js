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
require("../js/jsPsych-5.0.3/plugins/jspsych-button-response-2");
require("../js/jsPsych-5.0.3/plugins/jspsych-button-response-3");
var part2searching1Template = require("../templates/part2searching1.html");

// generates an array of numbers 0 (inclusive) through max (noninclusive)
function numArray(max, complexity) {
  allNumbers = new Array();
  for (var i = 0; i < max; i++) {
    allNumbers.push(complexity + "/" + i);
  }
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

function getBoundaries(selection) {
  // parse prompt to get
  var complexity = selection.charAt(0);
  var idx = parseInt(selection.charAt(3));

  if(complexity == "l") {
    return loBoundaries[idx];
  } else if (complexity == "m") {
    return mdBoundaries[idx];
  } else {
    return hiBoundaries[idx];
  }
}

function getAnswer(selection) {
  // parse prompt to get
  var complexity = selection.charAt(0);
  var idx = parseInt(selection.charAt(3));

  if(complexity == "l") {
    return loAnswers[idx];
  } else if (complexity == "m") {
    return mdAnswers[idx];
  } else {
    return hiAnswers[idx];
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
    } else {
      prompt = hiPromptsB1[idx];
    }
  } else { // section is B2
    if(complexity == "l") {
      prompt = loPromptsB2[idx];
    } else if (complexity == "m") {
      prompt = mdPromptsB2[idx];
    } else {
      prompt = hiPromptsB2[idx];
    }
  }

  // return whole prompt or just TASK
  if(part == "whole") {
    if(section == "B1") {
      return "<strong>Your scenario:</strong> " + prompt.prompt + " <strong>" + prompt.task + "</strong><br><br>Remember to complete the task as quickly as possible. Press space to begin.";
    }
    return "<strong>Your scenario:</strong> " + prompt.prompt + " Your task is to find the answer to the following question: <strong>" + prompt.task + "</strong><br><br>As soon as you find the answer, click anywhere on the image to proceed. Remember to complete the task as quickly as possible. Press space to begin.";
  }
  return "<strong>" + prompt.task + "</strong>";
}

var loPromptsB1 = [{prompt: "The next website is a sign in page.  You are given an activation code for your new account.", task: "Click on the link to use your new activation code."},
                   {prompt: "The next website is a website design home page.  You want to view some of your account details.", task: "Click on the part that will take you to your account."}];
var mdPromptsB1 = [{prompt: "The next website is the front page of a PC technical support service. You would like to change the language on the page from English.", task: "Click on the option to change the language."},
                   {prompt: "The next website is the front page of an online office supplier. You are interested in purchasing office furniture.", task: "Click on the link to see the furniture selection."}];
var hiPromptsB1 = [{prompt: "The next website hosts online quizzes. You want to learn which college major fits you best.", task: "Click on the College Major Selector Quiz."},
                   {prompt: "The next website is a social entertainment home page. You are looking for a new ringtones.", task: "Click on the image that will take redirect you to find new ringtones."}];

var loPromptsB2 = [{prompt: "The next website is the personal website of a software developer.", task: "What is the last name of the software developer?"},
                   {prompt: "The next website is a website for a winery.", task: "Where country is the winery located in?"}];
var mdPromptsB2 = [{prompt: "The next website is a hub for downloading free software.", task: "Which version number of Internet Explorer is offered for download?"},
                   {prompt: "The next website is the front page of a quiz website.", task: "What is the name of this week's word search?"}];
var hiPromptsB2 = [{prompt: "The next website is the front page of a local news site.", task: "What month are the most recent articles from?"},
                   {prompt: "The next website is the front page of a local news site.", task: "What is the Berkeley Chancellor's first name as reported on the news site?"}];


var loAnswers = ["Anka", "New Zealand"];
var mdAnswers = ["Internet Explorer 9", "Melodious Monks"];
var hiAnswers = ["August", "Robert"];


var loBoundaries = [[372, 383, 211, 264],
                    [41, 55, 290, 348]];

var mdBoundaries = [[9, 23, 690, 773],
                  [172, 188, 46, 187]];

var hiBoundaries = [[289, 339, 139, 281],
                  [248, 320, 561, 651]];
/*
boundaries: [topY, bottomY, leftX, rightX]
*/

var loImgsA = numArray(4, "lo")
var mdImgsA = numArray(4, "md")
var hiImgsA = numArray(4, "hi")

var loImgsB1 = numArray(2, "lo")
var mdImgsB1 = numArray(2, "md")
var hiImgsB1 = numArray(2, "hi")

var loImgsB2 = numArray(2, "lo")
var mdImgsB2 = numArray(2, "md")
var hiImgsB2 = numArray(2, "hi")

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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons"
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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons",
        "id": "A/" + partA1imgs[0]
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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons",
        "id": "A/" + partA1imgs[1]
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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons",
        "id": "A/" + partA1imgs[2]
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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons",
        "id": "A/" + partA1imgs[3]
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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons",
        "id": "A/" + partA1imgs[4]
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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons",
        "id": "A/" + partA1imgs[5]
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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons",
        "id": "A/" + partA1imgs[6]
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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons",
        "id": "A/" + partA1imgs[7]
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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons",
        "id": "A/" + partA1imgs[8]
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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons",
        "id": "A/" + partA1imgs[9]
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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons",
        "id": "A/" + partA1imgs[10]
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
        "<button class='jspsych-btn' disabled>Very appealing</button>"],
        "class": "rating-buttons",
        "id": "A/" + partA1imgs[11]
      }
   ],
   "practiceTaskB1": [
     {
       "type": "single-stim",
       "is_html": true,
       "prompt": "<strong>Your scenario:</strong> The next website is a vacation planning website. You and your family want to vacation at a beach destination spot.<strong> Click on the Beach Travel Guide.</strong><br><br>Remember to complete the task as quickly as possible. Press space to begin.",
       "choices": [32], // the numbers 1 - 2
    },
    {
      "type": "display-search",
      "display_element": $("#trials"),
      "name": "part2searching1",
      "template": part2searching1Template({withTouch: window.litwWithTouch}),
      "img": "img/stim-img/B1/trialimg.png",
      "prompt": "Click on the Beach Travel Guide.",
      "boundaries": [226, 285, 509, 777]
    },
    {
      "type": "button-response-2",
      "stimulus": "img/stim-img/B1/trialicon0.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>"
    },
    {
      "type": "button-response-2",
      "stimulus": "img/stim-img/B1/trialicon1.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>"
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
        "prompt": getPrompt(partB1imgs[0], "B1", "part"),
        "boundaries": getBoundaries(partB1imgs[0]),
        "id": "B1/" + partB1imgs[0]
     },
     {
       "type": "button-response-2",
       "stimulus": "img/stim-img/B1/" + partB1imgs[0] + "icon0.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
        "id": "B1/" + partB1imgs[0]
     },
     {
       "type": "button-response-2",
       "stimulus": "img/stim-img/B1/" + partB1imgs[0] + "icon1.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B1/" + partB1imgs[0]
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
        "prompt": getPrompt(partB1imgs[1], "B1", "part"),
        "boundaries": getBoundaries(partB1imgs[1]),
        "id": "B1/" + partB1imgs[1]
     },
     {
       "type": "button-response-2",
       "stimulus": "img/stim-img/B1/" + partB1imgs[1] + "icon0.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B1/" + partB1imgs[1]
     },
     {
       "type": "button-response-2",
       "stimulus": "img/stim-img/B1/" + partB1imgs[1] + "icon1.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B1/" + partB1imgs[1]
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
       "prompt": getPrompt(partB1imgs[2], "B1", "part"),
        "boundaries": getBoundaries(partB1imgs[2]),
        "id": "B1/" + partB1imgs[2]
     },
     {
       "type": "button-response-2",
       "stimulus": "img/stim-img/B1/" + partB1imgs[2] + "icon0.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B1/" + partB1imgs[2]
     },
     {
       "type": "button-response-2",
       "stimulus": "img/stim-img/B1/" + partB1imgs[2] + "icon1.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B1/" + partB1imgs[2]
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
        "prompt": getPrompt(partB1imgs[3], "B1", "part"),
        "boundaries": getBoundaries(partB1imgs[3]),
        "id": "B1/" + partB1imgs[3]
    },
    {
      "type": "button-response-2",
      "stimulus": "img/stim-img/B1/" + partB1imgs[3] + "icon0.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
      "id": "B1/" + partB1imgs[3]
    },
    {
      "type": "button-response-2",
      "stimulus": "img/stim-img/B1/" + partB1imgs[3] + "icon1.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
      "id": "B1/" + partB1imgs[3]
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
        "prompt": getPrompt(partB1imgs[4], "B1", "part"),
        "boundaries": getBoundaries(partB1imgs[4]),
        "id": "B1/" + partB1imgs[4]
    },
    {
      "type": "button-response-2",
      "stimulus": "img/stim-img/B1/" + partB1imgs[4] + "icon0.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
      "id": "B1/" + partB1imgs[4]
    },
    {
      "type": "button-response-2",
      "stimulus": "img/stim-img/B1/" + partB1imgs[4] + "icon1.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
      "id": "B1/" + partB1imgs[4]
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
       "prompt": getPrompt(partB1imgs[5], "B1", "part"),
        "boundaries": getBoundaries(partB1imgs[5]),
        "id": "B1/" + partB1imgs[5]
    },
    {
      "type": "button-response-2",
      "stimulus": "img/stim-img/B1/" + partB1imgs[5] + "icon0.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>"
    },
    {
      "type": "button-response-2",
      "stimulus": "img/stim-img/B1/" + partB1imgs[5] + "icon1.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>"
    }
   ],
   "practiceTaskB2": [
     {
       "type": "single-stim",
       "is_html": true,
       "prompt": "<strong>Your scenario:</strong> The next website is the front page of a prescription drug price comparison website. Your task is to find the answer to the following question: <strong>Up to what percent can you save on prescription drugs using this site?</strong><br><br>As soon as you find the answer, click anywhere on the image to proceed. Remember to complete the task as quickly as possible. Press space to begin.",
       "choices": [32], // the numbers 1 - 2
    },
    {
      "type": 'single-stim-2',
      "stimulus": "img/stim-img/B2/trialimg.png",
      "choices": [32],
      "prompt": "Up to what percent can you save on prescription drugs using this site?",
      "response_ends_trial": true
    },
    {
      "type": 'survey-text',
      "questions": ["Up to what percent can you save on prescription drugs using this site?<br>Leave the answer blank if you don't know or forgot."],
      "correctAnswer": "80%"
    },
    {
      "type": "button-response-3",
      "stimulus": "img/stim-img/B2/trialicon0.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>"
    },
    {
      "type": "button-response-3",
      "stimulus": "img/stim-img/B2/trialicon1.png",
      "choices": ["Yes","No","I don't know"],
      "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
      "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>"
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
       "type": 'single-stim-2',
       "stimulus": "img/stim-img/B2/" + partB2imgs[0] + "img.png",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[0], "B2", "part"),
       "response_ends_trial": true,
       "id": "B2/" + partB2imgs[0]
     },
     {
       "type": 'survey-text',
       "questions": [getPrompt(partB2imgs[0], "B2", "part") + "<br>Leave the answer blank if you don't know or forgot."],
       "id": "B2/" + partB2imgs[0],
       "correctAnswer": getAnswer(partB2imgs[0])
     },
     {
       "type": "button-response-3",
       "stimulus": "img/stim-img/B2/" + partB2imgs[0] + "icon0.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B2/" + partB2imgs[0]
     },
     {
       "type": "button-response-3",
       "stimulus": "img/stim-img/B2/" + partB2imgs[0] + "icon1.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B2/" + partB2imgs[0]
     },
     // 2
     {
        "type": "single-stim",
        "is_html": true,
        "prompt": getPrompt(partB2imgs[1], "B2", "whole"),
        "choices": [32], // the numbers 1 - 2
     },
     {
       "type": 'single-stim-2',
       "stimulus": "img/stim-img/B2/" + partB2imgs[1] + "img.png",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[1], "B2", "part"),
       "response_ends_trial": true,
       "id": "B2/" + partB2imgs[1]
     },
     {
       "type": 'survey-text',
       "questions": [getPrompt(partB2imgs[1], "B2", "part") + "<br>Leave the answer blank if you don't know or forgot."],
       "id": "B2/" + partB2imgs[1],
       "correctAnswer": getAnswer(partB2imgs[1])
     },
     {
       "type": "button-response-3",
       "stimulus": "img/stim-img/B2/" + partB2imgs[1] + "icon0.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B2/" + partB2imgs[1]
     },
     {
       "type": "button-response-3",
       "stimulus": "img/stim-img/B2/" + partB2imgs[1] + "icon1.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B2/" + partB2imgs[1]
     },
     // 3
     {
        "type": "single-stim",
        "is_html": true,
        "prompt": getPrompt(partB2imgs[2], "B2", "whole"),
        "choices": [32], // the numbers 1 - 2
     },
     {
       "type": 'single-stim-2',
       "stimulus": "img/stim-img/B2/" + partB2imgs[2] + "img.png",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[2], "B2", "part"),
       "response_ends_trial": true,
       "id": "B2/" + partB2imgs[2]
     },
     {
       "type": 'survey-text',
       "questions": [getPrompt(partB2imgs[2], "B2", "part") + "<br>Leave the answer blank if you don't know or forgot."],
       "id": "B2/" + partB2imgs[2],
       "correctAnswer": getAnswer(partB2imgs[2])
     },
     {
       "type": "button-response-3",
       "stimulus": "img/stim-img/B2/" + partB2imgs[2] + "icon0.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B2/" + partB2imgs[2]
     },
     {
       "type": "button-response-3",
       "stimulus": "img/stim-img/B2/" + partB2imgs[2] + "icon1.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B2/" + partB2imgs[2]
     },
     // 4
     {
        "type": "single-stim",
        "is_html": true,
        "prompt": getPrompt(partB2imgs[3], "B2", "whole"),
        "choices": [32], // the numbers 1 - 2
     },
     {
       "type": 'single-stim-2',
       "stimulus": "img/stim-img/B2/" + partB2imgs[3] + "img.png",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[3], "B2", "part"),
       "response_ends_trial": true,
       "id": "B2/" + partB2imgs[3]
     },
     {
       "type": 'survey-text',
       "questions": [getPrompt(partB2imgs[3], "B2", "part") + "<br>Leave the answer blank if you don't know or forgot."],
       "id": "B2/" + partB2imgs[3],
       "correctAnswer": getAnswer(partB2imgs[3])
     },
     {
       "type": "button-response-3",
       "stimulus": "img/stim-img/B2/" + partB2imgs[3] + "icon0.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B2/" + partB2imgs[3]
     },
     {
       "type": "button-response-3",
       "stimulus": "img/stim-img/B2/" + partB2imgs[3] + "icon1.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B2/" + partB2imgs[3]
     },
     // 5
     {
        "type": "single-stim",
        "is_html": true,
        "prompt": getPrompt(partB2imgs[4], "B2", "whole"),
        "choices": [32], // the numbers 1 - 2
     },
     {
       "type": 'single-stim-2',
       "stimulus": "img/stim-img/B2/" + partB2imgs[4] + "img.png",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[4], "B2", "part"),
       "response_ends_trial": true,
       "id": "B2/" + partB2imgs[4]
     },
     {
       "type": 'survey-text',
       "questions": [getPrompt(partB2imgs[4], "B2", "part") + "<br>Leave the answer blank if you don't know or forgot."],
       "id": "B2/" + partB2imgs[4],
       "correctAnswer": getAnswer(partB2imgs[4])
     },
     {
       "type": "button-response-3",
       "stimulus": "img/stim-img/B2/" + partB2imgs[4] + "icon0.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B2/" + partB2imgs[4]
     },
     {
       "type": "button-response-3",
       "stimulus": "img/stim-img/B2/" + partB2imgs[4] + "icon1.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B2/" + partB2imgs[4]
     },
     // 6
     {
        "type": "single-stim",
        "is_html": true,
        "prompt": getPrompt(partB2imgs[5], "B2", "whole"),
        "choices": [32], // the numbers 1 - 2
     },
     {
       "type": 'single-stim-2',
       "stimulus": "img/stim-img/B2/" + partB2imgs[5] + "img.png",
       "choices": [32],
       "prompt": getPrompt(partB2imgs[5], "B2", "part"),
       "response_ends_trial": true,
       "id": "B2/" + partB2imgs[5]
     },
     {
       "type": 'survey-text',
       "questions": [getPrompt(partB2imgs[5], "B2", "part") + "<br>Leave the answer blank if you don't know or forgot."],
       "id": "B2/" + partB2imgs[5],
       "correctAnswer": getAnswer(partB2imgs[5])
     },
     {
       "type": "button-response-3",
       "stimulus": "img/stim-img/B2/" + partB2imgs[5] + "icon0.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B2/" + partB2imgs[5]
     },
     {
       "type": "button-response-3",
       "stimulus": "img/stim-img/B2/" + partB2imgs[5] + "icon1.png",
       "choices": ["Yes","No","I don't know"],
       "button_html":["<button class='jspsych-btn'>Yes</button>","<button class='jspsych-btn'>No</button>","<button class='jspsych-btn'>I don't know</button>"],
       "prompt": "<p>Do you remember this image from the previous website screenshot?</p><p>Your response will not impact your web browsing proficiency score.</p>",
       "id": "B2/" + partB2imgs[5]
     }
   ],
   "loadingMsg": "Loading resources:",
   "progressMsg": "Progress:",
   "results": {
      "header": "Have a look at your results!",
      "predictionMsg1": ""
   },
   "resultsExplanation": ["We calculated the average time it took you to complete the tasks given to you. If you entered an answer incorrectly in the last part of the experiment, 0.5 seconds was added to your average. Your performance compared to the average performance of all participants is shown in the charts below.", "Note that we do not do many search tasks per participant. As a result, don’t worry if your results are below what you expected - they might have just been skewed due to small sample size."],
   "citations": ["If your performance varied across websites of different complexities, it might be because you are a holistic or analytic thinker! People from eastern, holistic-thinking cultures tend to prefer higher visual complexity than those from western, analytic-thinking cultures, who prefer visually simpler websites [1].", "While performance on websites of varying complexities has not been directly linked to holistic and analytic thinking styles, we hypothesize that they are linked.", "[1] Reinecke, K., Gajos, K.Z. (2014). Quantifying visual preferences around the world. CHI 2014."]
};

function isElement() {
   return true;
}
