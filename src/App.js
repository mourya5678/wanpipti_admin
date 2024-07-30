import './App.css';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router';
import { AllRoutes, pageRoutes } from './Routes/pageRoutes';
import PrivateRoute from './Layout/PrivateRoute';

function App() {
  return (
    <div>
      <Routes>
        {
          AllRoutes?.map((item) => {
            return (
              <Route
                path={item.path}
                exact
                element={<PrivateRoute>{item?.element}</PrivateRoute>}
              />
            )
          })
        }
        <Route exact path={pageRoutes.login} element={<Login />} />
        {/* <Route exact path={pageRoutes.signup} element={<Signup />} />
        <Route exact path={pageRoutes.forgot_password} element={<ForgotPassword />} /> */}
        {/* <Route exact path='*' element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;