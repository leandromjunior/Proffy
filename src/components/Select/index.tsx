import React, { SelectHTMLAttributes } from 'react'
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label:string;
    options: Array<{
    value: string;
    label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
    return(

      <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <select value="" id={name} { ...rest } >
          <option value="" disabled hidden>Selecione uma opção</option>

          {options.map(option => {
            return <option key={option.value} value={option.value}>{option.label}</option>
          })}
        </select>
      </div>
    );

}

export default Select;

/*Dentro do <option> do select, preferi que de cara aparecesse 'Selecione uma opção', com as seguintes condições,
disabled -> não será uma opção válida, hidden -> para não aparecer entre as opções de escolha, e defaultvalue -> substitui pelo selected */