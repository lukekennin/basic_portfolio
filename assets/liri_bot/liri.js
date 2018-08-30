var action = process.argv[2];

var nodeArgs = process.argv;

var value = "";

for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {

        value = value + "+" + nodeArgs[i];

    } else {

        value = value + nodeArgs[i];
    }
}

switch (action) {

    case 'spotify':
        spotify();
        break;

    case 'text':
        text();
        break;
}

function spotify() {

    if (value != false) {
        var spotify = require('spotify');

        spotify.search({
            type: 'track',
            query: value + '&limit=1&'
        }, function (error, data) {
            if (error) {
                console.log('Error occurred: ' + error);
                return;
            }
            console.log("---------------------------------------------------");
            console.log(" ");
            console.log("The song you entered was " + value + ".");
            console.log(" ");
            console.log("Here is the information you requested!");
            console.log(" ");
            console.log("Track Title: " + data.tracks.items[0].name);
            console.log(" ");
            console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
            console.log(" ");
            console.log("Preview URL: " + data.tracks.items[0].preview_url);
            console.log(" ");
            console.log("---------------------------------------------------");
        });
    } else {
        {
            var spotify = require('spotify');

            spotify.search({
                type: 'track',
                query: 'ace+of+base+sign' + '&limit=1&'
            }, function (error, data) {
                if (error) {
                    console.log('Error occurred: ' + error);
                    return;
                }
                console.log("---------------------------------------------------");
                console.log(" ");
                console.log("Since you didnt enter a song here is the following: ");
                console.log(" ");
                console.log("Track Title: " + data.tracks.items[0].name);
                console.log(" ");
                console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
                console.log(" ");
                console.log("Preview URL: " + data.tracks.items[0].preview_url);
                console.log(" ");
                console.log("---------------------------------------------------");
            });
        }

    }
}



function text() {

    var fs = require('fs');

    fs.readFile("stuff.txt", "utf8", function (error, data) {

        data = data.split(',');

        var command;
        var parameter;

        if (data.length == 2) {
            command = data[0];
            parameter = data[1];
        }

        parameter = parameter.replace('"', '');
        parameter = parameter.replace('"', '');

        switch (command) {


            case 'spotify':
                value = parameter;
                spotify();
                break;

        }

    });
}