import MovieCard from "../components/MovieCard";
import {screen, render} from '@testing-library/react'

describe('Movie card test suite', () =>{
    it('should display movie poster image', () => { 
        // Get movie card component
        const Movie = render(<MovieCard />)
        
        // Get movie poster image
        const posterImage = screen.getByRole('img')

        // Expect poster image to be visible
        expect(posterImage).toBeVisible()
    })
    it('should display movie title', () => {
        // Get movie card component
        const Movie = render(<MovieCard />)

        // Get movie title
        const title = screen.getByText('Luca')

        // Expect movie title to be visible
        expect(title).toBeVisible()
    })
})