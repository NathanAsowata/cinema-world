import MovieCard from "../components/MovieCard";
import {screen, render} from '@testing-library/react'

const movie = {
    id: 1,
    poster_path: '/posterImage.png',
    title: 'Gray Man',
    vote_average: 7.5
  }

describe('Movie card test suite', () =>{
    it('should display movie title', () => {
        // Get movie card component
        const Movie = render(<MovieCard movie={movie} />)

        // Get movie title
        const title = screen.getByText('Gray Man')

        // Expect movie title to be visible
        expect(title).toBeVisible()
    })
})