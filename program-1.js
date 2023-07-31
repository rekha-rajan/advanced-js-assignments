const student = {
    rollno: 0,
    course:'',
    duration: 0,
    startDate:'',
    endDate:'',
    grade:'',
    setStudentData: function (rollno, course, duration, startDate, endDate, grade) {
        this.rollno = rollno;
        this.course = course;
        this.duration = duration;
        this.startDate = startDate;
        this.endDate = endDate;
        this.grade = grade;
    },
    getStudentData: function () {
        return {
            rollno: this.rollno,
            course: this.course,
            duration: this.duration,
            startDate: this.startDate,
            endDate: this.endDate,
            grade: this.grade,
        };
    }
};
student.setStudentData(14, 'Node.js', 1, '2023-07-31', '2023-07-31', 'A');
const studentData = student.getStudentData();
console.log(studentData);
