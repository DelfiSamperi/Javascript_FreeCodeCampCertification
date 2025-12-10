let lunches = [];

const addLunchToEnd = (lunches,str) => {
  lunches.push(str);
  console.log(`${str } added to the end of the lunch menu.`)
  return lunches;
};

console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

const addLunchToStart = (lunches,str) => {
  lunches.unshift(str);
  console.log(`${str } added to the start of the lunch menu.`)
  return lunches;
};

console.log(addLunchToStart(lunches, "Sushi"));
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

const removeLastLunch = (lunches) => {
  if(lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removed = lunches.pop();
    console.log(`${removed } removed from the end of the lunch menu.`)
  }  
  return lunches;
};

console.log(removeLastLunch(["Stew", "Soup", "Toast"]));
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));

const removeFirstLunch = (lunches) => {
  let removed = lunches.shift();
  if(lunches[0] !== removed) { 
    console.log(`${removed } removed from the start of the lunch menu.`)
  } else {
    console.log("No lunches to remove.")
  }
  return lunches;
};

console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));

const getRandomLunch = (lunches) => {
  if(lunches.length === 0) {
    console.log("No lunches available.");
  } else { 
    let randomNum = Math.floor(Math.random() * lunches.length);
    let randomLunch = lunches[randomNum];
    console.log(`Randomly selected lunch: ${ randomLunch}`);
  }
};

getRandomLunch(lunches);

const showLunchMenu = (lunches) => {
  if(lunches.length !== 0) {
    console.log(`Menu items: ${lunches.join(', ')}`)
  } else {
    console.log("The menu is empty.")
  };
};

console.log(showLunchMenu(["Greens", "Corns", "Beans"]));
console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));