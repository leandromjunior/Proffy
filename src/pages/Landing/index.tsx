import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

function Landing() {
    const[totalConnections, setTotalConnections] = useState(0); //Trazendo valor total de conexões da API, esse valor será exibido na tela inicial

    useEffect(() => {
        api.get('connections').then(response => {
            console.log(response);
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    return(
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy" />
                <h2>Sua Plataforma de estudos online</h2>
            </div>
            <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>
            <div className="buttons-container">
                <Link to="/study" className="study">
                    <img src={studyIcon} alt="Estudar"/>
                    Estudar
                </Link>
                <Link to="/give-classes" className="give-classes">
                    <img src={giveClassesIcon} alt="Dar Aulas"/>
                    Dar Aulas
                </Link>
            </div>
            <span className="total-connections">
                Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
            </span>
        </div>
    </div>
    );
}

export default Landing;

//Substituí a tag '<a href="">' pelo componente 'Link to', para que não haja mais reload entre as páginas
//O Link é uma dependência do react-router-dom 