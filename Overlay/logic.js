/*

Coded by Slumware(#9370)
Please follow me on YouTube and Twitch

*/

const ws = new WebSocket('ws://localhost:49122');
//////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
function orangeResetAll() {
    //$("div[id^='orange-player-']").text('')
    $('#orange-team-name').text('')
    $("#orange-player-1, #orange-player-2, #orange-player-1").addClass('d-none')
    $('#orange-player-1-p-bar, #orange-player-2-p-bar, #orange-player-3-p-bar').width('0%')
}
function blueResetAll() {
    //$("div[id^='blue-player-']").text('')
    $('#blue-team-name').text('')
    $("#blue-player-1, #blue-player-2, #blue-player-1").addClass('d-none')

    $('#blue-player-1-p-bar, #blue-player-2-p-bar, #blue-player-3-p-bar').width('0%')
}


function xMath(x) {
    var xCoord = (190 / x)
    return xCoord;
}

function yMath(y) {
    var yCoord = (150 / y)
    return yCoord;
}

var dataSet = [
    [0, 0],
];


var w = 380,
    h = 300;

// calculate max/min for x and y here if necessary
/*
    var xScale = d3.scale.linear()
      .domain([-5140, 4074])
      .range([0, w]);

    var yScale = d3.scale.linear()
      .domain([5140, -4074])
      .range([0, h]);

    var svg = d3.select("#mapy")
      .append("svg")
      .attr("width", w + 80) //was + 100
      .attr("height", h + 65) //was + 100
      .append('svg:g')
      .attr('transform', 'translate(15,15)');



    svg.selectAll("circle")
      .data(dataSet)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return xScale(d[0]);
      })
      .attr("cy", function (d) {
        return yScale(d[1]);
      })
      .attr("r", 4);

    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .tickSize(1);

    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .tickSize(1);
*/

ws.onerror = (error) => {
    console.log(`WebSocket error: ${error}`)
}

ws.onmessage = (e) => {

    var jEvent = JSON.parse(event.data);


    //console.log(jEvent.data)
    /*var g=0
    if(g==0){
      g=1
      var blueWins = 0
      var orangeWins = 0
      $('.win_marks').addClass('invisible');
    }*/
    var teamData = jEvent.data.game.teams
    var team1_name = jEvent.data.game.teams['1'].name
    var team2_name = jEvent.data.game.teams['0'].name
    var playerList = jEvent.data.players
    var team0 = _.filter(playerList, { team: 0 })
    var team1 = _.filter(playerList, { team: 1 })
    var orange1 = _.get(team0, [0])
    var orange2 = _.get(team0, [1])
    var orange3 = _.get(team0, [2])
    var blue1 = _.get(team1, [0])
    var blue2 = _.get(team1, [1])
    var blue3 = _.get(team1, [2])

    //console.log(jEvent.data.game.isReplay)
    //console.log(jEvent.data.game.hasWinner)
    if (jEvent.event == "game:update_state") {
        if (jEvent.data.game.hasWinner == true) { // || jEvent.data.game.isReplay == true will be added on prod
            //if (jEvent.event == "game:podium_start") {

                //gonna be used in a few spots

                document.querySelector("#end-card-orange-team-name").innerHTML = team1_name
                document.querySelector("#end-card-blue-team-name").innerHTML = team2_name
                document.querySelector("#player1_name").innerHTML = orange1.name
                document.querySelector("#player2_name").innerHTML = orange2.name
                document.querySelector("#player3_name").innerHTML = orange3.name
                document.querySelector("#player4_name").innerHTML = blue1.name
                document.querySelector("#player5_name").innerHTML = blue2.name
                document.querySelector("#player6_name").innerHTML = blue3.name
                ///////////////////////////////////////////////////////////////////////////////////////////
                document.querySelector("#player1_score").innerHTML = orange1.score
                document.querySelector("#player2_score").innerHTML = orange2.score
                document.querySelector("#player3_score").innerHTML = orange3.score
                document.querySelector("#player4_score").innerHTML = blue1.score
                document.querySelector("#player5_score").innerHTML = blue2.score
                document.querySelector("#player6_score").innerHTML = blue3.score
                ////////////////////////////////////////////////////////////////////////////////////////////
                document.querySelector("#player1_goals").innerHTML = orange1.goals
                document.querySelector("#player2_goals").innerHTML = orange2.goals
                document.querySelector("#player3_goals").innerHTML = orange3.goals
                document.querySelector("#player4_goals").innerHTML = blue1.goals
                document.querySelector("#player5_goals").innerHTML = blue2.goals
                document.querySelector("#player6_goals").innerHTML = blue3.goals
                /////////////////////////////////////////////////////////////////////////////////////////////
                document.querySelector("#player1_assists").innerHTML = orange1.assists
                document.querySelector("#player2_assists").innerHTML = orange2.assists
                document.querySelector("#player3_assists").innerHTML = orange3.assists
                document.querySelector("#player4_assists").innerHTML = blue1.assists
                document.querySelector("#player5_assists").innerHTML = blue2.assists
                document.querySelector("#player6_assists").innerHTML = blue3.assists
                /////////////////////////////////////////////////////////////////////////////////////////////
                document.querySelector("#player1_saves").innerHTML = orange1.saves
                document.querySelector("#player2_saves").innerHTML = orange2.saves
                document.querySelector("#player3_saves").innerHTML = orange3.saves
                document.querySelector("#player4_saves").innerHTML = blue1.saves
                document.querySelector("#player5_saves").innerHTML = blue2.saves
                document.querySelector("#player6_saves").innerHTML = blue3.saves
                /////////////////////////////////////////////////////////////////////////////////////////////
                document.querySelector("#player1_shots").innerHTML = orange1.shots
                document.querySelector("#player2_shots").innerHTML = orange2.shots
                document.querySelector("#player3_shots").innerHTML = orange3.shots
                document.querySelector("#player4_shots").innerHTML = blue1.shots
                document.querySelector("#player5_shots").innerHTML = blue2.shots
                document.querySelector("#player6_shots").innerHTML = blue3.shots
                /////////////////////////////////////////////////////////////////////////////////////////////
                document.querySelector("#player1_demos").innerHTML = orange1.demos
                document.querySelector("#player2_demos").innerHTML = orange2.demos
                document.querySelector("#player3_demos").innerHTML = orange3.demos
                document.querySelector("#player4_demos").innerHTML = blue1.demos
                document.querySelector("#player5_demos").innerHTML = blue2.demos
                document.querySelector("#player6_demos").innerHTML = blue3.demos

                document.getElementById("main-ui").setAttribute("style", "display:none");
                document.getElementById("end-stats").setAttribute("style", "display:block");
           // }
        } else {

            //document.querySelector("#timer").innerHTML = myTime(round);
            //document.querySelector("#blue_score").innerHTML = jEvent.data.game.teams['1'].score;
            //document.querySelector("#orange_score").innerHTML = jEvent.data.game.teams['1'].score;
            /////////////////////////////////////////////////////////////////////////////////////////////

            //replay code
            if (jEvent.data.game.isReplay == true) {
                document.getElementById("replay").setAttribute("style", "display:block");
            } else {
                document.getElementById("replay").setAttribute("style", "display:none");
            }
            //show the ui
            document.getElementById("main-ui").setAttribute("style", "display:block");
            document.getElementById("end-stats").setAttribute("style", "display:none");
            //time
            var gameTime = jEvent.data.game.time_seconds
            var round = Math.round(gameTime)

            function myTime(time) {

                var min = ~~((time % 3600) / 60);
                var sec = time % 60;
                var sec_min = "";
                sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
                sec_min += "" + sec;
                return sec_min;
            }
            $('#timer').text(myTime(round))

            //team names
            var blueName = _.get(teamData, [0, 'name'])
            var orangeName = _.get(teamData, [1, 'name'])

            if (blueName.length > 1 && orangeName.length > 1) {
                $('#blue-team-name').text(blueName)
                $('#blue-team-name').removeClass('d-none')
                $('#orange-team-name').text(orangeName)
                $('#orange-team-name').removeClass('d-none')
            }


            //score
            var blueScore = _.get(teamData, [0, 'score'])
            var orangeScore = _.get(teamData, [1, 'score'])

            $('#blue-score').text(blueScore)
            $('#orange-score').text(orangeScore)

            //overtime logic
            if (jEvent.data.game.isOT == true) {
                $('#overtime-text').removeClass('d-none')
            } else {
                $('#overtime-text').addClass('d-none')
            }

            //ball pos
            /*var ballArr = [jEvent.data.game.ballX, jEvent.data.game.ballY]
            var ballPos = xScale(jEvent.data.game.ballX) + ', ' + yScale(jEvent.data.game.ballY)
     
            var my_transform = d3Transform()
              .translate(ballPos)
     
     
            svg.selectAll("circle")
              .attr('transform', my_transform)
              .attr("cx", function (d) {
                return xScale(d[0]);
              })
              .attr("cy", function (d) {
                return yScale(d[1]);
              })
              .attr("r", 4);*/


            //console.log(ballPos)

            /* svg.selectAll("circle")
               .data([ballArr])
               .enter()
               .append("circle")
               .attr("cx", function (d) {
                 return xScale(d[0]);
               })
               .attr("cy", function (d) {
                 return yScale(d[1]);
               })
               .attr("r", 4);*/


            //active player logic
            var activeTarget = jEvent.data.game.target;
            var playerList = jEvent.data.players;
            var activePlayerData = _.get(playerList, activeTarget);


            if (activeTarget.length > 1) {


                if (activePlayerData.team == 0) {
                    $('#blue-team-active').removeClass('invisible');
                    $('#orange-team-active').addClass('invisible');

                    $('#blue-active-name').text(activePlayerData.name)
                    $('#blue-active-speed').text(activePlayerData.speed)
                    $('#blue-active-goals').text(activePlayerData.goals)
                    $('#blue-active-demos').text(activePlayerData.demos)
                    $('#blue-active-shots').text(activePlayerData.shots)
                    $('#blue-active-saves').text(activePlayerData.saves)
                    $('#blue-active-assists').text(activePlayerData.assists)
                    $('#blue-active-touches').text(activePlayerData.touches)
                    $('#blue-active-score').text(activePlayerData.score)
                    $('#blue-active-boost').text(activePlayerData.boost)
                    $('#blue-active-p-bar').height(activePlayerData.boost + "%")


                } else if (activePlayerData.team == 1) {
                    $('#orange-team-active').removeClass('invisible');
                    $('#blue-team-active').addClass('invisible');

                    $('#orange-active-name').text(activePlayerData.name)
                    $('#orange-active-speed').text(activePlayerData.speed)
                    $('#orange-active-goals').text(activePlayerData.goals)
                    $('#orange-active-demos').text(activePlayerData.demos)
                    $('#orange-active-shots').text(activePlayerData.shots)
                    $('#orange-active-saves').text(activePlayerData.saves)
                    $('#orange-active-assists').text(activePlayerData.assists)
                    $('#orange-active-touches').text(activePlayerData.touches)
                    $('#orange-active-score').text(activePlayerData.score)
                    $('#orange-active-boost').text(activePlayerData.boost)
                    $('#orange-active-p-bar').height(activePlayerData.boost + "%")

                } else {
                    console.log('oopsie')
                }

            } else {
                $('#blue-team-active').addClass('invisible');
                $('#orange-team-active').addClass('invisible');
            }

            //all player logic

            //blue
            var team0 = _.filter(playerList, {
                'team': 0
            })
            //orange
            var team1 = _.filter(playerList, {
                'team': 1
            })




            //does blue team exist?
            if (team0 != undefined) {
                //it does

                //blue players btw
                var blue1 = _.get(team0, [0])
                var blue2 = _.get(team0, [1])
                var blue3 = _.get(team0, [2])

                if (blue1 != undefined && blue2 != undefined && blue3 != undefined) {

                    $("div[id^='blue-player-']").removeClass('d-none')

                    $('#blue-player-3').removeClass('d-none')
                    $('#blue-player-3-name').text(blue3.name)
                    $('#blue-player-3-goals').text(blue3.goals)
                    $('#blue-player-3-shots').text(blue3.shots)
                    $('#blue-player-3-saves').text(blue3.saves)
                    $('#blue-player-3-assists').text(blue3.assists)
                    $('#blue-player-3-boost').text(blue3.boost)
                    $('#blue-player-3-p-bar').width(blue3.boost + "%")

                    $('#blue-player-2').removeClass('d-none')
                    $('#blue-player-2-name').text(blue2.name)
                    $('#blue-player-2-goals').text(blue2.goals)
                    $('#blue-player-2-shots').text(blue2.shots)
                    $('#blue-player-2-saves').text(blue2.saves)
                    $('#blue-player-2-assists').text(blue2.assists)
                    $('#blue-player-2-boost').text(blue2.boost)
                    $('#blue-player-2-p-bar').width(blue2.boost + "%")

                    //remove invis for p1 and do other shit
                    $('#blue-player-1').removeClass('d-none')
                    $('#blue-player-1-name').text(blue1.name)
                    $('#blue-player-1-goals').text(blue1.goals)
                    $('#blue-player-1-shots').text(blue1.shots)
                    $('#blue-player-1-saves').text(blue1.saves)
                    $('#blue-player-1-assists').text(blue1.assists)
                    $('#blue-player-1-boost').text(blue1.boost)
                    $('#blue-player-1-p-bar').width(blue1.boost + "%")





                } else if (blue1 != undefined && blue2 != undefined && blue3 == undefined) {

                    $('#blue-player-1').removeClass('d-none')
                    $('#blue-player-1-name').text(blue1.name)
                    $('#blue-player-1-goals').text(blue1.goals)
                    $('#blue-player-1-shots').text(blue1.shots)
                    $('#blue-player-1-saves').text(blue1.saves)
                    $('#blue-player-1-assists').text(blue1.assists)
                    $('#blue-player-1-boost').text(blue1.boost)
                    $('#blue-player-1-p-bar').width(blue1.boost + "%")

                    $('#blue-player-2').removeClass('d-none')
                    $('#blue-player-2-name').text(blue2.name)
                    $('#blue-player-2-goals').text(blue2.goals)
                    $('#blue-player-2-shots').text(blue2.shots)
                    $('#blue-player-2-saves').text(blue2.saves)
                    $('#blue-player-2-assists').text(blue2.assists)
                    $('#blue-player-2-boost').text(blue2.boost)
                    $('#blue-player-2-p-bar').width(blue2.boost + "%")

                    /* $('#blue-player-3').addClass('d-none');
                     $("div[id^='blue-player-3']").text('')
                     $('#blue-player-3-p-bar').width('0%')*/

                } else if (blue1 != undefined && blue2 == undefined && blue3 == undefined) {

                    $('#blue-player-1').removeClass('d-none')
                    $('#blue-player-1-name').text(blue1.name)
                    $('#blue-player-1-goals').text(blue1.goals)
                    $('#blue-player-1-shots').text(blue1.shots)
                    $('#blue-player-1-saves').text(blue1.saves)
                    $('#blue-player-1-assists').text(blue1.assists)
                    $('#blue-player-1-boost').text(blue1.boost)
                    $('#blue-player-1-p-bar').width(blue1.boost + "%")

                    /*$('#blue-player-2').addClass('d-none');
                    $("div[id^='blue-player-2']").text('')
                    $('#blue-player-2-p-bar').width('0%')
      
                    $('#blue-player-3').addClass('d-none');
                    $("div[id^='blue-player-3']").text('')
                    $('#blue-player-3-p-bar').width('0%')*/

                }

            } else {
                blueResetAll()
            }

            //does orange team exist?
            if (team1 != undefined) {
                //it does

                //orange players btw
                var orange1 = _.get(team1, [0])
                var orange2 = _.get(team1, [1])
                var orange3 = _.get(team1, [2])

                if (orange1 != undefined && orange2 != undefined && orange3 != undefined) {

                    $("div[id^='orange-player-']").removeClass('d-none')

                    $('#orange-player-3').removeClass('d-none')
                    $('#orange-player-3-name').text(orange3.name)
                    $('#orange-player-3-goals').text(orange3.goals)
                    $('#orange-player-3-shots').text(orange3.shots)
                    $('#orange-player-3-saves').text(orange3.saves)
                    $('#orange-player-3-assists').text(orange3.assists)
                    $('#orange-player-3-boost').text(orange3.boost)
                    $('#orange-player-3-p-bar').width(orange3.boost + "%")


                    $('#orange-player-2').removeClass('d-none')
                    $('#orange-player-2-name').text(orange2.name)
                    $('#orange-player-2-goals').text(orange2.goals)
                    $('#orange-player-2-shots').text(orange2.shots)
                    $('#orange-player-2-saves').text(orange2.saves)
                    $('#orange-player-2-assists').text(orange2.assists)
                    $('#orange-player-2-boost').text(orange2.boost)
                    $('#orange-player-2-p-bar').width(orange2.boost + "%")

                    //remove invis for p1 and do other shit
                    $('#orange-player-1').removeClass('d-none')
                    $('#orange-player-1-name').text(orange1.name)
                    $('#orange-player-1-goals').text(orange1.goals)
                    $('#orange-player-1-shots').text(orange1.shots)
                    $('#orange-player-1-saves').text(orange1.saves)
                    $('#orange-player-1-assists').text(orange1.assists)
                    $('#orange-player-1-boost').text(orange1.boost)
                    $('#orange-player-1-p-bar').width(orange1.boost + "%")





                } else if (orange1 != undefined && orange2 != undefined && orange3 == undefined) {

                    $('#orange-player-1').removeClass('d-none')
                    $('#orange-player-1-name').text(orange1.name)
                    $('#orange-player-1-goals').text(orange1.goals)
                    $('#orange-player-1-shots').text(orange1.shots)
                    $('#orange-player-1-saves').text(orange1.saves)
                    $('#orange-player-1-assists').text(orange1.assists)
                    $('#orange-player-1-boost').text(orange1.boost)
                    $('#orange-player-1-p-bar').width(orange1.boost + "%")

                    $('#orange-player-2').removeClass('d-none')
                    $('#orange-player-2-name').text(orange2.name)
                    $('#orange-player-2-goals').text(orange2.goals)
                    $('#orange-player-2-shots').text(orange2.shots)
                    $('#orange-player-2-saves').text(orange2.saves)
                    $('#orange-player-2-assists').text(orange2.assists)
                    $('#orange-player-2-boost').text(orange2.boost)
                    $('#orange-player-2-p-bar').width(orange2.boost + "%")

                    /*$('#orange-player-3').addClass('d-none');
                    $("div[id^='orange-player-3']").text('')
                    $('#orange-player-3-p-bar').width('0%')*/

                } else if (orange1 != undefined && orange2 == undefined && orange3 == undefined) {

                    $('#orange-player-1').removeClass('d-none')
                    $('#orange-player-1-name').text(orange1.name)
                    $('#orange-player-1-goals').text(orange1.goals)
                    $('#orange-player-1-shots').text(orange1.shots)
                    $('#orange-player-1-saves').text(orange1.saves)
                    $('#orange-player-1-assists').text(orange1.assists)
                    $('#orange-player-1-boost').text(orange1.boost)
                    $('#orange-player-1-p-bar').width(orange1.boost + "%")

                    /* $('#orange-player-2').addClass('d-none');
                     $("div[id^='orange-player-2']").text('')
                     $('#orange-player-2-p-bar').width('0%')
       
                     $('#orange-player-3').addClass('d-none');
                     $("div[id^='orange-player-3']").text('')
                     $('#orange-player-3-p-bar').width('0%')*/

                }

            } else {
                orangeResetAll()
            }

        }


        //is the match over?
    }
    else if (jEvent.event == "game:podium_start" || jEvent.event == "game:match_ended") {
        console.log('match ended / podium')
        $('#main-ui').addClass('invisible');
        blueResetAll()
        orangeResetAll()
    }

}