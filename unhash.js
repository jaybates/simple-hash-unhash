function unhash(hash) {
  const stringLength = 10; // Length of string for hash
  const letters = "acdfgilmnoprstuw"; // Provided Letter Index

  let index = 0; // Initalize Index Variable
  let stringPieces = []; // Unhashed Characters Array
  let unhashedString;

  for (i = 0; i < stringLength; i++) {
    index = hash % 23;
    hash = (hash - index) / 23;
    stringPieces.push(letters[index]); // Push Characters to Array
  }

  unhashedString = stringPieces.reverse().join(""); // Characters found in reverse order need to be reversed and join array pieces to single string

  return unhashedString; // Return unhashed string
}

console.log(unhash(292681030017238)); // crowdgifts

function hash(string) {
  const letters = "acdfgilmnoprstuw"; // Provided Letter Index

  let hash = 7; // Provided Hash Base Value

  for (i = 0; i < string.length; i++) {
    hash = hash * 23 + letters.indexOf(string[i]);
  }

  return hash;
}

console.log(hash("crowdgifts")); // 292681030017238

function verifyHash() {
  const hashString = "crowdgifts";
  const hashValue = 292681030017238;

  if (hashString === unhash(hashValue)) {
    console.log("We have a match!");
  } else {
    console.log("Please try again.");
  }
}

verifyHash();