"use strict"


window.onload = function () {
    const calcTotalBtn = document.getElementById("calcTotalBtn")
    calcTotalBtn.onclick = calcTotalBtnClicked;

}

function calcTotalBtnClicked() {

    const nmbrDaysField = document.getElementById("nmbrDays");
    let nmbrDays = Number(nmbrDaysField.value)


    let carRentalDaily = 29.99

    let carRental = carRentalDaily * nmbrDaysField.value


    let extraPerDay = 0 ;


    let eToll = document.getElementById("eToll").checked;
    if (eToll == true) {
        extraPerDay += 3.95 * nmbrDaysField.value ;
    }

    let gps = document.getElementById("gps").checked;
    if (gps == true) {
        extraPerDay += 2.95
    }

    let roadsideAssist = document.getElementById("roadsideAssist").checked;
    if (roadsideAssist == true) {
        extraPerDay += 2.95 * nmbrDaysField.value ;
    }


    let surcharge;

    const yesRadioBtn = document.getElementById("yes");
    const noRadioBtn = document.getElementById("no");

    if (yesRadioBtn.checked == true) {
        surcharge = carRentalDaily * .30 
    }
    else {
        surcharge = 0
    }


    let totalDue = ( carRental + extraPerDay + surcharge )



    // Outputs
    const carRentalPara = document.getElementById("carRental");
    carRentalPara.innerHTML = "Car Rental: $" + carRental.toFixed(2);




    const optionsTotalPara = document.getElementById("options");
    optionsTotalPara.innerHTML = "Options: $" + extraPerDay.toFixed(2);




    const surchargePara = document.getElementById("surchargeFee");
    surchargePara.innerHTML = "Under 25 surcharge: $" + surcharge.toFixed(2);



    const totalDuePara = document.getElementById("totalDue");
    totalDuePara.innerHTML = "Total due: $" + totalDue.toFixed(2);



}