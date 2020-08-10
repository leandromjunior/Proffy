import React from 'react';
import PageHeader from '../../components/PageHeader';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
           <PageHeader title="Que incrível que você quer dar aulas."/>
        </div>
    )
}

export default TeacherForm;

/* O 'title' dentro do componente PageHeader é uma propriedade utilizada para que os titulos das páginas sejam
diferentes, mesmo que o header seja igual ao da página teacherList */