import './styles.css';

const DropdownList = ({label, list, required, value, setValue}) => 
{
    return (
        <div className='dropdown__list'>
            <label>{label}</label>
            <select required={required} onChange={e => setValue(e.target.value)} value={value}>
                {list.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList;