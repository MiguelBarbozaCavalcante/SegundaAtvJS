function registerRunner() {
    let raceNumber = Math.floor(Math.random() * 1000);
    let registeredEarly = Math.random() >= 0.5;
    let runnerAge = Math.floor(Math.random() * 50) + 18; // Gera uma idade entre 18 e 67

    if (runnerAge > 18 && registeredEarly) {
        raceNumber += 1000;
    }

    let raceTime = "";

    if (runnerAge > 18 && registeredEarly) {
        raceTime = "9:30 AM";
    } else if (runnerAge > 18 && !registeredEarly) {
        raceTime = "11:00 AM";
    } else if (runnerAge < 18) {
        raceTime = "12:30 PM";
    } else {
        console.log("Please see the registration desk.");
    }

    let message = `Runner Number: ${raceNumber}\nRace Time: ${raceTime}`;
    document.getElementById("raceInfo").textContent = message;
}
