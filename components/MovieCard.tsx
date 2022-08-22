import Image from "next/image"
import Stars from "./Stars"


const MovieCard = () => {


  return (
    <div>
        <Image
            src={'/moviePoster.jpg'}
            alt={'Luca'}
            width={200}
            height={200}
        />
        <h3>Luca</h3>
        <Stars rating={4} />
    </div>
  )
}

export default MovieCard