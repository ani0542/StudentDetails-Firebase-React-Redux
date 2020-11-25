import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Student from './components/students/Student';
import StudentForm from './components/students/StudentForm';
import Students from './components/students/Students'
import { Provider } from "react-redux";
import store ,{ rrfProps }  from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import './styles/App.scss'
import Login from './components/pages/Login';
import PrivateRoute from "./components/routes/PrivateRoute";
function App() {
    return (
        <>
      <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
         <BrowserRouter>
         <PrivateRoute component={Navbar} />
               <PrivateRoute exact path="/" component={Students} />
               <PrivateRoute exact path="/student/:id" component={Student} />
               <PrivateRoute
                exact
                path="/studentForm/:id?"
                component={StudentForm}
              />
                   <Route exact path='/login' component={Login}/>
                   {/* ///studentForm/:id? we give ? becase it should work in 2 way first in the dynamic part and second not in dynamic part */}
        </BrowserRouter>
    </ReactReduxFirebaseProvider>
        </Provider>
        </>
    )
}

export default App
