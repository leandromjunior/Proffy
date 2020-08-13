import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Matéria" 
                        options={[
                            { value: 'Português', label: 'Português' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Educação Física', label: 'Educação Física' },
                        ]}
                    />
                    <Select 
                        name="week-day" 
                        label="Dia da Semana" 
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-Feira' },
                            { value: '2', label: 'Terça-Feira' },
                            { value: '3', label: 'Quarta-Feira' },
                            { value: '4', label: 'Quinta-Feira' },
                            { value: '5', label: 'Sexta-Feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input type="time" name="time" label="Hora" />

                </form>
           </PageHeader>

           <main>
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
           </main>
        </div>
    )
}

export default TeacherList;

/* O 'title' dentro do componente PageHeader é uma propriedade utilizada para que os titulos das páginas sejam
diferentes, mesmo que o header seja igual ao da página TeacherForm */

/*O formulário contido dentro do componente <PageHeader> está sendo passado como props.children no arquivo
 PageHeader */

/* Criei um componente chamado TeacherItem com o conteúdo do <main> que foi desenvolvido aqui e apenas passei 
a tag <TeacherItem> (Arquivo o qual foi preenchido com o conteúdo do main) */

/*Criei um componente chamado Input com o conteúdo que inicialmente foi desenvolvido por aqui e importei 
pela tag <Input> */