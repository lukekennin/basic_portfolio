var database = firebase.database();

console.log(database);

$("#addTrainBtn").on("click", function (event) {

    event.preventDefault();

    var trainName = $("#trainNameInput").val().trim();
    var lineName = $("#lineInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var trainTimeInput = moment($("#trainTimeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");;
    var frequencyInput = $("#frequencyInput").val().trim();

    var newTrain = {
        name: trainName,
        line: lineName,
        destination: destination,
        trainTime: trainTimeInput,
        frequency: frequencyInput,
    }

    database.ref().push(newTrain);

    $("#trainNameInput").val("");
    $("#lineInput").val("");
    $("#destinationInput").val("");
    $("#trainInput").val("");
    $("#frequencyInput").val("");
});

database.ref().on("child_added", function (snapshot) {


    var databaseName = snapshot.val().name;
    var databaseLine = snapshot.val().line;
    var databaseDestination = snapshot.val().destination;
    var databaseTrainTimeInput = snapshot.val().trainTime;
    var databaseFrequency = snapshot.val().frequency;

    var timeDifference = moment().diff(moment.unix(databaseTrainTimeInput), "minutes");
    var timeRemainder = moment().diff(moment.unix(databaseTrainTimeInput), "minutes") % databaseFrequency;
    var minutes = databaseFrequency - timeRemainder;

    var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A");

    $("#trainTable > tbody").append("<tr><td>" + databaseName + "</td><td>" + databaseLine + "</td><td>" + databaseDestination + "</td><td>" + databaseFrequency + " mins" + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td></tr>");

});