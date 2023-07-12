var model = new simcapi.CapiAdapter.CapiModel({
    mastery: false,
    numerator: 30,
    denominator: 50,
    implementMastery: true,
    debug: false
});

//Tells pipit to expose the following attributes
simcapi.CapiAdapter.expose('mastery', model);
simcapi.CapiAdapter.expose('numerator', model);
simcapi.CapiAdapter.expose('denominator', model);
simcapi.CapiAdapter.expose('implementMastery', model);
simcapi.CapiAdapter.expose('debug', model);

var node = document.getElementById('my-thing');

function achievedMastery(mastery) {
    model.set('mastery', mastery);
    alert("Congratulations! You're ready to move on. Press the NEXT button to advance to the next slide.");
    simcapi.Transporter.triggerCheck();
};

document.querySelector('.btn').addEventListener("click", clickDemo)

function clickDemo() {
    console.log("v0.0.3")
    model.set('mastery', true);
    simcapi.CapiAdapter.expose('mastery', model);
    // alert("Congratulations! You're ready to move on. Press the NEXT button to advance to the next slide.");
    simcapi.Transporter.triggerCheck();
}

// Tells pipit that the sim model is ready
simcapi.Transporter.notifyOnReady();




// var model = new simcapi.CapiAdapter.CapiModel({
//     mastery: false,
//     numerator: 30,
//     denominator: 50,
//     implementMastery: true,
//     debug: false
// });

// //Tells pipit to expose the following attributes
// simcapi.CapiAdapter.expose('mastery', model);
// simcapi.CapiAdapter.expose('numerator', model);
// simcapi.CapiAdapter.expose('denominator', model);
// simcapi.CapiAdapter.expose('implementMastery', model);
// simcapi.CapiAdapter.expose('debug', model);

// // Tells pipit that the sim model is ready
// simcapi.Transporter.notifyOnReady();

// var node = document.getElementById('my-thing');

// function achievedMastery(mastery) {
//     model.set('mastery', mastery);
//     alert("Congratulations! You're ready to move on. Press the NEXT button to advance to the next slide.");
//     simcapi.Transporter.triggerCheck();
// };

// const button = document.querySelector("button");

// button.addEventListener("click", (event) => {
//     button.textContent = `Click count: ${event.detail}`;
// });
