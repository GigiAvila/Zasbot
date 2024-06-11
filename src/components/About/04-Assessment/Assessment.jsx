import { Link } from 'react-router-dom'
import { useTheme } from '../../../hooks/UseTheme'
import {
  AssessmentSection,
  AssesmentArticle,
  ContactButton,
  BgWrapper
} from './Assessment.Styles'
import BgImage from './Assets/BGImage.png'

const Assessment = () => {
  const { currentTheme } = useTheme()

  return (
    <AssessmentSection id='assessment' theme={{ currentTheme }}>
      <AssesmentArticle theme={{ currentTheme }}>
        <h1>¿Necesitas ayuda con tu proyecto?</h1>
        <p>
          Nuestro equipo está preparado para relevar las necesidades de su
          negocio y diseñar las mejores soluciones. Realizamos proyectos
          especiales para cualquier tamaño de empresa
        </p>
        <ContactButton theme={{ currentTheme }}>
          <Link to='/contact'>Contáctanos</Link>
        </ContactButton>
      </AssesmentArticle>
      <BgWrapper>
        <img src={BgImage} alt='' />
      </BgWrapper>
    </AssessmentSection>
  )
}

export default Assessment
