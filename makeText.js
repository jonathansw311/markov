/** Command-line tool to generate Markov text. */

const MarkovMachine = require('./markov')
let input1 = process.argv[2]

let mm = new MarkovMachine(input1)

//console.log(mm.words)