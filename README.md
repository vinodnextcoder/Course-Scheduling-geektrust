# Pre-requisites
* NodeJS 12.6.0/14.15.4/16.10.0
* npm
 Goal

 Your job is to build a simple command line application, which does the following:
 

    Add course offering
         A course offering has course title, instructor and date. 
         It should also contain a minimum & maximum number of employees for the course offering. 
    Register for the course
          Employees can register for the courses. 
         If no. of employees registered for the course has reached the maximum, the result will be COURSE_FULL_ERROR. 
         Otherwise, result of registration will be ACCEPTED. 
    Cancel registration
         Employees can cancel their registration until the course allotment is completed. 
    Course allotment
         This feature allots employees to course offering, before the course offering date. 
         It should print a list of all the employees with their details along with their final course allotment status (Registration Number, Employee Name, Email, Course Offering ID, Course Name, Instructor, Date, Final Status). The list should be sorted based on the Registration number. 
         If sufficient registrations are not received then the course offering itself gets cancelled. 
         The employees who have registered will get confirmed unless the minimum number of registrations is not received. 
         Even if the course offering gets canceled due to the minimum number of employees not registered, the list should be printed. 
         
# How to run the code

We have provided scripts to execute the code. 

Use `run.sh` if you are Linux/Unix/macOS Operating systems and `run.bat` if you are on Windows.  Both the files run the commands silently and prints only output from the input file `sample_input/input1.txt`. You are supposed to add the input commands in the file from the appropriate problem statement. 

Internally both the scripts run the following commands 

 * `npm ci --silent` - This will build the solution downloading the necessary dependencies.
 * Once the `npm install` from the previous build process is complete, we will execute the program using the command

`npm start --silent sample_input/input1.txt`

We expect your program to take the location to the text file as parameter. Input needs to be read from a text file, and output should be printed to the console. The text file will contain only commands in the format prescribed by the respective problem.

This main file, main.go should receive in the command line argument and parse the file passed in. Once the file is parsed and the application processes the commands, it should only print the output.

 # Running the code for multiple test cases

 Please fill `input1.txt` and `input2.txt` with the input commands and use those files in `run.bat` or `run.sh`. Replace `./geektrust sample_input/input1.txt` with `./geektrust sample_input/input2.txt` to run the test case from the second file. 

 # How to execute the unit tests

 Mocha based test cases are executed with the following command from the root folder
`mocha test`

Jest based test cases are executed with the following command from the root folder
`jest`
