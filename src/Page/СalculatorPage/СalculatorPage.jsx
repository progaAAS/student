import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFormData } from "../../redux/calculateReduser";
import { insertStudentData } from "../../redux/studentReduser";
import СalculatorReduxForm from "./СalculatorForm";
import s from "./СalculatorPage.module.css"

const СalculatorPage = () => {

  const dispatch = useDispatch();
  const { name, avgAssessment, skipInvalid, skipValid, isAutomat } = useSelector(state => state.calculate);
    
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{
    if(name != null){
      const studentData = { name, avgAssessment, skipInvalid, skipValid, isAutomat };
      dispatch(insertStudentData(studentData));
    }
  },[name])

  const onSubmit = (formData) => {
      dispatch(setFormData(formData));
      setIsVisible(true);
  }

  return (
    <div className={s.calculatorPage}>
      <div className={s.form}>
        <СalculatorReduxForm onSubmit={onSubmit}/>
      </div>
      <div className={s.result}>
        {isVisible &&
          <div>
            <div>Пропуск занятий по неуважительной причине {skipInvalid} %</div>
            <div>Пропуск занятий по уважительной причине {skipValid} %</div>
            <div>{isAutomat ? <p>Автомат с оценкой - {avgAssessment}</p> : 'Не автомат'}</div>
          </div>
          }
      </div>
    </div> 
  );
}

export default СalculatorPage;
