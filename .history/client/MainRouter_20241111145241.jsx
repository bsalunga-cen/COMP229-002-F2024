import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home' 
import Signup from './user/Signup.jsx'

const MainRouter = () => {
return ( <div> 
<Routes>
<Route exact path="/" element={<Home />}/> 
</Routes>
</div> 
)
}
export default MainRouter

