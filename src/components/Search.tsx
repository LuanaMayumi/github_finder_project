import { SearchProps } from "../types/search"
import { BsSearch } from 'react-icons/bs'
import { useState, KeyboardEvent } from "react"
import styles from './Search.module.css'


export default function Search({loadUser}: SearchProps) {
  const [userName, setUserName] = useState("")


  const handleChange = () => {
    loadUser(userName)
    setUserName("")
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if(event.key == "Enter") {
      handleChange()
    }
  }

  return (
    <div className={styles.search}>
      <h2>Find User</h2>
      {/* <p>Conheça seus repositórios mais recentes</p> */}
      <div className={styles.search_container}>
        <input 
          type='text' 
          placeholder='Type to Search'
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          value={userName}
          />
        <button
          onClick={() => handleChange()}
          >
          <BsSearch 
          className={styles.searchIcon}
          size={25}
          />
        </button>
      </div>
    </div>
  )
} 
