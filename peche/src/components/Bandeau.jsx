import styled from 'styled-components';
import angryface1 from '../assets/images/angryface1.jpeg'; 
import angryface2 from '../assets/images/angryface2.jpeg'; 
import angryface3 from '../assets/images/angryface3.jpeg'; 
// import angryface4 from '../assets/images/angryface4.jpeg'; 
import angryface5 from '../assets/images/angryface5.jpeg'; 
import angryface10 from '../assets/images/angryface10.jpeg'; 



const Banner = styled.div`
    /* display: inline-block; */
	height: auto;
	/* border-top: white solid 3px;
	border-bottom: white solid 3px; */
	display: flex;
	width: 100vw;

    img{
        width: 100%;
	    height: 100%;
    }
`
const Bande = styled.div`
    width: 100vw;
    display: flex;

    div{
    width: 20%;
    }
`

const Bandeau = () => {
    return(
        <div>
            <Banner>
                <Bande>
                    <div><img src={angryface10} alt="angry man 10"/></div>
                    <div><img src={angryface2} alt="angry man 2"/></div>
                    <div><img src={angryface3} alt="angry man 3"/></div>
                    <div><img src={angryface1} alt="angry man 1"/></div>
                    {/* <div><img src={angryface4} alt="angry man 4"/></div> */}
                    <div><img src={angryface5} alt="angry man 5"/></div>
                </Bande>
            </Banner>
        </div>
    )
}

export default Bandeau