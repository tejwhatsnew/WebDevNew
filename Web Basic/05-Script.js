function loadData(){
    let data = [
        {"studentId": 1, "studentName": "John", "studentAge": 20},
        {"studentId": 2, "studentName": "Jane", "studentAge": 21},
        {"studentId": 3, "studentName": "Doe", "studentAge": 22},
        {"studentId": 4, "studentName": "Dane", "studentAge": 23},
        {"studentId": 5, "studentName": "Dawn", "studentAge": 24}
    ];

    document.getElementById("student1").innerHTML = "Student ID:" + data[0].studentId + "<br>" + "Student Name:" + data[0].studentName + "<br>" + "Student Age:" + data[0].studentAge;
    document.getElementById("student2").innerHTML = "Student ID:" + data[1].studentId + "<br>" + "Student Name:" + data[1].studentName + "<br>" + "Student Age:" + data[1].studentAge;
}