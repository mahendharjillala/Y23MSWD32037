import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import User from './components/User';
import ButtonSection from './components/ButtonSection';
import ContentSection from './components/ContentSection';


const App = () => {
  
  const [content, setContent] = useState('');
  const [heading, setHeading] = useState('KL ERP STUDENT-PORTAL');
  
  
  const generateStudentGrades = () => {
    const students = [
      { name: "R.Dinesh kumar Reddy", id: "S101", branch: "CSE", grade: "O" },
      { name: "Mahendra", id: "S102", branch: "ECE", grade: "A+" },
      { name: "Layavardhan reddy", id: "S103", branch: "AI & DS", grade: "A" },
      { name: "Vishal reddy", id: "S104", branch: "CSE", grade: "A+" },
      { name: "Mounish", id: "S105", branch: "ECE", grade: "A" }
      
    ];

    const table = (
      <table>
        <tr><th>Name</th><th>ID</th><th>Branch</th><th>Grade</th></tr>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td><td>{student.id}</td><td>{student.branch}</td><td>{student.grade}</td>
          </tr>
        ))}
      </table>
    );

    setContent(table);
    setHeading('Student Grades');
  };

  const generateFacultyDetails = () => {
    const faculty = [
      { name: "DR.K.Jitesh", subject: "Python", code: "23CS7979" },
      { name: "DR.V.Suresh", subject: "JAVA", code: "23CS5489" },
      { name: "DR.A.Ravi", subject: "AI&ML", code: "23CSE5481" },
      { name: "DR.G.Bhaskar", subject: "Mech", code: "23ME4561" },
      { name: "DR.CH.Lokesh", subject: "Civil", code: "23CE2561" }
    ];

    const table = (
      <table>
        <tr><th>Name</th><th>Subject</th><th>Code</th></tr>
        {faculty.map((member, index) => (
          <tr key={index}>
            <td>{member.name}</td><td>{member.subject}</td><td>{member.code}</td>
          </tr>
        ))}
      </table>
    );

    setContent(table);
    setHeading('Faculty Details');
  };

  const generateTimetable = () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const times = ["9:00 - 10:00", "10:30 - 11:30", "12:00 - 1:30", "1:45 - 2:50", "3:00 - 5:00"];

    const table = (
      <table>
        <tr><th>Day</th><th>9:00 - 10:00</th><th>10:30 - 11:30</th><th>12:00 - 1:30</th><th>1:45 - 2:50</th><th>3:00 - 5:00</th></tr>
        {days.map((day, index) => (
          <tr key={index}>
            <td>{day}</td>
            {times.map((time, idx) => (
              <td key={idx}>{idx === 2 ? 'Break' : 'C325'}</td>
            ))}
          </tr>
        ))}
      </table>
    );

    setContent(table);
    setHeading('Timetable');
  };

  const generateCSESubjects = () => {
    const subjects = [
      { name: "IK-VMS", year: "1st", code: "23CS0214", sno: 1 },
      { name: "FIS", year: "1st", code: "23CS2598", sno: 2 },
      { name: "DTW", year: "1st", code: "23CS7896", sno: 3 },
      { name: "Network Protocol", year: "3rd", code: "23CS3256", sno: 4 },
      { name: "Maths", year: "3rd", code: "23CS4532", sno: 5 },
      { name: "Software Engineering", year: "4th", code: "23CS1203", sno: 6 },
      { name: "AI&ML", year: "4th", code: "23CS0987", sno: 7 },
      { name: "Arts", year: "4th", code: "23CS3698", sno: 8 }
    ];

    const table = (
      <table>
        <tr><th>S.No</th><th>Subject Name</th><th>Year</th><th>Code</th></tr>
        {subjects.map((subject, index) => (
          <tr key={index}>
            <td>{subject.sno}</td><td>{subject.name}</td><td>{subject.year}</td><td>{subject.code}</td>
          </tr>
        ))}
      </table>
    );

    setContent(table);
    setHeading('CSE Subjects');
  };

  const generateFeePayments = () => {
    const fees = [
      { name: "R.Dinesh kumar Reddy", id: "S101", branch: "CSE", amount: "50,000", due: "10,000" },
      { name: "Mahendra", id: "S102", branch: "ECE", amount: "45,000", due: "5,000" },
      { name: "Layavardhan reddy", id: "S103", branch: "AI & DS", amount: "55,000", due: "15,000" },
      { name: "Vishal reddy", id: "S104", branch: "CSE", amount: "60,000", due: "20,000" },
      { name: "Mounish", id: "S105", branch: "ECE", amount: "48,000", due: "8,000" }
    ];

    const table = (
      <table>
        <tr><th>Name</th><th>ID</th><th>Branch</th><th>Amount Paid</th><th>Amount Due</th></tr>
        {fees.map((fee, index) => (
          <tr key={index}>
            <td>{fee.name}</td><td>{fee.id}</td><td>{fee.branch}</td><td>{fee.amount}</td><td>{fee.due}</td>
          </tr>
        ))}
      </table>
    );
   

    setContent(table);
    setHeading('Fee Payments');
  };

  return (
    <div className="App">
      <Header />
      <User name="Mahendhar" type="Admin" />
      <ButtonSection
        onStudentClick={generateStudentGrades}
        onFacultyClick={generateFacultyDetails}
        onTimetableClick={generateTimetable}
        onCoursesClick={generateCSESubjects}
        onFeePaymentClick={generateFeePayments}
      />
      <ContentSection heading={heading} content={content} /> 

    </div>
  );
};

export default App;
