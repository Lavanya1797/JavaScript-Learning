'use strict';

// short circuiting
console.log( 3 || null);
console.log(undefined||3);
console.log('jonas'||'');

console.log(0&&true);
console.log(false&&0);
console.log('jonas'&&6);

// nullish coalescing operator ??
const restaurant = 0;
const guestCorrect = restaurant ?? 10;
console.log(guestCorrect);

// coding challenge
/*We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1,players2] = game.players;
console.log(players1,players2);

const [gl, ...fieldPlayers] = players1;
console.log(gl,fieldPlayers);

const allPlayers = [...players1,...players2];
console.log(allPlayers);

const players1Final = [...players1 , 'Thiago', 'Coutinho' , 'Perisic'];
console.log(players1Final);

const { odds : {team1 , x: draw , team2 }  // destructured odds in game
} = game;
console.log(team1 ,draw , team2);

const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored` );
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'); // 4 goals were scored
printGoals(...game.scored);

team1<team2 && console.log('Team 1 is more likely to win');  // && to continue opration

// for of

const restaurants = {
  starterMenu: ['chips' , 'bajjis'] , 
  mainMenu : ['rice','chappathi'],
};

const menu = [...restaurants.starterMenu , ...restaurants.mainMenu];
console.log(menu);

for (const items of menu) 
console.log(items);

// el with index
for(const [i,el] of menu.entries())   // i denotes index and el is eleents
console.log(`${i+1} : ${el}`);      //  i+1 is index numbr starts from 1 includes all el just number only changed

// enhanced obj literals
const weekdays = ['mon' , 'tue' , 'wed', 'thu', 'fri' ,'sat' , 'sun'];
const Hours = {
  [weekdays [0]] : {
    open : 7,
    close : 5,
  },
  [weekdays[2]] :{
    open : 8,
    close : 6,
  },
  [`day - ${2+4}`] :{    // day and - can replace by any variable name its just to show day - 6 like that
    open : 7,
    close : 15,
  },
};
console.log(Hours);