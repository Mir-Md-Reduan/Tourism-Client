import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Admin from './Pages/Home/Shared/Admin/Admin';
import Header from './Pages/Home/Shared/Header/Header';
import LoginAndRegister from './Pages/Home/Shared/Login/LoginAndRegister/LoginAndRegister';
import PrivateRoute from './Pages/Home/Shared/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <LoginAndRegister></LoginAndRegister>
            </Route>
            <Route exact path='/admin'>
              <Admin></Admin>
            </Route>
            <PrivateRoute exact path='/appointment/:appointmentId'>
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
