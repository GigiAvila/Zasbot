import { LoadingSection, Loader } from './Loading.Styles'
import { useTheme } from '../../hooks/UseTheme'

const Loading = () => {
  const { currentTheme } = useTheme()
  return (
    <LoadingSection theme={{ currentTheme }}>
      <Loader></Loader>
    </LoadingSection>
  )
}

export default Loading
