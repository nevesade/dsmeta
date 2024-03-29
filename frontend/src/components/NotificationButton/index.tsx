import axios from 'axios';
import toast from 'react-hot-toast';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';


type Props= {
    saleId: number;

}


function handleClick(id : number)  {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(reponse => {
        toast.success("SMS enviado com sucesso!")
    })
}

function NotificationButon( {saleId} : Props) {


    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>

    )
}

export default NotificationButon;
