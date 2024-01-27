import {
  ConditionsContainer,
  TermsConditionsAndPolicyContainer,
  TermsConditionsAndPolicyText,
  CopyrightText
} from './TermsConditionsAndPolicy.Styles'
import {
  FOOTER_PRIVACY_TEXT,
  FOOTER_SECURITY_TEXT,
  FOOTER_TERMS_TEXT,
  FOOTER_RIGHTS_TEXT
} from '../../../data/SpanishText'

const TermsConditionsAndPolicy = () => {
  return (
    <ConditionsContainer>
      <TermsConditionsAndPolicyContainer>
        <TermsConditionsAndPolicyText>
          <a href='#'>{FOOTER_TERMS_TEXT} | </a>
        </TermsConditionsAndPolicyText>
        <TermsConditionsAndPolicyText>
          <a href='#'> {FOOTER_PRIVACY_TEXT} |</a>
        </TermsConditionsAndPolicyText>
        <TermsConditionsAndPolicyText>
          <a href='#'>{FOOTER_SECURITY_TEXT} | </a>
        </TermsConditionsAndPolicyText>
      </TermsConditionsAndPolicyContainer>
      <CopyrightText>
        {' '}
        Copyright © 2024 ZASBOT | {FOOTER_RIGHTS_TEXT} |
      </CopyrightText>
    </ConditionsContainer>
  )
}

export default TermsConditionsAndPolicy
