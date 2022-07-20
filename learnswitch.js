// basic color check
// const color = 'red';
// switch (color) {
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     case 'green':
//         console.log('Color is green');
//         break;
//     default:
//         console.log('Color is not red, blue or green');
// }


// switch case for grade
const grade = 100
switch (true) {
    case (grade >= 70):
        console.log('Excellent!');
        break;
        case (grade < 70 && grade >= 60):
        console.log('Very Good!');
        break;
        case (grade < 60 && grade >= 50):
        console.log('Good!');
        break;
        case (grade < 50 && grade >= 40):
        console.log('Very Good!');
        break;
    default:
        console.log('Fail');
}