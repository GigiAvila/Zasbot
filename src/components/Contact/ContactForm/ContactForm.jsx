import { useState } from 'react'
import { useForm } from 'react-hook-form'
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
  PrivatePolicyAnchor,
  ErrorSpan
} from './ContactForm.Styles'
import { useTheme } from '../../../hooks/UseTheme'
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
import Modal from '../Modal/Modal'

const ContactForm = () => {
  const { currentTheme } = useTheme()
  const { postNewForm } = FetchContactData()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [isOpen, setIsOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    contactText: '',
    acceptedPolicy: false
  })

  const onSubmit = () => {
    const data = { ...formData, acceptedPolicy: true }
    if (data.acceptedPolicy) {
      postNewForm(data)
      setIsOpen(true)
    } else {
      alert('Debe aceptar la política de privacidad para enviar el formulario')
    }
  }

  return (
    <>
      <FormWrapper theme={{ currentTheme }}>
        <ThundersBG>
          <img
            src='https://res.cloudinary.com/dqdyvyknw/image/upload/v1714386729/thunders_yt9bpt.png'
            alt='Thunder Background Image'
          />
        </ThundersBG>
        <Form onSubmit={handleSubmit(onSubmit)} theme={{ currentTheme }}>
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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
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
              {...register('acceptedPolicy', { required: true })}
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
          {errors.acceptedPolicy && (
            <ErrorSpan>
              Debe aceptar la política de privacidad para continuar
            </ErrorSpan>
          )}

          <SubmitButton type='submit' theme={{ currentTheme }}>
            {CONTACT_BUTTON_TEXT}
          </SubmitButton>
        </Form>
      </FormWrapper>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  )
}

export default ContactForm
