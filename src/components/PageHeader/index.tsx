import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import './styles.css'

//Conceito do typescript que utilizo para definir o formato das tipagens de um objeto
interface PageHeaderProps {
    title: string; //recebe obrigatoriamente uma string, caso não quisesse que fosse obrigatório -> title?: 
    description?: string; //descriptiom não é obrigatório, ou seja, será enviado por props apenas através do TeacherForm, o TeacherList não será obrigado a enviar uma description
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar"/>
            </Link>
            <img src={logoImg} alt="Proffy"/>
        </div>

        <div className="header-content">
            <strong>{props.title}</strong> 
    { props.description && <p>{ props.description }</p> }
            {props.children}
        </div>
    </header>
    );
}

export default PageHeader;

/*O conteúdo que está dentro da função PageHeader começou a ser desenvolvido no arquivo TeacherList, porém 
como ele será utilizado em mais de um arquivo, foi decidido que ele viraria um componente */

// PageHeader virou uma função constante (const), pois, vide comentário acima, vou utilizar props

//React.FC -> FunctionComponent

/* { props.description && <p>{ props.description }</p> } é uma condicional. A segunda parte do coódigo só será
executada se a primeira parte for verdadeira, ou seja, se existir uma descrição, executa o parágrafo, isto é
medido pelo and(&&) */