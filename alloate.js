/**
 * 
 * @param {*} course 
 * @returns 
 */
const courseAlloted = (course,cnt) => {
    let courseDetails = courseList.find(o => o.cId === course);
    let result = registerEmp.filter(item => item.courseId === course);
    if(cnt!=5){
        result =result.reverse();
    }
    let temp = []
    let courseStatus = 'CONFIRMED'
    if(result.length<courseDetails.minEmp){
        courseStatus='COURSE_CANCELED'
    }

    for (j = 0; j < result.length; j++) {
        if(result[j].status){
        console.log(result[j].course + ' ' + result[j].email + ' ' + result[j].courseId + ' ' + courseDetails.courseName +
            ' ' + courseDetails.instructor + ' ' + courseDetails.date + ' '+courseStatus);
        }
    }
    return true;
}


module.exports = { courseAlloted }

