import { Link } from 'react-router-dom'
import { useTheme } from '../../../hooks/UseTheme'
import {
  AssessmentSection,
  AssesmentArticle,
  ContactButton
} from './Assessment.Styles'

const Assessment = () => {
  const { currentTheme } = useTheme()

  return (
    <AssessmentSection id='assessment' theme={{ currentTheme }}>
      <AssesmentArticle theme={{ currentTheme }}>
        <h3>¿Necesitas ayuda con tu proyecto?</h3>
        <p>
          Nuestro equipo está preparado para relevar las necesidades de su
          negocio y diseñar las mejores soluciones. Realizamos proyectos
          especiales para cualquier tamaño de empresa
        </p>
        <ContactButton theme={{ currentTheme }}>
          <Link to='/contact'>CONTACTANOS</Link>
        </ContactButton>
      </AssesmentArticle>
      {/* <BgWrapper>
        <img src={BgImage} alt='' />
      </BgWrapper> */}
    </AssessmentSection>
  )
}

export default Assessment
