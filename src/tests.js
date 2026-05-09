import { sostenibilidadQuestions } from './components/sostenibilidad';
import { seguridadQuestions } from './components/seguridad';
import { redQuestions } from './components/red';
import { pythonQuestions } from './components/python';
import { itinerarioQuestions } from './components/itinerario';

export const initialTests = [
  {
    id: 1,
    name: 'Sostenibilidad (ASIR)',
    questions: sostenibilidadQuestions
  },
  {
    id: 2,
    name: 'Seguridad (ASIR)',
    questions: seguridadQuestions
  },
  {
    id: 3,
    name: 'Servicios de Red (ASIR)',
    questions: redQuestions
  },
  {
    id: 4,
    name: 'Python (ASIR)',
    questions: pythonQuestions
  },
  {
    id: 5,
    name: 'Itinerario IPE II (ASIR)',
    questions: itinerarioQuestions
  }
];