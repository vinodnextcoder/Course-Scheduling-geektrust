/**
 * 
 * @param {*} course 
 * @returns 
 */
const courseAlloted = (course) => {
    let courseDetails = courseList.find(o => o.cId === course);
    let result = registerEmp.filter(item => item.courseId === course);
    result =result.reverse();
    let temp = []
    for (j = 0; j < result.length; j++) {
        if(result[j].status){
        console.log(result[j].course + ' ' + result[j].email + ' ' + result[j].courseId + ' ' + courseDetails.courseName +
            ' ' + courseDetails.instructor + ' ' + courseDetails.date + ' CONFIRMED');
        }
    }
    return true;
}


module.exports = { courseAlloted }

