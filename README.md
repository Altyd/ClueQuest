# Murder Mystery Puzzle Website

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Overview](#project-overview)
  - [Random Case Generation](#random-case-generation)
  - [Loading Case Details](#loading-case-details)
- [Solving the Mystery](#solving-the-mystery)
  - [User Guess](#user-guess)
  - [Checking Answers](#checking-answers)
- [User Interaction](#user-interaction)
- [How to Use](#how-to-use)
- [Contributors](#contributors)

## Overview

The Murder Mystery Puzzle Website is an interactive web application designed to engage users in solving murder mysteries. Users can load random cases, examine clues, make educated guesses, and find out if their answers are correct.

## Features

1. Randomly load murder mystery cases.
2. Populate dropdowns with suspects, weapons, and locations.
3. Submit user guesses for the murderer, weapon, and location.
4. Check user guesses and display whether they are correct.
5. Engaging and user-friendly interface for mystery enthusiasts.

## Project Overview

### Random Case Generation
When the website is loaded, it generates a random murder mystery case for users to solve. The cases are defined in the code and contain details about suspects, weapons, locations, and clues.

```javascript
function loadRandomCase() {
    currentCase = cases[Math.floor(Math.random() * cases.length)];
    populateDropdowns(); // Populates dropdowns with suspects, weapons, and locations.
    displayCaseDetails(); // Displays case details on the webpage.
}
```
### Loading Case Details
The website dynamically loads case details into dropdowns, allowing users to make selections for their guesses. Users can select from suspects, weapons, and locations to build their hypothesis.
```javascript
function populateDropdowns() {
    const murdererDropdown = document.getElementById("murderer");
    const weaponDropdown = document.getElementById("weapon");
    const locationDropdown = document.getElementById("location");

    // Clear previous options in the dropdowns
    murdererDropdown.innerHTML = '';
    weaponDropdown.innerHTML = '';
    locationDropdown.innerHTML = '';

    // Populate suspects dropdown
    currentCase.suspects.forEach((suspect) => {
        const option = document.createElement('option');
        option.value = suspect.name;
        option.textContent = suspect.name;
        murdererDropdown.appendChild(option);
    });

    // Populate weapons dropdown
    currentCase.weapons.forEach((weapon) => {
        const option = document.createElement('option');
        option.value = weapon.name;
        option.textContent = weapon.name;
        weaponDropdown.appendChild(option);
    });

    // Populate locations dropdown
    currentCase.locations.forEach((location) => {
        const option = document.createElement('option');
        option.value = location.name;
        option.textContent = location.name;
        locationDropdown.appendChild(option);
    });
}
```
## Solving the Mystery
### User Guess
Users can make their guesses by selecting a suspect, weapon, and location from the populated dropdowns.
```javascript
<!-- Replace text inputs with dropdowns -->
<label for="murderer">Murderer:</label>
<select id="murderer">
    <!-- Populate suspects dynamically -->
</select>

<label for "weapon">Weapon:</label>
<select id="weapon">
    <!-- Populate weapons dynamically -->
</select>

<label for="location">Location:</label>
<select id="location">
    <!-- Populate locations dynamically -->
</select>
```
### Checking Answers
The user's guesses are checked against the correct solution for the case. If the guesses match the solution, a success message is displayed; otherwise, an error message is shown.
```javascript
function checkGuess() {
    if (!currentCase) {
        alert("Please load a case first.");
        return;
    }

    const selectedMurderer = document.getElementById("murderer").value;
    const selectedWeapon = document.getElementById("weapon").value;
    const selectedLocation = document.getElementById("location").value;

    const correctMurderer = currentCase.solution.murderer;
    const correctWeapon = currentCase.solution.weapon;
    const correctLocation = currentCase.solution.location;

    if (
        selectedMurderer === correctMurderer &&
        selectedWeapon === correctWeapon &&
        selectedLocation === correctLocation
    ) {
        displayResult("Congratulations! You've solved the case.");
    } else {
        displayResult("Sorry, your guess is incorrect. Please try again.");
    }
}
```
## User Interaction
The website provides an interactive and user-friendly experience for mystery enthusiasts. Users can keep guessing until they solve the murder mystery.

## How to Use
1. Load the website (https://altyd.github.io/ClueQuest/).
2. Click the "Start New Case" button to load a random murder mystery case.
3. Use the dropdowns to make your guesses for the murderer, weapon, and location.
4. Click the "Submit Guess" button to check your answers.
5. View the result message to see if your guesses are correct.

## Contributors
- [Franco](https://github.com/Altyd)