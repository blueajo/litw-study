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

var irbTemplate = require("../templates/irb.html");
var instructionsTemplate = require("../templates/instructions.html");
var instructions2aTemplate = require("../templates/instructions2a.html");
var instructions2bTemplate = require("../templates/instructions2b.html");
var loadingTemplate = require("../templates/loading.html");
var resultsTemplate = require("../templates/results.html");
var progressTemplate = require("../templates/progress.html");

// 12 Templates for part B (3 Trial + 3 Low + 3 high + 3 medium)
var part2searching1Template = require("../templates/part2searching1.html");

var i18n = require("../js/i18n");
require("./jspsych-display-info");
require("./jspsych-display-slide");
require("./jspsych-display-search");
require("./jspsych-survey-text");
require("./jspsych-single-stim-litw");
require("./jspsych-single-stim-litw-2");
require("../js/jsPsych-5.0.3/plugins/jspsych-button-response");
require("../js/jsPsych-5.0.3/plugins/jspsych-button-response-2");


var LITW_STUDY_CONTENT = require("./data");

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
      params.practiceStimsC.forEach(function(stim, index) {

         // record tracking information and update progress counter
         timeline.push({
            type: "call-function",
            func: function() {
               $("#progress-header").html(progressTemplate({
                  msg: C.progressMsg,
                  progress: Math.ceil((++params.currentProgress)/2),
                  total: params.practiceStimsC.length/2
               }))
               .show();

               LITW.utils.showSlide("trials");
               LITW.tracking.recordCheckpoint("practice-" + (index + 1));
            }
         });

         stim.withTouch = window.litwWithTouch;
         timeline.push(stim);
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
      });

      /* PART 2: SEARCHING AND MEMORIZATION TASK STARTS HERE */


      // Part 1: Search and memorization

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
         name: "instructions2a",
         template: instructions2aTemplate({withTouch: window.litwWithTouch})
      });

      // Practice (for testing, comment out lines 268- 283)
       params.practiceStimsB1.forEach(function(stim, index) {

          // record tracking information
          timeline.push({
              type: "call-function",
              func: function() {
                  $("#progress-header").html(progressTemplate({
                      msg: C.progressMsg,
                      progress: Math.ceil((++params.currentProgress)/2),
                      total: params.practiceStimsB1.length/2
                  }))
                      .show();

                  LITW.utils.showSlide("trials");
              }
          });

          timeline.push(stim);
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

      params.stimB1.forEach(function(stim, index) {

          // record tracking information
          timeline.push({
              type: "call-function",
              func: function() {
                  $("#progress-header").html(progressTemplate({
                      msg: C.progressMsg,
                      progress: Math.ceil((++params.currentProgress)/2),
                      total: params.stimB1.length/2
                  }))
                      .show();

                  LITW.utils.showSlide("trials");
              }
          });

          timeline.push(stim);
      });

      /* PART 2b: INTERACTION AND MEMORIZATION TASK STARTS HERE*/


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
         name: "instructions2b",
         template: instructions2bTemplate({withTouch: window.litwWithTouch})
      });

      // Practice for part B (for testing, comment out lines 268- 283)
         params.practiceStimsB2.forEach(function(stim, index) {

            // record tracking information
            timeline.push({
                type: "call-function",
                func: function() {
                    $("#progress-header").html(progressTemplate({
                        msg: C.progressMsg,
                        progress: Math.ceil((++params.currentProgress)/5),
                        total: params.practiceStimsB2.length/5
                    }))
                        .show();

                    LITW.utils.showSlide("trials");
                }
            });



            timeline.push(stim);
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

        params.stimB2.forEach(function(stim, index) {

            // record tracking information
            timeline.push({
                type: "call-function",
                func: function() {
                    $("#progress-header").html(progressTemplate({
                        msg: C.progressMsg,
                        progress: Math.ceil((++params.currentProgress)/5),
                        total: params.stimB2.length/5
                    }))
                        .show();

                    LITW.utils.showSlide("trials");
                }
            });

            timeline.push(stim);
        });



      // ******* END STUDY PROGRESSION ******** //
   },

   submitData = function() {
      LITW.data.submitStudyData(jsPsych.data.getLastTrialData());
      console.log(jsPsych.data.getLastTimelineData())
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
      var studyData0 = jsPsych.data.getTrialsOfType("button-response"),
      studyData1 = jsPsych.data.getTrialsOfType("display-search"),
      studyData3 = jsPsych.data.getTrialsOfType("single-stim-2"),
      studyData4 = jsPsych.data.getTrialsOfType("survey-text"),
      studyData5 = jsPsych.data.getTrialsOfType("button-response-3"),
      loTime = 0.0, mdTime = 0.0, hiTime = 0.0;

      // create objects to store store data
      var ratingsTask = new Object();
      var searchTask = new Object();
      var memorizationTask = new Object();

      // strip out the data generated from the practice trials
      studyData0.splice(0, 1);
      studyData1.splice(0, 1);
      studyData3.splice(0, 1);
      studyData4.splice(0, 1);
      studyData5.splice(0, 2);

      studyData0.filter(function(item) {
        ratingsTask[item.id] = item.button_pressed;
      });

      studyData1.filter(function(item) {
        searchTask[item.id] = {time:item.time, errors:item.wrong};
        var complexity = item.id.charAt(3);
        if(complexity === "l") {
          loTime = loTime + item.time;
        } else if(complexity === "m") {
          mdTime = mdTime + item.time;
        } else {
          hiTime = hiTime + item.time;
        }
      });

      studyData3.filter(function(item) {
        //qaTask[item.id] = {time:item.time};
        var complexity = item.id.charAt(3);
        if(complexity === "l") {
          loTime = loTime + item.time;
        } else if(complexity === "m") {
          mdTime = mdTime + item.time;
        } else {
          hiTime = hiTime + item.time;
        }
      });

      loTime = loTime/4.0;
      mdTime = mdTime/4.0;
      hiTime = hiTime/4.0;

      studyData4.filter(function(item) {
        var complexity = item.id.charAt(3);
        if(item.correct === false) {
          if(complexity === "l") {
            loTime = loTime + 0.5;
          } else if(complexity === "m") {
            mdTime = mdTime + 0.5;
          } else {
            hiTime = hiTime + 0.5;
          }
        }
      });

      // get averages ( and update them? )
      var avgLo = 3;
      var avgMd = 5;
      var avgHi = 7;
      var avgTotal = 5;

      var loRatio = avgLo/loTime;
      var mdRatio = avgMd/mdTime;
      var hiRatio = avgHi/hiTime;
      var loBest = false;
      var mdBest = false;
      if ((loRatio > mdRatio) && (loRatio > hiRatio)) {
        loBest = true;
      } else if ((mdRatio > loRatio) && (mdRatio > hiRatio)) {
        mdBest = true;
      }

      totalTime = (hiTime + mdTime + loTime)/3.0;

      studyData5.filter(function(item) {
        fg = !fg;
        memorizationTask[item.id] = {isForeground:fg, response:item.button_pressed};
      });

      // submit data
      LITW.data.submitStudyData(ratingsTask);
      LITW.data.submitStudyData(searchTask);
      LITW.data.submitStudyData(memorizationTask);

      console.log("Calculations");
      console.log(loTime);
      console.log(mdTime);
      console.log(hiTime);

      LITW.utils.showSlide("results");
      $("#results").html(resultsTemplate({
         content: C.results,
         resultsExplanation: C.resultsExplanation,
         citations: C.citations,
         avgTotal: avgTotal,
         avgLo: avgLo,
         avgMd: avgMd,
         avgHi: avgHi,
         totalTime: totalTime,
         loTime: loTime,
         mdTime: mdTime,
         hiTime: hiTime,
         loBest: loBest,
         mdBest: mdBest
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
      params.practiceStimsC = C.practiceRating;
      params.stimC = C.trialComplexity;
      params.practiceStimsB1 = C.practiceTaskB1;
      params.stimB1 = C.trialTasksB1;
      params.practiceStimsB2 = C.practiceTaskB2;
      params.stimB2 = C.trialTasksB2;

      LITW.utils.showSlide("img-loading");

      var allstims = params.practiceStimsC.concat(params.stimC).concat(params.practiceStimsB1).concat(params.stimB1).concat(params.practiceStimsB2).concat(params.stimB2);

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
               total: params.practiceStimsC.length + params.stimC.length + params.practiceStimsB1.length + params.stimB1.length + params.practiceStimsB2.length + params.stimB2.length
            }));
         }
      );
   });
})();
