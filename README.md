# wordle

## Problem ##
I challenged myself to build a clone of Wordle, a game that was massively popular during 2022. This project was mostly aimed to be a refresher of the core basics of HTML/CSS/Javascript after having an 8 month gap from programming where I was focusing on my teaching career. I also made sure that I would use Webpack and NPM when undertaking this project so I would be refreshed on those also.

An example of the original Wordle game can be found - https://www.nytimes.com/games/wordle/index.html

My aim was not to get the clone looking the exact same as the original, but to get the core functionality working the same. Users should be able to choose between clicking the on-screen keyboard to input a letter or using their computer keyboard.

## Solution ##

I separated the logic/functionality of the app into three classes, the controller, UI & grid classes.

The `controller` class is responsible for handling the logic of the app. It would handle user inputs and handle system outputs, calling the appropriate UI functions when appropriate. The controller on initial load will create instance of the `Grid` class and sets the keyboard/button listeners to listen for user input. 

The `UI` class is responsible for handling all DOM elements and taking the input from the `controller` and `Grid` classes and ensuring that the UI reflects the current state of the game. My aim for this project was to ensure that all DOM handling was done in a separate class to the main logic of the game, this is something I had been reading about and I was glad I was able to implement it.

The `Grid` class is responsible for keeping track of the game state and returning this information to the controller and passing this information on to the `UI` class when appropriate. I feel my implementation on the whole was good and worked well, however I passed it arounf the program as a parameter far too much and I would consider looking at ways to reduce this in the future.

## Challenges ##

## Working Solution ##

A working solution can be found at - https://rosstarrant.github.io/wordle/

Screenshots of project in action below:

![image](https://user-images.githubusercontent.com/14926097/216004556-748a9e2b-7e9f-42f8-9942-7e78e788f6e0.png)

![image](https://user-images.githubusercontent.com/14926097/216004935-19c118c7-c3ff-4f5d-89ae-5d7f9f1b8c03.png)
