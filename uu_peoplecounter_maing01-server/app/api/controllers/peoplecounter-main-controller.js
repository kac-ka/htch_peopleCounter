"use strict";
const PeoplecounterMainAbl = require("../../abl/peoplecounter-main-abl.js");

class PeoplecounterMainController {
  init(ucEnv) {
    return PeoplecounterMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new PeoplecounterMainController();
