import TermsConditionsAndPolicy from './TermsConditionsAndPolicy'
import ColorModeToggle from './ColorMode/ColorModeToggle'
import {
  LowerFooterContainer,
  LowerFooterWrapper,
  ActionsWrapper
} from './LowerFooter.Styles'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'

export const LowerFooter = () => {
  return (
    <LowerFooterContainer>
      <LowerFooterWrapper>
        <TermsConditionsAndPolicy />
        <ActionsWrapper>
          <ColorModeToggle />
          <ScrollToTop />
        </ActionsWrapper>
      </LowerFooterWrapper>
    </LowerFooterContainer>
  )
}
