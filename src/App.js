import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Appointment/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import MyOrder from './Pages/Home/My Order/MyOrder';
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
            <PrivateRoute exact path='/admin'>
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute exact path='/myOrder'>
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute exact path='/appointment/:bookingId'>
              <Booking></Booking>
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
