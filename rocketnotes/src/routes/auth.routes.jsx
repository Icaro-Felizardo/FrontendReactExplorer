import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/Signin';
import { SignUp } from '../pages/SignUp'

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/criar-conta" element={<SignUp/>} />
        </Routes>
    )
}