import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
     whatsapp: string;
    }

interface TeacherItemProps {
    teacherVar: Teacher //Estou passando os mesmos valores da interface acima, por isso chamei ela aqui
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacherVar }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacherVar.id,
        })
    }

    return(
        <article className="teacher-item">
                   <header>
                       <img src={teacherVar.avatar} alt={teacherVar.name} />
                       <div>
                           <strong>{teacherVar.name}</strong>
                           <span>{teacherVar.subject}</span>
                       </div>
                   </header>

                    <p>{teacherVar.bio}</p>

                   <footer>
                       <p>
                           Preço/Hora
                           <strong>R${teacherVar.cost}</strong>
                       </p>
                       <a 
                         target="_blank" //Abre o link em uma nova aba
                         onClick={createNewConnection} 
                         href={`http://wa.me/${teacherVar.whatsapp}`}
                        >
                           <img src={whatsappIcon} alt="Whastapp"/>
                            Entrar em Contato
                       </a>
                   </footer>
               </article>
    );
}

export default TeacherItem;

// Substitui o <button> pelo <a> para poder utilizar o link de mensagem do whatsapp

/* Dentro da tag <a href> utilizei o '$' para poder passar um objeto javaScript dentro de um link, para isso,
o link deve estar entre chaves e crases */