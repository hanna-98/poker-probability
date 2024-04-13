const NUM_TRIALS = 10;
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

function isOnePair(hand) {
  if (
    hand[0].rank === hand[1].rank &&
    hand[1].rank !== hand[2].rank &&
    hand[2].rank !== hand[3].rank &&
    hand[3].rank !== hand[4].rank
  ) {
    return true;
  }
  if (
    hand[0].rank !== hand[1].rank &&
    hand[1].rank === hand[2].rank &&
    hand[2].rank !== hand[3].rank &&
    hand[3].rank !== hand[4].rank
  ) {
    return true;
  }
  if (
    hand[0].rank !== hand[1].rank &&
    hand[1].rank !== hand[2].rank &&
    hand[2].rank === hand[3].rank &&
    hand[3].rank !== hand[4].rank
  ) {
    return true;
  }
  if (
    hand[0].rank !== hand[1].rank &&
    hand[1].rank !== hand[2].rank &&
    hand[2].rank !== hand[3].rank &&
    hand[3].rank === hand[4].rank
  ) {
    return true;
  }
  return false;
}

function isTwoPair(hand) {
  if (
    hand[0].rank === hand[1].rank &&
    hand[1].rank !== hand[2].rank &&
    hand[2].rank === hand[3].rank &&
    hand[3].rank !== hand[4].rank
  ) {
    return true;
  }

  if (
    hand[0].rank === hand[1].rank &&
    hand[1].rank !== hand[2].rank &&
    hand[2].rank !== hand[3].rank &&
    hand[3].rank === hand[4].rank
  ) {
    return true;
  }
  if (
    hand[0].rank !== hand[1].rank &&
    hand[1].rank === hand[2].rank &&
    hand[2].rank !== hand[3].rank &&
    hand[3].rank === hand[4].rank
  ) {
    return true;
  }
  return false;
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

function checkType(hand) {
  if (isOnePair(hand)) return "One pair";
  if (isTwoPair(hand)) return "Two pair";
  if (isThreeOfAKind(hand)) return "Three of a kind";
  if (isFourOfAKind(hand)) return "Four of a kind";
  if (isFullHouse(hand)) return "Full house";
  if (isStraightFlush(hand)) return "Straight flush";
  if (isFlush(hand)) return "Flush";
  if (isStraight(hand)) return "Straight";
  return "High card";
}

let typeCount = {
  "High card": 0,
  "One pair": 0,
  "Two pair": 0,
  "Three of a kind": 0,
  "Four of a kind": 0,
  "Full house": 0,
  Flush: 0,
  Straight: 0,
  "Straight flush": 0,
};

function calculateProbability() {
  const trials = [];
  while (trials.length < NUM_TRIALS) {
    trials.push(checkType(generateHand()));
  }
  trials.forEach((type) => typeCount[type]++);

  Object.keys(typeCount).forEach((type) =>
    console.log(type + ": " + (typeCount[type] / NUM_TRIALS).toFixed(1))
  );
}

calculateProbability();
