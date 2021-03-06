console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id","middle-earth");
  for (i = 0; i<lands.length; i++) {
    var setLands = document.createElement("article");
    var nameLands = document.createElement("h1");
    nameLands.innerHTML=lands[i];
    setLands.appendChild(nameLands);
    middleEarth.appendChild(setLands);
    body.appendChild(middleEarth);
    console.log()
  }

 
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var hobbitList = document.createElement("ul");
  hobbitList.setAttribute("class", "hobbit");
  hobbitList.setAttribute("id", "hobbit-list")
  var theShire = document.getElementsByTagName("article").item(0);
    for (i = 0; i<hobbits.length; i++) {
      var putsHobbits = document.createElement("li");
      putsHobbits.setAttribute("class", "hobbits");
      putsHobbits.setAttribute("id", hobbits[i]);
      hobbitList.appendChild(putsHobbits);
      putsHobbits.innerHTML= hobbits[i];
      theShire.appendChild(hobbitList);
    }
    console.log(hobbitList);

  
}
makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var theRing = document.createElement("div");
  theRing.setAttribute("id", "the-ring");
  theRing.setAttribute("class", "magic-imbued-jewelry");
  document.getElementById("Frodo Baggins").appendChild(theRing);
  console.log(theRing);
  
  
  theRing.onclick = function () {
    document.getElementById("nazgul-screech").play();
  }
}



// Part 4
keepItSecretKeepItSafe();

function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
var rivendell = document.getElementsByTagName("article").item(1);
var theFellows = document.createElement("aside");
theFellows.setAttribute("class", "fellow");
var buddyList = document.createElement("ul");

for (i = 0; i<buddies.length; i++) {
  var inLine = document.createElement("li");
    buddyList.appendChild(inLine);
    inLine.innerHTML= buddies[i];
    rivendell.appendChild(buddyList);
  }
}


console.log(buddies);

makeBuddies();
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'

document.getElementsByTagName("li").item(7).innerHTML = "Aragorn";
}
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
//leaveShire = document.getElementsByClassName("hobbit");
//for (i = 0; i < leaveShire.length; i ++) {

let moveHobbits = document.getElementById("hobbit-list");
console.log(moveHobbits);
var rivendell = document.querySelectorAll("article")[1];
rivendell.appendChild(moveHobbits);
console.log(rivendell);




}
// Part 7

leaveTheShire();
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
