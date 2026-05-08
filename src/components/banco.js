// src/data/tests.js
// Importamos las preguntas de cada asignatura desde sus archivos individuales
import { sostenibilidadQuestions } from './sostenibilidad'

// Aquí irás añadiendo los nuevos archivos conforme los crees, por ejemplo:
// import { redesQuestions } from './redes';
// import { sistemasQuestions } from './sistemas';

export const initialTests = [
  {
    id: 1,
    name: 'Sostenibilidad (ASIR)',
    questions: sostenibilidadQuestions
  },
  /* Cuando tengas lista la siguiente asignatura, solo tienes que 
  descomentar (quitar las barras) y rellenar este bloque:
  {
    id: 2,
    name: 'Nombre de la Segunda Asignatura',
    questions: nombreDeLaVariableImportada
  }, 
  */ 
];


   