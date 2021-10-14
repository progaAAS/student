const initialState = {
    name: null,
    avgAssessment: null,
    skipInvalid: null,
    skipValid: null,
    lesson: null,
    isAutomat: false
}

const calculateReduser = (state = initialState, action) => {
    switch(action.type){
        case "ADD_USER_CALCULATE":{

            const five = Number(action.payload.five);
            const four = Number(action.payload.four);
            const three = Number(action.payload.three);
            const two = Number(action.payload.two);

            const invalid = Number(action.payload.invalid);
            const valid = Number(action.payload.valid);
            const countLesson = Number(action.payload.countLesson);
            const skippedInvalidPct = (invalid / countLesson) * 100;
            const skippedValidPct = (valid / countLesson) * 100;

            const avgAssessment = ((5 * five + 4 * four + 3 * three + 2 * two) / (five + four + three + two)).toFixed();
            const automat = skippedValidPct < 30 && skippedInvalidPct < 10 && avgAssessment > 4
            
            return{
                ...state,
                name: action.payload.name,
                skipInvalid: skippedInvalidPct,
                skipValid: skippedValidPct,
                avgAssessment: avgAssessment,
                isAutomat: automat
            }
        }
        case "DELETE_USER":{
            return{
                ...state,
                name: null,
                avgAssessment: null,
                skipInvalid: null,
                skipValid: null,
                lesson: null,
                isAutomat: false
            }
        }
        default:
             return state;
    }
}

export const setFormData = (formData) => ({
    type: "ADD_USER_CALCULATE", payload: formData
})

export const deleteFormData = () => ({
    type: "DELETE_USER"
})


export default calculateReduser;