import Card from '../Card';
import './styles.css';

const Team = ({team, users}) => 
{
    return (
        users.length > 0 && <section className='team' style={{ backgroundColor: team.secundaryColor }}>
            <h3 style={{borderColor: team.primaryColor}}>{team.name}</h3>
            <div className='users'>
                {users.map(user => <Card key={user.nome} color={team.primaryColor} user={user}/>)}
            </div>
        </section>
    )
}

export default Team;