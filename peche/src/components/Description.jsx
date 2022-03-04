import styled from 'styled-components';

const Intro = styled.div`
    width: auto;
	margin: 20vh 15% 0 ;
    p{
        text-align: center;
        /* text-align: justify; */
        line-height: 2rem;

        span{
            color: goldenrod;
        }
    }
`
const Hun = styled.h1`
    font-size:3rem;
	font-weight: 1000;
	margin-bottom: 1rem;
    text-align: center;
`

const Htrois = styled.h3`
    font-size: 1.5rem;
	font-weight: 500;
	margin-bottom: 0.5rem;
    text-align: center;
`

const Description = () => {
    return(
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
    )
}

export default Description