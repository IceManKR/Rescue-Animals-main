import './modal.scss'
import { useNavigate } from 'react-router'

interface Prop {
    closeModal: (close: boolean) => void;
    username: string;
}
const Modal = ({closeModal, username}: Prop) =>{
    const navigate = useNavigate();
    const closeBtn = () =>{
        closeModal(false)
        navigate('/')
    }
    return(
        <section className='modal-container'>
            <div className='modal'>

                <h1 className='modal-h1'>Thank you for your application! <br/>{username}</h1>
                <button className='modal-button' onClick={closeBtn}>Close</button> 
            </div>
            
        </section>
    )
}



export default Modal;