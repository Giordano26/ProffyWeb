import api from '../../services/api';
import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


 export interface Teacher{
  
        id: number;
        avatar: string;
        bio: string;
        cost: number;
        name: string;
        subject: string;
        wpp: string;

   
}

interface TeacherItemProps{
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection () {
        api.post('connections',{
            user_id: teacher.id,
        })
    }

    return(
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={ teacher.avatar }/>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
        <p> {teacher.bio}</p>

        <footer>
            <p>
                Preço/Hora 
                <strong>R$ {teacher.cost}</strong>
            </p>
            <a target="_blank"  rel="noopener noreferrer" onClick={createNewConnection} href={`https://wa.me/${teacher.wpp}`} >
                <img src={wppIcon} alt="WhatsApp Icon" />
                Entrar em contato 
                
            </a>
        </footer>
    </article>
    )
}

export default TeacherItem