import Footer from "../components/Footer";
import Header from "../components/Header";
import aboutpic from '../images/categories/aboutuspic.jpg'
import './about.scss'

const About = () =>{
    return(
        <>
        <Header/>
            <section className="about-flex-container">
                <article className="big-info">
                    <img src={aboutpic} alt="dogcatpic" />
                    <div>
                        <p className="title-p">Rescue Rabbits</p>
                        <h1 className="title-h1">“The best way to find a new friend”</h1>
                    </div>
                </article>
                <article className="small-info">
                    <div className="info-left">
                        <h3 className="info-h3">
                        On site and online since 2024
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi inventore excepturi enim optio aperiam voluptatum nihil, animi soluta, modi fugiat? Vero asperiores voluptates earum odit suscipit dolorem ea eaque.
                        </p>
                    </div>
                    <div className="info-right">
                        <h3 className="info-h3">
                        We put the animals first!
                        </h3>
                        <p>
                        Since the beginning, we have been driven by a strong motivation to advocate for those who cannot speak with normal speech and ensure that they deserve the absolute best. This flows through our entire adoption process from the start until the little lives have found a new and loving life.
                        </p>
                    </div>
                </article>
            </section>


        <Footer />
        </>
    )
}

export default About;