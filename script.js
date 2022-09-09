const noun = ['candle', 'stick', 'door', 'cup'];
const verb = ['ran', 'dropped', 'signed', 'threw'];

const getNoun = () => {
  return noun[Math.floor(Math.random() * noun.length)];


};

const getVerb = () => {
  return verb[Math.floor(Math.random() * verb.length)];

};


const printRandomMessage = () => {
  return `The ${getNoun()} ${getVerb()} the ${getNoun()}!`
}

console.log(printRandomMessage());
