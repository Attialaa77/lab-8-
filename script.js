const student = {
    name: "Alaa Attia",
    age: 21,
    enrolled: true,
    courses: ["Math", "Science", "English"],
    displayInfo: function () {
        return `Student: ${this.name}, Age: ${this.age}`;
    }
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Info:", student.displayInfo());

const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

const parsedStudent = JSON.parse(studentJSON);
console.log("Parsed Object:", parsedStudent);
console.log("Original equals Parsed:", JSON.stringify(student) === JSON.stringify(parsedStudent));


const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);


const clonedStudent = { ...student, graduationYear: 2024 };
console.log("Cloned Student with New Property:", clonedStudent);

const newCourses = ["Art", "Chemestry"];
const mergedCourses = [...student.courses, ...newCourses];
console.log("Merged Courses:", mergedCourses);


student.addCourse = function (newCourse) {
    this.courses.push(newCourse);
};

student.getTotalCourses = function () {
    return this.courses.length;
};

student.addCourse("Programming");
console.log("Updated Courses:", student.courses);
console.log("Total Courses:", student.getTotalCourses());

// Bonus Task
const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
console.log("Average Score:", averageScore);
