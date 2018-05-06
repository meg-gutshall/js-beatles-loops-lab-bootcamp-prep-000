function theBeatlesPlay(musicians, instruments) {
  var sentence = [];
  for (let i = 0; i < 4; i++) {
    sentence.push(musicians[i] + " plays " + instruments[i]);
  }
  return sentence;
}

function johnLennonFacts(facts) {
  var johnFacts = [];
  let i = facts.length - 1;
  while (i > 0) {
    johnFacts.push(facts[i] + "!!!");
    --i;
  }
  return johnFacts;
}