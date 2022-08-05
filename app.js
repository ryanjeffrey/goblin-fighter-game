// import functions and grab DOM elements
const statsSectionEl = document.querySelector('#stats-section');
const goblinsVanquishedDivEl = document.querySelector('#goblins-vanquished-div');
const goblinsVanquishedEl = document.querySelector('#goblins-vanquished');

const playerSectionEl = document.querySelector('#player-section');
const playerAvatarDivEl = document.querySelector('#player-avatar-div');
const playerAvatarEl = document.querySelector('#player-section');
const playerStatsEl = document.querySelector('#player-stats');

const matchupSectionEl = document.querySelector('#matchup-section');
const matchupMessageEl = document.querySelector('#matchup-message');

const goblinsSectionEl = document.querySelector('#goblins-section');
const addGoblinFormEl = document.querySelector('#add-goblin-form');
const goblinNameInputEl = document.querySelector('#goblin-name-input');
const addGoblinButton = document.querySelector('#add-goblin-button');

// let state
let goblins = [
    {
        name: 'Bejorkus',
        emoji: '🧟',
        hp: 6
    },
    {
        name: 'Groomf',
        emoji: '🧟',
        hp: 8
    },
    {
        name: 'Falydor',
        emoji: '🧟',
        hp: 3
    }
];

let numberOfGoblinsVanquished = 0;

let playerHealth = 10;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
