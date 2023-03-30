# Entry Logger

Attendance logging system using firebase intended to use for schools.

## Installation & Usage

Clone the public folder and set up your own firebase project

```bash
git clone anshtiwatne/entry-logger

mv -n some-path/entry-logger/public ~/my-firebase-project/

cd ~/my-firebase-project

npm install firebase
npm install -g firebase-tools

firebase init

firebase deploy
```

## Screenshots & Example use

Mobile and Desktop interface:
<p float="left">
<img width="591" alt="image" src="https://user-images.githubusercontent.com/83647366/228761761-c47272ce-982a-424c-8b9b-bec52d75f449.png">
<img width="227.77" alt="image" src="https://user-images.githubusercontent.com/83647366/228762430-12d1178b-68a4-424b-98c2-8c3a4f7a1eb7.png">
</p>

Once a user is signed in with Google, and their location is confirmed using the Geolocation browser API, and entry is created in the firebase firestore database with their name, status and time

<img width="877" alt="image" src="https://user-images.githubusercontent.com/83647366/228764171-6e40e985-2a32-4a96-8cb9-7826d71deb57.png">

## Contributing

Fork the repository, create a new branch for the fix and send a pull request or open an issue.

## License

[MIT](https://github.com/anshunderscore/wordle_solver/blob/main/LICENSE)
