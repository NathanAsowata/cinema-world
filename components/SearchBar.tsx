import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/SearchBar.module.scss'

const SearchBar = () => {

    const [userInput, setUserInput] = useState("")
    const router = useRouter()
    const submitSearchQuery = () => {
        router.push(`/search/${userInput}`)
    }

  return (
    <form 
        onSubmit={submitSearchQuery}   
        className={styles.form}>
        
            <input 
                type="text" 
                value={userInput} 
                onChange={(e) => setUserInput(e.target.value)}
                className={styles.input}
            />
            <button className={styles.button}>Search</button>
    </form>
  )
}

export default SearchBar