import React, { useState, FormEvent } from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) { //Esta ação irá filtar os professores disponíveis e listá-los na tela
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
              subject,
              week_day,
              time,
            }

        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value) }}
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
                        value={week_day}
                        onChange={(e) => {setWeekDay(e.target.value) }}
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
                    <Input 
                     type="time" 
                     name="time" 
                     label="Hora"
                     value={time}
                     onChange={(e) => {setTime(e.target.value) }} 
                     />

                    <button type='submit'>
                        Buscar
                    </button>

                </form>
           </PageHeader>

           <main>
               {teachers.map((teacher: Teacher) => { //listagem dos professores na tela; (Teacher -> está sendo importando de TeacherItem)
                   return <TeacherItem key={teacher.id} teacherVar={teacher} />
               })}
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