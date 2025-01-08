import Header from "../components/Header";
import Footer from "../components/Footer";

import './adoption.scss'

const Adoption = () => {
    return(
        <>
        <Header/>
        
        <section className="info-flex-container">
            <article className="info-adopt">
                <h1>To adopt</h1>
                <p>Our adoption process is unique in its kind as we do a careful profiling of the animal and its potential new family.</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente mollitia, corrupti est ducimus velit quis pariatur, dolor eaque eligendi repellendus, magnam dolorem. Doloremque vel illo similique voluptates eaque magni. 
                </p>
            </article>
            <article>
                <h3 className="title-review">
                From others who have adopted animals
                </h3>
            </article>
            <article>
                <div className="reviews">
                    <p>ANNA</p>
                    <p>2021-08-14</p>
                    <br></br>
                    <p>Adopting has been very smooth and everything has gone so well. My new little rabbit MrBun is doing so well at my house and I have had help with everything that MrBun could possibly need! A THOUSAND THANKS!
                    </p>
                </div>
                <div className="reviews">
                    <p>STEFAN</p>
                    <p>2023-01-04</p>
                    <br></br>
                    <p>Great
                    </p>
                </div>
                <div className="reviews">
                    <p>GUNILLA</p>
                    <p>2019-12-14</p>
                    <br></br>
                    <p>
                     very nice 
                    </p>
                </div>
            </article>
        </section>
        <Footer />
        </>
    )
}

export default Adoption;