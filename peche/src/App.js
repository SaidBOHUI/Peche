import styled, {createGlobalStyle} from 'styled-components'
import Navbar from './components/Navbar'
import Bandeau from './components/Bandeau'

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  /* background: #2c3e50; */
  	background-color: black;
  font-family: 'Open Sans', 'sans-serif';
  overflow-x:hidden;
  color : white
}
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Bandeau />
    </>
  )
};

export default App;
