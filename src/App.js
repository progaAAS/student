import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import СalculatorPage from "./Page/СalculatorPage/СalculatorPage";
import HomePage from "./Page/HomePage/HomePage";
import StudentPage from "./Page/StudentPage/StudentPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStudentData } from "./redux/studentReduser";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {

  const { countAutomat, countNoAutomat } = useSelector(state => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentData())
  }, [])

  return (
    <div className={s.App}>
      <Header/>
        <div className={s.content}>
          <div className={s.left}>
            <Navbar/>
          </div>
          <div className={s.center}>
            <Switch>
              <Route exact path="/" component={ HomePage }/>
              <Route exact path="/calculator" component={ СalculatorPage }/>
              <Route exact path="/student" component={ StudentPage }/>
            </Switch>
          </div>
          <div className={s.right}>
            <div>Автомат - {countAutomat}</div>
            <div>Не автомат - {countNoAutomat}</div>
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
