let LOCATION = false
let LOGIN = false

function formSubmit(status) {
    const date = new Date()
    console.log(status, date)
    login()
    if (LOGIN && LOCATION) {
        console.log("Entry logged!")
        document.getElementById("error").innerHTML = "Entry logged!"
    }
}

function login() {
    fetch('./logins.json')
        .then(response => response.json())
        .then(logins => {
            const phone = document.getElementById("phone").value
            const psswd = document.getElementById("password").value
            if (logins[phone].psswd == psswd) {
                console.log("user logged in")
                LOGIN = true
                return true
            }
            else {
                document.getElementById("error").innerHTML = "login unsuccesful"
                LOGIN = true
                return false
            }
        })
        .catch(error => console.error(error));
}

function checkLocation() {
    navigator.geolocation.getCurrentPosition(showPosition)
}

function showPosition(position) {
    const usr_location = position.coords
    const school_loc = {latitude: 18.5579709, longitude: 73.7830746}
    if (usr_location.latitude.toFixed(1) == school_loc.latitude.toFixed(1) && usr_location.longitude.toFixed(1) == school_loc.longitude.toFixed(1)) {
        console.log("user location confirmed")
        LOCATION = true
        return true
    }
    else {
        console.log(usr_location.latitude.toFixed(0), school_loc.latitude.toFixed(0), usr_location.longitude.toFixed(0), school_loc.longitude.toFixed(0))
        document.getElementById("error").innerHTML = "location incorrect"
        LOCATION = false
        return false
    }
}