import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
import store from './store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import PrivateRoute from './components/PrivateRoute.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />}></Route>
      <Route index={false} path='/login' element={<LoginScreen />}></Route>
      <Route index={false} path='/register' element={<RegisterScreen />}></Route>
      {/*  Private Routes */}
      <Route path='' element={<PrivateRoute />}>
        <Route index={false} path='/profile' element={<ProfileScreen />}></Route>
      </Route>
    </Route>
  )
)

// app with our routes
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
        <RouterProvider router={ router } />
    </React.StrictMode>
  </Provider>
)
