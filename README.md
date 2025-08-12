# ONE: Oracle Next Education

# Secret Friend Challenge

### [Click here for live preview!](https://gummms.github.io/challengeSecretFriend_en/)

Website that runs a Secret Friend game. Made with HTML, CSS and JavaScript for studies and portfolio purposes only. This assignment is part of the ONE: Oracle Next Education program.

## Features

- Can add or remove as many names as you want;
- Randomly picks a name to be your Secret Friend;
- Buttons are disabled as long as they can't do their job;
- Can hide the name of the last name drawn in order to not spoil the secret when playing with more than one person;
- Restart button (clears every entry and data to start a fresh game);
- Buttons with nice pressing animations;
- An error message is prompted if the input is empty;
- A warning is displayed when all the inputed names have been drawn (can't draw repeated names!);
- Fully responsive!

## How does it work?

1. Stores user inputs (friends' names) in two arrays:

   - Friends array is displayed and updated as it grows or shrinks;
   - Secret array just stores the names.

2. When the `Draw a secret friend` button is pressed the system checks if there are any elements inside the Secret array:

   1. If there are:

      - An element from the Secret array is picked randomly;
      - Said element is then stored in a variable and this new variable is displayed as the Secret Friend result;
      - Said element is then removed from the Secret array.

   2. If Secret array is empty:
      - Displays a "There are no more names to draw!" message and disables the draw button.

## Installation

1. Download the `app.js`, `styles.css`, `index.html` files and the `assets` folder;
2. Create a folder and paste all the files in it;
3. Run `index.html` on a live server or in your preferred way to do so.

## Usage

1. Type the name of your friends and click `Add` or press <kbd>Enter</kbd>;
2. Names will be displayed as buttons, click on a name to remove it from the list if you wish;
3. Click on `Draw a secret friend` to randomly pick a name;
4. Click on `Hide secret name` to hide the current result;
5. Click on `Restart game` to clear everything and start a fresh game.
6. When there are no more names left to be drawn, you can either add more or reset the game.

## Media

![alt text](assets/screenshot.png)
