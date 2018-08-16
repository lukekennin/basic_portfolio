var database = firebase.database();
console.log(database);

database.ref().on("child_added", function (snapshot) {
    var data = snapshot.val();
    console.log(data);

    $("tbody").append(`
    <tr>
        <th scope="row"></th>
            <td>${data.employeeName}</td>
            <td>${data.role}</td>
            <td>${data.startDate}</td>
            <td>${data.salary}</td>
    </tr>`)
});

$('button').on('click', function (event) {
    event.preventDefault();
    employeeName = $("#inputName").val();
    role = $("#inputRole").val();
    startDate = $("#inputDate").val();
    salary = $("#inputSalary").val();


    $("#employeeName").val("");
    $("#inputRole").val("");
    $("#inputDate").val("");
    $("#inputSalary").val("");

    console.log(employeeName, role, startDate, salary);

    database.ref().push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        salary: salary
    })

});