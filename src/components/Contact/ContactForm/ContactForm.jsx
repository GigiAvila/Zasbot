import {
  FormWrapper,
  Form,
  Label,
  Input,
  PhoneDiv,
  OptionalText,
  TextArea,
  SubmitButton,
  ThundersBG,
  CustomCheckbox,
  HiddenCheckbox,
  StyledCheckbox
} from './ContactForm.Styles'
import { useTheme } from '../../../hooks/UseTheme'
// import ConctactBg from '../ContactBG/ConctactBg'
import ThunderImage from '../Assets/thunders.png'
import {
  CONTACT_BUTTON_TEXT,
  CONTACT_COMPANY_LABEL,
  CONTACT_EMAIL_LABEL,
  CONTACT_NAME_LABEL,
  CONTACT_OPTIONAL_SPAN,
  CONTACT_PHONE_LABEL,
  CONTACT_POLICY_LABEL,
  CONTACT_POLICY_SPAN,
  CONTACT_TEXT_LABEL
} from '../../../data/SpanishText'

const ContactForm = () => {
  const { currentTheme } = useTheme()

  return (
    <FormWrapper theme={{ currentTheme }}>
      <ThundersBG>
        <img src={ThunderImage} alt='Thunder Background Image' />
      </ThundersBG>
      <Form action='POST' theme={{ currentTheme }}>
        <Label htmlFor='name' theme={{ currentTheme }}>
          {CONTACT_NAME_LABEL} <span>*</span>
        </Label>
        <Input
          type='text'
          id='name'
          placeholder={CONTACT_NAME_LABEL}
          required
          theme={{ currentTheme }}
        />

        <Label htmlFor='company' theme={{ currentTheme }}>
          {CONTACT_COMPANY_LABEL} <span>*</span>
        </Label>
        <Input
          type='text'
          id='company'
          placeholder={CONTACT_COMPANY_LABEL}
          required
          theme={{ currentTheme }}
        />

        <Label htmlFor='email' theme={{ currentTheme }}>
          {CONTACT_EMAIL_LABEL} <span>*</span>
        </Label>
        <Input
          type='email'
          id='email'
          placeholder={CONTACT_EMAIL_LABEL}
          required
          theme={{ currentTheme }}
        />

        <PhoneDiv>
          <Label htmlFor='phone' theme={{ currentTheme }}>
            {CONTACT_PHONE_LABEL}
            <OptionalText className='optional-text' theme={{ currentTheme }}>
              {CONTACT_OPTIONAL_SPAN}
            </OptionalText>
          </Label>{' '}
          <Input
            type='tel'
            id='phone'
            placeholder={CONTACT_PHONE_LABEL}
            theme={{ currentTheme }}
          />
        </PhoneDiv>

        <Label htmlFor='contactText' theme={{ currentTheme }}>
          {CONTACT_TEXT_LABEL} <span>*</span>
        </Label>
        <TextArea
          id='contactText'
          name='contactText'
          required
          theme={{ currentTheme }}
        ></TextArea>
        <CustomCheckbox>
          <HiddenCheckbox
            type='checkbox'
            id='PrivatePolicy'
            theme={{ currentTheme }}
            required
          />
          <StyledCheckbox theme={{ currentTheme }} />
          <Label htmlFor='PrivatePolicy' theme={{ currentTheme }}>
            {CONTACT_POLICY_LABEL} <span> {CONTACT_POLICY_SPAN}</span>
          </Label>
        </CustomCheckbox>

        <SubmitButton type='submit' theme={{ currentTheme }}>
          {CONTACT_BUTTON_TEXT}
        </SubmitButton>
      </Form>
    </FormWrapper>
  )
}

export default ContactForm
