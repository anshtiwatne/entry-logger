const logins = {
    "1000000000": {psswd: "hello", usr_name: "test"}
}

function formSubmit(status) {
    const date = new Date()
    console.log(status, date)
    login()
}

function login() {
    const phone = document.getElementById("phone").value
    const psswd = document.getElementById("password").value
    if (logins[phone].psswd == psswd) {
        console.log("user logged in")
        return true
    }
    else {
        document.getElementById("error").innerHTML = "login unsuccesful"
        return false
    }
}

function checkLocation() {
    navigator.geolocation.getCurrentPosition(showPosition)
}

function showPosition(position) {
    const usr_location = position.coords
    const school_loc = {latitude: 18.5579709, longitude: 73.7830746}
    if (usr_location.latitude.toFixed(1) == school_loc.latitude.toFixed(1) && usr_location.longitude.toFixed(1) == school_loc.longitude.toFixed(1)) {
        console.log("user location confirmed")
        document.getElementById("error").innerHTML = "Entry logged!"
        return true
    }
    else {
        console.log(usr_location.latitude.toFixed(0), school_loc.latitude.toFixed(0), usr_location.longitude.toFixed(0), school_loc.longitude.toFixed(0))
        document.getElementById("error").innerHTML = "location incorrect"
        return false
    }
}