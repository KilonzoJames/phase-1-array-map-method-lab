const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased(){
  return tutorials.map(title=>{
    let str="";
    const split=title.split(" ") 
    for(let i=0;i<split.length;i++ ){
     const s= split[i].charAt(0).toUpperCase()+ split[i].slice(1)
     console.log(split[i].charAt(0).toUpperCase()+ split[i].slice(1));
     str+=s+" ";
    } 
    return str.trim();    
  })};
  console.log(titleCased());
