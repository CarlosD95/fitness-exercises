import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import '../App.css'

const ExerciseCard = ({ exercise }) => {
  return (
    
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} Loading="Lazy" />
      <Stack direction='row'>
        <button className='button-red' >{exercise.bodyPart}</button>
        <button className='button-yellow'>{exercise.target}</button>
        <Typography
          ml='21px'
          color='#000'
          fontWeight='bold'
          mt='11px'
          pb='10px'
          textTransform='capitalize'
          fontSize='22px'
        >{exercise.name}</Typography>
      </Stack>
    </Link>
  )
}

export default ExerciseCard;