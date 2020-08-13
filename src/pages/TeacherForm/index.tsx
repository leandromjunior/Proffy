import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([ //Utilizando state para o botão novo horário
        { week_day: 0, from: '', to: '' } // Inicializando as variáveis com valor vazio, exceto 'week-day'
    ]);

    function addNewScheduleItem() { //Função que irá fazer o botão funcionar pelo onClick
        setScheduleItems([
            ...scheduleItems, //copiando todos os itens dentro do array usando spread
            { week_day: 0, from: '', to: '' } // Adicionando o novo item no final do array
        ]);
    }
    //Função do <form>
    function handleCreateClass(e: FormEvent) { //declarei o (e) manualmente, pois o typescript não o reconhece
        e.preventDefault(); //Para que a página não fique redirecionando (É normal em formulários HTML)
        console.log({name, avatar, whatsapp, bio, subject, cost});
    }

    return (
        <div id="page-teacher-form" className="container">
           <PageHeader title="Que incrível que você quer dar aulas."
                       description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input 
                        name="name"
                        label="Nome Completo"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} //(e) -> event
                        />
                        <Input 
                        name="avatar" 
                        label="Avatar" 
                        value={avatar}
                        onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input 
                        name="whatsapp" 
                        label="Whatsapp" 
                        value={whatsapp}
                        onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                        <Textarea 
                        name="bio" 
                        label="Biografia" 
                        value={bio}
                        onChange={(e) => { setBio(e.target.value) }}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula</legend>

                        <Select 
                            name="subject" 
                            label="Matéria" 
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
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
                        <Input 
                        name="cost" 
                        label="Custo da sua hora por aula" 
                        value={cost}
                        onChange={(e) => { setCost(e.target.value) }}
                        />
                        
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button type="button" onClick={ addNewScheduleItem }>
                                + Novo horário
                            </button>
                        </legend>

                        {scheduleItems.map(scheduleItem => {
                            return(
                                // A informação única na key será o dia da semana, pois assim o usuário não cria mais de um horário no mesmo dia
                                <div key={scheduleItem.week_day} className="schedule-item">
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
                            <Input name='from' label='Das' type='time' />
                            <Input name='to' label='Até' type='time' />
                                </div>
                            );
                        })}
                        
                    </fieldset>

                    <footer>
                        <p>
                            <img src={ warningIcon } alt="Aviso Importante"/>
                            Importante! <br />
                            Preencha todos os campos
                        </p>
                        <button type="submit"> Salvar Cadastro </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;

/* O 'title' dentro do componente PageHeader é uma propriedade utilizada para que os titulos das páginas sejam
diferentes, mesmo que o header seja igual ao da página teacherList */

/* Quando é usado o estado(state) não pode-se fazer alterações diretamente nas variáveis do estado, por isso criei a variável setScheduleItems,
ou seja, elas não são modificáveis. Dessa forma, setScheduleItems, substitui a variável scheduleItems, seguindo o conceito de imutabilidade */

// Quebrei as linhas do Input para ficarem mais legíveis
                    
                    