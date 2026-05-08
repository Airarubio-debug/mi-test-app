import { sostenibilidadQuestions } from './components/sostenibilidad';
import { seguridadQuestions } from './components/seguridad';
import { redQuestions } from './components/red';

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
  }
];