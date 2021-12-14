//write your code here
function averageAge (alumni) {
    // reduce and filter
    //map and then reduce 
    // array of objs is killing 
  /*
  Idea of what to do
  For each through the object.
  Push the obj into an empty arr 
  
  I'm not sure how to put this in words but here
  It's wrong but the right idea
  let filteredData = data.filter(({ gender }) => gender == 'female'),
    avg = filteredData.reduce((r, c) => r + c.age, 0) / filteredData.length;
  */
  
 return Math.floor(alumni.reduce((a, b) => {return a + b.age},0 /alumni.length))
}

function bananaBread (alumni){
  // return Math.floor(alumni.reduce((a, b) => {return a + b.age},0 /alumni.length))
  return alumni.map((student) => {
  student.bananaBread = `${student.name} got banana bread at ${student.job}`
  return student
    })
}



function ninetiesBabies (alumni) {
    return alumni.filter(student => student.age > 21)
}

function addSchool (alumni) {
    return alumni.map(student => {
        return (...student, school: 'The Marcy Lab School')
    })
}

function allUseJavaScript () {
    // every 
    return alumni.every((student) => {
        student.language === "JavaScript")
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