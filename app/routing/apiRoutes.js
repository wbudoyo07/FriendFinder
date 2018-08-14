let friendsData = require ("../data/friends.js");
module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });
    

      app.post("/api/friends", function (req,res){
        
        //maximum point you can get in survey
        let bestScore = 50;
        let bestMatch;

        // always push the new data on index 0 array (this data use to compare the value)
        let newUserScores=[];
        newUserScores.splice(0,1,req.body);
        
        // res.json(friendsData[0]);
        // iterate all the data from existed data
        for (i=0; i<friendsData.length; i++){
            let currentScore = 0;
            // console.log("new user data: " + newUserScores[0].scores);
            console.log("data inside friends.js index "+i+": "+friendsData[i].scores);
            console.log("data  new user :"+ newUserScores[0].scores);
            //iterate the new user survet data and calculate their differences scores
            for(k=0; k<newUserScores[0].scores.length; k++){
                currentScore += Math.abs(parseInt(friendsData[i].scores[k])- parseInt(newUserScores[0].scores[k]));
                console.log(currentScore);
            };
            
            if(currentScore <= bestScore){

                console.log("current Score:"+bestScore);
                bestScore = currentScore;
                console.log("current score:"+bestScore);
                bestMatch = friendsData[i];
                console.log(JSON.stringify(bestMatch));
                
            }
            
        }
      
        res.json(bestMatch);
        friendsData.push(req.body);

      });

};





