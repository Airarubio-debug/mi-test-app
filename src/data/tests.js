// src/components/tests.js

export const initialTests = [
  {
    id: 1,
    name: 'Sostenibilidad (ASIR)',
    questions: [
      {
        id: 1,
        question: "¿Cuáles son los tres pilares del desarrollo sostenible?",
        options: ["Tecnología, rentabilidad y ecología", "Medioambiental, económico y social", "Humano, tecnológico y regulatorio", "Ambiental, digital y financiero"],
        answer: 1 // [cite: 22, 24, 506]
      },
      {
        id: 2,
        question: "El sistema biológico formado por una comunidad de seres vivos que habita un medio físico se denomina:",
        options: ["Sistema humano", "Ecosistema", "Sociedad", "Equilibrio"],
        answer: 1 // [cite: 28, 31, 506]
      },
      {
        id: 3,
        question: "Los recursos naturales:",
        options: ["Proporcionan materiales a los sistemas económicos", "Son materiales que se extraen de la naturaleza y se utilizan en la producción", "Son materiales que proceden de la actividad humana y resultan inservibles si no se transforman", "Son dinero, fundamentalmente"],
        answer: 1 // [cite: 35, 37, 506]
      },
      {
        id: 4,
        question: "No es una dimensión del desarrollo sostenible:",
        options: ["La económica", "La social", "La estética", "La ecológica"],
        answer: 2 // [cite: 40, 42, 506]
      },
      {
        id: 5,
        question: "Para que los ecosistemas sean sostenibles, nuestra huella ecológica debe ser:",
        options: ["Igual que la biocapacidad", "Mayor que la biocapacidad", "Menor que la biocapacidad", "No influye en el desarrollo sostenible"],
        answer: 2 // [cite: 46, 49, 506]
      },
      {
        id: 6,
        question: "El cambio climático actual tiene su principal origen en:",
        options: ["La actividad económica", "La capa de ozono", "La actividad del Sol", "La contaminación del suelo"],
        answer: 0 // [cite: 52, 53, 506]
      },
      {
        id: 7,
        question: "El mayor efecto medioambiental de la contaminación atmosférica es:",
        options: ["El efecto invernadero", "Las formas de producir que despilfarran recursos", "La pérdida de biodiversidad", "La contaminación del suelo"],
        answer: 0 // [cite: 58, 59, 506]
      },
      {
        id: 8,
        question: "El cambio climático supone para las empresas:",
        options: ["Menor demanda de energía en los hogares", "Una mayor productividad de su plantilla", "El aumento de las primas de sus seguros", "Un aumento en sus ingresos"],
        answer: 2 // [cite: 64, 67, 506]
      },
      {
        id: 9,
        question: "Plantar bosques es una medida de:",
        options: ["Descarbonización", "Desmaterialización", "Desertización", "Adaptación"],
        answer: 0 // [cite: 70, 71, 506]
      },
      {
        id: 10,
        question: "Las medidas de mitigación buscan:",
        options: ["Adaptar la empresa a la nueva situación climática", "Frenar o atenuar el cambio climático", "Atender a las personas con problemas de salud causados por el cambio climático", "Reducir la actividad económica, en todo caso"],
        answer: 1 // [cite: 76, 78, 506]
      },
      {
        id: 11,
        question: "No es una dimensión como tal de los ODS:",
        options: ["La cultural", "La económica", "La social", "La ecológica"],
        answer: 0 // [cite: 83, 84, 506]
      },
      {
        id: 12,
        question: "Los ODS son objetivos de obligado cumplimiento por:",
        options: ["Las personas físicas únicamente", "Las empresas privadas solamente", "La ONU exclusivamente", "Las administraciones públicas"],
        answer: 3 // [cite: 89, 93, 506]
      },
      {
        id: 13,
        question: "¿Cuál es la función de los indicadores de desempeño?",
        options: ["Informar de la rentabilidad de una empresa", "Medir el grado de consecución de las metas del desarrollo sostenible", "Especificar situaciones de llegada concretas", "Guiar y coordinar las acciones de la humanidad"],
        answer: 1 // [cite: 95, 97, 506]
      },
      {
        id: 14,
        question: "No es un ámbito del consumo responsable:",
        options: ["El transporte", "Los bienes de consumo duradero", "El agua", "La producción"],
        answer: 3 // [cite: 101, 105, 506]
      },
      {
        id: 15,
        question: "Desplazarse a pie ayuda especialmente a cumplir el ODS:",
        options: ["8. Trabajo decente", "11. Ciudades y comunidades sostenibles", "12. Producción y consumo responsables", "15. Vida de ecosistemas terrestres"],
        answer: 1 // [cite: 107, 109, 506]
      },
      {
        id: 16,
        question: "¿Cómo puede un empleado sin responsabilidades directivas ayudar al logro de los ODS?",
        options: ["No puede hacer nada", "Esperando órdenes de dirección", "Haciendo lo mismo que el resto", "Aplicando principios de consumo responsable en su puesto"],
        answer: 3 // [cite: 113, 117, 506]
      },
      {
        id: 17,
        question: "Para integrar los ODS en la empresa, lo más recomendable es implicarse en:",
        options: ["Un ODS concreto", "Una meta concreta", "Un indicador concreto", "Todos los ODS al mismo tiempo"],
        answer: 1 // [cite: 119, 121, 506]
      },
      {
        id: 18,
        question: "¿Qué iniciativa de la UE busca lograr la neutralidad de emisiones de carbono?",
        options: ["El Pacto Verde Europeo", "La Estrategia de Movilidad Sostenible", "La Nueva Estrategia Industrial", "Todas las anteriores"],
        answer: 3 // [cite: 125, 129, 506]
      },
      {
        id: 19,
        question: "No es una iniciativa surgida en la UE:",
        options: ["El Pacto Verde Europeo", "La Nueva Estrategia Industrial", "El acuerdo de París", "La Estrategia de Movilidad Sostenible"],
        answer: 2 // [cite: 131, 134, 506]
      },
      {
        id: 20,
        question: "Las iniciativas de la UE para los ODS suponen para las empresas:",
        options: ["Mayor riesgo de sanciones", "Reducción de impuestos", "Normas más estrictas", "Ayudas para mejorar la resiliencia"],
        answer: 3 // [cite: 137, 141, 506]
      },
      {
        id: 21,
        question: "La Agenda 2030:",
        options: ["Es única para la ONU", "Es adaptada por administraciones para sus propias estrategias", "Se creó en España", "Busca neutralidad de carbono para 2030"],
        answer: 1 // [cite: 143, 145, 506]
      },
      {
        id: 22,
        question: "La mayor parte del empleo lo generan:",
        options: ["Entidades del tercer sector", "La banca", "Las administraciones", "Las empresas"],
        answer: 3 // [cite: 150, 154, 506]
      },
      {
        id: 23,
        question: "Sobre los grupos de interés, señala la afirmación FALSA:",
        options: ["Son colectivos humanos", "Influyen en las decisiones de la empresa", "Las decisiones de la empresa los influyen", "Siempre son externos a la empresa"],
        answer: 3 // [cite: 156, 160, 506]
      },
      {
        id: 24,
        question: "Es un grupo de interés interno:",
        options: ["Los proveedores", "La competencia", "Los clientes", "Los propietarios"],
        answer: 3 // [cite: 162, 166, 506]
      },
      {
        id: 25,
        question: "El grupo de interés que busca el mejor producto al menor precio son:",
        options: ["Los propietarios", "Los directivos", "Los clientes", "Los proveedores"],
        answer: 2 // [cite: 168, 171, 506]
      },
      {
        id: 26,
        question: "Los criterios ASG sirven para:",
        options: ["Aumentar beneficios exclusivamente", "Evaluar prácticas empresariales y guiar decisiones sostenibles", "Sustituir la dirección", "Exigir auditoría interna anual"],
        answer: 1 // [cite: 175, 177, 506]
      },
      {
        id: 27,
        question: "Los aspectos ASG relacionados con el trato a las personas son:",
        options: ["Ambientales", "Sociales", "Financieros", "De gobernanza"],
        answer: 1 // [cite: 181, 183, 506]
      },
      {
        id: 28,
        question: "Los aspectos ASG relacionados con la ética empresarial son:",
        options: ["Ambientales", "Sociales", "De gobernanza", "Filosóficos"],
        answer: 2 // [cite: 187, 190, 506]
      },
      {
        id: 29,
        question: "Dentro de la 'A' de los ASG se incluye:",
        options: ["Derechos humanos", "Gobernanza corporativa", "Mitigación del cambio climático", "Rotación del personal"],
        answer: 2 // [cite: 193, 196, 506]
      },
      {
        id: 30,
        question: "No es un aspecto ASG ambiental:",
        options: ["Adaptación al cambio climático", "Biodiversidad", "Economía circular", "Relación con las comunidades"],
        answer: 3 // [cite: 199, 203, 506]
      },
      {
        id: 31,
        question: "Un riesgo de no aplicar criterios sociales es:",
        options: ["Reducción del transporte", "Más absentismo y dificultades para atraer talento", "Más innovación tecnológica", "Exceso de stock"],
        answer: 1 // [cite: 205, 207, 506]
      },
      {
        id: 32,
        question: "Una buena gestión ASG permite:",
        options: ["Disminuir motivación", "Perder financiación", "Mejorar la reputación y atraer talento", "Reducir transparencia"],
        answer: 2 // [cite: 211, 214, 506]
      },
      {
        id: 33,
        question: "Un estado no financiero organiza sus indicadores según:",
        options: ["Los grupos de interés", "Los ODS", "Los aspectos ASG", "Las líneas de negocio"],
        answer: 2 // [cite: 217, 220, 506]
      },
      {
        id: 34,
        question: "Las normas NEIS han sido creadas por:",
        options: ["La Unión Europea", "El Gobierno de España", "Naciones Unidas", "Consejería de Medio Ambiente"],
        answer: 0 // [cite: 223, 224, 506]
      },
      {
        id: 35,
        question: "La integración de aspectos ASG supone para la empresa:",
        options: ["Peor acceso a financiación", "Mejor imagen de marca", "Peor retención de talento", "Menor beneficio a la larga"],
        answer: 1 // [cite: 229, 231, 506]
      },
      {
        id: 36,
        question: "Las empresas redactan Informes No Financieros porque lo exige:",
        options: ["La OTAN", "La Unión Europea", "El Banco Mundial", "La OMS"],
        answer: 1 // [cite: 235, 237, 506]
      },
      {
        id: 37,
        question: "La verificación externa de los informes de sostenibilidad:",
        options: ["Es opcional", "Está prohibida", "Es obligatoria", "Solo aplica a ONG"],
        answer: 2 // [cite: 241, 244, 506]
      },
      {
        id: 38,
        question: "¿Qué riesgo asume una empresa que ignora los criterios ASG?",
        options: ["Sanciones y pérdida de confianza", "Mejor competitividad internacional", "Anticipar riesgos regulatorios", "Incrementar su resiliencia"],
        answer: 0 // [cite: 247, 248, 509]
      },
      {
        id: 39,
        question: "La economía lineal se caracteriza por:",
        options: ["Priorizar el reciclaje", "Modelo extraer-fabricar-consumir-desechar", "Uso de renovables", "Minimización de residuos"],
        answer: 1 // [cite: 254, 256, 509]
      },
      {
        id: 40,
        question: "Ventaja clave de la economía circular:",
        options: ["Genera más residuos", "Produce a mayor velocidad", "Depende de combustibles fósiles", "Reduce necesidad de materias primas vírgenes"],
        answer: 3 // [cite: 260, 264, 509]
      },
      {
        id: 41,
        question: "Beneficio ambiental directo de la economía circular:",
        options: ["Incremento de contaminación", "Disminución de residuos al mantener materiales en uso", "Mayor producción de vertidos", "Extracción continua de recursos"],
        answer: 1 // [cite: 266, 268, 509]
      },
      {
        id: 42,
        question: "La economía circular busca:",
        options: ["Limitar colaboración con proveedores", "Mantener el valor de los recursos el mayor tiempo posible", "Aumentar desechables", "Acortar el ciclo de vida"],
        answer: 1 // [cite: 272, 274, 509]
      },
      {
        id: 43,
        question: "'Renovar' en las 7R significa:",
        options: ["Crear productos nuevos", "Dar un nuevo uso a productos existentes", "Consumir más recursos", "Transformar desechos en nuevos productos"],
        answer: 1 // [cite: 278, 280, 509]
      },
      {
        id: 44,
        question: "Con las 7R, el valor de los productos a lo largo de su ciclo de vida:",
        options: ["Aumenta rápidamente", "No se ve afectado", "Se mantiene por más tiempo", "Se reduce rápidamente"],
        answer: 2 // [cite: 284, 288, 509]
      },
      {
        id: 45,
        question: "Dos procesos asociados a la economía circular son:",
        options: ["Deslocalización y externalización", "Desmaterialización y descarbonización", "Descentralización y concentración", "Deforestación y desertización"],
        answer: 1 // [cite: 291, 293, 509]
      },
      {
        id: 46,
        question: "Fase del ciclo de vida donde el producto llega al consumidor:",
        options: ["Consumo", "Desecho", "Producción", "Distribución"],
        answer: 0 // [cite: 298, 299, 509]
      },
      {
        id: 47,
        question: "En el modelo lineal, cada fase se relaciona directamente:",
        options: ["Solo con la anterior", "Con todas al mismo tiempo", "Con todas las de atrás", "Con la anterior y la posterior"],
        answer: 3 // [cite: 304, 308, 509]
      },
      {
        id: 48,
        question: "Usar recursos no renovables expone a la empresa a:",
        options: ["Contaminación", "Inseguridad laboral", "Escasez de recursos y precios mayores", "Menor expansión"],
        answer: 2 // [cite: 310, 313, 509]
      },
      {
        id: 49,
        question: "El ciclo de vida comienza con:",
        options: ["Distribución", "Consumo", "Aprovisionamiento", "Desecho"],
        answer: 2 // [cite: 316, 319, 509]
      },
      {
        id: 50,
        question: "El ecodiseño busca:",
        options: ["Producción más respetuosa", "Integración de aspectos medioambientales en el diseño", "Aspectos económicos en el diseño", "Aspectos ambientales en el consumo"],
        answer: 1 // [cite: 322, 324, 509]
      },
      {
        id: 51,
        question: "El ecodiseño según ISO 14006 se enfoca en:",
        options: ["Reducir coste de marketing", "Minimizar impacto ambiental del ciclo de vida", "Aumentar rotación", "Vender productos premium"],
        answer: 1 // [cite: 328, 330, 509]
      },
      {
        id: 52,
        question: "Un principio del ecodiseño es:",
        options: ["Mayor cantidad de emisiones", "Facilitar la reparabilidad", "Aumentar consumo energético", "Aumentar residuos"],
        answer: 1 // [cite: 334, 336, 509]
      },
      {
        id: 53,
        question: "Un producto está mal diseñado desde el ecodiseño cuando:",
        options: ["Envase compostable", "Reduce consumo", "Emplea materiales difíciles de separar", "Elevada durabilidad"],
        answer: 2 // [cite: 340, 343, 509]
      },
      {
        id: 54,
        question: "Todo proceso de ecodiseño debe comenzar por:",
        options: ["Identificar las fases del ciclo de vida", "Fijar objetivos", "Soluciones técnicas", "Estrategias de mejora"],
        answer: 0 // [cite: 346, 347, 509]
      },
      {
        id: 55,
        question: "Dato que mide el rendimiento respecto a un objetivo:",
        options: ["Gestión ambiental", "Objetivo", "Indicador de desempeño", "Meta"],
        answer: 2 // [cite: 352, 356, 509]
      },
      {
        id: 56,
        question: "Al fijar objetivos es importante partir de:",
        options: ["Medios disponibles", "El análisis de cada proceso", "Selección de objetivos", "Horizonte temporal"],
        answer: 1 // [cite: 359, 361, 509]
      },
      {
        id: 57,
        question: "El objetivo de la evaluación del desempeño medioambiental es:",
        options: ["Establecer fórmulas", "Lograr la mejora continua", "Implantar indicadores", "Encontrar culpables"],
        answer: 1 // [cite: 365, 367, 509]
      },
      {
        id: 58,
        question: "¿Cuál es el objetivo principal de la evaluación ambiental?",
        options: ["Analizar impacto para identificar áreas de mejora", "Marketing verde", "Obtener certificaciones", "Detectar ineficiencias administrativas"],
        answer: 0 // [cite: 371, 372, 509]
      },
      {
        id: 59,
        question: "¿Qué certificados ISO no requieren entidades externas?",
        options: ["Tipo III", "Tipo II (autodeclaraciones)", "Tipo I", "No cubiertos por ISO"],
        answer: 1 // [cite: 377, 380, 509]
      },
      {
        id: 60,
        question: "Un certificado de sostenibilidad es:",
        options: ["Auditoría interna propia", "Prueba de cumplimiento de estándares", "Documento legal obligatorio general", "Informe financiero"],
        answer: 1 // [cite: 384, 386, 509]
      },
      {
        id: 61,
        question: "Sobre la Etiqueta Ecológica Europea (EEE), señala la FALSA:",
        options: ["Requiere informe de actividades", "Pagar tasa de gestión", "Es gestionada directamente por la UE", "Es etiqueta tipo I"],
        answer: 2 // [cite: 390, 393, 509]
      },
      {
        id: 62,
        question: "No se refiere a la inversión financiera:",
        options: ["Producir un bien para venderlo", "Se refleja en títulos", "Rentabilidad, riesgo y liquidez", "Relación con inversión productiva"],
        answer: 0 // [cite: 397, 398, 509]
      },
      {
        id: 63,
        question: "El análisis de inversiones ISR valora:",
        options: ["Riesgo", "Aspectos ASG", "Rentabilidad", "Todo lo anterior"],
        answer: 3 // [cite: 403, 407, 509]
      },
      {
        id: 64,
        question: "Los indicadores ISR con integración de aspectos ASG:",
        options: ["Incluyen títulos de empresas que cumplen criterios ASG", "Solo empresas de sostenibilidad", "Excluyen empresas incompatibles", "Consideran aspectos ASG solamente"],
        answer: 0 // [cite: 409, 410, 509]
      },
      {
        id: 65,
        question: "Estándar de información no financiera más antiguo:",
        options: ["GRI", "Ley de Info no Financiera", "CSRD", "NEIS"],
        answer: 0 // [cite: 416, 417, 509]
      },
      {
        id: 66,
        question: "Sobre el estándar GRI, señala la FALSA:",
        options: ["Familia de estándares", "Usado por grandes empresas", "Versión 1 en el año 2000", "Creado por la Unión Europea"],
        answer: 3 // [cite: 422, 426, 509]
      },
      {
        id: 67,
        question: "El plan de sostenibilidad:",
        options: ["Es obligatorio", "Cuenta actuaciones pasadas", "Guía acciones futuras", "Planificación a corto plazo"],
        answer: 2 // [cite: 429, 432, 509]
      },
      {
        id: 68,
        question: "El plan de sostenibilidad es herramienta de:",
        options: ["Planificación", "Planificación y evaluación", "Planificación y comunicación", "Comunicación"],
        answer: 2 // [cite: 435, 438, 509]
      },
      {
        id: 69,
        question: "Primer apartado de un plan de sostenibilidad:",
        options: ["ODS clave", "Análisis del contexto", "Objetivos concretos", "Impactos y dependencias"],
        answer: 1 // [cite: 441, 443, 509]
      },
      {
        id: 70,
        question: "El plan de sostenibilidad se caracteriza por ser:",
        options: ["Auditoría externa", "Informe obligatorio general", "Documento solo de emisiones", "Planificación estratégica a medio/largo plazo"],
        answer: 3 // [cite: 447, 452, 509]
      },
      {
        id: 71,
        question: "Para una empresa agrícola, la sequía es un asunto con:",
        options: ["Materialidad de impacto", "Doble materialidad", "Sin materialidad", "Materialidad financiera"],
        answer: 3 // [cite: 454, 458, 509]
      },
      {
        id: 72,
        question: "Prioridad 1 en matriz de materialidad requiere:",
        options: ["Elevada relevancia para grupos de interés", "Doble materialidad", "Elevada relevancia y factibilidad", "Solo relevancia para dirección"],
        answer: 0 // [cite: 460, 461, 509]
      },
      {
        id: 73,
        question: "El informe o memoria de sostenibilidad:",
        options: ["Informa desempeño pasado", "Solo habla de logros", "Es periodo de 1 año", "Herramienta de comunicación de políticas"],
        answer: 3 // [cite: 467, 471, 509]
      },
      {
        id: 74,
        question: "En evaluación de impacto ambiental NO interviene:",
        options: ["Informe medioambiental", "Promotor de obra", "Autoridad medioambiental", "Estudio de impacto"],
        answer: 0 // [cite: 474, 475, 509]
      },
      {
        id: 75,
        question: "La declaración de impacto ambiental es redactada por:",
        options: ["Oficina de prensa", "Autoridad medioambiental", "Promotora", "Constructora"],
        answer: 1 // [cite: 480, 482, 509]
      },
      {
        id: 76,
        question: "Blockchain para rastrear condiciones laborales afecta principalmente al aspecto:",
        options: ["Financiero", "Ambiental", "Gobernanza", "Social"],
        answer: 2 // [cite: 487, 490, 509] - Corregido según tabla: c) Gobernanza
      },
      {
        id: 77,
        question: "Sustituir diésel por eléctricos mejora el aspecto:",
        options: ["Financiero", "Gobernanza", "Ambiental", "Social"],
        answer: 2 // [cite: 493, 496, 509]
      },
      {
        id: 78,
        question: "Programa de seguridad y bienestar para conductores mejora el aspecto:",
        options: ["Gobernanza", "Ambiental", "Social", "Financiero"],
        answer: 2 // [cite: 499, 503, 509]
      }
    ]
  }
];