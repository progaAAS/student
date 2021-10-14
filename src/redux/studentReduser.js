import { studentAPI } from "../api/api";

const initialState = {
    studentAll: [],
    countAutomat: null,
    countNoAutomat: null
}

const studentReduser = (state = initialState, action) => {
    switch(action.type){
        case "ADD_STUDENT":{
            return {
                ...state,
                studentAll: [...state.studentAll, ...action.payload]
            }
        }
        case "ADD_COUNT":{
            const newState = {...state}
            
            const countAutomat = newState.studentAll.filter(item => item.isAutomat === true)
            const NewCountAutomat = countAutomat.length

            const countNoAutomat = newState.studentAll.filter(item => item.isAutomat === false)
            const newCountNoAutomat = countNoAutomat.length
            
            return{
                ...state,
                countAutomat: NewCountAutomat,
                countNoAutomat: newCountNoAutomat
            }
        }
        default:
            return state;
    }
}
export const getStudentData = () => (dispatch) => {
    studentAPI.getStudents().then(response => {
        dispatch(setStudentData(response.data))
        dispatch(getCountAutomat())
    })
}

const setStudentData = (studentData) => ({
    type: "ADD_STUDENT", payload: studentData
})

export const getCountAutomat = () =>({
    type: "ADD_COUNT"
})

export const insertStudentData = (studentData) => (dispatch) => {
    studentAPI.insertStudent(studentData).then(response => {
        dispatch(setStudentData([response.data]))
        dispatch(getCountAutomat())
    })
}

export default studentReduser;