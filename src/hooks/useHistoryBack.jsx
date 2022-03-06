import { Navigate, useNavigate } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import atrasIcon from '../assets/img/atras-icon.svg'

const useHistoryBack = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }
  return (
    <div className='position-absolute d-flex border border-primary' style={{ left: 130 + 'px', top: 20 + 'px',cursor:'pointer' }} >
      <Image src={atrasIcon} onClick={handleClick}/>
      <p>Atrás</p>
    </div>
  );
}
export default useHistoryBack;