import './search.scss';
import { AnimalDis } from '../models/data';

interface Props {
  animals: AnimalDis[];
  doSearch: (event: any) => void;
} 

function Search({animals, doSearch}: Props) {

  



  return (
    <section className="search">
      <input placeholder='Location, Name, Animal Type' onChange={doSearch} /> 
    </section>
  )
}

export default Search;