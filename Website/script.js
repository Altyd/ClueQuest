const cases = [
    {
        name: "The Elegant Killings",
        suspects: [
            {
                name: "Ella",
                height: "5'6\"",
                handedness: "Right-handed",
                eyeColor: "Blue",
                hairColor: "Blonde",
                zodiacSign: "Libra",
            },
            {
                name: "Finn",
                height: "6'0\"",
                handedness: "Left-handed",
                eyeColor: "Brown",
                hairColor: "Black",
                zodiacSign: "Scorpio",
            },
            {
                name: "Grace",
                height: "5'8\"",
                handedness: "Right-handed",
                eyeColor: "Green",
                hairColor: "Red",
                zodiacSign: "Aries",
            },
            {
                name: "Henry",
                height: "5'10\"",
                handedness: "Left-handed",
                eyeColor: "Brown",
                hairColor: "Brown",
                zodiacSign: "Leo",
            },
        ],
        weapons: [
            {
                name: "The Exotic Blade",
                uniqueFeature: "Intricate carvings on the hilt",
            },
            {
                name: "The Poisonous Ring",
                uniqueFeature: "A hidden compartment for toxic powder",
            },
            {
                name: "The Muffled Pistol",
                uniqueFeature: "Silencer attachment for noise reduction",
            },
            {
                name: "The Shocking Watch",
                uniqueFeature: "Concealed taser function in the strap",
            },
        ],
        locations: [
            {
                name: "The Grand Mansion's Library",
            },
            {
                name: "The Secret Underground Tunnels",
            },
            {
                name: "The Enchanted Garden",
            },
            {
                name: "The Luxurious Ballroom",
            },
        ],
        clues: [
            "Ella, with blue eyes, was last seen in the Grand Mansion's Library reading a mystery novel.",
            "Finn, a left-handed Scorpio, was found in the Secret Underground Tunnels studying ancient maps.",
            "A black hair strand, not matching any suspect, was discovered in the Enchanted Garden.",
            "The Poisonous Ring was found in the Luxurious Ballroom, along with a half-empty vial of poison.",
            "Henry, with brown hair, was spotted with The Exotic Blade in the Enchanted Garden.",
            "Grace, right-handed, was seen in the Luxurious Ballroom wearing gloves, which she usually avoids.",
            "The Muffled Pistol was found hidden under a red velvet cushion in the Grand Mansion's Library.",
            "Ella, a Libra, was heard arguing with Finn, a Scorpio, in the Secret Underground Tunnels about hidden treasure.",
            "Henry, left-handed, was seen exiting the Enchanted Garden with a nervous demeanor.",
            "Grace, an Aries, was found near the fountain in the Enchanted Garden, but she had no interest in water features.",
            "A torn corner of a letter, with the letters 'SHER,' was discovered in the Luxurious Ballroom.",
        ],
        solution: {
            murderer: "Grace",
            weapon: "The Muffled Pistol",
            location: "The Luxurious Ballroom",
        },
        
    },
        {
            name: "Dead so young killings",
            suspects: [
                {
                    name: "Oliver",
                    height: "5'11\"",
                    handedness: "Right-handed",
                    eyeColor: "Brown",
                    hairColor: "Black",
                    zodiacSign: "Gemini",
                },
                {
                    name: "Sophia",
                    height: "5'6\"",
                    handedness: "Left-handed",
                    eyeColor: "Blue",
                    hairColor: "Blonde",
                    zodiacSign: "Cancer",
                },
                {
                    name: "Liam",
                    height: "6'2\"",
                    handedness: "Right-handed",
                    eyeColor: "Green",
                    hairColor: "Red",
                    zodiacSign: "Aries",
                },
                {
                    name: "Ava",
                    height: "5'4\"",
                    handedness: "Left-handed",
                    eyeColor: "Hazel",
                    hairColor: "Brown",
                    zodiacSign: "Leo",
                },
            ],
            weapons: [
                {
                    name: "The Crystal Dagger",
                    uniqueFeature: "Engraved with mystical symbols",
                },
                {
                    name: "The Lethal Umbrella",
                    uniqueFeature: "Poison-tipped umbrella tip",
                },
                {
                    name: "The Whistling Teapot",
                    uniqueFeature: "Built-in whistle for distraction",
                },
                {
                    name: "The Electric Glove",
                    uniqueFeature: "Concealed taser in the palm",
                },
            ],
            locations: [
                {
                    name: "The Haunted Manor's Study",
                },
                {
                    name: "The Dark Alley",
                },
                {
                    name: "The Enchanted Forest",
                },
                {
                    name: "The Glamorous Casino",
                },
            ],
            clues: [
                "Oliver, with brown eyes, was last seen in The Haunted Manor's Study reading ancient manuscripts.",
                "Sophia, a left-handed Cancer, was found in The Dark Alley sketching mysterious symbols on the wall.",
                "A strand of red hair, not matching any suspect, was discovered in The Enchanted Forest.",
                "The Lethal Umbrella was found in The Glamorous Casino, along with a vial of toxic liquid.",
                "Liam, with red hair, was spotted with The Crystal Dagger in The Enchanted Forest.",
                "Ava, left-handed, was seen in The Glamorous Casino wearing gloves, which she typically avoids.",
                "The Whistling Teapot was found hidden under a table in The Haunted Manor's Study.",
                "Oliver, a Gemini, was heard arguing with Sophia, a Cancer, in The Dark Alley about a hidden treasure map.",
                "Liam, right-handed, was seen exiting The Enchanted Forest in a hurry.",
                "Ava, a Leo, was found near a pond in The Enchanted Forest, but she had no interest in ponds.",
                "A torn corner of a letter, with the letters 'CLUE,' was discovered in The Glamorous Casino.",
            ],
            solution: {
                murderer: "Liam",
                weapon: "The Crystal Dagger",
                location: "The Enchanted Forest",
            },
        },
            {
                name: "The no backlash fear killings",
                suspects: [
                    {
                        name: "Sophie",
                        height: "5'6\"",
                        handedness: "Right-handed",
                        eyeColor: "Green",
                        hairColor: "Blonde",
                        zodiacSign: "Virgo",
                    },
                    {
                        name: "Ethan",
                        height: "6'0\"",
                        handedness: "Left-handed",
                        eyeColor: "Brown",
                        hairColor: "Black",
                        zodiacSign: "Scorpio",
                    },
                    {
                        name: "Olivia",
                        height: "5'8\"",
                        handedness: "Right-handed",
                        eyeColor: "Blue",
                        hairColor: "Red",
                        zodiacSign: "Leo",
                    },
                    {
                        name: "Liam",
                        height: "5'10\"",
                        handedness: "Left-handed",
                        eyeColor: "Brown",
                        hairColor: "Brown",
                        zodiacSign: "Taurus",
                    },
                ],
                weapons: [
                    {
                        name: "The Poisoned Goblet",
                        uniqueFeature: "Ornate engravings on the chalice",
                    },
                    {
                        name: "The Smoky Candlestick",
                        uniqueFeature: "Concealed compartment for poison",
                    },
                    {
                        name: "The Silent Dart",
                        uniqueFeature: "Blow dart with a silencer attachment",
                    },
                    {
                        name: "The Shocking Ring",
                        uniqueFeature: "Taser ring with a hidden button",
                    },
                ],
                locations: [
                    {
                        name: "The Old Victorian Mansion's Study",
                    },
                    {
                        name: "The Dimly Lit Alley",
                    },
                    {
                        name: "The Enchanted Garden",
                    },
                    {
                        name: "The Elegant Ballroom",
                    },
                ],
                clues: [
                    "Sophie, with green eyes, was last seen in The Old Victorian Mansion's Study, reading a vintage book.",
                    "Ethan, a left-handed Scorpio, was found in The Dimly Lit Alley examining old maps.",
                    "A strand of black hair, not matching any suspect, was discovered in The Enchanted Garden.",
                    "The Smoky Candlestick was found in The Elegant Ballroom, along with a partially empty vial of poison.",
                    "Liam, with brown hair, was spotted with The Silent Dart in The Enchanted Garden.",
                    "Olivia, right-handed, was seen in The Elegant Ballroom wearing gloves, which she rarely does.",
                    "The Shocking Ring was found hidden under a cushion in The Old Victorian Mansion's Study.",
                    "Sophie, a Virgo, was heard arguing with Ethan, a Scorpio, in The Dimly Lit Alley about an antique artifact.",
                    "Liam, left-handed, was seen exiting The Enchanted Garden with a troubled look.",
                    "Olivia, a Leo, was found near a rose bush in The Enchanted Garden, despite her dislike for flowers.",
                    "A torn corner of a letter, with the letters 'MUR,' was discovered in The Elegant Ballroom.",
                ],
                solution: {
                    murderer: "Olivia",
                    weapon: "The Silent Dart",
                    location: "The Enchanted Garden",
                },
            }
];
let currentCase = null;

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

function loadRandomCase() {
    currentCase = cases[Math.floor(Math.random() * cases.length)];
    populateDropdowns();
    displayCaseDetails();
}

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

function displayResult(message) {
    const resultMessage = document.getElementById("result-message");
    resultMessage.textContent = message;
}

function displayCaseDetails() {
    if (!currentCase) {
        console.error('No case loaded.');
        return;
    }

    // Access HTML elements by their IDs and update their content
    const suspectList = document.getElementById("suspect-list");
    const weaponList = document.getElementById("weapon-list");
    const locationList = document.getElementById("location-list");
    const clueList = document.getElementById("clue-list");

    // Clear previous case details
    suspectList.innerHTML = '';
    weaponList.innerHTML = '';
    locationList.innerHTML = '';
    clueList.innerHTML = '';
    
    
    const caseDetailsTitle = document.querySelector("#mystery-case h2");
    caseDetailsTitle.textContent = `Case Details - ${currentCase.name}`;
    // Populate HTML elements with case details
    currentCase.suspects.forEach((suspect) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${suspect.name}, Height: ${suspect.height}, Handedness: ${suspect.handedness}, Eye Color: ${suspect.eyeColor}, Hair Color: ${suspect.hairColor}, Zodiac Sign: ${suspect.zodiacSign}`;
        suspectList.appendChild(listItem);
    });

    currentCase.weapons.forEach((weapon) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${weapon.name}, Unique Feature: ${weapon.uniqueFeature}`;
        weaponList.appendChild(listItem);
    });

    currentCase.locations.forEach((location) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${location.name}`;
        locationList.appendChild(listItem);
    });

    currentCase.clues.forEach((clue) => {
        const listItem = document.createElement('li');
        listItem.textContent = clue;
        clueList.appendChild(listItem);
    });
}

document.getElementById("start-button").addEventListener("click", loadRandomCase);
document.getElementById("guess-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const murderer = document.getElementById("murderer").value;
    const weapon = document.getElementById("weapon").value;
    const location = document.getElementById("location").value;
    checkGuess(murderer, weapon, location);
});