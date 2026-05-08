import { sostenibilidadQuestions } from './components/sostenibilidad';
import { seguridadQuestions } from './components/seguridad';

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
  }
];