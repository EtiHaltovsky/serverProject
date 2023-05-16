//פונקציה למציאת מתנדבים כפולים וסידורם
var statusOFMoreThenOneInCar = false;


function FixDuplicateOptimalVolunteer(volunteerForPassengersList) {
    var str = JSON.stringify(volunteerForPassengersList);
    console.log("enter FixDuplicateOptimalVolunteer function with passengers: " + str);
    var problamaticPassengers = [];
    var indexProblamaticPassengers = [];
    var firstVolunteers = [];
    var indexOFTwoInCar = [];
    //get passengers first volunteers
    volunteerForPassengersList.map((o, i) => { firstVolunteers.push(o.volunteers[0]) });
    console.log(JSON.stringify(firstVolunteers));

    //return true if there are duplicates and false if not.
    var isThereDuplicate = firstVolunteers.some((val, i) => firstVolunteers.indexOf(val) !== i);
    if (!isThereDuplicate)
        console.log("no duplicates");
    else {
        while (isThereDuplicate) {
            problamaticPassengers = getAllDuplicatesVolunteers(firstVolunteers);
            console.log("problamaticPassengers: " + JSON.stringify(problamaticPassengers));
            for (let i = 0; i < problamaticPassengers.length; i++) {
                console.log("enter the for loopppp :)");
                indexProblamaticPassengers = getTheIndexOfDuplicatesVolunteers(problamaticPassengers[i], firstVolunteers);
                checkHigherRankAndSwap(volunteerForPassengersList, indexProblamaticPassengers);
                volunteerForPassengersList.map((o, i) => { firstVolunteers.push(o.volunteers[0]) });
                if (statusOFMoreThenOneInCar) {
                    while (indexOFTwoInCar !== null) {
                        firstVolunteers.splice(indexOFTwoInCar, indexOFTwoInCar + 2);
                        indexOFTwoInCar.pop();

                    }
                }
                isThereDuplicate = firstVolunteers.some((val, i) => firstVolunteers.indexOf(val) !== i);

            }
        }
    }
    console.log("schedule finished!");
}