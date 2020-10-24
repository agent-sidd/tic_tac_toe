/**/
var p1=document.querySelector('#plyr1');
var p2=document.querySelector('#plyr2');
var td=document.getElementsByTagName("td");
var WinComb=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,7]
];
var msgBox=document.querySelector("#msgBox");
/*var nm1=prompt("enter first  player name");
var nm2=prompt("enter  second player name ");
p1.textContent=nm1;
p2.textContent=nm2;*/

p1.classList.add("selected");

for(var i=0; i<9; i++){
    td[i].addEventListener("click",function(){
      p1.classList.toggle("selected");
      p2.classList.toggle("selected");
     //check if player 1 turns 
      if(p1.classList.contains("selected")){
         this.textContent="0";
         this.classList.add("ply1");
         if(checkvictory("ply1")){
         msgBox.textContent="player2 wins";
        }
        else{
          if(isdraw()){
            msgBox.textContent="Draw";
          }
     }
      }
      //else  do for 2nd player
      else{
          this.textContent="x";
          this.classList.add("ply2");
          if(checkvictory("ply2")){
            msgBox.textContent="player1 wins";
          }
          else{
            if(isdraw()){
              msgBox.textContent="Draw";
            }
       }
      }
     
        
    },{once:true});
}
var  functioncalls=0;
function checkvictory (current){
functioncalls+=1;
 if(functioncalls>4){
   return WinComb.some(combination=>{
       return combination.every(index=>{
         return td[index].classList.contains(current);
       })
   })
 }
}
function isdraw(){
  return [...td].every(cell=>{
    return cell.classList.contains("ply1")|| cell.classList.contains("ply2") 
  })
}
function refreshPage(){
    for(i=0;i<9;i++){
       td[i].textContent="";
    
    }
    p1.classList.add("selected");
  msgBox.textContent="";
}
