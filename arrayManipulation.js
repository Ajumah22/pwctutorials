// // array of numbers
// const studentScores = [80, 90, 70, 60, 50]; //array of numbers

// // array of string
// const studentNames = ['Oluwakemi', 'James', 'Okiroro', 'Timilehin', 'Oluwafemi']; //array of strings


// // array of objects (this is to be used for big projects)
const studentActivities = [
    {
        id: 1,
        accountNumber: "123456789",
        fullName: "Ajumah Oresajo",
        address: "26 Obafemi Awolowo Road",
        canDebit: true,
        isDone: true,
    },
    {
        id: 2,
        accountNumber: "553456789",
        fullName: "Oluwakemi Samuel",
        address: "28, Oshodi Road",
        canDebit: false,
        isDone: false,
    },
    {
        id: 3,
        accountNumber: "1238906677",
        fullName: "Abraham Ogunjobi", 
        address: "30 Hamsat Awolowo road",
        canDebit: true,
    },
];

// //Converting the array of objects to JSON format
// const studentsActivitiesJSON = JSON.stringify(studentsActivities);


// // accessing the array elements
// console.log(studentScores[0]);
// console.log(studentScores[3]);
// console.log(studentNames[2]);
// console.log(studentsActivities[2].description);
// console.log(studentsActivities[1].isDone);


// // Higher order array function
// // MAP()

// // mapping through the students description
// const studentsActivitiesDescription = studentsActivities.map(
//     (activity) => activity.description
// );
    
// // mapping through the students description
// const studentsActivitiesId = studentsActivities.map(
//     (activity) => activity.id
// );
// console.log(studentsActivitiesDescription);
// console.log(studentsActivitiesId);

// const studentsActivities = studentsActivities.map(
//     (activity) => activity.id
// );


// customer details
// const customerDetails = [
//     {
//         id: 1,
//         accountNumber: "123456789",
//         fullName: "Ajumah Oresajo",
//         address: "26 Obafemi Awolowo Road",
//         canDebit: true,
//     },
//     {
//         id: 2,
//         accountNumber: "553456789",
//         fullName: "Oluwakemi Samuel",
//         address: "28, Oshodi Road",
//         canDebit: false,
//     },
//     {
//         id: 3,
//         accountNumber: "1238906677",
//         fullName: "Abraham Ogunjobi", 
//         address: "30 Hamsat Awolowo road",
//         canDebit: true,
//     },
// ];

// const customerDetailsId = customerDetails.map(function(customerDetails) {
//     return customerDetails.id
// });

// const customerDetailsAccountNumber = customerDetails.map(function(customerDetails) {
//     return customerDetails.accountNumber
// });

// const customerDetailsFullName = customerDetails.map(function(customerDetails) {
//     return customerDetails.fullName
// });

// const customerDetailsAddress = customerDetails.map(function(customerDetails) {
//     return customerDetails.address
// });

// const customerDetailsCanDebit = customerDetails.map(function(customerDetails) {
//     return customerDetails.canDebit
// });

// console.log(customerDetailsId, customerDetailsAccountNumber, customerDetailsFullName, customerDetailsAddress, customerDetailsCanDebit);

// FILTER()
const studentActivitiesDone = studentActivities.filter(
    (activity) => activity.isDone
);

console.log(studentActivitiesDone);


const studentActivitiesNotDone = studentActivities.filter(
    (activity) => !activity.isDone
);

console.log(studentActivitiesNotDone);

const studentActivities3 = studentActivities.filter(
    (activity) => activity.id === 3
);

console.log(studentActivities3);