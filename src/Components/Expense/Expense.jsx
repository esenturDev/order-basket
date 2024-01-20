
import './Expense.css';
import {useState} from 'react';

export function Expense ({name, photo, gh, id,}) {
  const [state, setState] = useState('');
  return (
    <div className='renderCard' key={id}>
      <img className='photo' src={photo} alt={name} />
      <p className='name'>{name}</p>
      <p className='gh'>{gh}</p>
    </div>
  )
}