// import functions and grab DOM elements
const mainSectionEl = document.querySelector('main');

const goblinsVanquishedEl = document.querySelector('#goblins-vanquished');

const playerAvatarEl = document.querySelector('#player-avatar');
const playerStatsEl = document.querySelector('#player-stats');
const playerHpSpanEl = document.querySelector('span');

const matchupSectionEl = document.querySelector('#matchup-section');
const matchupMessageEl = document.querySelector('#matchup-message');

const addGoblinFormEl = document.querySelector('#add-goblin-form');
const goblinsDivEl = document.querySelector('#goblins-div');


// let state
let goblins = [
    {
        name: 'Bejorkus',
        emoji: '👹',
        hp: 4
    },
    {
        name: 'Groomf',
        emoji: '👹',
        hp: 5
    },
    {
        name: 'Horseclaw',
        emoji: '👹',
        hp: 3
    },
    {
        name: 'Steve',
        emoji: '👹',
        hp: 1
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
        emoji: '👹',
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
                    
                    resetMessage();
                } else {
                    matchupMessageEl.textContent = `You missed ${goblin.name}.`;
                    matchupSectionEl.style.backgroundColor = 'yellow';

                    resetMessage();
                }

                // logic for user damage
                if (Math.random() < 0.5) {
                    setTimeout(function() {
                        playerHealth--;
                        playerStatsEl.textContent = playerHealth;
                        alert(`${goblin.name} hit you with a counter-attack.`);
                        
                        if (playerHealth <= 6 && playerHealth >= 4) {
                            playerHpSpanEl.style.color = 'yellow';
                        }
                        if (playerHealth < 4) {
                            playerHpSpanEl.style.color = 'tomato';
                        }
                        
                        if (playerHealth <= 2) {
                            playerAvatarEl.textContent = '🤕';
                        }

                        endGame();
                    }, 800);
                } else {
                    setTimeout(function() {
                        alert(`${goblin.name} tried to hit you but missed!`);
                    }, 800);
                }
                
                if (goblin.hp === 0) {
                    numberOfGoblinsVanquished++;
                    goblin.emoji = '💀';

                    if (numberOfGoblinsVanquished === 1) {
                        goblinsVanquishedEl.textContent = `You have vanquished ${numberOfGoblinsVanquished} Goblin.`;
                    } else {
                        goblinsVanquishedEl.textContent = `You have vanquished ${numberOfGoblinsVanquished} Goblins.`;
                    }
                }


            }
            
            displayGoblins();
        });
    }
}

function resetMessage() {
    if (playerHealth > 0) {
        setTimeout(function() {
            matchupMessageEl.textContent = 'Click on a Goblin to fight.';
            matchupSectionEl.style.backgroundColor = 'transparent';
        }, 1000);
    } else endGame();
}

function endGame() {
    if (playerHealth === 0) {
        setTimeout(function() {
            playerAvatarEl.textContent = '☠️';
            matchupMessageEl.textContent =
                'GAME OVER. The Goblins got the best of you. Reload the page to try again.';
            matchupSectionEl.style.backgroundColor = 'tomato';
            mainSectionEl.style.pointerEvents = 'none';
        }, 1200);
    }
}

displayGoblins();