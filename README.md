# Kaati Zeero - Tic-Tac-Toe Game

Kaati Zeero is a simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. Players take turns marking spaces in a 3x3 grid, aiming to be the first to get three of their symbols (either X or O) in a row, column, or diagonal.

## How to Play

1. Open the `index.html` file in a web browser to start the game.

2. Click on any empty space in the grid to place your symbol (X or O).

3. The first player to get three of their symbols in a row, column, or diagonal wins the game.

4. If all spaces are filled without any player achieving a winning combination, the game ends in a draw.

5. Click the "Restart" button to start a new game after a win or draw.

## Features

- **Responsive Design**: The game is designed to be playable on both desktop and mobile devices, with responsive layouts and styling.

- **Winning Indicator**: When a player wins the game, the winning combination of spaces is highlighted with a background color to indicate the victory.

- **Restart Button**: Players can restart the game at any time by clicking the "Restart" button, which clears the board and resets the game state.

## Logic Overview

- The game logic is implemented in `logic.js`, which handles player turns, checking for winning combinations, and restarting the game.

- The game board consists of nine boxes, each representing a space in the 3x3 grid. Players alternate turns, marking their symbol (X or O) in an empty space when clicked.

- Winning combinations are defined in the `winningCombos` array, and the game checks for these combinations after each move to determine if a player has won.

## Customize

You can customize the game by modifying the following:

- **Styling**: Update the CSS file (`style.css`) to change the appearance of the game board, symbols, and other elements.

- **Symbols**: Modify the `O_Text` and `X_Text` variables in the JavaScript code (`logic.js`) to change the symbols used by players.

## Contribution

Contributions to the development of Kaati Zeero are welcome! If you have any suggestions, bug fixes, or feature requests, feel free to fork the repository, make your changes, and submit a pull request.

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

## Acknowledgments

- Inspired by the classic Tic-Tac-Toe game.


