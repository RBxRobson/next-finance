import Counter from './components/Counter'
import GlobalStyles from './styles/global-styles'

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Counter label="Contador em" primary />
    </>
  )
}

export default App
