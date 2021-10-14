import React from "react";
import { useSelector } from "react-redux";
import s from "./StudentPage.module.css"

const StudentPage = () => {
  
  const students = useSelector(state => state.student);
  return (
    <div className={s.studentPage}>
      <div className={s.studentBox}>
        {students.studentAll && students.studentAll.map((student, index) => (
          <div className={s.students} key={index}>
            <div className={s.info}>
              <div className={s.studentName}>
                <span className={s.name}>{student.name}</span>
              </div>
              <span className={s.name}>Средний балл - {student.avgAssessment}</span>
              <span className={s.name}>Пропуск занятий по неуважительной причине {student.skipInvalid}%</span>
              <span className={s.name}>{student.isAutomat ? <p>Автомат с оценкой - {student.avgAssessment}</p> : "Не автомат"}</span>
              <span>{student.work}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentPage;
