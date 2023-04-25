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

let user

firebase.auth().onAuthStateChanged(newUser => {
    user = firebase.auth().currentUser
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
    // TODO: implement google maps geolocation API
    // TODO: replace lat and long with firebase geopoint
}

function checkPosition(pos) {
    const usr_location = pos.coords
    const school_loc = {latitude: 19.0000000, longitude: 74.0000000}

    if (usr_location.latitude.toFixed(0) == school_loc.latitude.toFixed(0) && usr_location.longitude.toFixed(0) == school_loc.longitude.toFixed(0)) {
        document.getElementById("confirmLocation").innerHTML = "Location confirmed"
        document.getElementById("confirmLocation").disabled = true
        position = pos
    }
    else {
        console.log(usr_location.latitude.toFixed(1), school_loc.latitude.toFixed(1), usr_location.longitude.toFixed(1), school_loc.longitude.toFixed(1))
        document.getElementById("confirmLocation").innerHTML = "Location not accurate"
        position = false
    }
}

const db = firebase.firestore()

function logEntry() {
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
                time: firebase.firestore.Timestamp.now(),
                location: new firebase.firestore.GeoPoint(position.coords.latitude, position.coords.longitude)
            })
            document.getElementById("logEntry").innerHTML = `${logType} logged`.charAt(0).toUpperCase() + `${logType} logged`.slice(1)
        }
    }
    else {
        document.getElementById("logEntry").innerHTML = "Retry"
    }
}