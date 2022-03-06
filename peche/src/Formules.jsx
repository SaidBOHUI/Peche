import {createGlobalStyle} from 'styled-components'
import Navbar from './components/Navbar'
import styled from 'styled-components'
import Footer from './components/Footer'
// import Card from './components/Card'
import Yasser from './assets/images/victims/yasser.PNG' 
import Eddy from './assets/images/victims/eddy.PNG' 
import Wick from './assets/images/victims/johnWick.jpeg' 
import Kangoo from './assets/images/victims/kangoo.jpeg' 
import Ngannou from './assets/images/victims/ngannou.jpg' 
import Thanos from './assets/images/victims/thanos.jpeg' 

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

const AllCards = styled.div`
`

const Line = styled.div`
display: flex;
justify-content: space-evenly;
`
const Flipping = styled.div`
position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`

const Carte = styled.div`
/* border: white solid 2px; */
width: 30vw ;
margin-top: 10rem ;
background-color: transparent;
/* position:absolute; */
/* perspective: 1000px; */
/* A changer aavec flex */
height: 74vh ;
cursor:pointer ;

/* &:hover~${Flipping}{
    transform: rotateY(180deg);

} */
img{
    &:hover{
        filter: brightness(20%);
        -webkit-filter: brightness(20%);
        transition: .7s ;
        /* transform: rotateY(180deg); */
    }
}
`



const Verso = styled.div`
 position: absolute;
 width: 100%;
 height: 100%;
 /* -webkit-backface-visibility: hidden; Safari */
 /* backface-visibility: hidden; */
 background-color: transparent;
 color: white;
 /* transform: rotateY(180deg); */
 /* z-index: 10; */
 /* visibility: hidden ; */
 z-index:1 ;
 line-height:1.5rem ;
    div{
        &:nth-child(3){
            padding: 2rem 1rem ;
            text-align: justify ;
        }
    }
 `

 const Recto = styled.div`
  position: absolute;
   width: 100%;
   height: 100%;
   z-index: 2 ;
   /* -webkit-backface-visibility: hidden; Safari */
   /* backface-visibility: hidden; */
   /* background-color: #bbb; */
   /* color: black; */
     img {
         width:100%;
         height:100%;
         object-fit: fill;
     }
     &:hover{
         filter: drop-shadow(0 0 15px white);
         -webkit-filter: drop-shadow(0 0 15px white);
         transition: 0.5s ;
     }
     &:hover~${Verso}{
         /* visibility:visible ; */
         z-index: 3 ;
         filter: drop-shadow(0 0 15px white);
         -webkit-filter: drop-shadow(0 0 15px white);
         transition: 0.5s ;
     }
 `

const Formules = () => {

    return(
        <>
        <GlobalStyle />
        <Navbar />
      {/* Composant Card à faire plus tard */}
      <AllCards>
        <Line>
            <Carte>
                <Flipping>
                    <Recto>
                        <img src={Yasser} alt="Yasser" />
                    </Recto>
                    <Verso>
                        <h2>formule Badaboum </h2>
                        <div>
                            <div>                       
                                <p>Méchant : Yasser la terreur</p>
                                <p>Taille : 1m89</p>
                            </div>
                            <div>
                                <p>Poids : 97kg</p>
                                <p>Attaque ultime : C4 Garouda</p>
                            </div>
                            <div>
                                <p>Scénario</p>
                                <p> Vous vous brouillez avec un homme, une voiture de police situé non-loin de la vous embarques tous les deux. Sur le chemin, il tente de s'enfuir en déclenchant une bombe. Vous le neutralisé avant qu'il n'y parvienne. Une fois au poste vous apprenez que vous venez d'éteindre une attaque menée par l'un des plus grands terroristes du 21ème siècle. Ceci car vous êtes trop fort</p>
                            </div>
                        </div>
                    </Verso>
                </Flipping>
            </Carte>
            <Carte>
                <Flipping>
                    <Recto>
                        <img src={Eddy} alt="Yasser" />
                    </Recto>
                    <Verso>
                        <h2>formule Double bang </h2>
                        <div>
                            <div>                       
                                <p>Méchant : Les jumeaux maléfiques</p>
                                <p>Taille : 1m85</p>
                            </div>
                            <div>
                                <p>Poids : 90kg</p>
                                <p>Attaque ultime : </p>
                            </div>
                            <div>
                                <p>Scénario</p>
                                <p>Vous êtes à la banque lorsque les deux jumeaux rentrent et démarre un braquage. Grâce
                                    à vos réflexes incroyables et malgré 9 balles dans le corps, vous parvenez à désarmer les voyous et les mettre hors d'état de nuire avant l'arrivée de la police. En effet, vous êtes trop fort
                                </p>
                            </div>
                        </div>
                    </Verso>
                </Flipping>
            </Carte>
        </Line>
        <Line>
            <Carte>
                <Flipping>
                    <Recto>
                        <img src={Wick} alt="Yasser" />
                    </Recto>
                    <Verso>
                        <h2>formule Wick</h2>
                        <div>
                            <div>                       
                                <p>Méchant : John Wick</p>
                                <p>Taille : 1m86</p>
                            </div>
                            <div>
                                <p>Poids : 84kg</p>
                                <p>Attaque ultime : headShot</p>
                            </div>
                            <div>
                                <p>Scénario</p>
                                <p>L'assassin très expérimenté essaye de vous tuer à multiples reprises durant cette journée. Sans grand succès car vous êtes trop fort. Lorsqu'il s'avoue vaincu il réalise que vous ressemblez à sa cible mais qu'il ne s'agit pas de vous. Il vous supplie de l'aider à réaliser sa mission car encore une fois :vous êtes trop fort</p>
                            </div>
                        </div>
                    </Verso>
                </Flipping>
            </Carte>
            <Carte>
                <Flipping>
                    <Recto>
                        <img src={Kangoo} alt="Yasser" />
                    </Recto>
                    <Verso>
                        <h2>formule Tyson</h2>
                        <div>
                            <div>                       
                                <p>Méchant : la terreur</p>
                                <p>Taille : 1m75</p>
                            </div>
                            <div>
                                <p>Poids : 87kg</p>
                                <p>Attaque ultime : Crochet uppercut</p>
                            </div>
                            <div>
                                <p>Scénario</p>
                                <p> Le kangourou s'est échapé du zoo. en tuant trois gardiant. En passant devant le zoo le kangourou tente de s'en prendre à la personne à impressionner. Après une terrible bataille vous terrassez le kangourou par la force de vos points. Vous êtes vraiment trop fort </p>
                            </div>
                        </div>
                    </Verso>
                </Flipping>
            </Carte>
        </Line>
        <Line>
            <Carte>
                <Flipping>
                    <Recto>
                        <img src={Ngannou} alt="Yasser" />
                    </Recto>
                    <Verso>
                        <h2>formule Cameroonian Dream</h2>
                        <div>
                            <div>                       
                                <p>Méchant : Francis Ngannou</p>
                                <p>Taille : 1m93</p>
                            </div>
                            <div>
                                <p>Poids : 114kg</p>
                                <p>Attaque ultime : Ngapunch</p>
                            </div>
                            <div>
                                <p>Scénario</p>
                                <p>Vous faites la queue sur le parking pour entrer à DisneyLand avec la personne à impressionner. Lorsque Francis Ngannou decide de passer devant vous. En thug que vous êtes vous n'acceptez pas cela. Ainsi Francis decide que vous devez en découdre ici-même. Vous parvenez à esquiver tous ses coups et même les voitures qu'il vous lance et sur un coup de coude dévastateur vous envoyez Françis dans le coma. Nos acteurs ambulanciers arrivent sur place et déclaresnt qu'il n'ont jamais rien vu de tel. Normal, vous etes trop fort</p>
                            </div>
                        </div>
                    </Verso>
                </Flipping>
            </Carte>
            <Carte>
                <Flipping>
                    <Recto>
                        <img src={Thanos} alt="Yasser" />
                    </Recto>
                    <Verso>
                        <h2>formule Universe</h2>
                        <div>
                            <div>                       
                                <p>Méchant : Thanos</p>
                                <p>Taille : 2m73</p>
                            </div>
                            <div>
                                <p>Poids : 311kg</p>
                                <p>Attaque ultime : Destruction de l'univers</p>
                            </div>
                            <div>
                                <p>Scénario</p>
                                <p> Encore une fois les avengers ont besoin de vous afin d'effectuer une descente chez le grand Thanos. En effet même Thor et Hulk ne lui font aucun effet. Vous êtes le seul qui puisse le vaincre. Pourquoi? Car vous êtes trop fort</p>
                            </div>
                        </div>
                    </Verso>
                </Flipping>
            </Carte>
        </Line>
      </AllCards>
      <Footer />
      </>
    )
}
export default Formules