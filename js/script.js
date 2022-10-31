// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Allen Li
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-02-HTML-lighthouse/sw.js", {
    scope: "/ICS2O-Unit3-02-HTML-lighthouse/",
  })
}

/**
 * This function displays an alert.
 */
function calculateVolumeClicked() {
  // input
  const length = parseFloat(document.getElementById("length").value)
  const width = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById("volume").innerHTML =
    "Volume is: " + volume.toFixed(2) + " mm³."
}
