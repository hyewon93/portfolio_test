import TypingText from '../components/TypingText';
import '../css/portfolio.css';

const Home = () => {
    return (
        <div className="home_container layout_home">
            <TypingText text="Hi, I'm Hyewon Bae" speed={60} fontSize="1.25rem" color="green" />
        </div>
    )
}

export default Home;