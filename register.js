const registerCourse = (email, course) => {
    if (!email || !course) {
        return 'INPUT_DATA_ERROR';
    }
    let courseDetails = courseList.find(o => o.cId === course);
    if (!courseDetails) {
        return 'INPUT_DATA_ERROR';
    }
    const emailId = email.split("@");
    let name = emailId[0];
    let addEmp = {
        email,
        course: 'REG-COURSE-' + name + '-' + courseDetails.courseName,
        courseId: courseDetails.cId,
        status:true
    }
    if (registerEmp.length <courseDetails.maxEmp) {
        registerEmp.push(addEmp)
    }
    else {
        return 'COURSE_FULL_ERROR'
    }
    return 'REG-COURSE-' + name + '-' + courseDetails.courseName + ' ACCEPTED';
}
module.exports = { registerCourse }