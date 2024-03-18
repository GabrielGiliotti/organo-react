import './styles.css';

const Card = ({user, color}) => 
{
    return (
      <div className='card'>
        <div className='header' style={{ backgroundColor: color }}>
            <img src={user.url} alt={user.nome}/>
        </div>
        <div className='footer'>
            <h4>{user.nome}</h4>
            <h5>{user.cargo}</h5>
        </div>
      </div>
    )
}

export default Card;