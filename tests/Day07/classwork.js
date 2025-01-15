var davGame = {
    schoolName: "DAV",
    gameName: "tt"
};
var srkGame = {
    schoolName: "SRK",
    gameName: "hockey"
};
function schoolSportsEvent(schoolGames) {
    if (schoolGames.schoolName === "DAV" && schoolGames.gameName === "tt") {
        console.log("DAV School is best in TT");
    }
    else {
        console.log("SRK School is best in hockey");
    }
}
schoolSportsEvent(srkGame);
