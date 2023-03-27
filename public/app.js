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
        const datetime = new Date();
        const time = datetime.getTime();
        console.log("hellllllloooooooooooo")
        if (document.getElementById("entry").checked == true) {
            innerHTML = `${user.displayName}'s entry logged at ${time}`
        }
        else if (document.getElementById("exit").checked == true) {
            innerHTML = `${user.displayName}'s exit logged at ${time}`
        }
        document.getElementById("log").innerHTML = innerHTML
    }
    else {
        // not signed in
    }
})

function checkLocation() {
    // hello
}