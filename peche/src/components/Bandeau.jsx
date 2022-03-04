import styled from 'styled-components';

const Banner = styled.div`
    /* display: inline-block; */
	height: auto;
	/* border-top: white solid 3px;
	border-bottom: white solid 3px; */
	display: flex;
	width: 100vw;

    div{
        width: 20%;
    }
    img{
        width: 100%;
	    height: 100%;
    }
`

const Intro = styled.div`
    
`
const Hun = styled.h1`
`

const Htrois = styled.h3`
`


const Bandeau = () => {
    return(
    <Banner>
        <div>
            <div><img src="./assets/images/angryface3.jpeg" alt="angry man 1" /></div>
            <div><img src="./assets/images/angryface1.jpeg" alt="angry man 2" /></div>
            <div><img src="./assets/images/angryman2.jpeg" alt="angry man 3" /></div>
            <div><img src="assets/jean-batiste-rouquin.jpeg" alt="angry man 4" /></div>
            <div><img src="assets/angrySangoku.jpeg" alt="angry man 5" /></div>
        </div>
		<Intro>
			<Hun>Renversez la vapeur</Hun>
			<Htrois>Et si, vous aviez pris le problème à l'envers?</Htrois>
			<p>
				Récemment, vous avez observé que votre partenaire ne vous respecte plus comme avant.<br /> Vous, doté d'un coeur de lion, modèle de virilité, de force et de justice n'êtes plus qu'un chat aux crocs émoussés.<br /> Vous souhaitez redevenir l'homme que vous étiez : fort, charismatique et qui la faisait se sentir... toute chose.<br />
				Vous avez pensez à vous remettre à l'activité, et même à débuter un sport de combat.<br />
				Il semblerait que vous ayez pris le problème à l'envers.<br />
				N'écoutez pas votre miroir, <span>vous êtes l'homme que vous pensez être.</span><br /> Musclé, féroce et dominant. <span>Elle a juste besoin de le voir.</span><br />
				Grâce à nos Victimes, votre voeux est exaucé, vous pourrez enfin lui montrer de quel bois son homme se chauffe.
			</p>
        </Intro>
    </Banner>
    )
}




export default Bandeau