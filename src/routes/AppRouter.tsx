
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomeScreen } from '../components/Home/HomeScreen';
import { LoginScreen } from '../components/Login/LoginScreen';
import { RegisterScreen } from '../components/Register/RegisterScreen';
import { Navbar } from '../components/Ui/Navbar';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/login' element={<LoginScreen/>} />
            <Route path='/register' element={<RegisterScreen/>} />
            <Route path='/' element={<HomeScreen/>} />


        </Routes>
        
    </BrowserRouter>
  )
}
