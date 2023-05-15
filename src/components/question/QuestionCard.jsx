import React from 'react'
import style from './questions.module.css'
import { Link } from 'react-router-dom'

export default function QuestionCard({thumb, title, img, id, query, description}) {
  return (
    <Link
      to={`/home/question/${id}`}
      state={{img: img, query: query, description}}
      className={style.questionCard}
    >
      <img className={style.thumb} src={thumb} alt="imagem da questão" />
      <p>{title}</p>
    </Link>
  );
}
