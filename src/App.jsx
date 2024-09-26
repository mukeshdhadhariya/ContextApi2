import { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './Context/theme'
import Btn from './componenet/Btn'
import Card from './componenet/Card'

function App() {
  const [thememode,setThememode]=useState("light")

  const darktheme =()=>{
    setThememode("dark")
  }
  const lighttheme=()=>{
    setThememode("light")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(thememode)
  },[thememode])

  return (
    <Themeprovider value={{thememode,darktheme,lighttheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Btn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>
    </Themeprovider>
  )
}

export default App
