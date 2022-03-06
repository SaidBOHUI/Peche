import {createGlobalStyle} from 'styled-components';
import { useState } from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import Footer from './components/Footer';


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
const Container = styled.div`
	border: white 3px solid;
	width: 30rem;
	padding: 3rem;
    margin:auto;
	margin-top: 11vh;
    h1{
        margin-bottom:  1.5rem;
	    text-align: center;
    }
    &:hover{
        filter: drop-shadow(0 0 15px white);
         -webkit-filter: drop-shadow(0 0 15px white);
         transition: 0.5s ;
    }
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

    div{        
        display: flex;
        align-items: center;
	    /* padding-left: 2rem ; */
        p{
            font-size: large;
	        font-weight: 700;
        }
    }

    input{
        color: black;
	display: block;
	width: 30rem;
	height: 1.5rem;
	margin: 2rem 0;
	font-size: large;
	font-weight: 700;
    }
    input[type=checkbox]{
        width: 2rem;
	/* height: 2rem; */
	margin-right: 3rem;
    }

    input[type=submit] {
	 width: 10rem;
	 border: 2px solid white;
	 color: white;
	 background-color: black;
	 height: 4rem;
	 margin: 2rem auto;
     cursor: pointer;
     &:hover{
		 background-color: #1abc9c;
         color:black;
         transition: 0.5s ;
	 }
}
`


const Inscription = () => { 
    return(
        <>
         <GlobalStyle />
            <Navbar />
                <Container>
                    <h1>Inscription</h1>
                    <Form>
                        <input type="text" placeholder="Nom d'utilisateur" name='user' id="user" />
                        <input type="email" placeholder="Adresse mail" name="mail" id="mail" />
			            <input type="password" placeholder="mot de passe" name="mdp" id="mdp" />
                        <div className = 'checkbox' >			
				            <input type="checkbox" name="offres" id="offres" />
			            	<p>Recevoir nos offres</p>
			            </div>
                        <input type="submit" />
                    </Form>
                </Container>
             <Footer />
        </>
    
    )
}


export default Inscription