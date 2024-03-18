import banner from './assets/header.svg';
import './styles.css';

const Banner = () => 
{
    return (
        <header className="banner">
            <img src={banner} alt='Banner principal da pagina do Organo'></img>
        </header>
    )
}

export default Banner;