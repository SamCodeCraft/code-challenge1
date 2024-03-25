// Here is the  function to calculate demerit points based on speed

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    let demeritPoints = 0;

    /*Checking  if speed is over speed limit */

    if (speed > speedLimit) {

        // Calculate demerit points
        demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    }

    // Result of  the calculated demerit points
    return demeritPoints;
}

  // Function to check the  license status 

function checkLicenseStatus(demeritPoints) {
    const pointsLimit = 12;

    // Check if demerit points exceed the points limit

    if (demeritPoints > pointsLimit) {
        return "License suspended";
    } else {
        return "Points: " + demeritPoints;
    }
}

