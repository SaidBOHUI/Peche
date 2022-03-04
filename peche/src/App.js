import {createGlobalStyle} from 'styled-components'
import Navbar from './components/Navbar'
import Bandeau from './components/Bandeau'
import Description from './components/Description'
import Footer from './components/Footer'

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
      <Description />
      <Footer />
    </>
  )
};

export default App;
