
// --------------------------------------------------
// SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add fields for each scene, as relevant, to match your mockup
// 2) customize the scenes to fit your story
// 3) add any new fields to the function below
// --------------------------------------------------

// First, we create a variable for the current scene being displayed
let currentScene = "beginning";

// Then, we create an object that stores the data for each scene,
const scenes = {
  // See "backyard" for the first example
  beginning: {
    title: "The Beginning",
    text: "You awaken in the dusty, decaying hallway of what was clearly a once-expensive home. As you open your eyes and look up into the moldering ceiling, you are instantly filled with a familiar frustration, annoyance, and regret. 'Fuuuuck, not again.' You roll to your feet and glare around you at the peeling walls of the room you . . . recognize? You blink twice as a wave of-              .                ..                     . ..                . .             .                 .. .                 ..            ...       ..                     . ..                . .             .                 .. -Blinking rapidly, you look around at the decaying hallway of a once-expensive home, clearly left long to ruin. How did you get here? Where is here? What is this place? Who brought you here? Why? The only thing you know, with a chilling certainty, is that you are trapped, and you need to find a way to escape.",
    // you can choose how many choices to include
    // each choice can have text, an action, and/or nextScene
    choices: [
      {
        text: "Open door 1",
         nextScene: "kitchen1"
      },
      {
        text: "Open door 2",
        nextScene: "dining room1"
      },
      {
          text: "Open door 3",
          action: unlockLibrary
      },
      {
        text: "Open door 4",
        nextScene: "bedroom"
      }
    ]
  },

  kitchen1: {
    title: "Location: Kitchen",
    text: "The kitchen is as ancient as the hallway, but despite its age, it seems free of mold or rot. Opening cabinets and drawers, it's clear that the thick sheets of dust coating every have never been disturbed before now. It's oddly tidy. Every pot, dish, and utensil has been carefully packed away and organzied, and the counters are completely bare except for a small pile of papers next to the empty sink. The fridge is on, and lights up when you open the door, but only the faintest puff of cooler air blows across your skin. Even on close inspection, it seems completely free of mold, stains, or husks of forgotten food. Across from the hallway is another wooden door, left ajar, with a staircase leading downward visible behind it.",
    choices: [
      {
        text: "Go through door",
        nextScene: "basement1"
      },
      {
        text: "Return to hallway",
        nextScene: "hallway1"
      },
      {
        text: "Investigate the papers",
        nextScene: "kitchenPapers1"
      }
    ]
  },

  kitchen2: {
    title: "Location: Kitchen",
    text: "You step quickly into the dusty and moldering kitchen. The haze of disturbed dust and the stench of mold catches in your throat. Looking around the ceiling, you can see slimy streaks of some dark substance creeping down the walls. Next to you, the door to the fridge strains as the same substance bubbles through the crack. Stepping past the hanging doors of barren cabinets, you reach the oozing sink, filled with cracked pots and plates, and see the familiar pile of papers and a stained knife lying on the streaked counters.",
    choices: [
      {
        text: "Go to basement",
        nextScene: "basement3"
      },
      {
        text: "Return to hallway",
        action: murderYesNo
      },
      {
        text: "Investigate the papers",
        nextScene: "kitchenPapers2"
      },
      {
        text: "Investigate the knife",
        nextScene: "knife"
      }
    ]
  },

  kitchenPapers1: {
    title: "",
    text: "Examining the papers, you quickly realize that the scribbles covering them are completely unintelligible. The letters are so jagged and distorted that they are practically unrecognizable, and each sentences squirms its way around the page, crossing over previous sentences and rendering them unreadable."
  },

  dining1: {
    
  },

  hallway1: {
    title: "The Hallway",
    text: "Stepping into the dimly-lit hallway, the first breath of mildew-tainted air makes you choke for a moment. The polished wooden paneling on the walls has dulled and cracked, and the once-plush carpet has almost liquidfied under the stress of time and damp conditions. The hallway is long, and lined with doors, but even in the dim light you can clearly see that the hinges and knobs of many of the doors have become caked with rust. You walk to the closest door and turn the handle, and it simply breaks off in your hand. Looking around, you can see only four doors that look like they could still be opened.",
    choices: [
      {
      text: "Open door 1",
         nextScene: "kitchen"
      },
      {
        text: "Open door 2",
        nextScene: "dining room"
      },
      {
          text: "Open door 3",
          action: unlockLibrary
      },
      {
        text: "Open door 4",
        nextScene: "bedroom"
      }
    ]
  },

   hallway2: {
    title: "The Hallway",
    text: "Stepping into the dimly-lit hallway, the first breath of mildew and decay in the air makes you choke for a moment. The polished wooden paneling on the walls has dulled and cracked, and the once-plush carpet has almost liquidfied under the stress of time and damp conditions. The hallway is long, and lined with doors, but even in the dim light you can clearly see that the hinges and knobs of many of the doors have become caked with rust. As you look around, your eyes catch on a small body, crumpled atop a dark stain. Stopping next to it, you look down into sightless, filmy eyes. The ragged hole across the back has ceased weeping, and its edges curl in the damp air. The liquid falling from the hanging mouth has congealed and darkened, until it no longer pools into the decayed mesh of the carpet, but slowly piles in gelatinous chunks. A thin web of mycelium stretches between the bloated appendages, across the pallid limbs, and up the petrified face, coating them in a pale fuzz.",
    choices: [
      {
      text: "Open door 1",
         nextScene: "kitchen"
      },
      {
        text: "Open door 2",
        nextScene: "dining room"
      },
      {
          text: "Open door 3",
          action: unlockLibrary
      },
      {
        text: "Open door 4",
        nextScene: "bedroom"
      }
    ]
  },

};

// --------------------------------------------------
// UPDATE SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add a new const variable for each new field you added above
// Make sure to match the ids used in your mock up with the fields 
// 2) set the .textContent of each variable to the corresponding field in the scene object
// Use sceneTitle as a model
// --------------------------------------------------

// First, we create variables to hold the references to the HTML elements
// Technically you could just use document.getElementById('id-name') 
// in the function itself, but that would be very wordy 
// and make the code harder to read
const sceneTitle = document.getElementById("scene-title");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices-container");
const characterName = document.getElementById("character-name");

// Then, we create a function to update the scene,
function updateScene(sceneName) {

  //This update the variable currentScene with the new scene passed as a parameter
  currentScene = sceneName;

  //This accesses the scene object based on the scene name
  const scene = scenes[sceneName];

  // Here, for each html element, you change the textContent to match
  // the appropriate text from the scene object
  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;
  characterName.textContent = scene.character;

  // Clear the old buttons before creating new ones
  choicesContainer.innerHTML = "";

  // Loop through each choice in the scene, connecting an action and nextScene if included
  scene.choices.forEach(function (choice) {
    const button = document.createElement("button");

    button.textContent = choice.text;

    button.addEventListener("click", function () {
      if (choice.action) {
        choice.action();
      }

      if (choice.nextScene) {
        updateScene(choice.nextScene);
      }
    });

    choicesContainer.appendChild(button);
  });
}

// This updates the screen with the current scene
updateScene(currentScene);


// --------------------------------------------------
// HEALTH
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// Either customize the name from health to steps, stress, etc...
// OR
// create a copy of each step for each additional state you want to track throughout the game
// --------------------------------------------------

// Create a variable for health
let sanity = 100;

// Display current health
const sanityDisplay = document.getElementById("sanity-display");

// Create a function to update health 
function updateSanity(amount) {
  sanity -= amount;
  sanityDisplay.textContent = sanity;
}

// This refreshes the health display
updateSanity(0);

// --------------------------------------------------
// INVENTORY
// Read through the comments below to see what this section does
//
// For now, you are probably leaving this section as is. 
// --------------------------------------------------

// Create a variable for inventory
let inventory = [];

// Display current inventory
const inventoryDisplay = document.querySelector("#inventory-display");
const messageDisplay = document.getElementById("message-display");

// Create a function to update inventory 
function pickUpItem(itemName) {
    // Add itemName to the inventory array
    // Show the updated inventory on the page
  inventory.push(itemName);
  inventoryDisplay.textContent = inventory.join(", ");
}

let missions = []

const missionList = document.querySelector("#mission-display");

function addMission(mission) {
  mission.push(mission);
  missionList.textContent = missions.join(", ");
}

function completeMission(mission){
  missions.splice(missions.indexOf(mission), 0 );
  missionList.textContent = missions.join(", ");
}
// --------------------------------------------------
// OTHER VARIABLES
// --------------------------------------------------

let didKill = no

// --------------------------------------------------
// CONDITIONAL 
// Depending on how you want to implement the conditional logic, you may 
// simply adjust the names below or you may need to expand upon this section
// --------------------------------------------------

// Create a function that checks if the inventory contains one item and if so shows the win condition scene.
function unlockLibrary() {
  if (inventory.includes("library key")) {
    updateScene("library");
    completeMission("Find library key")
  } else {
    messageDisplay.textContent = "The old wooden door appears to be locked. The lock is large and appears to be made of iron.";
    addMission("Find library key")
  }
}

function unlockStudy() {
  if (inventory.includes("study key")) {
    updateScene("study");
    completeMission("Find study key")
  } else {
    messageDisplay.textContent = "This door appears to be locked. The lock is small and appears to be made of brass.";
    addMission("Find study key")
  }
}

function unlockCabinet() {
  if (inventory.includes("cabinet key")) {
    inventory.pickUpItem("translation papers");
    messageDisplay.textContent = "Opening the cabinet and pulling out the papers, you see that the papers are covered with symbols matching those in the mysterious book, as well as many scribbled notes."
    completeMission("Find cabinet key")
  } else {
    messageDisplay.textContent = "The cabinet is locked shut. The lock is small and appears to be made of a shiny metal.";
    addMission("Find cabinet key")
  }
}

function murderYesNo(){
  if (missions.includes("Kill intruder") && inventory.includes("stained knife") ){
    nextScene = "murderHallway"
  } else {
    nextScene = "hallway2"
  }
}