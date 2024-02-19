import { useState } from 'react'
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
  StyledCheckbox,
  PrivatePolicyAnchor
} from './ContactForm.Styles'
import { useTheme } from '../../../hooks/UseTheme'
import ThunderImage from '../Assets/thunders.png'
import { FetchContactData } from '../../../fetch/FormData'
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
  const { postNewForm } = FetchContactData()

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    contactText: ''
  })

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    postNewForm(formData)
  }

  return (
    <FormWrapper theme={{ currentTheme }}>
      <ThundersBG>
        <img src={ThunderImage} alt='Thunder Background Image' />
      </ThundersBG>
      <Form onSubmit={onSubmit} theme={{ currentTheme }}>
        <Label htmlFor='name' theme={{ currentTheme }}>
          {CONTACT_NAME_LABEL} <span>*</span>
        </Label>
        <Input
          type='text'
          id='name'
          placeholder={CONTACT_NAME_LABEL}
          required
          theme={{ currentTheme }}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
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
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
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
          onChange={(e) =>
            setFormData({ ...formData, contactText: e.target.value })
          }
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
            {CONTACT_POLICY_LABEL}{' '}
            <PrivatePolicyAnchor
              href='https://www.iubenda.com/privacy-policy/12964736'
              title='Política de privacidad'
              theme={{ currentTheme }}
            >
              <span>{CONTACT_POLICY_SPAN}</span>
            </PrivatePolicyAnchor>
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
