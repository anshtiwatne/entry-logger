document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app()
})

firebase.auth().signOut()

function googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user
        })
        .catch(console.log)
}

firebase.auth().onAuthStateChanged(user => {

    if (user) {
        const datetime = new Date(); // to use
        if (document.getElementById("entry").checked == true) {
            innerHTML = `${user.displayName}'s entry logged`
        }
        else if (document.getElementById("exit").checked == true) {
            innerHTML = `${user.displayName}'s exit logged`
        }
        document.getElementById("log").innerHTML = innerHTML
    }
    else {
        // not signed in
    }
})

function confirmLocation() {
    navigator.geolocation.getCurrentPosition(showPosition)
}

function showPosition(position) {
    const usr_location = position.coords
    const school_loc = {latitude: 18.5579709, longitude: 73.7830746}
    if (usr_location.latitude.toFixed(1) == school_loc.latitude.toFixed(1) && usr_location.longitude.toFixed(1) == school_loc.longitude.toFixed(1)) {
        console.log("user location confirmed")
        document.getElementById("locationText").innerHTML = "Location confirmed"
        return true
    }
    else {
        console.log(usr_location.latitude.toFixed(0), school_loc.latitude.toFixed(0), usr_location.longitude.toFixed(0), school_loc.longitude.toFixed(0))
        document.getElementById("locationText").innerHTML = "Location not accurate"
        return false
    }
}