import Navigation from '../components/Navigation';
import {render, screen} from '@testing-library/react' 

describe('Navigation test suite', () => {
    it('should display logo', () => { 
        // Get the navigation component
        const NavBar = render(<Navigation />)

        // Get the logo element
        const logoElement = screen.getByText('Cinema World')

        // Expect logo to be visible
        expect(logoElement).toBeVisible()
     })
})