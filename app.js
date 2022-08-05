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
const goblinsDivEl = document.querySelector('#goblins-div');

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
addGoblinFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(addGoblinFormEl);

    // get user input
    const userGoblinName = data.get('goblin-name-input');

    // use user input to update state
    const newGoblin = {
        name: userGoblinName,
        emoji: '🧟',
        hp: Math.ceil(Math.random() * 6),
    };

    goblins.push(newGoblin);

    addGoblinFormEl.reset();
    // update DOM to reflect the new state
    displayGoblins();
});

function displayGoblins() {
    goblinsDivEl.textContent = '';
    
    for (let goblin of goblins) {
  
        const goblinEl = document.createElement('div');
        goblinEl.textContent = `${goblin.name} ${goblin.emoji} ${goblin.hp} hp`;
      
        goblinEl.classList.add('goblin');
      
        goblinsDivEl.append(goblinEl);

        goblinEl.addEventListener('click', () => {
            if (goblin.hp > 0) {
                // logic for goblin damage
                if (Math.random() < .4) {
                    matchupMessageEl.textContent = `You hit ${goblin.name}!`;
                    matchupSectionEl.style.backgroundColor = 'yellowgreen';
                    goblin.hp--;
                    displayGoblins();
                } else {
                    matchupMessageEl.textContent = `You missed ${goblin.name}.`;
                    matchupSectionEl.style.backgroundColor = 'tomato';
                }

                // logic for user damage
                if (Math.random() < 0.5) {
                    playerHealth--;
                    playerStatsEl.textContent = playerHealth;
                    alert(`${goblin.name} hit you.`);
                } else {
                    alert(`${goblin.name} tried to hit you but missed!`);
                }
                
                if (goblin.hp === 0) {
                    numberOfGoblinsVanquished++;
                    goblinsVanquishedEl.textContent = `You have vanquished ${numberOfGoblinsVanquished} Goblins.`;
                }
            }

        });
    }
}

displayGoblins();