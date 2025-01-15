type school = "DAV"|"SRK";
type game = "tt"|"hockey";

type gameCombo = {
    schoolName : school,
    gameName : game
}

let davGame : gameCombo = {
    schoolName : "DAV",
    gameName : "tt"
}

let srkGame : gameCombo = {
    schoolName : "SRK",
    gameName : "hockey"
}

function schoolSportsEvent(schoolGames:gameCombo) {

    if (schoolGames.schoolName === "DAV" && schoolGames.gameName === "tt") {
        console.log("DAV School is best in TT");        
    } else {
        console.log("SRK School is best in hockey");
    }
    
}

schoolSportsEvent(srkGame);