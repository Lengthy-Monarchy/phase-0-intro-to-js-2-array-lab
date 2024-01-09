// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Function to destructively append a cat to cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Function to destructively prepend a cat to  cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Function to destructively remove the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Function to destructively remove the first cat from  cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Function to append a cat to the cats array 
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

// Function to prepend a cat to the cats array 
function prependCat(name) {
  const newCats = [name, ...cats];
  return newCats;
}

// Function to remove the last cat in the cats array 
function removeLastCat() {
  const newCats = cats.slice(0, -1);
  return newCats;
}

// Function to remove the first cat from the cats array 
function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
}
