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
  InfotextContainer,
  ZasbotImage
} from './Modal.Styles'
import CloseIcon from './Assets/close.svg'
import CompanyLogo from './Assets/logo.png'
import { useTheme } from '../../../hooks/UseTheme'

const Modal = ({ isOpen, setIsOpen }) => {
  const { currentTheme } = useTheme()
  const handleModalOpen = () => {
    setIsOpen(false)
  }
  return (
    <>
      {isOpen
        ? ReactDOM.createPortal(
            <ModalPopover>
              <ModalContainer theme={{ currentTheme }}>
                <CloseButtonContainer
                  onClick={handleModalOpen}
                  theme={{ currentTheme }}
                >
                  <img src={CloseIcon} alt='Close Modal Icon' />
                </CloseButtonContainer>
                <ModalTitle theme={{ currentTheme }}>
                  ¡Gracias por contactarnos!
                </ModalTitle>
                <ModalSubtitle theme={{ currentTheme }}>
                  Nos pondremos en contacto con la mayor brevedad posible
                </ModalSubtitle>
                <ZasbotImage>
                  <img
                    src='https://res.cloudinary.com/dqdyvyknw/image/upload/v1719334364/ZASBOT_11_ckckp4.png'
                    alt='Robot laying down resting in the modal that thanks the user for contacting Zasbot'
                  />
                </ZasbotImage>
                <ModalContactFooter>
                  <CompanyInfoWrapper theme={{ currentTheme }}>
                    <CompanyLogoWrapper theme={{ currentTheme }}>
                      <img
                        src={currentTheme['--companyImage'].slice(4, -1)}
                        alt='Zasbot company Logo'
                      />
                    </CompanyLogoWrapper>
                    <h3>
                      Aumenta tus ingresos ofreciendo a tus clientes una
                      atención 24/7 en todos los canales de comunicación
                    </h3>
                  </CompanyInfoWrapper>
                  <InfotextContainer theme={{ currentTheme }}>
                    <h4>info@zasbot.com</h4>
                    <h4>+34 636595002</h4>
                  </InfotextContainer>
                </ModalContactFooter>
              </ModalContainer>
            </ModalPopover>,
            document.getElementById('portal')
          )
        : null}
    </>
  )
}

export default Modal
