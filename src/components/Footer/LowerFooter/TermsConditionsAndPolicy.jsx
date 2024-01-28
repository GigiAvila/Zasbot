import {
  ConditionsContainer,
  TermsConditionsAndPolicyText,
  CopyrightText
} from './TermsConditionsAndPolicy.Styles'
import {
  FOOTER_PRIVACY_TEXT,
  FOOTER_SECURITY_TEXT,
  FOOTER_TERMS_TEXT,
  FOOTER_RIGHTS_TEXT
} from '../../../data/SpanishText'
import { useTheme } from '../../../hooks/UseTheme'

const TermsConditionsAndPolicy = () => {
  const { currentTheme } = useTheme()

  return (
    <ConditionsContainer>
      <TermsConditionsAndPolicyText href='#' theme={{ currentTheme }}>
        <p>{FOOTER_TERMS_TEXT} |</p> <p>{FOOTER_PRIVACY_TEXT} |</p>
        <p>{FOOTER_SECURITY_TEXT} |</p>
      </TermsConditionsAndPolicyText>
      <CopyrightText theme={{ currentTheme }}>
        {' '}
        Copyright © 2024 ZASBOT | {FOOTER_RIGHTS_TEXT} |
      </CopyrightText>
    </ConditionsContainer>
  )
}

export default TermsConditionsAndPolicy
