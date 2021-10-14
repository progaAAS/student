import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormControl/FormControls";
import { requiredName, requiredLesson, requiredFive, requiredFour, requiredTree, requiredTwo, required, requiredCountlesson } from "../../utils/validators";
import s from "./СalculatorPage.module.css"

const StatistikaForm = ({ handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.FormInput}>
        <div className={s.Form__user}>
          <div className={s.Form__headerItem}>Студент</div>
          <Field className={s.login} name={"name"} placeholder="ФИО" validate={[requiredName]} component={Input} inputText={"Имя"}/> 
        </div>
        <div className={s.Form__assessment}>
          <div className={s.Form__headerItem}>Оценка</div>
            <Field className={s.login} name={"five"} placeholder="Количество пятерок" validate={[requiredFive]} component={Input} inputText={"Пять"}/> 
            <Field className={s.login} name={"four"} placeholder="Количество четверок" validate={[requiredFour]} component={Input} inputText={"Четыре"}/>
            <Field className={s.login} name={"three"} placeholder="Количество троек" validate={[requiredTree]} component={Input} inputText={"Три"}/>
            <Field className={s.login} name={"two"} placeholder="Количество двоек" validate={[requiredTwo]} component={Input} inputText={"Два"}/>
        </div>
        <div className={s.Form__skipp}>
          <div className={s.Form__headerItem}>Пропуск</div>
            <Field className={s.login} name={"valid"} placeholder="Кол-во пропуска" validate={[required]} component={Input} inputText={"Уважительная причина"}/> 
            <Field className={s.login} name={"invalid"}placeholder="Кол-во пропуска" validate={[required]} component={Input} inputText={"Неуважительная причина"}/>
        </div>
        <div className={s.Form__lesson}>
          <div className={s.Form__headerItem}>Предмет</div>
          <Field className={s.login} name={"lesson"} placeholder="Предмет" validate={[requiredLesson]} component={Input} inputText={"Предмет"}/>
          <Field className={s.login} name={"countLesson"} placeholder="Количество занятий" validate={[requiredCountlesson]} component={Input} inputText={"Количество занятий"}/>
        </div>
      </div>
      <button className={s.btnCalculate}>Рассчитать</button>
    </form>
  );
}

const StatistikaReduxForm = reduxForm({form: "statistika"})(StatistikaForm)

export default StatistikaReduxForm;
