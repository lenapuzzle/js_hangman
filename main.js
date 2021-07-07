// YOUR CODE HERE

let puzzleWord = "_"
let guessedLettersArr = []
let puzzledArray = []

let printPuzzle = (word, guessedLettersArr = []) => {
    puzzleWord = puzzleWord.repeat(word.length)
    puzzledArray = puzzleWord.split("")

    guessedLettersArr.forEach((letter, index) => {
        let location = word.indexOf(letter)

        if (location !== -1) {
            puzzledArray[location] = letter
        }
    })

    return puzzledArray.join(" ")
}

console.log(printPuzzle('test', ["e", "t"]))