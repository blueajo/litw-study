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
        "stimuli": ["img/stim-img/low1.png"]
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
        "stimuli": ["img/stim-img/low2.png"]
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
        "stimuli": ["img/stim-img/medium1.png"]
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
        "stimuli": ["img/stim-img/medium2.png"]
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
        "stimuli": ["img/stim-img/high1.png"]
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
        "stimuli": ["img/stim-img/high2.png"]
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
        "stimuli": ["img/stim-img/high3.png"]
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
        "stimuli": ["img/stim-img/low3.png"]
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
        "stimuli": ["img/stim-img/low4.png"]
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
        "stimuli": ["img/stim-img/medium3.png"]
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
        "stimuli": ["img/stim-img/medium4.png"]
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
        "stimuli": ["img/stim-img/high4.png"]
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
        "stimuli": ["img/stim-img/high5.png"]
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
   "practiceTask": [
     {
       "type": "single-stim",
       "is_html": true,
       "prompt": "Click to access the 'Parks & Outdoors Travel Guide. When ready, press space",
       "choices": [32], // the numbers 1 - 2
    },
    {
       "type": "single-stim",
       "is_html": true,
       "prompt": "<img src='img/stim-img/trialPartB.png' class='trialsImgs'/>",
       "choices": [32], // the numbers 1 - 2
    },
    {
       "type": "single-stim",
       "stimulus": "<img src='img/stim-img/trialEmoji.png' class='trialsImgs' /><p>Which quadrant is this image in?</p>",
       "is_html": true,
       "prompt": "Type [1] for Top Left, [2] for Top Right, [3] for Bottom Left, [4] for Bottom Right",
       "choices": [49, 50, 51, 52], // the numbers 1 - 2
    }
   ],
   "trialTasks": [
		 // 1
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": "Click to change the language. When ready, press space",
				"choices": [32], // the numbers 1 - 2
		 },
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": "<img src='img/stim-img/mediumPartB.png' class='trialsImgs' />",
				"choices": [32], // the numbers 1 - 2
		 },
		 {
				"type": "single-stim",
				"stimulus": "<img src='img/stim-img/emojiMedium.png' class='trialsImgs'/><p>Which quadrant is this image in?</p>",
				"is_html": true,
				"prompt": "Type [1] for Top Left, [2] for Top Right, [3] for Bottom Left, [4] for Bottom Right",
				"choices": [49, 50, 51, 52], // the numbers 1 - 2
		 },
		 // 2
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": "Click on the the title of the quiz that was staff created and has 5 stars. When ready, press space",
				"choices": [32], // the numbers 1 - 2
		 },
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": "<img src='img/stim-img/highPartB.png' class='trialsImgs'/>",
				"choices": [32], // the numbers 1 - 2
		 },
		 {
				"type": "single-stim",
				"stimulus": "<img src='img/stim-img/emojiHigh.png' class='trialsImgs'/><p>Which quadrant is this image in?</p>",
				"is_html": true,
				"prompt": "Type [1] for Top Left, [2] for Top Right, [3] for Bottom Left, [4] for Bottom Right",
				"choices": [49, 50, 51, 52], // the numbers 1 - 2
		 },
		 // 3
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": "Click to sign up for a new account. When ready, press space",
				"choices": [32], // the numbers 1 - 2
		 },
		 {
				"type": "single-stim",
				"is_html": true,
				"prompt": "<img src='img/stim-img/lowPartB.png' class='trialsImgs'/>",
				"choices": [32], // the numbers 1 - 2
		 },
		 {
				"type": "single-stim",
				"stimulus": "<img src='img/stim-img/emojiLow.png' class='trialsImgs'/><p>Was this image on the website?</p>",
				"is_html": true,
				"prompt": "Type [1] for Yes, [2] for No",
				"choices": [49, 50], // the numbers 1 - 2
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
