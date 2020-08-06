import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://contactsam.files.wordpress.com/2018/04/one_shot_180410.jpg" alt="Turacum"/>
            <div>
                <strong>Turaquinho</strong>
                <span>Biologia</span>
            </div>
        </header>
        <p>
            Um turaquinho feliz que adora ensinar biologia aos macacoides
        </p>

        <footer>
            <p>
                Preço/Hora 
                <strong>R$ 50,00</strong>
            </p>
            <button type="button">
                <img src={wppIcon} alt="WhatsApp Icon"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem