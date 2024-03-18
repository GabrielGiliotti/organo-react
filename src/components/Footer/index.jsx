import './styles.css';
import fb from './assets/fb.svg';
import ig from './assets/ig.svg';
import logo from './assets/logo.svg';
import tw from './assets/tw.svg';

const Footer = () => 
{
    return (
        <div className='footer'>
            <div>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src={fb} alt=''></img>
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com' target='_blank'>
                            <img src={tw} alt=''></img>
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blank'>
                            <img src={ig} alt=''></img>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <img src={logo} alt='' />
            </div>
            <div>
                <p>
                    Desenvolvido por Gabriel V. Giliotti
                </p>
            </div>
        </div>
    )
}

export default Footer;