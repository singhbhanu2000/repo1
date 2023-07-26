import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '@mui/material/Card';
import InputWithIcon from './Learn';
function App() {
  

  return (
    
      <div

      style={{
        height:"100vh",
        width:"100vw",
        backgroundColor:"(243,246,246)",
        display:"flex",
        flowdirecton:"column",
        justifyContent:"center"
      }}
      >
        <div 
        style={{display:"flex",
        justifyContent:"center"}}>
          <h1>Sign in to course</h1>
          <Card sx={{minwidth:275}}>
             <div>
              <InputWithIcon></InputWithIcon>
             </div>
             <div>

             </div>
          </Card>

        </div>
        
    </div>
  )
}

export default App
