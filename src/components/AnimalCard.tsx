import { AnimalDis } from '../models/data'
import './animal.scss'

interface Props {
    animal: AnimalDis;
    animalOnClick: (animal: any) => void;
}

const AnimalCard = ({animal, animalOnClick}: Props) =>{

    return(
        
        <div className='card' key={animal.animalId}>
            <div className={"booked booked"+animal.booked}> </div>
                <img src={animal.img} alt="" />
                <h3>{animal.name}</h3>
                <p>Birth Date {animal.born}</p>
                <p>Gender {animal.gender}</p>
                <p>Area {animal.location}</p>
             <button onClick={() =>animalOnClick(animal)}>Read more</button>
         </div>
    )
}

export default AnimalCard;