import { UserProps } from "../types/user"
import style from './Home.module.css'
import Search from "../components/Search"
import User from '../components/User'
import Error from '../components/Error'
import { useState  } from "react"

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)

  const loadUser = async (userName: string) => {
    setError(false)

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    

    // const res1 = await fetch(`https://api.github.com/users/${userName}/repos`);
    // const data1 = await res1.json();

    // console.log(data1)
    console.log(res.status)

    if(res.status === 404) {
      setError(true)
      setUser(null)
      return;
    }
  
    const { avatar_url, login, location, followers, following, name } = data;
    
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
      name
    } 

    setUser(userData)
  }
  return (
    <div className={style.containerHome}>
      <Search loadUser={loadUser}/>
      {error && <Error />}

      {user && <User {...user}/>} 
    </div>
  )
}
