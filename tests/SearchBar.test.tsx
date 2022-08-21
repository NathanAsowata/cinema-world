import SearchBar from "../components/SearchBar";
import {render, screen, fireEvent} from '@testing-library/react'

describe('Search bar test', () => { 
    it('should display search bar', () => { 
        // Get search bar component
        const Search = render(<SearchBar />)

        // Get search input 
        const searchInput = screen.getByRole('textbox')
        // Get search button
        const submitButton = screen.getByRole('button')

        // Expect search input to be visible
        expect(searchInput).toBeVisible()
        // Expect search button to be visible
        expect(submitButton).toBeVisible()
    }) 
    it('should accept user input', () => { 
        // Get search bar component
        const Search = render(<SearchBar />)

        // Get search input 
        const searchInput = screen.getByRole('textbox')

        // Add 'Titanic' to the search input field
        fireEvent.change(searchInput, {target:{value: 'Titanic'}})

        // Expect 'Titanic' to be in the the search bar
        expect(searchInput).toHaveDisplayValue('Titanic')
    })
})