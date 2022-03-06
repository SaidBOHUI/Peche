import styled from 'styled-components';
// import {img} from `../assets/images/victims/${imgName}`

// import imgName from '../assets/images/victims/angryface1.jpeg';

const Flipping = styled.div`
position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`

const Carte = styled.div`
border: white solid 2px;
width: 20vw ;
margin-top: 10rem ;
background-color: transparent;
perspective: 1000px;
/* A changer aavec flex */
height: 50vh ;
&:hover~${Flipping}{
    transform: rotateY(180deg)
}
`


const Recto = styled.div`
 position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;
    img {
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

const Verso = styled.div`
 position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
`


// const Card = (props) => {
const Card = (props) => {

    // const url = props.url
    
    const imgName = props.images;
    const name = props.name;
    const taille = props.taille
    const poids = props.poids
    const color = props.color;
    const ulti = props.ulti
    const scenario = props.scenario
    const alt = props.alt

    return(
        <Carte>
            <Flipping>
                <Recto>
                    <img src={imgName} alt="Yasser" />
                </Recto>
                <Verso>
                    <h2>formule {name}</h2>
                    <div>
                        <div>                       
                             <p>Méchant : {name} la terreur</p>
                            <p>Taille : {taille}</p>
                        </div>
                        <div>
                            <p>Poids : {poids}</p>
                            <p>Attaque ultime : {ulti}</p>
                        </div>
                        <div>
                            <p>Scénario : {scenario}</p>
                            <p> Vous vous brouillez avec un homme, une voiture de police situé non-loin de la vous embarques tous les deux. Sur le chemin, il tente de s'enfuir en déclenchant une bombe. Vous le neutralisé avant qu'il n'y parvienne. Une fois au poste vous apprenez que c'est l'un des plus grands terroristes du 21ème siècle</p>
                        </div>
                    </div>
                </Verso>
            </Flipping>
        </Carte>
    )
}
export default Card