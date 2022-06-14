const fs = require("fs")
const {addCourse} = require('./addCourse');
const {courseAlloted} = require('./alloate');
const {registerCourse} = require('./register');
const filename = process.argv[2]
global.courseList = [];
global.registerEmp = [];
function main(dataInput) {
    var inputLines = dataInput.toString().split("\n")
    for (i = 0; i <inputLines.length; i++) {
        if (inputLines) {
            let input = inputLines[i].split(' ')
            switch (input[0]) {
                case 'CANCEL':
                    let str =`${input[1]} CANCEL_ACCEPTED`
                    for (k = 0; k < registerEmp.length; k++) {
                        if(registerEmp[k].course == input[1].trim()){
                            registerEmp[k].status=false
                        }
                    }
                    console.log(str)
                    break;
                case 'ADD-COURSE-OFFERING':
                    let addCoursName = addCourse(input[1], input[2], input[3], parseInt(input[4]), parseInt(input[5]),i);
                    console.log(addCoursName);
                    break;
                case 'REGISTER':
                    let registerCourse1 = registerCourse(input[1], input[2].trim());
                    console.log(registerCourse1);
                    break;
                case 'ALLOT':
                    let courseAlloted22 = courseAlloted(input[1],inputLines.length);
                    break;

            }
        }
    }
  }
  data = fs.readFileSync(process.argv[2]).toString();
  main(data);

  module.exports = { main }