import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([ //Utilizando state para o botão novo horário
        { week_day: 0, from: '', to: '' } // Inicializando as variáveis com valor vazio, exceto 'week-day'
    ]);

    function addNewScheduleItem() { //Função que irá fazer o botão funcionar pelo onClick
        setScheduleItems([
            ...scheduleItems, //copiando todos os itens dentro do array usando spread
            { week_day: 0, from: '', to: '' } // Adicionando o novo item no final do array
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
           <PageHeader title="Que incrível que você quer dar aulas."
                       description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a Aula</legend>

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
                    <Input name="cost" label="Custo da sua hora por aula" />

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
                    <button type="button"> Salvar Cadastro </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;

/* O 'title' dentro do componente PageHeader é uma propriedade utilizada para que os titulos das páginas sejam
diferentes, mesmo que o header seja igual ao da página teacherList */

/* Quando é usado o estado(state) não pode-se fazer alterações diretamente nas variáveis do estado, por isso criei a variável setScheduleItems,
ou seja, elas não são modificáveis. Dessa forma, setScheduleItems, substitui a variável scheduleItems, seguindo o conceito de imutabilidade */
                    
                    