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
  let randomSuitIndex = Math.floor(Math.random() * suits.length);
  let randomRankIndex = Math.floor(Math.random() * ranks.length);
  return { rank: randomRankIndex, suit: randomSuitIndex };
}

function generateHand() {
  const hand = [];
  while (hand.length < 5) {
    const card = generateCard();
    if (!hand.includes(card)) {
      hand.push(card);
    }
  }

  return hand.sort((a, b) => a.rank - b.rank);
}

function isThreeOfAKind(hand) {
  if (
    hand[0].rank === hand[1].rank &&
    hand[1].rank === hand[2].rank &&
    hand[2].rank !== hand[3].rank &&
    hand[3].rank !== hand[4].rank
  ) {
    return true;
  }

  if (
    hand[0].rank !== hand[1].rank &&
    hand[1].rank === hand[2].rank &&
    hand[2].rank === hand[3].rank &&
    hand[3].rank !== hand[4].rank
  ) {
    return true;
  }

  if (
    hand[0].rank !== hand[1].rank &&
    hand[1].rank !== hand[2].rank &&
    hand[2].rank === hand[3].rank &&
    hand[3].rank === hand[4].rank
  ) {
    return true;
  }

  return false;
}

function isFourOfAKind(hand) {
  if (
    hand[0].rank === hand[1].rank &&
    hand[1].rank === hand[2].rank &&
    hand[2].rank === hand[3].rank
  ) {
    return true;
  }

  if (
    hand[1].rank === hand[2].rank &&
    hand[2].rank === hand[3].rank &&
    hand[3].rank === hand[4].rank
  ) {
    return true;
  }
  return false;
}

function isFullHouse(hand) {
  if (
    hand[0].rank === hand[1].rank &&
    hand[1].rank === hand[2].rank &&
    hand[2].rank !== hand[3].rank &&
    hand[3].rank === hand[4].rank
  ) {
    return true;
  }
  if (
    hand[0].rank === hand[1].rank &&
    hand[1].rank !== hand[2].rank &&
    hand[2].rank === hand[3].rank &&
    hand[3].rank === hand[4].rank
  ) {
    return true;
  }
  return false;
}

function isFlush(hand) {
  if (
    hand[0].suit === hand[1].suit &&
    hand[1].suit === hand[2].suit &&
    hand[2].suit === hand[3].suit &&
    hand[3].suit === hand[4].suit
  ) {
    return true;
  }
  return false;
}

function isStraight(hand) {
  if (
    hand[0].rank === hand[1].rank - 1 &&
    hand[1].rank === hand[2].rank - 1 &&
    hand[2].rank === hand[3].rank - 1 &&
    hand[3].rank === hand[4].rank - 1
  ) {
    return true;
  }
  return false;
}

function isStraightFlush(hand) {
  return isFlush(hand) && isStraight(hand);
}
console.log(isStraightFlush(straightFlushHand));

// test cases

const threeOfAKindHand = [
  { rank: 2, suit: 0 },
  { rank: 2, suit: 3 },
  { rank: 2, suit: 2 },
  { rank: 5, suit: 2 },
  { rank: 12, suit: 3 },
];

const fourOfAKindHand = [
  { rank: 2, suit: 1 },
  { rank: 5, suit: 0 },
  { rank: 5, suit: 1 },
  { rank: 5, suit: 3 },
  { rank: 5, suit: 2 },
];

const fullHouseHand = [
  { rank: 1, suit: 0 },
  { rank: 1, suit: 2 },
  { rank: 8, suit: 3 },
  { rank: 8, suit: 2 },
  { rank: 8, suit: 1 },
];

const flushHand = [
  { rank: 3, suit: 1 },
  { rank: 5, suit: 1 },
  { rank: 6, suit: 1 },
  { rank: 10, suit: 1 },
  { rank: 11, suit: 1 },
];

const straightHand = [
  { rank: 4, suit: 1 },
  { rank: 5, suit: 3 },
  { rank: 6, suit: 2 },
  { rank: 7, suit: 1 },
  { rank: 8, suit: 0 },
];

const straightFlushHand = [
  { rank: 3, suit: 0 },
  { rank: 4, suit: 0 },
  { rank: 5, suit: 0 },
  { rank: 6, suit: 0 },
  { rank: 7, suit: 0 },
];
