import './styles.css';
import TextField from '../TextField/index.jsx';
import DropdownList from '../DropdownList/index.jsx';
import Button from '../Button/index.jsx';
import { useState } from 'react';

const Form = ({user, setNewUser, itemList}) => 
{
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [url, setUrl] = useState('https://github.com/');
    const [time, setTime] = useState('Programação');

    const submitData = (event) => {
        event.preventDefault();
        
        setNewUser([...user, {
            nome: nome,
            cargo: cargo,
            url: url,
            time: time
        }]);

        setNome('');
        setCargo('');
        setUrl('https://github.com/');
        setTime('Programação');
    }

    return (
        <section className='form__section'> 
            <form onSubmit={submitData}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField required={true} 
                           label="Nome" 
                           placeholder="Digite seu nome" 
                           alt="Campo de texto para inserir o nome" 
                           value={nome} 
                           setValue={setNome}/>

                <TextField required={true} 
                           label="Cargo" 
                           placeholder="Digite seu cargo" 
                           alt="Campo de texto para inserir o cargo"
                           value={cargo} 
                           setValue={setCargo}/>

                <TextField label="Imagem" 
                           placeholder="Informe o endereço da imagem" 
                           alt="Campo de texto para inserir a url da imagem"
                           value={url} 
                           setValue={setUrl}/>

                <DropdownList required={true} 
                              label={"Time"} 
                              list={itemList}
                              value={time} 
                              setValue={setTime}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;