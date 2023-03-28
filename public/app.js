document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app()
})

// firebase.auth().signOut()

function googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            user = result.user
        })
        .catch(console.log)
}

firebase.auth().onAuthStateChanged(user => {

    if (user) {
        document.getElementById("googleSignInText").innerHTML = `${user.displayName} logged in`
        document.getElementById("googleSignIn").disabled = true
    }
    else {
        // not signed in
    }
})

let position

function confirmLocation() {
    navigator.geolocation.getCurrentPosition(checkPosition)
}

function checkPosition(pos) {
    const usr_location = pos.coords
    const school_loc = {latitude: 18.5579709, longitude: 73.7830746}

    if (usr_location.latitude.toFixed(1) == school_loc.latitude.toFixed(1) && usr_location.longitude.toFixed(1) == school_loc.longitude.toFixed(1)) {
        document.getElementById("confirmLocation").innerHTML = "Location confirmed"
        document.getElementById("confirmLocation").disabled = true
        position = true
    }
    else {
        console.log(usr_location.latitude.toFixed(0), school_loc.latitude.toFixed(0), usr_location.longitude.toFixed(0), school_loc.longitude.toFixed(0))
        document.getElementById("confirmLocation").innerHTML = "Location not accurate"
        position = false
    }
}

const db = firebase.firestore()

function logEntry() {
    const datetime = new Date()
    console.log(position)
    if (user) {
        if (position) {
            if (document.getElementById("entry").checked == true) {
                logType = "entry"
            }
            else if (document.getElementById("exit").checked == true) {
                logType = "exit"
            }
            attendance = db.collection("attendance")
            attendance.add({
                name: user.displayName,
                status: logType,
                time: datetime
            })
            document.getElementById("logEntry").innerHTML = `${logType} logged`.charAt(0).toUpperCase() + `${logType} logged`.slice(1)
        }
    }
    else {
        document.getElementById("logEntry").innerHTML = "Retry"
    }
}