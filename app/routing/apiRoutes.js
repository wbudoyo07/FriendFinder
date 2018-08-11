let friendsData = require ("../data/friends.js");
module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    app.post("/api/friends", function(req,res){
        //Convert each user's results into a simple array of numbers
        newUserScores=[];

    // get the score from new user and push them to the array
    // get the new user data and compare them with each existed user scores
    // store the value into variables
    //  when the loop is getting the next existed user data
    // and compare the value when we first store the array
    // if it bigger let it go
    //  if it less change the value
    // after the looping done
    //  print the lowest data

        // newUserScores.push(req.body);
        // console.log(newUserScores);
        // console.log(newUserScores[0].scores);

		// for(i=0;  i<10; i++){
        //     newUserScores[0].scores[i] - friendsData[0]
        // }
            res.json(friendsData[0]);
		// friendsData.push(req.body);
    });
};