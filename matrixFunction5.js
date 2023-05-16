//פונקציה לבדיקת גובה האילוצים ושיבוץ המתנדבים בהתאם
function checkHigherRankAndSwap(volunteerForPassengersList, indexProblamaticPassengers) {
    var lowestRankIndex = [];
    let indexOfTwoInCar = -1;
    while (indexProblamaticPassengers.length > 1) {
        let i = indexProblamaticPassengers.length - 1;
        if (volunteerForPassengersList[indexProblamaticPassengers[i]].prefRank["leaftLet"] < volunteerForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["leaftLet"]) {
            lowestRankIndex = indexProblamaticPassengers[i];
            console.log("check ranks: " + JSON.stringify(volunteerForPassengersList[indexProblamaticPassengers[i].prefRank["leaftLet"]]));
        }
        else if (volunteerForPassengersList[indexProblamaticPassengers[i]].prefRank["leaftLet"] > volunteerForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["leaftLet"]) {
            lowestRankIndex = indexProblamaticPassengers[i - 1];
        }
        else if (volunteerForPassengersList[indexProblamaticPassengers[i]].prefRank["space"] < volunteerForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["space"]) {
            lowestRankIndex = indexProblamaticPassengers[i];
            console.log("check ranks: " + JSON.stringify(volunteerForPassengersList[indexProblamaticPassengers[i].prefRank["space"]]));

        }
        else if (volunteerForPassengersList[indexProblamaticPassengers[i]].prefRank["space"] > volunteerForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["space"]) {
            lowestRankIndex = indexProblamaticPassengers[i - 1];
        }
        else if (volunteerForPassengersList[indexProblamaticPassengers[i]].prefRank["familiar"] < volunteerForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["familiar"]) {
            lowestRankIndex = indexProblamaticPassengers[i];
            console.log("check ranks: " + JSON.stringify(volunteerForPassengersList[indexProblamaticPassengers[i].prefRank["familiar"]]));

        }
        else if (volunteerForPassengersList[indexProblamaticPassengers[i]].prefRank["familiar"] > volunteerForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["familiar"]) {
            lowestRankIndex = indexProblamaticPassengers[i - 1];
        }

        //if they have the same preferences pop the first one- no matter who.
        if (lowestRankIndex === -1) {
            //if he only has one volunteer left
            if (volunteerForPassengersList[indexProblamaticPassengers[i]].volunteers.length === 1) {
                indexOFTwoInCar.push(onlyOneVolunteerSituation(volunteerForPassengersList, indexProblamaticPassengers, i));
            }
            else
                volunteerForPassengersList[indexProblamaticPassengers[i]].volunteers.shift();
        }
        if (volunteerForPassengersList[lowestRankIndex].volunteers.length === 1) {
            indexOFTwoInCar.push(onlyOneVolunteerSituation(volunteerForPassengersList, indexProblamaticPassengers, lowestRankIndex));

        }
        volunteerForPassengersList[lowestRankIndex].volunteers.shift();
        console.log("new volunteer list: " + JSON.stringify(volunteerForPassengersList[lowestRankIndex].volunteers));

        indexProblamaticPassengers.splice(lowestRankIndex, lowestRankIndex + 1);

    }
    return indexOFTwoInCar;
}

