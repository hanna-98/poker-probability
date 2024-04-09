// high card / no pairs -> return high card / no pairs

// if one pair eg [10S 10H 8S 7H 4C] -> length of groupedByRank should be 4

// case for two pair eg [JH JS 3C 3S 2H] -> length of groupedByRank should be 3 && max size of it's elements should be 2

// case for three of a kind eg [QC QS QH 9H 2S] -> length of groupedByRank should be 3 && max size of it's elements should be 3

// case for four of a kind eg [5C 5D 5H 5S 2D] -> length of groupedByRank should be 2 && max size of it's elements should be 4

// case for full house eg [6S 6H 6D KC KH] -> length of groupedByRank should be 2 && max size of it's elements should be 3

// case for flush eg [JD 9D 8D 4D 3D] -> length of groupedBySuit should be 1

// case for straight eg [10D 9S 8H 7D 6C] -> length of groupedByRank should be 5 && consecutive

// straight flush eg [JC 10C 9C 8C 7C] -> conditions of straight && flush

const suits = ["C", "D", "H", "S"];
const ranks = [
  "A",
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];

function generateCard() {
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomRank = ranks[Math.floor(Math.random() * ranks.length)];
  return { rank: randomRank, suit: randomSuit };
}

function generateHand() {
  const hand = [
    generateCard(),
    generateCard(),
    generateCard(),
    generateCard(),
    generateCard(),
  ];
  return hand;
}

function isThreeOfAKind(ranks) {
  return Object.keys(ranks).length === 3 &&
    Object.values(ranks).find((element) => element.length === 3)
    ? true
    : false;
}

function isFourOfAKind(ranks) {
  return Object.keys(ranks).length === 2 &&
    Object.values(ranks).find((element) => element.length === 4)
    ? true
    : false;
}

function isFullHouse(ranks) {
  // check for four of a kind first as this will be true for both full house and four of a kind
  return Object.keys(ranks).length === 2;
}

function checkType(hand) {
  const groupedByRank = Object.groupBy(hand, ({ rank }) => rank);

  if (isFourOfAKind(groupedByRank)) {
    return "Four of a kind";
  } else if (isThreeOfAKind(groupedByRank)) {
    return "Three of a kind";
  } else if (isFullHouse(groupedByRank)) {
    return "Full house";
  }

  //   let groupedByRank = Object.groupBy(hand, ({ rank }) => rank);
  //   let groupedBySuit = Object.groupBy(hand, ({ suit }) => suit);

  //   console.log("suits: ", groupedBySuit);
  //   console.log("ranks: ", groupedByRank);

  //   console.log("ranks -> ", Object.keys(groupedByRank));
  //   console.log("suits -> ", Object.keys(groupedBySuit));
}

const threeOfAKindHand = [
  { rank: "Q", suit: "C" },
  { rank: "Q", suit: "S" },
  { rank: "Q", suit: "H" },
  { rank: "9", suit: "H" },
  { rank: "2", suit: "S" },
];

const fourOfAKindHand = [
  { rank: "5", suit: "C" },
  { rank: "5", suit: "D" },
  { rank: "5", suit: "H" },
  { rank: "5", suit: "S" },
  { rank: "2", suit: "D" },
];

const fullHouseHand = [
  { rank: "6", suit: "S" },
  { rank: "6", suit: "H" },
  { rank: "6", suit: "D" },
  { rank: "K", suit: "C" },
  { rank: "K", suit: "H" },
];

const randomHand = generateHand();

// const groupedByRank = Object.groupBy(fullHouseHand, ({ rank }) => rank);
// console.log(isFullHouse(groupedByRank));

console.log(checkType(threeOfAKindHand));
