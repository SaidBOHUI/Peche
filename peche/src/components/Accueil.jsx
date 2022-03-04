import {createGlobalStyle} from 'styled-components'
import Navbar from './Navbar'
import Bandeau from './Bandeau'
import Description from './Description'
import Footer from './Footer'

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

const Accueil = () => {
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

export default Accueil;
