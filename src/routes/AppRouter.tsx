
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginScreen } from '../components/Login/LoginScreen';
import { RegisterScreen } from '../components/Register/RegisterScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginScreen/>} />
            <Route path='/register' element={<RegisterScreen/>} />
            

        </Routes>
        
    </BrowserRouter>
  )
}
