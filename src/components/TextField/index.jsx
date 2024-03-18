import './styles.css';

const TextField = ({label, placeholder, alt, required, value, setValue}) => 
{
    return (
        <div className='text__field'>
            <label>{label}</label>
            <input value={value} onChange={e => setValue(e.target.value)} required={required} type='text' placeholder={placeholder} alt={alt}></input>
        </div>
    )
}

export default TextField;