import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Content, HomeButton } from './Home.style';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const date = new Date();
    const year = date.getFullYear();
    const age = year - 2000;
    const navigate = useNavigate();

    return (
        <section id='home'>
            <Content>
                <span>Kristine May de Jesus</span>
                <h1 className='hero-tile'>A front-end developer from the Philippines</h1>
                <div className='hero-text'>
                    <p>I love what I do</p>
                    <HomeButton onClick={() => navigate('/works')}>
                        See works 
                        <ArrowForwardIcon sx={{width: "30px", height: "30px", marginLeft: "10px"}} />
                    </HomeButton>
                </div>
            </Content>
            
        </section>
    )
}

export default Home;