import './footer.scss'
import { useNavigate } from 'react-router'



const Footer = () => {
    const navigate = useNavigate();

    return (
        <section className="footer">
            <article className='copy-right'>
                <p className='headline'>Animal Rescue</p>
                <p>© 2024</p>
                <p>Privacy Terms</p>
            </article>
            <article className="socialMedia">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-instagram"></a>
            </article>
            <article>
                <ul className="ul__footer">
                    <p className='headline'>Företag</p>
                    <li onClick={() => navigate('/About')}><a>About</a></li>
                    <li onClick={() => navigate('/Adoption')}><a>Adoption</a></li>
                </ul>
            </article>
        </section>
    )
}

export default Footer;
