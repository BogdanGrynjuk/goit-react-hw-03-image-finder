import PropTypes from 'prop-types';
import { Overlay, ModalWindow} from 'components/Modal/Modal.styled';


export const Modal = ({ largeImageUrl, tags, onClick }) => {  
  return (
    <Overlay id='Overlay' onClick={onClick}>
      <ModalWindow>
        <img src={largeImageUrl} alt={tags} />
      </ModalWindow>
    </Overlay>)
}

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}