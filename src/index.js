module.exports = function check(str, bracketsConfig) {
  const bracketpairs = [];
  for(let i =0;i<bracketsConfig.length;i++){
    bracketpairs.push(bracketsConfig[i][0]+bracketsConfig[i][1])
  }
  for(let i = 0; i < str.length;){
    if(str.includes(bracketpairs[i])){
      str = str.replace(bracketpairs[i],"");
      i = 0;
    }
   else i++
  }
  return str.length === 0 
}
