const {addCourse} = require('./addCourse');
const {courseAlloted} = require('./alloate');
const {registerCourse} = require('./register');
const assert =require('assert');
global.courseList = [];
global.registerEmp = [];
 
 describe( " Course register test", () => {
    beforeEach(() => {
      console.log( "executes before every test" );
    });
      
    it("should add course", () => {
       const temp=  addCourse('JAVA', 'JAMES', '15062022', 1, 2 )
       assert.equal(temp,'OFFERING-JAVA-JAMES');
    });

    it("should 2 register course", () => {
        const reg =  registerCourse('ANDY@GMAIL.COM', 'OFFERING-JAVA-JAMES')
        assert.equal(reg,'REG-COURSE-ANDY-JAVA ACCEPTED');
     });

     it("ahould one course allocate", () => {
        const reg1 =  courseAlloted('OFFERING-JAVA-JAMES')
        assert.equal(reg1,true);
     });
     
  });