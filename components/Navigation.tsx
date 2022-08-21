// CSS styles for this component can be found in ./styles/globals.scss file
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'

const Navigation = () => {

    const [isClicked, setIsClicked] = useState(false)
    const [newClass, setNewClass] = useState('menu')

    // Find the current state of the menu icon
    const displayMenu = () => {

        // If the menu icon has not been clicked
        if(isClicked === false) {
            // Change the CSS class to 'responsive' 
            setNewClass('responsive')
            // Update the state of the menu icon 
            setIsClicked(true)
        }

        // If the menu icon has already been clicked
        if(isClicked === true) {
            // Change the CSS class to 'menu'
            setNewClass('menu')
            // Update the state of the menu icon
            setIsClicked(false)
        }
    }

    // When the user clicks the logo
    const router = useRouter()
    const goToHomePage = () => {
        router.push('/')
    }

  return (
    <nav className='nav'>
        <span className='logo' onClick={goToHomePage}>Cinema World</span>
        <span className={newClass}>
            <Link href={'#'}>
                <a>Home</a>
            </Link>
            <Link href={'#'}>
                <a>Search</a>
            </Link>
            <Link href={'#'}>
                <a>Popular Movies</a>
            </Link>
            <Link href={'#'}>
                <a>Popular TV Shows</a>
            </Link>
        </span>
        <HiMenu className='icon' onClick={displayMenu} />
    </nav>
  )
}

export default Navigation