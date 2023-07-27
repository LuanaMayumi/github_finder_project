import { Outlet } from "react-router-dom"
import {FaGithub} from 'react-icons/fa'

import styles from './App.module.css'

function App() {

  return (
   <>
    <div className={styles.app}>
    <FaGithub className={styles.githubIcon}/>
    <h1>Github Finder</h1>
    </div>
    <Outlet />
   </>
  )
}

export default App
