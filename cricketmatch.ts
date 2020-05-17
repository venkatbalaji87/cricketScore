let headingDiv = document.createElement('div');
headingDiv.setAttribute('id','headingcontainer');
headingDiv.setAttribute('style','padding-left:200px;');
document.body.appendChild(headingDiv);

let getHeadingContainer = document.getElementById('headingcontainer');

/* Heading Display */

let titleDisplay = document.createElement('h1');
titleDisplay.innerHTML = "Cricket Match Score Board";
getHeadingContainer.appendChild(titleDisplay);

/*timer display*/
let timerDisplay = document.createElement('h2');
timerDisplay.setAttribute('id','timerDisplay');
timerDisplay.innerHTML = "Timer 00:60";
getHeadingContainer.appendChild(timerDisplay);

/*team - One Display */
let teamOne = document.createElement('div');
teamOne.setAttribute('id','teamOne');
teamOne.setAttribute('style','float: left;');
document.body.appendChild(teamOne);

let teamOneID = document.getElementById('teamOne');

let TeamOneDisplay = document.createElement('h1');
TeamOneDisplay.setAttribute('id','headTeamOne');
TeamOneDisplay.innerHTML = "Team 1 Details";
teamOneID.appendChild(TeamOneDisplay);

let teamOneButtonClick = document.createElement('button');
teamOneButtonClick.setAttribute('id','teamOneButtonClick');
teamOneButtonClick.innerHTML = "Team 1 Button click";
teamOneID.appendChild(teamOneButtonClick);

let scoreBoard = document.createElement('h2');
scoreBoard.innerHTML = "Score Board of Team One";
teamOneID.appendChild(scoreBoard);

/* Team two display */
let teamTwo = document.createElement('div');
teamTwo.setAttribute('id','teamTwo');
teamTwo.setAttribute('style','float: right;');
document.body.appendChild(teamTwo);

let teamTwoID = document.getElementById('teamTwo');

let teamTwoHeading = document.createElement('h1');
teamTwoHeading.setAttribute('id','headTeamTwo');
teamTwoHeading.innerHTML = "Team 2 Details";
teamTwo.appendChild(teamTwoHeading);

let teamTwoButton = document.createElement('button');
teamTwoButton.setAttribute('id','teamTwoButtonClick')
teamTwoButton.innerHTML = "Team 2 Button click";
teamTwo.appendChild(teamTwoButton);

// score board for Team Two
let scoreBoardTeamTwo = document.createElement('h2');
scoreBoardTeamTwo.innerHTML = "Score Board for Team Two";
teamTwo.appendChild(scoreBoardTeamTwo);

// disable team two first
let disableTeamTwo = <HTMLInputElement>document.getElementById('teamTwoButtonClick');
disableTeamTwo.disabled = true;

/* Timer Enabling  for Team One*/

class timerTeamOne {
    constructor( ) {    
      let getTeamOneTimer = document.getElementById('teamOneButtonClick');
      let cnt = 1;
      getTeamOneTimer.addEventListener('click',(e:Event)=> {
        this.timerFirstTeam(cnt);
        cnt++;
        });
    }
    timerFirstTeam(cnt){
        if(cnt==1){   
        var sec = 10;
        var timer = setInterval(function(){
            document.getElementById('timerDisplay').innerHTML='Timer 00:'+sec;
            sec--;
            if (sec < 0) {
              let disableButtonClickForOne = <HTMLInputElement>document.getElementById('teamOneButtonClick');
              disableButtonClickForOne.disabled = true;
              let disableButtonClickForTwo = <HTMLInputElement>document.getElementById('teamTwoButtonClick');
              disableButtonClickForTwo.disabled = false;
                clearInterval(timer);
                alert('End of Match One u cannot able to click button');
            } 
        }, 1000);
      
      }   
    } 
}

new timerTeamOne();

/* Timer Enabling  for Team Two*/

class timerTeamTwo {
    constructor( ) {    
      let getTeamTwoTimer = document.getElementById('teamTwoButtonClick');
      let cnt = 1;
      getTeamTwoTimer.addEventListener('click',(e:Event)=> {
        this.timerSecondTeam(cnt);
        cnt++;
        });
    }
    timerSecondTeam(cnt){
        if(cnt==1){   
        var sec = 10;
        var timer = setInterval(function(){
            document.getElementById('timerDisplay').innerHTML='Timer 00:'+sec;
            sec--;
            if (sec < 0) {
              let disableButtonClickForTwo = <HTMLInputElement>document.getElementById('teamTwoButtonClick');
              disableButtonClickForTwo.disabled = true;
                clearInterval(timer);
                alert('End of Team Two match u cannot able to click button');
            }  
        }, 1000);
      
      }   
    } 
}
new timerTeamTwo();

/* Creating Team One Table */

let cellValue =[];
let totalValue =[];
class TableTeamOne{
  
    constructor(){
      
      let getButtonOneID = document.getElementById('teamOneButtonClick');
      let count = 0;
      let inc = 1;
      let cellUpdate = 0;
      let totalScoreUpdate = 0;
      getButtonOneID.addEventListener('click',(e:Event)=>{ count++;
        let value = [0,1,2,3,4,6];
      let randomvalue = value[Math.floor(Math.random() * value.length)];
      if (count<=6){
        cellUpdate = cellUpdate + randomvalue;
        totalScoreUpdate = totalScoreUpdate + randomvalue;
      }
     this.random(count,inc,randomvalue,cellUpdate,totalScoreUpdate)
     if(randomvalue==0 && count!=6 && inc<=10){
       for(let j = 0;count< 6;count++){
        var temp = document.getElementById('trt'+inc);
        var td = document.createElement('td');
        td.innerHTML = '-';
        temp.appendChild(td); 
       }
       if(count==6){
        var temp = document.getElementById('trt'+inc);
        var td = document.createElement('td');
        td.innerHTML = `${cellUpdate}`;
        temp.appendChild(td);
        cellValue.push(cellUpdate);
       }
       cellUpdate = 0;
       count = 0;
       inc++;
     }
      
     if (count==6){
      count = 0;
      inc++;
      cellUpdate = 0;
    }  
  });   
    }
    
    random(count,inc,randomvalue,cellUpdate,totalScoreUpdate){
      if(count<7&&inc<=10)
      {
        var temp = document.getElementById('trt'+inc);
        var td = document.createElement('td');
        td.innerHTML = `${randomvalue}`;
        temp.appendChild(td);  
      } 
      if(count==6&&inc<=10){
          var temp = document.getElementById('trt'+inc);
          var td = document.createElement('td');
          td.innerHTML = `${cellUpdate}`;
          temp.appendChild(td);
          cellValue.push(cellUpdate);
      }
      let getButtonOneID = document.getElementById('teamOneButtonClick');
      if(inc===11&&count==1){
        let totalScore= document.createElement('h1');
        totalScore.setAttribute('id','head4');
        totalScore.innerHTML = `Total Score: ${totalScoreUpdate}`;
        teamOneID.appendChild(totalScore);     
        totalValue.push(totalScoreUpdate);   
      }
        }
  
    tableCreation1(){
      var body = document.body;
      var table = document.createElement('table');
      table.border = '2';
      var thead = document.createElement('thead');
      var tableRow = document.createElement('tr');
      var tableTopHead = document.createElement('th');
      tableTopHead.innerHTML = `players`;
      tableRow.appendChild(tableTopHead);
      thead.appendChild(tableRow);
      for(let i = 1; i<7;i++){
        var tableHead = document.createElement('th');
        tableHead.innerHTML = `Ball${i}`;
        tableRow.appendChild(tableHead);
        thead.appendChild(tableRow);
      }
  
      var tableHeadOne = document.createElement('th');
      tableHeadOne.innerHTML = `Total Score Of Each Player`;
      tableRow.appendChild(tableHeadOne);
      thead.appendChild(tableRow);
      var tbody = document.createElement('tbody');
      for(let i=1;i<11;i++){
      var tableRowOne = document.createElement('tr');
      tableRowOne.setAttribute('id','trt'+i);
      var tableRowHeadOne = document.createElement('th');
      tableRowHeadOne.innerHTML = `Player${i}`;
      tableRowOne.appendChild(tableRowHeadOne);
      tbody.appendChild(tableRowOne);
    }
      table.appendChild(tbody);
      table.appendChild(thead);
      teamOneID.appendChild(table);
    }
  }
  var tableOne = new TableTeamOne();
  tableOne.tableCreation1();


  let cellValueTeamTwo =[];
  let totalValueTeamTwo =[];

  /* Table Creation for Team Two */

  class TableTeamTwo{
  
    constructor(){
      
      let getButtonTwoID = document.getElementById('teamTwoButtonClick');
      let count = 0;
      let inc = 1;
      let cellUpdate = 0;
      let totalScoreUpdate = 0;
      getButtonTwoID.addEventListener('click',(e:Event)=>{ count++;
        let value = [0,1,2,3,4,6];
      let randomvalue = value[Math.floor(Math.random() * value.length)];
      if (count<=6){
        cellUpdate = cellUpdate + randomvalue;
        totalScoreUpdate = totalScoreUpdate + randomvalue;
      }
     this.random(count,inc,randomvalue,cellUpdate,totalScoreUpdate)
     if(randomvalue==0 && count!=6 && inc<=10){
       for(let j = 0;count< 6;count++){
        var temp = document.getElementById('teamTwo'+inc);
        var td = document.createElement('td');
        td.innerHTML = '';
        temp.appendChild(td); 
       }
       if(count==6){
        var temp = document.getElementById('teamTwo'+inc);
        var td = document.createElement('td');
        td.innerHTML = `${cellUpdate}`;
        temp.appendChild(td);
        cellValueTeamTwo.push(cellUpdate);
       }
       cellUpdate = 0;
       count = 0;
       inc++;
     }
      
     if (count==6){
      count = 0;
      inc++;
      cellUpdate = 0;
    }  
  });   
    }
    
    random(count,inc,randomvalue,cellUpdate,totalScoreUpdate){
      if(count<7&&inc<=10)
      {
        var temp = document.getElementById('teamTwo'+inc);
        var td = document.createElement('td');
        td.innerHTML = `${randomvalue}`;
        temp.appendChild(td);  
      } 
      if(count==6&&inc<=10){
          var temp = document.getElementById('teamTwo'+inc);
          var td = document.createElement('td');
          td.innerHTML = `${cellUpdate}`;
          temp.appendChild(td);
          cellValueTeamTwo.push(cellUpdate);
      }
      if(inc===11&&count==1){
        let totalScore= document.createElement('h1');
        totalScore.setAttribute('id','head4');
        totalScore.innerHTML = `Total Score: ${totalScoreUpdate}`;
        teamTwoID.appendChild(totalScore);     
        totalValueTeamTwo.push(totalScoreUpdate);
        
        if(totalValue[0])
        {
        if(totalValue[0]>totalValueTeamTwo[0]){
            let e = document.createElement('h1');
            e.setAttribute('id','result');
            e.innerHTML = "Team 1 Winner";
            getHeadingContainer.appendChild(e);
            let ef = document.createElement('h1');
            ef.setAttribute('id','result');
            ef.innerHTML = `Man of the Match Player${(cellValueTeamTwo.indexOf(Math.max(...cellValueTeamTwo))) + 1}`;
            getHeadingContainer.appendChild(ef);
        }
        else if(totalValueTeamTwo[0]==totalValue[0]){
          let e = document.createElement('h1');
          e.setAttribute('id','result');
          e.innerHTML = "Draw the Match";
          getHeadingContainer.appendChild(e);
        }
        
      else{
        let e = document.createElement('h1');
        e.setAttribute('id','result');
        e.innerHTML = "Team 2 Winner";
        getHeadingContainer.appendChild(e);
        let ef = document.createElement('h1');
        ef.setAttribute('id','result');
        ef.innerHTML = `Man of the Match Player${(cellValue.indexOf(Math.max(...cellValue))) + 1}`;
        getHeadingContainer.appendChild(ef);
      }
      }

      }
 }
  
    tableCreationTwo(){
      var body = document.body;
      var table = document.createElement('table');
      table.border = '2';
      var thead = document.createElement('thead');
      var tableRow = document.createElement('tr');
      var tableTopHead = document.createElement('th');
      tableTopHead.innerHTML = `players`;
      tableRow.appendChild(tableTopHead);
      thead.appendChild(tableRow);
      for(let i = 1; i<7;i++){
        var tableHead = document.createElement('th');
        tableHead.innerHTML = `Ball${i}`;
        tableRow.appendChild(tableHead);
        thead.appendChild(tableRow);
      }
  
      var tableHeadOne = document.createElement('th');
      tableHeadOne.innerHTML = `Total Score Of Each Player`;
      tableRow.appendChild(tableHeadOne);
      thead.appendChild(tableRow);
      var tbody = document.createElement('tbody');
      for(let i=1;i<11;i++){
      var tableRowOne = document.createElement('tr');
      tableRowOne.setAttribute('id','teamTwo'+i);
      var tableRowHeadOne = document.createElement('th');
      tableRowHeadOne.innerHTML = `Player${i}`;
      tableRowOne.appendChild(tableRowHeadOne);
      tbody.appendChild(tableRowOne);
    }
      table.appendChild(tbody);
      table.appendChild(thead);
      teamTwoID.appendChild(table);
    }
  }
  var tableTwo = new TableTeamTwo();
  tableTwo.tableCreationTwo();
  