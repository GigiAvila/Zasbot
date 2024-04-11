import ReactDOM from 'react-dom'
import {
  ModalPopover,
  ModalContainer,
  CloseButtonContainer,
  ModalTitle,
  ModalSubtitle,
  ModalContactFooter,
  CompanyLogoWrapper,
  CompanyInfoWrapper,
  InfotextContainer
} from './Modal.Styles'
import CloseIcon from './Assets/close.svg'
import CompanyLogo from './Assets/logo.png'

const Modal = ({ isOpen, setIsOpen }) => {
  const handleModalOpen = () => {
    setIsOpen(false)
  }
  return (
    <>
      {isOpen
        ? ReactDOM.createPortal(
            <ModalPopover>
              <ModalContainer>
                <CloseButtonContainer onClick={handleModalOpen}>
                  <img src={CloseIcon} alt='Close Modal Icon' />
                </CloseButtonContainer>
                <ModalTitle>¡Gracias por contactarnos!</ModalTitle>
                <ModalSubtitle>
                  Nos pondremos en contacto con la mayor brevedad posible
                  <ModalContactFooter>
                    <CompanyInfoWrapper>
                      <CompanyLogoWrapper>
                        <img src={CompanyLogo} alt='Zasbot company logo' />
                      </CompanyLogoWrapper>
                      <h3>
                        Aumenta tus ingresos ofreciendo a tus clientes una
                        atención 24/7 en todos los canales de comunicación
                      </h3>
                    </CompanyInfoWrapper>
                    <InfotextContainer>
                      <h4>info@zasbot.com</h4>
                      <h4>+34 636595002</h4>
                    </InfotextContainer>
                  </ModalContactFooter>
                </ModalSubtitle>
              </ModalContainer>
            </ModalPopover>,
            document.getElementById('portal')
          )
        : null}
    </>
  )
}

export default Modal
