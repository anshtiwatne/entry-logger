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

## Screenshots & Example Use

Mobile and Desktop interface:

<img alt="image" src="https://user-images.githubusercontent.com/83647366/228905007-cf19e6c1-81b3-4e66-8363-84d709c017e7.png">

Once a user is signed in with Google, and their location is confirmed using the Geolocation browser API, an entry is then created in the firebase firestore database with their name, status and time

<img alt="image" src="https://user-images.githubusercontent.com/83647366/228764171-6e40e985-2a32-4a96-8cb9-7826d71deb57.png">

## Contributing

Fork the repository, create a new branch for the fix and send a pull request or open an issue.

## License

[MIT](https://github.com/anshtiwatne/entry-logger/blob/main/LICENSE)
