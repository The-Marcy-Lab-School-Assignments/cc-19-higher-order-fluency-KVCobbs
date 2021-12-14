//write your code here
function averageAge (arr) {
    // reduce and filter
    // array of objs is killing 
  /*
  I'm not sure how to put this in words but here
  It's wrong but the right idea
  let filteredData = data.filter(({ gender }) => gender == 'female'),
    avg = filteredData.reduce((r, c) => r + c.age, 0) / filteredData.length;
  */
}

function bananaBread (){
    
}

function ninetiesBabies () {
    
}

function addSchool () {
    
}

function allUseJavaScript () {
    
}

function noVoewl (words) {
    return words.map((word) => {word.replace(/[a-z][aeiouy][a-z]/ig,"x")})
}

function onlyVowelA (words) {
    words.filter(word => word.includes('a' || 'A'))
}

function longerThanSeven (words) {
    return words.some(word => word.length)
}

function allFour (words) {
    return words.every(word => word.length === 4);
    
}

function concatString (words ) {
    // join reduce
    return words.reduce((prev, curr) => `${prev} ${curr}`)
}