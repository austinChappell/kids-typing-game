# Project Title

Kids Typing Game

## Project Description

Built for my 3-year-old daughter, this game allows the user to practice letter recognition to find letters on the keyboard.

### Things to know

The bulk of this project is in the script.js file. The variable numberOfLetters is used to set the length of the alphabet to be tested, so younger kids do not have to see the entire alphabet at once.

The charArray creates an array of alphabetic characters. Each object contains a character and an image array. The image array can be added to later, so that the image is chosen at random with each letter, to remove a layer of predictability.

The nextBlock variable is equal to the first empty block in the progress bar on the page. A randomIndex function is created, which is passed a number. A randomCharacter is chosen by finding a random result from the charArray, with the limite of numberOfLetters. The victoryVidArray is an array of gifs, also removing predictability. The video played upon filling up the progress bar is chosen at random each game.

In the rightAnswer function, a new randomCharacter is chosen, the audio is paused in case it is still lingering from the previous right answer, the audio is loaded and played. The class of 'empty' is removed from nextBlock, which turns it red. The background color toggles between green and pink. The image is one of the images associated with the randomCharacter. This image is chosen at random, should more images be added.

The roundComplete function is invoked if the progress bar fills up. The background turns to white, the letter, image, and progress bar are hidden, and the video is shown, and played. Additionally, a 'retry' button is displayed, which will then restart the game.

Upon keypress, the variable letter is assigned the value of the character on the screen, and lowerCase is assigned the lower case value of the character on the screen. The keyCode variable and lowerCaseKeyCode variable are equal to the charCodeAt value of the letter and lowerCase variables, respectively. The variable countdown is equal to how many 'empty' bars are remaining.

If the keypress equals keyCode or lowerCaseKeyCode and countdown is greater than 1, the rightAnswer function is invoked. If countdown is equal to 1, the rightAnswer function is invoked and the roundComplete function is invoked. 
