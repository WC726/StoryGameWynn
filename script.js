
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
    character: "Interviewee:Grandma",
    text: "You awaken in the dusty, decaying hallway of what was clearly a once-expensive home. As you open your eyes and look up into the moldering ceiling, you are instantly filled with a familiar frustration, annoyance, and regret. 'Fuuuuck, not again.' You roll to your feet and glare around you at the peeling walls of the room you . . . recognize? You blink twice as a wave of-              .                ..                     ...                -Blinking rapidly, you look around at the decaying hallway of a once-expensive home, clearly left long to ruin. How did you get here? Where is here? What is this place? Who brought you here? Why? The only thing you know, with a chilling certainty, is that you are trapped, and you need to find a way to escape.",
    // you can choose how many choices to include
    // each choice can have text, an action, and/or nextScene
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

  kitchen: {
    title: "Location: Kitchen",
    character: "Interviewee:Neighbor",
    kitchenUpdate
  },

  hallway: {
    title: "The Hallway",
    text: "The hallway is dark and silent.",
    choices: [
      {
        text: "backyard",
        nextScene: "lockedDoor"
      }
    ]
  },

   lockedDoor: {
    title: "The Locked Door",
    text: "The door handle doesn't move.",
    choices: [
      {
        text: "Try to open it",
        action: unlockDoor
      },
      {
        text: "Go back",
        nextScene: "backyard"
      }
    ]
  },

   solution: {
    title: "The solution",
    text: "You solved the mystery!",
    
  }
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

function kitchenUpdate(){
  if (sanity >= 40){
    text: "well what I remember...",
    choices: [
      {
        text: "Open door 1",
        nextScene: "basement"
      },
      {
        text: "Return to hallway",
        nextScene: "hallway"
      },
      {
        text: "Investigate the papers",
      },
      {
        text: "Investigate the knife"
        action: pickUpItem("knife")
        messageDisplay.textContent = 
      }
    ]
  } else {
    text: "well what I remember...",
    choices: [
      {
        text: "Open door 1",
        nextScene: "backyard"
      },
      {
        text: "Return to hallway",
        nextScene: "hallway"
      },
      {
        text: "Investigate the papers",
      }
    ]
  }
}