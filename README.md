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



## Choosing words

Given a list of possible words, if you rank every word by what ratio match it is to every guess made till now and choose the one with the lowest rank, you'll get a word that adds the maximum amount of new letters and positions to the existing pool of letters.

```python
def choose_word(guesses: set, possible_words: set, randomize: bool = False):
    """Get an optimized choice of a word to be the next guess from the possible words"""

    if randomize: return random.choice(list(possible_words))
    comparison = {}
    # The best next guess seems to be the one that differs most from the previous guesses
    # since this diversifys the letters used therefore maximizing the hints received

    for word in possible_words:
        for guess in guesses:
            # get the similarity between the word and the guess
            comparison[word] = comparison.get(word, 0) + SequenceMatcher(
                None, word, guess).ratio()
        # number of total letters - number of unique letters
        comparison[word] = comparison.get(word, 0) + len(word) - len(set(word))

    return min(comparison, key=comparison.get)
```

## Contributing

Send a pull request if you'd like to make a change or open an issue. You're free to use the guessing algorithm for your own implementations.

## License

[MIT](https://github.com/anshunderscore/wordle_solver/blob/main/LICENSE)
