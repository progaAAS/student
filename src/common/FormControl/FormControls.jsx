import React from "react";
import s from "./FormControls.module.css";

export const Input  = ({input, meta, inputText, type, placeholder,value}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div className={s.textBox}> 
                <span className={s.text}>{inputText}</span>
                <div>
                    <input value={value} {...input} placeholder={placeholder} className={s.input}></input>
                    {hasError && <div className={s.form_error}>{meta.error}</div>}
                </div>
            </div>
        </div>
    )
}
