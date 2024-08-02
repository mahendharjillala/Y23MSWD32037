import React from 'react';

const ButtonSection = ({ onStudentClick, onFacultyClick, onTimetableClick, onCoursesClick, onFeePaymentClick }) => {
  return (
    <div className="buttons-section">
      <div className="button-container">
        <button onClick={onStudentClick}><h2>Student</h2></button>
      </div>
      <div className="button-container">
        <button onClick={onFacultyClick}><h2>Faculty</h2></button>
      </div>
      <div className="button-container">
        <button onClick={onTimetableClick}><h3>Time Table</h3></button>
      </div>
      <div className="button-container">
        <button onClick={onCoursesClick}><h2>Courses</h2></button>
      </div>
      <div className="button-container">
        <button onClick={onFeePaymentClick}><h3>Fee Payment</h3></button>
      </div>
    </div>
  );
};

export default ButtonSection;
