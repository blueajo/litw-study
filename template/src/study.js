/*************************************************************
 * test.js
 *
 * Main experiment file for the LITW demo study.
 *
 * Author: Trevor Croxson
 *       : Nigini A. Oliveira
 *
 * Last Modified: February 5, 2017
 *
 * © Copyright 2017 LabintheWild.
 * For questions about this file and permission to use
 * the code, contact us at info@labinthewild.org
 *************************************************************/

// load webpack modules
window.$ = window.jQuery = require("jquery");
require("bootstrap");
require("jquery-ui-bundle");
var LITW_STUDY_CONTENT = require("./data");
var irbTemplate = require("../templates/irb.html");
var instructionsTemplate = require("../templates/instructions.html");
var instructions2Template = require("../templates/instructions2.html");
var instructions3Template = require("../templates/instructions3.html");
var loadingTemplate = require("../templates/loading.html");
var resultsTemplate = require("../templates/results.html");
var progressTemplate = require("../templates/progress.html");

// 12 Templates for part B (3 Trial + 3 Low + 3 high + 3 medium)
var part2instructions1Template = require("../templates/part2instructions1.html");
var part2memorization1Template = require("../templates/part2memorization1.html");
var part2searching1Template = require("../templates/part2searching1.html");

var part2instructions2Template = require("../templates/part2instructions2.html");
var part2memorization2Template = require("../templates/part2memorization2.html");
var part2searching2Template = require("../templates/part2searching2.html");

var part2instructions3Template = require("../templates/part2instructions3.html");
var part2memorization3Template = require("../templates/part2memorization3.html");
var part2searching3Template = require("../templates/part2searching3.html");

var part2instructionsTrialTemplate = require("../templates/part2instructionsTrial.html");
var part2memorizationTrialTemplate = require("../templates/part2memorizationTrial.html");
var part2searchingTrialTemplate = require("../templates/part2searchingTrial.html");

var i18n = require("../js/i18n");
require("./jspsych-display-info");
require("./jspsych-display-slide");

module.exports = (function() {

   window.litwWithTouch = false;

   var timeline = [],
   self = this,
   C,
   params = {
      stims: [],
      practiceStims: [],
      currentProgress: 0
   },

   irb = function() {
      LITW.tracking.recordCheckpoint("irb");
      $("#irb").html(irbTemplate());
      $("#irb").i18n();
      LITW.utils.showSlide("irb");
      $("#agree-to-study").on("click", function() {
         if ($(this).prop("checked")) {
            LITW.utils.showNextButton(demographics);
            $("#approve-irb").hide();
         } else {
            LITW.utils.hideNextButton();
            $("#approve-irb").show();
         }
      });

      // show the introductory splash screen
      $("#splash-screen").modal({backdrop: "static"});
   },

   demographics = function() {
      LITW.tracking.recordCheckpoint("demographics");
      LITW.forms.newForm("demographics", {
         autocomplete: true
      })
      .add("retake", {
         required: true
      })
      .add("gender")
      .add("age", {
         style: "numericalFreeText",
         prompt: "How old are you? (Please type a number)",
         boundsMessage: "Are you really %s years old? If not, please make sure to enter the correct age so that your data contributes to our research.",
         minValue: 6,
         maxValue: 99
      })
      .add("multinational")
      .add("country")
      .add("education", {
         style: "numericalFreeText",
         prompt: "How many years of education have you completed, starting from primary school?",
         boundsMessage: "Have you really completed %s years of education? If not, please make sure to enter the correct value so that your data contributes to our research.",
         minValue: 6,
         maxValue: 30
      })
      .render(startTrials);

      LITW.utils.showSlide("demographics");
   },

   initJsPsych = function() {
      // ******* BEGIN STUDY PROGRESSION ******** //
      // 1. GENERAL INSTRUCTIONS PAGE
      timeline.push({
         type: "display-slide",
            display_element: $("#instructions"),
         name: "instructions",
            template: instructionsTemplate({withTouch: window.litwWithTouch})
      });

      // 2. PRACTICE STIMS
      // loop through all practice stims and register
      // them with the jsPsych timeline
      params.practiceStimsA.forEach(function(stim, index) {

         // record tracking information and update progress counter
         timeline.push({
            type: "call-function",
            func: function() {
               $("#progress-header").html(progressTemplate({
                  msg: C.progressMsg,
                  progress: Math.ceil((++params.currentProgress)/2),
                  total: params.practiceStimsA.length/2
               }))
               .show();

               LITW.utils.showSlide("trials");
               LITW.tracking.recordCheckpoint("practice-" + (index + 1));
            }
         });

         stim.withTouch = window.litwWithTouch;
         timeline.push(stim);

         // register a function to submit data as soon
         // as this trial is completed
         timeline.push({
            type: "call-function",
            func: submitData
         });
      });

      // 3. PRE-TRIAL BREAK
      timeline.push({
         type: "call-function",
         func: function() {
            params.currentProgress = 0;
            $("#progress-header").hide();
            LITW.utils.showSlide("break");
         }
      });
      timeline.push({
         type: "display-info",
         name: "preTrialBreak",
         content: C.preTrial,
         withTouch: window.litwWithTouch,
         display_element: $("#break")
      });

      // 4. TRIAL STIMS, PHASE 1
      params.stimC.forEach(function(stim, index) {

         // record tracking information and update progress counter
         timeline.push({
            type: "call-function",
            func: function() {
               $("#progress-header").html(progressTemplate({
                  msg: C.progressMsg,
                  progress: Math.ceil((++params.currentProgress)/2),
                  total: params.stimC.length/2
               }))
               .show();

               LITW.utils.showSlide("trials");
               LITW.tracking.recordCheckpoint("trials-1-" + (index + 1));
            }
         });

         stim.withTouch = window.litwWithTouch;
         timeline.push(stim);

         // register a function to submit data as soon
         // as this trial is completed
         timeline.push({
            type: "call-function",
            func: submitData
         });
      });

      // INSTRUCTIONS PAGE
      timeline.push({
         type: "call-function",
         func: function() {
            params.currentProgress = 0;
            $("#progress-header").hide();
            LITW.utils.showSlide("instructions");
         }
      });
      timeline.push({
         type: "display-slide",
            display_element: $("#instructions"),
         name: "instructions",
            template: instructions2Template({withTouch: window.litwWithTouch})
      });

      // 6. TRIAL STIMS, PHASE 2
      params.stimU.forEach(function(stim, index) {

         // record tracking information
         timeline.push({
            type: "call-function",
            func: function() {
               $("#progress-header").html(progressTemplate({
                  msg: C.progressMsg,
                  progress: Math.ceil((++params.currentProgress)/2),
                  total: params.stimU.length/2
               }))
               .show();

               LITW.utils.showSlide("trials");
            }
         });

         timeline.push(stim);

         // register a function to submit data as soon
         // as this trial is completed
         timeline.push({
            type: "call-function",
            func: submitData
         });
      });

      /*PART 2:SEARCHING AND MEMORIZATION TASK STARTS HERE*/


      // INSTRUCTIONS PAGE
      timeline.push({
         type: "call-function",
         func: function() {
            params.currentProgress = 0;
            $("#progress-header").hide();
            LITW.utils.showSlide("instructions");
         }
      });
      timeline.push({
         type: "display-slide",
         display_element: $("#instructions"),
         name: "instructions3",
         template: instructions3Template({withTouch: window.litwWithTouch})
      });

      // Practice for part B (for testing, comment out lines 268- 283)
         params.practiceStimsB.forEach(function(stim, index) {

            // record tracking information
            timeline.push({
                type: "call-function",
                func: function() {
                    $("#progress-header").html(progressTemplate({
                        msg: C.progressMsg,
                        progress: Math.ceil((++params.currentProgress)/3),
                        total: params.practiceStimsB.length/3
                    }))
                        .show();

                    LITW.utils.showSlide("trials");
                }
            });

            timeline.push(stim);

            // register a function to submit data as soon
            // as this trial is completed
            timeline.push({
                type: "call-function",
                func: submitData
            });
        });

        // PRE-TRIAL BREAK
        timeline.push({
           type: "call-function",
           func: function() {
              params.currentProgress = 0;
              $("#progress-header").hide();
              LITW.utils.showSlide("break");
           }
        });
        timeline.push({
           type: "display-info",
           name: "preTrialBreak",
           content: C.preTrial,
           withTouch: window.litwWithTouch,
           display_element: $("#break")
        });

        // Actual trials

        params.stimT.forEach(function(stim, index) {

            // record tracking information
            timeline.push({
                type: "call-function",
                func: function() {
                    $("#progress-header").html(progressTemplate({
                        msg: C.progressMsg,
                        progress: Math.ceil((++params.currentProgress)/3),
                        total: params.stimT.length/3
                    }))
                        .show();

                    LITW.utils.showSlide("trials");
                }
            });

            timeline.push(stim);

            // register a function to submit data as soon
            // as this trial is completed
            timeline.push({
                type: "call-function",
                func: submitData
            });
        });

      // ******* END STUDY PROGRESSION ******** //
   },

   submitData = function() {
      LITW.data.submitStudyData(jsPsych.data.getLastTrialData());
   },

   startTrials = function(demographicsData) {

      // send demographics data to the server
      LITW.data.submitDemographics(demographicsData);

      LITW.utils.showSlide("trials");
      jsPsych.init({
        timeline: timeline,
        on_finish: comments,
        display_element: $("#trials")
      });
   },

   comments = function() {
      $("#progress-header").hide();
      LITW.utils.showSlide("comments");
      LITW.comments.showCommentsPage(results);
   },

   results = function(commentsData) {

      LITW.data.submitComments(commentsData);

      // get the trial data from jsPsych
      var studyData = jsPsych.data.getTrialsOfType("single-stim"),
      whichCat;

      // strip out the data generated from the practice trial
      studyData.splice(0, params.practiceStims.length);

      var numNiceCats = studyData.filter(function(item) {

         // the nice cats are always on the right!
         return item.key_press === 50;
      }).length;
      var numMeanCats = studyData.filter(function(item) {

         // the mean cats are always on the left!
         return item.key_press === 49;
      }).length;

      if (numNiceCats === numMeanCats) {
         whichCat = ["cat-nice.jpg", "cat-mean.jpg"];
      } else {
         whichCat = (numNiceCats > numMeanCats) ?
            ["cat-nice.jpg"] :
            ["cat-mean.jpg"];
      }

      LITW.utils.showSlide("results");
      $("#results").html(resultsTemplate({
         content: C.results,
         resultsExplanation: C.resultsExplanation,
         citations: C.citations,
         whichCat: whichCat,
         bothCats: (whichCat.length === 2)
      }));

      LITW.results.insertFooter();
   };


   // when the page is loaded, start the study!
   $(document).ready(function() {

      // detect touch devices
      window.litwWithTouch = ("ontouchstart" in window);

      // determine and set the study language
      $.i18n().locale = i18n.getLocale();
      $.i18n().load('src/i18n/en.json', 'en').done(
         function(){
            $('head').i18n();
            $('body').i18n();
         }
      );

      // generate unique participant id and geolocate participant
      LITW.data.initialize();
      LITW.share.makeButtons("#header-share");

      // shortcut to access study content
      C = LITW_STUDY_CONTENT;

      // Load the trial configuration data for the practice
      // trials and the real trials
      params.practiceStimsA = C.practiceRating;
      params.stimC = C.trialComplexity;
      params.stimU = C.trialUsability;
      params.practiceStimsB = C.practiceTask;
      params.stimT = C.trialTasks;

      LITW.utils.showSlide("img-loading");

      var allstims = params.practiceStimsA.concat(params.stimC).concat(params.stimU).concat(params.practiceStimsB).concat(params.stimT);

      // preload images
      jsPsych.pluginAPI.preloadImages(allstims,

         // initialize the jsPsych timeline and
         // proceed to IRB page when loading has finished
         function() {
            initJsPsych();
            irb();
         },

         // update loading indicator as stims preload
         function(numLoaded) {
            $("#img-loading").html(loadingTemplate({
               msg: C.loadingMsg,
               numLoaded: numLoaded,
               total: params.practiceStimsA.length + params.stimC.length + params.stimU.length + params.practiceStimsB.length + params.stimT.length
            }));
         }
      );
   });
})();
