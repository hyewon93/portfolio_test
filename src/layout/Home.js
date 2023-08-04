import '../css/portfolio.css';

import home_gif from "../images/home/home_gif.gif";

const Home = () => {
    return (
        <div className="home_container layout_home">
            <img className='home_img' src={home_gif} alt="home_gif"/>
        </div>
    )
}

export default Home;