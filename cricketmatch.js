var headingDiv = document.createElement('div');
headingDiv.setAttribute('id', 'headingcontainer');
headingDiv.setAttribute('style', 'padding-left:200px;');
document.body.appendChild(headingDiv);
var getHeadingContainer = document.getElementById('headingcontainer');
/* Heading Display */
var titleDisplay = document.createElement('h1');
titleDisplay.innerHTML = "Cricket Match Score Board";
getHeadingContainer.appendChild(titleDisplay);
/*timer display*/
var timerDisplay = document.createElement('h2');
timerDisplay.setAttribute('id', 'timerDisplay');
timerDisplay.innerHTML = "Timer 00:60";
getHeadingContainer.appendChild(timerDisplay);
/*team - One Display */
var teamOne = document.createElement('div');
teamOne.setAttribute('id', 'teamOne');
teamOne.setAttribute('style', 'float: left;');
document.body.appendChild(teamOne);
var teamOneID = document.getElementById('teamOne');
var TeamOneDisplay = document.createElement('h1');
TeamOneDisplay.setAttribute('id', 'headTeamOne');
TeamOneDisplay.innerHTML = "Team 1 Details";
teamOneID.appendChild(TeamOneDisplay);
var teamOneButtonClick = document.createElement('button');
teamOneButtonClick.setAttribute('id', 'teamOneButtonClick');
teamOneButtonClick.innerHTML = "Team 1 Button click";
teamOneID.appendChild(teamOneButtonClick);
var scoreBoard = document.createElement('h2');
scoreBoard.innerHTML = "Score Board of Team One";
teamOneID.appendChild(scoreBoard);
/* Team two display */
var teamTwo = document.createElement('div');
teamTwo.setAttribute('id', 'teamTwo');
teamTwo.setAttribute('style', 'float: right;');
document.body.appendChild(teamTwo);
var teamTwoID = document.getElementById('teamTwo');
var teamTwoHeading = document.createElement('h1');
teamTwoHeading.setAttribute('id', 'headTeamTwo');
teamTwoHeading.innerHTML = "Team 2 Details";
teamTwo.appendChild(teamTwoHeading);
var teamTwoButton = document.createElement('button');
teamTwoButton.setAttribute('id', 'teamTwoButtonClick');
teamTwoButton.innerHTML = "Team 2 Button click";
teamTwo.appendChild(teamTwoButton);
// score board for Team Two
var scoreBoardTeamTwo = document.createElement('h2');
scoreBoardTeamTwo.innerHTML = "Score Board for Team Two";
teamTwo.appendChild(scoreBoardTeamTwo);
// disable team two first
var disableTeamTwo = document.getElementById('teamTwoButtonClick');
disableTeamTwo.disabled = true;
/* Timer Enabling  for Team One*/
var timerTeamOne = /** @class */ (function () {
    function timerTeamOne() {
        var _this = this;
        var getTeamOneTimer = document.getElementById('teamOneButtonClick');
        var cnt = 1;
        getTeamOneTimer.addEventListener('click', function (e) {
            _this.timerFirstTeam(cnt);
            cnt++;
        });
    }
    timerTeamOne.prototype.timerFirstTeam = function (cnt) {
        if (cnt == 1) {
            var sec = 10;
            var timer = setInterval(function () {
                document.getElementById('timerDisplay').innerHTML = 'Timer 00:' + sec;
                sec--;
                if (sec < 0) {
                    var disableButtonClickForOne = document.getElementById('teamOneButtonClick');
                    disableButtonClickForOne.disabled = true;
                    var disableButtonClickForTwo = document.getElementById('teamTwoButtonClick');
                    disableButtonClickForTwo.disabled = false;
                    clearInterval(timer);
                    alert('End of Match One u cannot able to click button');
                }
            }, 1000);
        }
    };
    return timerTeamOne;
}());
new timerTeamOne();
/* Timer Enabling  for Team Two*/
var timerTeamTwo = /** @class */ (function () {
    function timerTeamTwo() {
        var _this = this;
        var getTeamTwoTimer = document.getElementById('teamTwoButtonClick');
        var cnt = 1;
        getTeamTwoTimer.addEventListener('click', function (e) {
            _this.timerSecondTeam(cnt);
            cnt++;
        });
    }
    timerTeamTwo.prototype.timerSecondTeam = function (cnt) {
        if (cnt == 1) {
            var sec = 10;
            var timer = setInterval(function () {
                document.getElementById('timerDisplay').innerHTML = 'Timer 00:' + sec;
                sec--;
                if (sec < 0) {
                    var disableButtonClickForTwo = document.getElementById('teamTwoButtonClick');
                    disableButtonClickForTwo.disabled = true;
                    clearInterval(timer);
                    alert('End of Team Two match u cannot able to click button');
                }
            }, 1000);
        }
    };
    return timerTeamTwo;
}());
new timerTeamTwo();
/* Creating Team One Table */
var cellValue = [];
var totalValue = [];
var TableTeamOne = /** @class */ (function () {
    function TableTeamOne() {
        var _this = this;
        var getButtonOneID = document.getElementById('teamOneButtonClick');
        var count = 0;
        var inc = 1;
        var cellUpdate = 0;
        var totalScoreUpdate = 0;
        getButtonOneID.addEventListener('click', function (e) {
            count++;
            var value = [0, 1, 2, 3, 4, 6];
            var randomvalue = value[Math.floor(Math.random() * value.length)];
            if (count <= 6) {
                cellUpdate = cellUpdate + randomvalue;
                totalScoreUpdate = totalScoreUpdate + randomvalue;
            }
            _this.random(count, inc, randomvalue, cellUpdate, totalScoreUpdate);
            if (randomvalue == 0 && count != 6 && inc <= 10) {
                for (var j = 0; count < 6; count++) {
                    var temp = document.getElementById('trt' + inc);
                    var td = document.createElement('td');
                    td.innerHTML = '-';
                    temp.appendChild(td);
                }
                if (count == 6) {
                    var temp = document.getElementById('trt' + inc);
                    var td = document.createElement('td');
                    td.innerHTML = "" + cellUpdate;
                    temp.appendChild(td);
                    cellValue.push(cellUpdate);
                }
                cellUpdate = 0;
                count = 0;
                inc++;
            }
            if (count == 6) {
                count = 0;
                inc++;
                cellUpdate = 0;
            }
        });
    }
    TableTeamOne.prototype.random = function (count, inc, randomvalue, cellUpdate, totalScoreUpdate) {
        if (count < 7 && inc <= 10) {
            var temp = document.getElementById('trt' + inc);
            var td = document.createElement('td');
            td.innerHTML = "" + randomvalue;
            temp.appendChild(td);
        }
        if (count == 6 && inc <= 10) {
            var temp = document.getElementById('trt' + inc);
            var td = document.createElement('td');
            td.innerHTML = "" + cellUpdate;
            temp.appendChild(td);
            cellValue.push(cellUpdate);
        }
        var getButtonOneID = document.getElementById('teamOneButtonClick');
        if (inc === 11 && count == 1) {
            var totalScore = document.createElement('h1');
            totalScore.setAttribute('id', 'head4');
            totalScore.innerHTML = "Total Score: " + totalScoreUpdate;
            teamOneID.appendChild(totalScore);
            totalValue.push(totalScoreUpdate);
        }
    };
    TableTeamOne.prototype.tableCreation1 = function () {
        var body = document.body;
        var table = document.createElement('table');
        table.border = '2';
        var thead = document.createElement('thead');
        var tableRow = document.createElement('tr');
        var tableTopHead = document.createElement('th');
        tableTopHead.innerHTML = "players";
        tableRow.appendChild(tableTopHead);
        thead.appendChild(tableRow);
        for (var i = 1; i < 7; i++) {
            var tableHead = document.createElement('th');
            tableHead.innerHTML = "Ball" + i;
            tableRow.appendChild(tableHead);
            thead.appendChild(tableRow);
        }
        var tableHeadOne = document.createElement('th');
        tableHeadOne.innerHTML = "Total Score Of Each Player";
        tableRow.appendChild(tableHeadOne);
        thead.appendChild(tableRow);
        var tbody = document.createElement('tbody');
        for (var i = 1; i < 11; i++) {
            var tableRowOne = document.createElement('tr');
            tableRowOne.setAttribute('id', 'trt' + i);
            var tableRowHeadOne = document.createElement('th');
            tableRowHeadOne.innerHTML = "Player" + i;
            tableRowOne.appendChild(tableRowHeadOne);
            tbody.appendChild(tableRowOne);
        }
        table.appendChild(tbody);
        table.appendChild(thead);
        teamOneID.appendChild(table);
    };
    return TableTeamOne;
}());
var tableOne = new TableTeamOne();
tableOne.tableCreation1();
var cellValueTeamTwo = [];
var totalValueTeamTwo = [];
/* Table Creation for Team Two */
var TableTeamTwo = /** @class */ (function () {
    function TableTeamTwo() {
        var _this = this;
        var getButtonTwoID = document.getElementById('teamTwoButtonClick');
        var count = 0;
        var inc = 1;
        var cellUpdate = 0;
        var totalScoreUpdate = 0;
        getButtonTwoID.addEventListener('click', function (e) {
            count++;
            var value = [0, 1, 2, 3, 4, 6];
            var randomvalue = value[Math.floor(Math.random() * value.length)];
            if (count <= 6) {
                cellUpdate = cellUpdate + randomvalue;
                totalScoreUpdate = totalScoreUpdate + randomvalue;
            }
            _this.random(count, inc, randomvalue, cellUpdate, totalScoreUpdate);
            if (randomvalue == 0 && count != 6 && inc <= 10) {
                for (var j = 0; count < 6; count++) {
                    var temp = document.getElementById('teamTwo' + inc);
                    var td = document.createElement('td');
                    td.innerHTML = '';
                    temp.appendChild(td);
                }
                if (count == 6) {
                    var temp = document.getElementById('teamTwo' + inc);
                    var td = document.createElement('td');
                    td.innerHTML = "" + cellUpdate;
                    temp.appendChild(td);
                    cellValueTeamTwo.push(cellUpdate);
                }
                cellUpdate = 0;
                count = 0;
                inc++;
            }
            if (count == 6) {
                count = 0;
                inc++;
                cellUpdate = 0;
            }
        });
    }
    TableTeamTwo.prototype.random = function (count, inc, randomvalue, cellUpdate, totalScoreUpdate) {
        if (count < 7 && inc <= 10) {
            var temp = document.getElementById('teamTwo' + inc);
            var td = document.createElement('td');
            td.innerHTML = "" + randomvalue;
            temp.appendChild(td);
        }
        if (count == 6 && inc <= 10) {
            var temp = document.getElementById('teamTwo' + inc);
            var td = document.createElement('td');
            td.innerHTML = "" + cellUpdate;
            temp.appendChild(td);
            cellValueTeamTwo.push(cellUpdate);
        }
        if (inc === 11 && count == 1) {
            var totalScore = document.createElement('h1');
            totalScore.setAttribute('id', 'head4');
            totalScore.innerHTML = "Total Score: " + totalScoreUpdate;
            teamTwoID.appendChild(totalScore);
            totalValueTeamTwo.push(totalScoreUpdate);
            if (totalValue[0]) {
                if (totalValue[0] > totalValueTeamTwo[0]) {
                    var e = document.createElement('h1');
                    e.setAttribute('id', 'result');
                    e.innerHTML = "Team 1 Winner";
                    getHeadingContainer.appendChild(e);
                    var ef = document.createElement('h1');
                    ef.setAttribute('id', 'result');
                    ef.innerHTML = "Man of the Match Player" + ((cellValueTeamTwo.indexOf(Math.max.apply(Math, cellValueTeamTwo))) + 1);
                    getHeadingContainer.appendChild(ef);
                }
                else if (totalValueTeamTwo[0] == totalValue[0]) {
                    var e = document.createElement('h1');
                    e.setAttribute('id', 'result');
                    e.innerHTML = "Draw the Match";
                    getHeadingContainer.appendChild(e);
                }
                else {
                    var e = document.createElement('h1');
                    e.setAttribute('id', 'result');
                    e.innerHTML = "Team 2 Winner";
                    getHeadingContainer.appendChild(e);
                    var ef = document.createElement('h1');
                    ef.setAttribute('id', 'result');
                    ef.innerHTML = "Man of the Match Player" + ((cellValue.indexOf(Math.max.apply(Math, cellValue))) + 1);
                    getHeadingContainer.appendChild(ef);
                }
            }
        }
    };
    TableTeamTwo.prototype.tableCreationTwo = function () {
        var body = document.body;
        var table = document.createElement('table');
        table.border = '2';
        var thead = document.createElement('thead');
        var tableRow = document.createElement('tr');
        var tableTopHead = document.createElement('th');
        tableTopHead.innerHTML = "players";
        tableRow.appendChild(tableTopHead);
        thead.appendChild(tableRow);
        for (var i = 1; i < 7; i++) {
            var tableHead = document.createElement('th');
            tableHead.innerHTML = "Ball" + i;
            tableRow.appendChild(tableHead);
            thead.appendChild(tableRow);
        }
        var tableHeadOne = document.createElement('th');
        tableHeadOne.innerHTML = "Total Score Of Each Player";
        tableRow.appendChild(tableHeadOne);
        thead.appendChild(tableRow);
        var tbody = document.createElement('tbody');
        for (var i = 1; i < 11; i++) {
            var tableRowOne = document.createElement('tr');
            tableRowOne.setAttribute('id', 'teamTwo' + i);
            var tableRowHeadOne = document.createElement('th');
            tableRowHeadOne.innerHTML = "Player" + i;
            tableRowOne.appendChild(tableRowHeadOne);
            tbody.appendChild(tableRowOne);
        }
        table.appendChild(tbody);
        table.appendChild(thead);
        teamTwoID.appendChild(table);
    };
    return TableTeamTwo;
}());
var tableTwo = new TableTeamTwo();
tableTwo.tableCreationTwo();
