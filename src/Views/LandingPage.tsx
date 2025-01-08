import AnimalGrid from "../components/AnimalGrid";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import { AnimalDis } from "../models/data";
import jsonData from '../animals.json'
import { useState } from "react";
import { useNavigate } from 'react-router'
import "./landingPage.scss";



const LandingPage = () =>{
    const [animals, setAnimals] = useState<AnimalDis[]>(jsonData.animals)
    const navigate = useNavigate();
    

    const animalOnClick = (animal: any ) =>{
        navigate('/AnimalInfo' , {state:{animal}})
        return animal; 
    }
    
    
    return(
        <>
            <Header/>
            <section className="textWrapper">
                <h1>Rescue Rabbits</h1>
                <p>Thank you for finding here! Rescue Rabbits advises anyone who has the opportunity to add an animal to their family to turn to an animal shelter and give a homeless animal a safe life. </p>
            </section>
            <section className="landingPageWrapper">
                <AnimalGrid  animals={animals} animalOnClick={animalOnClick} />
            </section>
            <Footer />
        </>
    )
}

export default LandingPage;