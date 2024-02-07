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

const ContactForm = () => {
  const { currentTheme } = useTheme()

  return (
    <FormWrapper theme={{ currentTheme }}>
      <ThundersBG>
        <img src={ThunderImage} alt='Thunder Background Image' />
      </ThundersBG>
      <Form action='POST' theme={{ currentTheme }}>
        <Label htmlFor='name' theme={{ currentTheme }}>
          Name <span>*</span>
        </Label>
        <Input
          type='text'
          id='name'
          placeholder='Name'
          required
          theme={{ currentTheme }}
        />

        <Label htmlFor='company' theme={{ currentTheme }}>
          Company <span>*</span>
        </Label>
        <Input
          type='text'
          id='company'
          placeholder='Company'
          required
          theme={{ currentTheme }}
        />

        <Label htmlFor='email' theme={{ currentTheme }}>
          Email <span>*</span>
        </Label>
        <Input
          type='email'
          id='email'
          placeholder='Email'
          required
          theme={{ currentTheme }}
        />

        <PhoneDiv>
          <Label htmlFor='phone' theme={{ currentTheme }}>
            Phone{' '}
            <OptionalText className='optional-text' theme={{ currentTheme }}>
              Opcional
            </OptionalText>
          </Label>{' '}
          <Input
            type='tel'
            id='phone'
            placeholder='Phone'
            theme={{ currentTheme }}
          />
        </PhoneDiv>

        <Label htmlFor='contactText' theme={{ currentTheme }}>
          Escribe tu consulta <span>*</span>
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
            He leído y acepto la <span>política de privacidad.</span>
          </Label>
        </CustomCheckbox>

        <SubmitButton type='submit' theme={{ currentTheme }}>
          Enviar
        </SubmitButton>
      </Form>
    </FormWrapper>
  )
}

export default ContactForm
