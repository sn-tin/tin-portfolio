import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Content, HomeButton } from './Home.style';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    const navigate = useNavigate();

    const leftAnimate = {
        start: {
            x: '20rem'
        },
        end: {
            x: 0,
            transition: {
                type: 'spring',
                duration: 0.8
            }
        }
    }

    const rightAnimate = {
        start: {
            x: '-20rem'
        },
        end: {
            x: 0,
            transition: {
                type: 'spring',
                duration: 0.8,
                when: 'beforeChildren'
            },
        },
    }

    const spanAnimate = {
        start: {
            fontStyle: 'normal'
        },
        end: {
            fontStyle: 'italic',
            transition: {
                delay: 0.7
            }
        }
    }

    return (
        <section id='home'>
            <Content>
                <motion.div
                    variants={leftAnimate}
                    initial="start"
                    animate="end"
                    className="left-aligned"
                >
                    <p>Kristine May de Jesus</p>
                    <h1 className='hero-tile'>A <motion.span variants={spanAnimate}>front-end developer</motion.span> from the Philippines</h1>
                </motion.div>
                <motion.div 
                    variants={rightAnimate}
                    initial="start"
                    animate="end"
                    className="right-aligned">
                    <p>Turning ideas and designs into something useful is something that I love and enjoy to do!</p>
                    <HomeButton onClick={() => navigate('/works')}>
                        See works 
                        <ArrowForwardIcon sx={{width: "30px", height: "30px", marginLeft: "10px"}} />
                    </HomeButton>
                </motion.div>
            </Content>
            
        </section>
    )
}

export default Home;