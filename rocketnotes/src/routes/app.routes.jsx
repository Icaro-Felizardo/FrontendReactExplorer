import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New';
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/nova" element={<New/>} />
            <Route path="/perfil" element={<Profile/>} />
            <Route path="/detalhes/:id" element={<Details/>} />
        </Routes>
    )
}