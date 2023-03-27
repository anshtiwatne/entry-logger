document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app()
    console.log(app)
})

firebase.auth().signOut()

function googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user
            document.getElementById("log").innerHTML = `Hello ${user.displayName}`
            console.log(user)
        })
        .catch(console.log)
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log("yay")
        // hello`
    }
    else {
        // not signed in
    }
})