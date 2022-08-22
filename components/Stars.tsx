import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


interface propTypes {
    rating: number
}

const Stars = ({rating}: propTypes) => {
    const movieRating = rating/2
    const stars = Math.round(movieRating)

    if (stars === 1) {
        return (
            <>
                <AiFillStar /> 
                <AiOutlineStar /> 
                <AiOutlineStar /> 
                <AiOutlineStar /> 
                <AiOutlineStar />
            </>
        )
    } else if (stars === 2) {
        return (
            <>
                <AiFillStar /> 
                <AiFillStar /> 
                <AiOutlineStar /> 
                <AiOutlineStar /> 
                <AiOutlineStar />
            </>
        )
    } else if (stars === 3) {
        return (
            <>
                <AiFillStar /> 
                <AiFillStar /> 
                <AiFillStar />
                <AiOutlineStar /> 
                <AiOutlineStar />
            </>
        )
    } else if (stars === 4) {
        return (
            <>
                <AiFillStar /> 
                <AiFillStar /> 
                <AiFillStar />
                <AiFillStar /> 
                <AiOutlineStar />
            </>
        )
    } else if (stars === 5) {
        return (
            <>
                <AiFillStar /> 
                <AiFillStar /> 
                <AiFillStar />
                <AiFillStar /> 
                <AiFillStar /> 
            </>
        )
    } else {
        return (
            <p>N/A</p>
        )
    }
}

export default Stars