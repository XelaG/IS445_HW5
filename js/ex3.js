const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

function minMaxAverageScore(scores) {
    var minScore = Math.min(...scores);
    var maxScore = Math.max(...scores);
    var averageScore = scores.reduce((partialSum, next) => partialSum + next, 0) / scores.length;
    return ({
        minScore,
        maxScore,
        averageScore
    })
}

cLastNameStudents = studentList.filter(student => {
    return student.lastName.startsWith('C');
})

cLastNameStudents = cLastNameStudents.map(student => {
    student = {...student, ...minMaxAverageScore(student.scores)}
    delete student['scores']
    return student
});

console.log(cLastNameStudents)
