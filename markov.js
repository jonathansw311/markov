/** Textual markov chain generator */
//Side note::: I have to move on from this project.  It does not make any sense to me and  caused me to take a week or more off
//from doing this course, I thought I would come back to it refreshed but all it did was frustrate me even more when
//I attempted to finish it.  


//


const fs = require('fs');
let wordss=""
fs.readFile('eggs.txt', 'utf8', (err, data)=>{
if(err){
  console.log(err)
  process.kill
}
  else{
    wordss= data
    //console.log('data', wordss)
  }
})


class MarkovMachine {

    /** build markov machine; read in text.*/
  
    // constructor(text) {
    //   let words = text.split(/[ \r\n]+/);
    constructor(wordss) {
      let words = wordss.split(/[ \r\n]+/);
      this.words = words.filter(c => c !== "");
      console.log('asdfasdfasdfasdf')
      console.log("words", wordss)
      this.makeChains();
      
    }
  
    /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */
  
    makeChains() {
      //init chain obj
      let chain = {}
      let words = this.words;
      //loop through the array of words
      words.forEach((word, index) =>{
      console.log(word)
      console.log(index)
      
        //looks to see if the work is a key.  If it is not a key we set it as a key and the value is the first word after the initial
        //time the key is in the array.  if the word is found as a key...
        if (chain[word]){
          chain[word].push(words[index+1])
          if(chain[word[index+1]]==undefined){
            console.log(chain[word][index+1])
            chain[word[index+1]]= null}
          }
        
                          
              else{
                //if the word is not a key
             let values = [];
             //we set it to a key and the word after the key is set as a value in an array
             let followingPosition=words.indexOf(word)+1
             values.push(words[followingPosition])
             chain[word]=values;
       
              }
                      })
      console.log(chain)
      this.chain= chain;
      
                    }
    
  
    /** return random text from chains */
  
    makeText(numWords = 100) {
      let output = []
      let chain = this.chain;
     
      let words = Object.keys(chain);
      
      while(numWords > 0 ){
        let randomWord = Math.floor(Math.random() * words.length);
        if (words[randomWord]==='undefined'){
          return output
        }
        output.push(words[randomWord])
        numWords --;
      }
      return output;
      
      console.log(randomWord)
      // TODO
    }
  }
  console.log('wordds before new markov', wordss)
  let mm = new MarkovMachine(wordss);
  mm.makeChains()

  module.exports = {MarkovMachine: MarkovMachine}
