import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
                   <header>
                       <img src="https://avatars2.githubusercontent.com/u/28444506?s=460&u=16ede2cabb3662003aee574e430ac962225c7567&v=4" alt="Leandro Motta Junior" />
                       <div>
                           <strong>Leandro Motta Junior</strong>
                           <span>Biologia</span>
                       </div>
                   </header>

                   <p>
                       Entusiasta da Biologia.
                       <br/><br/>
                       Apaixonado pela biologia e sobre seus ensinamentos
                   </p>

                   <footer>
                       <p>
                           Preço/Hora
                           <strong>R$ 60,00</strong>
                       </p>
                       <button type="button">
                           <img src={whatsappIcon} alt="Whastapp"/>
                            Entrar em Contato
                       </button>
                   </footer>
               </article>
    );
}

export default TeacherItem;