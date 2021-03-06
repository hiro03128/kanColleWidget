/**
 * dependency: models/Missions
 */

/***** class definitions *****/

function MissionAction(){/*** mission系のAPIが叩かれたときのアクション ***/
    this.missions = new Missions();
}

MissionAction.prototype.forStart = function(params){
    var min = CMap.missionId_timeUsage[params.api_mission_id[0]];
    _presentation("ふなでだぞー\nこれが終わるのは" + min + "分後ですね");
    var d = new Date();
    var finish = new Date(d.setMinutes(d.getMinutes() + min));
    this.missions.add(params.api_deck_id[0], finish);
}

MissionAction.prototype.forResult = function(params){
    chrome.browserAction.setBadgeText({text:''});
}
