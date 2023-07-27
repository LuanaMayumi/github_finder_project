import { UserProps } from '../types/user'
import { MdLocationPin } from 'react-icons/md'
import styles from './User.module.css'


export default function User({
  avatar_url,
  login,
  location,
  followers,
  following,
  name
}: UserProps) 

{
  return (
    <div className={styles.user}>
      <img
      src={avatar_url}
      alt={login}
      />
      <h1>{name}</h1>
      <h2>{login}</h2>
      {location && (
      <p className={styles.location}>
        <MdLocationPin />
        <span>{location}</span>
      </p>
      )}
      <div className={styles.Containerfollow}>
        <div className={styles.stats}>
          <p>Followers:</p>
          <span>{followers}</span>
        </div>
        <div className={styles.stats}>
          <p>Following:</p>
          <span>{following}</span>
        </div>
      </div>

    </div>
  )
}
