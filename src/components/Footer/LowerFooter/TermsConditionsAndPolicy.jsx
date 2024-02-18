import {
  ConditionsContainer,
  TermsConditionsAndPolicyText,
  CopyrightText,
  TermsWrapper
} from './TermsConditionsAndPolicy.Styles'
import {
  FOOTER_PRIVACY_TEXT,
  // FOOTER_SECURITY_TEXT,
  FOOTER_TERMS_TEXT,
  FOOTER_RIGHTS_TEXT
} from '../../../data/SpanishText'
import { useTheme } from '../../../hooks/UseTheme'

const TermsConditionsAndPolicy = () => {
  const { currentTheme } = useTheme()

  return (
    <ConditionsContainer>
      <TermsWrapper>
        <TermsConditionsAndPolicyText
          href='https://www.privacypolicies.com/live/a3e531f0-8f8e-48dd-92f9-4be63fe344f1'
          title='Términos y condiciones'
          theme={{ currentTheme }}
        >
          <p>{FOOTER_TERMS_TEXT} |</p>{' '}
        </TermsConditionsAndPolicyText>
        <TermsConditionsAndPolicyText
          href='https://www.iubenda.com/privacy-policy/12964736'
          className='iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe '
          title='Política de Privacidad '
          theme={{ currentTheme }}
        >
          <p>{FOOTER_PRIVACY_TEXT} |</p>
        </TermsConditionsAndPolicyText>
        <TermsConditionsAndPolicyText
          href='https://www.iubenda.com/privacy-policy/12964736/cookie-policy'
          className='iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe '
          title='Política de Cookies '
          theme={{ currentTheme }}
        >
          <p>Política de Cookies </p>
        </TermsConditionsAndPolicyText>
        {/* <TermsConditionsAndPolicyText theme={{ currentTheme }}>
          <p>{FOOTER_SECURITY_TEXT} |</p>
        </TermsConditionsAndPolicyText> */}
      </TermsWrapper>
      <CopyrightText theme={{ currentTheme }}>
        {' '}
        Copyright © 2024 ZASBOT | {FOOTER_RIGHTS_TEXT} |
      </CopyrightText>
    </ConditionsContainer>
  )
}

export default TermsConditionsAndPolicy
