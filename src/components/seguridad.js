// src/components/seguridad.js

export const seguridadQuestions = [
  {
    id: 1,
    q: "De los siguientes, indicar cuál es el activo más importante de una empresa:",
    opts: ["Los ordenadores.", "Las salas con equipamiento.", "Los datos.", "Los usuarios."],
    ans: 2
  },
  {
    id: 2,
    q: "Indicar cuál de las siguientes afirmaciones es correcta.",
    opts: [
      "La seguridad informática se engloba dentro de la seguridad de la información.",
      "La seguridad de la información se engloba dentro de la seguridad informática.",
      "La ciberseguridad se engloba dentro de la seguridad informática.",
      "La seguridad de la información se engloba dentro de la ciberseguridad."
    ],
    ans: 0
  },
  {
    id: 3,
    q: "En relación al ciclo de Deming (PDCA), indicar la afirmación correcta:",
    opts: [
      "Consiste en planificar, verificar y actuar.",
      "Consiste en verificar, planificar, hacer y actuar.",
      "Consiste en planificar, verificar y hacer.",
      "Consiste en planificar, hacer, verificar y actuar."
    ],
    ans: 3
  },
  {
    id: 4,
    q: "Respecto a las bases de la seguridad informática, indicar cuál de las siguientes afirmaciones es correcta:",
    opts: [
      "La fiabilidad no influye en la seguridad informática.",
      "La confidencialidad protege de la divulgación indiscriminada de la información.",
      "La disponibilidad afecta a las modificaciones no autorizadas de la información.",
      "La integridad afecta a la propiedad de la información."
    ],
    ans: 1
  },
  {
    id: 5,
    q: "Indicar cuál de los siguientes no es un mecanismo principal de autenticación del usuario:",
    opts: ["Lo que el usuario hace (comportamiento puro).", "Lo que el usuario tiene (token/móvil).", "Lo que el usuario es (biometría).", "Lo que el usuario sabe (contraseña)."],
    ans: 0
  },
  {
    id: 6,
    q: "La posibilidad de que se materialice o no una amenaza explotando una vulnerabilidad es:",
    opts: ["La definición de impacto.", "La definición de vulnerabilidad.", "La definición de ataque.", "Una definición de riesgo."],
    ans: 3
  },
  {
    id: 7,
    q: "Un análisis de las vulnerabilidades del sistema:",
    opts: [
      "Valora los activos de un sistema para descubrir sus debilidades frente a amenazas.",
      "No tiene sentido si el sistema no es vulnerable.",
      "Es la valoración que el impacto de un ataque causaría.",
      "Solamente se hace si se ha producido un ataque sobre el sistema."
    ],
    ans: 0
  },
  {
    id: 8,
    q: "En un análisis de las vulnerabilidades del sistema:",
    opts: [
      "Se valoran los daños de un ataque.",
      "Se valoran las posibles amenazas para ver qué debilidades pueden explotar.",
      "No es necesario identificar los activos del sistema.",
      "No se especifican las medidas de protección posibles."
    ],
    ans: 1
  },
  {
    id: 9,
    q: "En relación a un sistema informático (SI) y los incidentes:",
    opts: [
      "Si en el SI no existe una vulnerabilidad no está amenazado por ella.",
      "Aunque no haya vulnerabilidades conocidas, sigue habiendo amenazas.",
      "Si se materializa una amenaza, el sistema está comprometido.",
      "Un ataque se produce cuando se materializa una amenaza."
    ],
    ans: 1
  },
  {
    id: 10,
    q: "Señala la afirmación FALSA sobre los conceptos de seguridad:",
    opts: [
      "Riesgo para un sistema informático es lo mismo que amenaza.",
      "El punto más débil de cualquier sistema informático son las personas.",
      "El objetivo de la confidencialidad es prevenir la divulgación no autorizada de la información.",
      "La autenticación consiste en la verificación de la identidad del usuario."
    ],
    ans: 0
  },
  {
    id: 11,
    q: "Si alguien descubre la contraseña de acceso al sistema de un usuario, constituye una amenaza:",
    opts: ["De interrupción.", "De interceptación (rompe la confidencialidad).", "De modificación.", "No constituye ninguna amenaza."],
    ans: 1
  },
  {
    id: 12,
    q: "Indicar, de las siguientes consecuencias, cuál tiene más probabilidad de ser la materialización de una amenaza física.",
    opts: [
      "El equipo se reinicia continuamente.",
      "El equipo se ralentiza mucho.",
      "El usuario no puede acceder al sistema con su usuario y contraseña.",
      "El equipo no arranca (por fallo eléctrico, fuego o rotura de hardware)."
    ],
    ans: 3
  },
  {
    id: 13,
    q: "Las redes sociales generan un gran número de vulnerabilidades de seguridad principalmente porque:",
    opts: [
      "Almacenan y exponen mucha información personal de cada usuario.",
      "Comunican a un gran número de personas.",
      "Darse de alta es muy sencillo.",
      "Son muy sensibles a la infección por troyanos."
    ],
    ans: 0
  },
  {
    id: 14,
    q: "Las amenazas, según su tipo de ataque a la información, pueden ser de interrupción, y además:",
    opts: [
      "De interrelación, modificación y fabricación.",
      "De interceptación, modificación y fabricación.",
      "De modificación, interrelación, identificación y fabricación.",
      "Físicas y de modificación."
    ],
    ans: 1
  },
  {
    id: 15,
    q: "Indica cuál es la opción falsa de las siguientes afirmaciones relacionadas con posibles ataques realizados a personas:",
    opts: [
      "El basureo (dumpster diving) se basa en obtener información dejada encima de la mesa.",
      "La ingeniería social puede conducir a actos tipificados como delito por la ley.",
      "El shoulder surfing consiste en 'espiar' físicamente a los usuarios mirando por encima del hombro.",
      "El masquerading se basa en suplantar la identidad de un usuario autorizado."
    ],
    ans: 0
  },
  {
    id: 16,
    q: "El acceso a un CPD (Centro de Proceso de Datos) de una persona no autorizada es:",
    opts: ["Una amenaza física.", "Una amenaza lógica.", "Una amenaza de modificación.", "Una amenaza de interrelación."],
    ans: 0
  },
  {
    id: 17,
    q: "La diferencia entre un SAI (Sistema de Alimentación Ininterrumpida) y un grupo electrógeno es:",
    opts: [
      "El SAI es capaz de generar energía eléctrica de la nada.",
      "El grupo electrógeno suministra electricidad de forma instantánea sin corte previo.",
      "El SAI utiliza energía mecánica para generar electricidad.",
      "El grupo electrógeno genera electricidad por combustible y el SAI usa baterías."
    ],
    ans: 3
  },
  {
    id: 18,
    q: "De las siguientes medidas, indicar cuál es de seguridad pasiva (actúa después del incidente):",
    opts: ["Medidas de carácter activo.", "Medidas de carácter preventivo.", "Medidas de carácter reparativo (ej. copias de seguridad).", "Todas son de seguridad pasiva."],
    ans: 2
  },
  {
    id: 19,
    q: "¿En qué tipo de SAI no hay un tiempo de conmutación y las baterías están constantemente trabajando?",
    opts: ["In line interactivo.", "Off line pasivo.", "On line (doble conversión).", "Ninguna es válida."],
    ans: 2
  },
  {
    id: 20,
    q: "Indicar, de las siguientes, cuál es una función del SAI.",
    opts: ["Protege de picos de tensión.", "Protege de caídas de tensión.", "Protege de cortes de tensión.", "Todas son válidas."],
    ans: 3
  },
  {
    id: 21,
    q: "La determinación del nivel aceptable de seguridad corresponde a una política de:",
    opts: ["Aceptar el riesgo.", "Evitar el riesgo.", "Olvidar el riesgo.", "Ninguna de las anteriores."],
    ans: 0
  },
  {
    id: 22,
    q: "La política de seguridad de la organización:",
    opts: [
      "Debe describir qué se intenta proteger y por qué, sin entrar en detalles técnicos (el cómo).",
      "Debe describir qué se protege, por qué y cómo implementarlo paso a paso.",
      "Debe describir qué se protege, por qué, cómo y cuándo implementarlo.",
      "Debe describir qué se protege, cómo se aplica y cuándo implementarlo."
    ],
    ans: 0
  },
  {
    id: 23,
    q: "En relación con las políticas de seguridad, indicar qué norma o procedimiento NO debe establecer una política de seguridad TIC:",
    opts: ["Temas salariales.", "Seguridad física y ambiental.", "Plan de contingencia.", "Prevención y detección de malware."],
    ans: 0
  },
  {
    id: 24,
    q: "Respecto al nivel de riesgo de los datos o su clasificación, indicar cuál de los siguientes NO suele ser una etiqueta de clasificación estándar:",
    opts: ["Confidencial.", "Uso restringido.", "Uso interno.", "Uso particular."],
    ans: 3
  },
  {
    id: 25,
    q: "La estenografía permite:",
    opts: ["Firmar una imagen.", "Cifrar una imagen.", "Cifrar la imagen por píxel.", "Transmitir información por canal subliminal (ocultando datos)."],
    ans: 3
  },
  {
    id: 26,
    q: "De las siguientes afirmaciones indicar cuál de ellas define la propiedad 'difusión' en el cifrado de bloque:",
    opts: [
      "Un pequeño cambio en el texto en claro debería producir un cambio del 50% del texto cifrado.",
      "Un pequeño cambio en la clave debería producir un cambio del 50% del texto cifrado.",
      "Utiliza la técnica 'divide y vencerás'.",
      "Cada bit del texto cifrado dependerá de cada bit de la clave."
    ],
    ans: 0
  },
  {
    id: 27,
    q: "La firma digital y el certificado digital se caracterizan porque:",
    opts: ["La firma verifica la identidad del firmante.", "El certificado digital tiene funciones similares a las de la firma autógrafa.", "Son iguales.", "El certificado digital contiene alguna firma digital (la de la CA)."],
    ans: 0
  },
  {
    id: 28,
    q: "El certificado digital:",
    opts: [
      "Contiene la clave privada del usuario.",
      "Es lo mismo que la firma electrónica del usuario.",
      "Necesita del uso de la clave privada del usuario.",
      "Es un medio de identificación del usuario en la red."
    ],
    ans: 3
  },
  {
    id: 29,
    q: "De las siguientes afirmaciones selecciona la válida:",
    opts: [
      "El criptoanálisis compromete la seguridad de un criptosistema.",
      "IDEA es un algoritmo de criptografía asimétrica muy conocido.",
      "El cifrado en bloque se hace de forma independiente.",
      "En general, en un criptosistema cuanto más grande es la clave más segura será."
    ],
    ans: 3
  },
  {
    id: 30,
    q: "En términos de identidad digital, indica la opción falsa:",
    opts: [
      "Existe normativa en España.",
      "Incluye certificado digital y firma electrónica.",
      "No presenta problemas de seguridad física y lógica.",
      "Garantiza la confidencialidad."
    ],
    ans: 2
  },
  {
    id: 31,
    q: "Selecciona la opción válida:",
    opts: [
      "El cifrado en bloque se hace de forma independiente.",
      "En cada mensaje la clave simétrica utilizada es diferente.",
      "IDEA es un algoritmo de criptografía asimétrica muy conocido.",
      "En general, en un criptosistema cuanto más grande es la clave más segura será."
    ],
    ans: 3
  },
  {
    id: 32,
    q: "En criptografía, la confusión consiste en:",
    opts: [
      "Ocultar la relación entre el texto cifrado y la clave secreta.",
      "Eliminar cualquier relación estadística entre el mensaje original y su texto cifrado.",
      "Enviar al atacante falsos textos para confundirlo.",
      "Mezclar las letras entre sí para confundirlas."
    ],
    ans: 0
  },
  {
    id: 33,
    q: "La firma manuscrita de la persona se considera que pertenece a la llamada:",
    opts: ["Biometría fisiológica.", "Biometría posicional.", "Biometría conductual.", "Biometría analítica."],
    ans: 2
  },
  {
    id: 34,
    q: "La función hash:",
    opts: ["Cifran todo el mensaje.", "Su longitud depende del tamaño del mensaje.", "No se utiliza en la firma digital.", "Genera un resumen o huella digital."],
    ans: 3
  },
  {
    id: 35,
    q: "En una ACL los permisos por defecto sobre un directorio:",
    opts: [
      "No se pueden establecer.",
      "Se establecen con la opción -r.",
      "Afectan a los archivos de un directorio.",
      "Afectan a los archivos que se creen en el directorio."
    ],
    ans: 3
  },
  {
    id: 36,
    q: "Las ACL se pueden utilizar:",
    opts: [
      "Sobre cualquier sistema de archivos.",
      "Siempre, si el usuario sabe configurarlas.",
      "Requieren soporte en el núcleo del sistema operativo.",
      "Sobre cualquier sistema de archivos montado."
    ],
    ans: 2
  },
  {
    id: 37,
    q: "En relación con los objetivos de la seguridad lógica, indicar cuál de las siguientes afirmaciones es falsa.",
    opts: [
      "Restringen el acceso a los programas y archivos.",
      "La información recibida es la misma que ha sido transmitida.",
      "Existen sistemas alternativos secundarios de almacenamiento.",
      "La información recibida proviene de un solo emisor."
    ],
    ans: 2
  },
  {
    id: 38,
    q: "En relación con la ACL extendida, indicar cuál de las siguientes afirmaciones es cierta.",
    opts: [
      "Contiene una entrada mask.",
      "No contiene una entrada mask.",
      "Los permisos se heredan desde el directorio padre.",
      "Ninguna de las anteriores es cierta."
    ],
    ans: 0
  },
  {
    id: 39,
    q: "En relación con la ACL por defecto, indicar cuál de las siguientes afirmaciones es cierta.",
    opts: [
      "Contiene una entrada mask.",
      "No contiene una entrada mask.",
      "Los permisos se heredan desde el directorio padre.",
      "Ninguna de las anteriores es cierta."
    ],
    ans: 2
  },
  {
    id: 40,
    q: "Ocultar los caracteres cuando se introduce una contraseña es una medida:",
    opts: ["Innecesaria.", "De seguridad pasiva.", "De seguridad activa.", "De seguridad física."],
    ans: 2
  },
  {
    id: 41,
    q: "En un ataque por 'fuerza bruta':",
    opts: ["La longitud de la clave sí importa.", "La longitud de la clave no importa.", "Conseguir la contraseña en general es rápido.", "El algoritmo de cifrado es indiferente."],
    ans: 0
  },
  {
    id: 42,
    q: "El ataque por diccionario:",
    opts: ["Es más eficiente que un ataque por fuerza bruta.", "Es menos eficiente que un ataque por fuerza bruta.", "Depende de la robustez de la contraseña.", "Ninguna de las anteriores es correcta."],
    ans: 0
  },
  {
    id: 43,
    q: "En relación con la autenticación con varios factores, indica cuál de las siguientes afirmaciones es verdadera:",
    opts: ["Es lo mismo que la autenticación Single Sign-On.", "Mejora el control de acceso.", "Requiere contraseñas de más de 10 caracteres.", "No existe este mecanismo."],
    ans: 1
  },
  {
    id: 44,
    q: "Indicar en GNU/Linux Ubuntu cómo se almacenan las contraseñas de los usuarios del sistema.",
    opts: ["En texto plano.", "En la nube.", "Cifradas en el archivo /etc/passwd.", "Cifradas en el archivo /etc/shadow."],
    ans: 3
  },
  {
    id: 45,
    q: "Si ciframos un documento con GPG y volvemos a cifrar el mismo con la misma clave, los criptogramas serán:",
    opts: ["Iguales.", "Distintos.", "No se puede hacer con la misma clave.", "No se puede cifrar con GPG."],
    ans: 1
  },
  {
    id: 46,
    q: "En los criptosistemas asimétricos, la confidencialidad y la autenticidad se logran:",
    opts: ["Por separado.", "Rara vez.", "Conjuntamente.", "Es imposible."],
    ans: 0
  },
  {
    id: 47,
    q: "Los criptosistemas se clasifican en:",
    opts: ["Simétricos y hash.", "De bloque, de flujo y hash.", "Clave privada y de bloque.", "Clave privada (simétrica) y asimétrico (pública)."],
    ans: 3
  },
  {
    id: 48,
    q: "Para firmar un mensaje usando criptografía de clave pública:",
    opts: [
      "Se cifra el mensaje usando la clave pública.",
      "Se cifra el mensaje usando una clave secreta cifrada con la pública.",
      "Se cifra un resumen del mensaje (hash) usando la clave privada.",
      "Se cifra la firma manuscrita escaneada."
    ],
    ans: 2
  },
  {
    id: 49,
    q: "El algoritmo Diffie-Hellman:",
    opts: [
      "Se utiliza en criptosistemas de clave pública.",
      "Se utiliza en criptosistemas de clave secreta.",
      "Es un algoritmo de aplicación de 'fuerza bruta'.",
      "Es un sistema generador de funciones hash."
    ],
    ans: 0
  },
  {
    id: 50,
    q: "De las siguientes afirmaciones, indica cuál de ellas es correcta.",
    opts: [
      "La firma electrónica requiere la firma digital.",
      "La firma digital es un tipo o implementación de la firma electrónica.",
      "El certificado digital contiene la clave privada del usuario.",
      "La autoridad de certificación certifica claves privadas."
    ],
    ans: 1
  },
  {
    id: 51,
    q: "En relación a la autoridad de certificación (CA):",
    opts: [
      "Su misión es certificar claves privadas.",
      "Guarda una copia de la clave privada del certificado emitido.",
      "Firma el certificado digital expedido con su clave pública.",
      "Guarda la clave pública del certificado digital emitido."
    ],
    ans: 3
  },
  {
    id: 52,
    q: "El DNI electrónico:",
    opts: ["Contiene una firma electrónica.", "Es una firma electrónica.", "Es un certificado electrónico.", "Encripta la información."],
    ans: 2
  },
  {
    id: 53,
    q: "Indicar el principal problema que intentan resolver los sistemas de clave pública (PKI).",
    opts: ["La mala intención de los usuarios.", "La publicidad de la red Internet.", "La suplantación de identidad entre usuarios.", "La escasa seguridad en las comunicaciones LAN."],
    ans: 2
  },
  {
    id: 54,
    q: "Firmar digitalmente un documento es:",
    opts: [
      "Cifrar el documento (o su resumen hash) con la clave privada.",
      "Cifrar el documento (o parte) con la clave pública.",
      "Cifrar el documento con las claves pública y privada.",
      "Descifrar el documento con las claves pública y privada."
    ],
    ans: 0
  },
  {
    id: 55,
    q: "Indicar cuál de los siguientes no es un rasgo biométrico identificativo (fisiológico).",
    opts: ["Reconocimiento de la voz.", "Firma manuscrita.", "Huella dactilar.", "Patrón de venas de la mano."],
    ans: 1
  },
  {
    id: 56,
    q: "De los siguientes, cuál crees que sería rechazado por los sistemas biométricos (falso negativo).",
    opts: [
      "Una persona autorizada no puede entrar en una sala.",
      "Una persona autorizada es confundida con otra persona autorizada.",
      "Un intruso puede entrar en la sala.",
      "Un intruso suplanta a una persona autorizada."
    ],
    ans: 0
  },
  {
    id: 57,
    q: "De los siguientes elementos, cuál se puede afirmar que identifica de forma inequívoca a una persona.",
    opts: ["El rostro.", "La mano.", "El pie.", "El iris."],
    ans: 3
  },
  {
    id: 58,
    q: "De las siguientes opciones, cuál representa la posibilidad de que un dispositivo biométrico no reconozca a la persona autorizada.",
    opts: ["Falso negativo.", "Falso positivo.", "Falsa aceptación.", "Ninguna de las otras."],
    ans: 0
  },
  {
    id: 59,
    q: "Indicar cuál de los siguientes no es un rasgo de comportamiento biométrico.",
    opts: ["La forma de andar.", "La geometría del rostro.", "La contraseña.", "La voz."],
    ans: 1
  },
  {
    id: 60,
    q: "Respecto a SHA-1, indicar cuál de las siguientes afirmaciones es correcta.",
    opts: [
      "Algoritmo hash para trazabilidad de la evidencia digital.",
      "Algoritmo para cifrar evidencia digital para trazabilidad.",
      "Algoritmo para cifrar evidencia digital para integridad.",
      "Algoritmo hash relacionado con la integridad de la evidencia digital."
    ],
    ans: 3
  },
  {
    id: 61,
    q: "En relación con el proceso de análisis forense, indicar cuál de las siguientes secuencias de fase es correcta.",
    opts: ["Evaluar, analizar, adquirir e informar.", "Informar, evaluar, adquirir y analizar.", "Evaluar, adquirir, analizar e informar.", "Adquirir, analizar, evaluar e informar."],
    ans: 3
  },
  {
    id: 62,
    q: "La normativa ISO/IEC 27042 se utiliza para:",
    opts: [
      "Analizar e interpretar evidencias.",
      "Evaluar, adquirir y analizar las evidencias.",
      "Evaluar y adquirir las evidencias.",
      "Evaluar, adquirir las evidencias e informar."
    ],
    ans: 0
  },
  {
    id: 63,
    q: "Indicar cuál de las siguientes no es una fase del análisis forense.",
    opts: ["Identificación del incidente.", "Análisis de la nube.", "Captura de las evidencias.", "Preservación de las evidencias."],
    ans: 1
  },
  {
    id: 64,
    q: "Indicar cuál es la regla de oro del análisis forense.",
    opts: ["Proteger los metadatos.", "Proteger el original de la evidencia.", "Proteger las cookies de navegación.", "Proteger los procesos en ejecución."],
    ans: 1
  },
  {
    id: 65,
    q: "Indica de las siguientes cuál no es una categoría de ataque activo.",
    opts: ["Suplantación de identidad.", "Interceptación de datos y análisis del tráfico.", "Degradación fraudulenta del servicio.", "Modificación de mensajes."],
    ans: 1
  },
  {
    id: 66,
    q: "De las siguientes afirmaciones, indica cuál de ellas es verdadera.",
    opts: ["Vulnerabilidad es lo mismo que amenaza.", "Riesgo para un sistema informático es lo mismo que amenaza.", "Amenaza y ataque representan lo mismo.", "El ataque pasivo obtiene información."],
    ans: 3
  },
  {
    id: 67,
    q: "Indicar la opción correcta con relación a la exploración de puertos en un ataque.",
    opts: [
      "Puede indicar si el equipo a atacar está activo o no.",
      "No permite conocer los servicios vulnerables del equipo.",
      "No sirve para el ataque porque la detección del SO no es completa.",
      "No aporta ninguna información útil."
    ],
    ans: 0
  },
  {
    id: 68,
    q: "Indicar si el phishing está relacionado con los ataques activos por suplantación de identidad.",
    opts: [
      "No, imposible.",
      "No, el phishing no es un ataque activo.",
      "Sí, su objetivo es conseguir credenciales.",
      "No, el phishing se basa en una degradación de servicio."
    ],
    ans: 2
  },
  {
    id: 69,
    q: "De las siguientes respuestas, indicar cuál establece la diferencia entre troyanos, virus y gusanos.",
    opts: [
      "El troyano no causa ningún daño.",
      "El gusano no debe esperar a que se ejecute ningún archivo.",
      "El gusano no destruye.",
      "El troyano solamente ralentiza el sistema de red."
    ],
    ans: 1
  },
  {
    id: 70,
    q: "Los rootkits se caracterizan por:",
    opts: ["Autoenviarse por correo electrónico.", "Implementar técnicas para permanecer ocultos.", "Infectar a otros ejecutables.", "Presentar publicidad no deseada."],
    ans: 1
  },
  {
    id: 71,
    q: "El análisis del software malicioso:",
    opts: [
      "La mayoría de las veces es un análisis dinámico.",
      "La mayoría de las veces es estático porque no se dispone del código fuente.",
      "Siempre se dispone del código fuente.",
      "Siempre se analiza el código línea a línea."
    ],
    ans: 1
  },
  {
    id: 72,
    q: "Si la red disminuye la velocidad de transferencia, puede indicar la presencia de un:",
    opts: ["Troyano.", "Virus.", "Gusano.", "Spyware."],
    ans: 2
  },
  {
    id: 73,
    q: "Los rootkits se caracterizan por (variación):",
    opts: ["Autoenviarse por correo.", "Obtener privilegios (acceso root/administrador).", "Infectar a otros ejecutables.", "Presentar publicidad."],
    ans: 1
  },
  {
    id: 74,
    q: "Una aplicación que realice un ataque por fuerza bruta para descubrir contraseñas:",
    opts: [
      "Necesitará siempre de un diccionario.",
      "Para que tenga éxito, primero se debe poder acceder al sistema.",
      "Necesita siempre de un fichero de texto con contraseñas.",
      "Debe estar instalada en el equipo víctima."
    ],
    ans: 1
  },
  {
    id: 75,
    q: "Indica cuál de estas acciones NO se produciría nunca en un phishing bancario.",
    opts: ["Disfrazar la página web.", "Rastrear correos localizando direcciones.", "Alquilar una botnet para realizar el ataque.", "Solicitar entrar en una dirección por seguridad."],
    ans: 2
  },
  {
    id: 76,
    q: "De las siguientes, indicar cuál es una medida de persistencia (fase 4 de un ataque):",
    opts: ["Desconectar los servicios peligrosos.", "El borrado de huellas.", "Utilizar herramientas de monitorización.", "Instalar una puerta trasera (Backdoor)."],
    ans: 3
  },
  {
    id: 77,
    q: "Indicar cuál es la función del comando whois.",
    opts: ["Informa sobre el usuario que ejecuta el comando.", "Informa sobre el sistema operativo instalado.", "Informa sobre el dominio dado (propietario, DNS).", "Ninguna de las anteriores."],
    ans: 2
  },
  {
    id: 78,
    q: "Indicar cuál no es una contramedida de la fase de exploración (fase 1).",
    opts: [
      "Definir una política de contraseñas robusta.",
      "Instalar un sistema de detección de intrusos (IDS).",
      "Filtrar paquetes para evitar la detección de la plataforma.",
      "Restringir la información que se difunde por DNS."
    ],
    ans: 0
  },
  {
    id: 79,
    q: "Indicar cuál de las siguientes es una buena práctica en la navegación:",
    opts: ["Descargar programas solo desde el sitio oficial.", "Revisar la configuración del programa cliente.", "Utilizar un antivirus proactivo.", "No responder las solicitudes de desconocidos."],
    ans: 0
  },
  {
    id: 80,
    q: "Si recibes un correo para acceder a Google.com por algún motivo, indica qué NO deberías hacer.",
    opts: ["Mirar el remitente.", "Acceder por la confianza de la web indicada.", "Mirar si el certificado está caducado.", "Resultarme extraño por la mayúscula."],
    ans: 1
  },
  {
    id: 81,
    q: "Indicar cuál de las siguientes es una técnica de envío de correos falsos para robar información.",
    opts: ["Smishing.", "Cadenas.", "Hoax.", "Phishing."],
    ans: 3
  },
  {
    id: 82,
    q: "Indicar cuál de los siguientes no es un paso adecuado en el uso del correo electrónico.",
    opts: ["Analizar con antivirus los adjuntos.", "No acceder a enlaces sospechosos.", "Abrir el correo siempre para conocer su contenido.", "Analizar la procedencia del correo."],
    ans: 2
  },
  {
    id: 83,
    q: "Técnica utilizada para el robo de información mediante el engaño de personas:",
    opts: ["Basureo.", "Ingeniería social.", "Virus.", "Amenazas."],
    ans: 1
  },
  {
    id: 84,
    q: "Indicar cuál busca patrones de red específicos generados por un malware conocido.",
    opts: ["Basado en firma (Signatures).", "Basado en anomalías.", "Sistemas HIDS.", "Basado en análisis de protocolo."],
    ans: 0
  },
  {
    id: 85,
    q: "De los siguientes, indicar cuál no es un tipo de IDS.",
    opts: ["IDS basado en red.", "IDS basado en host.", "IDS basado en protocolo.", "IDS basado en diccionario."],
    ans: 3
  },
  {
    id: 86,
    q: "De las siguientes afirmaciones, indicar cuál describe un IDS.",
    opts: [
      "Se puede configurar para permitir la conexión del intruso.",
      "Inspecciona paquetes e identifica patrones sospechosos.",
      "No detecta intrusiones realizadas desde dentro.",
      "No genera alarmas cuando da falsos positivos."
    ],
    ans: 1
  },
  {
    id: 87,
    q: "Indicar cuál de ellas es un objetivo fundamental de los IDS.",
    opts: ["Detectar y permitir un ataque.", "Permitir las conexiones estables.", "Identificar comportamientos anómalos en la red.", "Permitir la transmisión segura."],
    ans: 2
  },
  {
    id: 88,
    q: "Indicar dónde se sitúa normalmente un IPS en la red.",
    opts: ["Detrás del cortafuegos.", "Frente al cortafuegos.", "Combinado con el cortafuegos.", "No requiere cortafuegos."],
    ans: 0
  },
  {
    id: 89,
    q: "Indica la opción falsa sobre ataques realizados por personas:",
    opts: [
      "La ingeniería social es un acto tipificado como delito.",
      "El basureo se basa en obtener información dejada encima de la mesa.",
      "El shoulder surfing consiste en 'espiar' físicamente.",
      "El masquerading se basa en suplantar la identidad."
    ],
    ans: 1
  },
  {
    id: 90,
    q: "De las siguientes afirmaciones indicar cuál de ellas es correcta.",
    opts: [
      "Riesgo es lo mismo que amenaza.",
      "En redes sociales es indiferente publicar información sensible.",
      "En el sistema debe utilizarse un perfil con privilegios restringidos.",
      "La ingeniería social no está tipificada como delito."
    ],
    ans: 2
  },
  {
    id: 91,
    q: "De las siguientes afirmaciones indicar cuál de ellas es correcta.",
    opts: [
      "Aunque no haya vulnerabilidades sigue habiendo amenazas.",
      "Tripwire se utiliza para realizar violaciones de seguridad.",
      "Un ataque DoS exitoso involucra un acceso al sistema.",
      "Mantener el SO actualizado no es una prioridad."
    ],
    ans: 0
  },
  {
    id: 92,
    q: "En relación con el ataque activo indicar cuál de las siguientes afirmaciones NO es correcta.",
    opts: [
      "Son una amenaza para la integridad y la disponibilidad.",
      "No hay daño en el sistema.",
      "La atención se centra en la detección.",
      "Hay modificación de la información."
    ],
    ans: 1
  },
  {
    id: 93,
    q: "En relación con la protección del entorno, indicar cuál no es una buena práctica general.",
    opts: ["Mantener la privacidad del perfil.", "Configurar la visualización de archivos ocultos.", "Instalar complementos extras como barras de tareas.", "Deshabilitar carpetas compartidas."],
    ans: 2
  },
  {
    id: 94,
    q: "De las siguientes definiciones indicar cuál se ajusta a un IDS.",
    opts: [
      "Analiza conexiones en tiempo real para determinar incidentes.",
      "Emite alarmas y pueden descartar paquetes y desconectar.",
      "Recoge y analiza información para identificar posibles fallos de seguridad.",
      "Identifica anomalías comparando eventos con actividades aceptadas."
    ],
    ans: 2
  },
  {
    id: 95,
    q: "De las siguientes herramientas indicar cuál de ellas es un IPS.",
    opts: ["Tripwire.", "OSSEC.", "Snort (modo inline).", "Ninguna de las anteriores."],
    ans: 2
  },
  {
    id: 96,
    q: "En la fase de reconocimiento de un ataque indicar qué herramienta se suele utilizar.",
    opts: [
      "Herramientas capturadoras de paquetes.",
      "Herramientas de monitorización de logs.",
      "Herramientas de detección de ping (ping sweeps).",
      "Herramientas de eliminación de caché y cookies."
    ],
    ans: 2
  },
  {
    id: 97,
    q: "De las siguientes afirmaciones indicar cuál se ajusta al concepto de 'degradación fraudulenta del servicio'.",
    opts: [
      "Los mensajes dirigidos a una entidad son suprimidos.",
      "Los mensajes son retardados o reordenados.",
      "Los recursos del sistema no se alteran.",
      "Las secuencias de autenticación son repetidas."
    ],
    ans: 1
  },
  {
    id: 98,
    q: "De las siguientes afirmaciones indicar cuál de ellas es la correcta.",
    opts: [
      "Un ataque es la realización de una amenaza.",
      "Vulnerabilidad es lo mismo que amenaza.",
      "Hay riesgo en el sistema aunque no exista amenaza.",
      "En un ataque activo el intruso monitoriza pasivamente."
    ],
    ans: 0
  },
  {
    id: 99,
    q: "Cuando un adaptador de red opera en modo «promiscuo»:",
    opts: [
      "Puede ser utilizado por varios usuarios locales.",
      "Captura paquetes cuya dirección MAC de destino es la suya.",
      "Sirve para capturar todo el tráfico de un router.",
      "Captura TODOS los paquetes del segmento de red."
    ],
    ans: 3
  },
  {
    id: 100,
    q: "Monitorizar la red:",
    opts: [
      "Es un proceso continuo de recolección de datos.",
      "Soluciona cuellos de botella.",
      "No permite la utilización de filtros.",
      "Consiste en distribuir el ancho de banda."
    ],
    ans: 0
  },
  {
    id: 101,
    q: "De las siguientes, indica cuál es una aplicación de monitorización de redes:",
    opts: ["Nagios.", "Gparted.", "Advance IP scanner.", "Netstat."],
    ans: 0
  },
  {
    id: 102,
    q: "Opción para que TCPdump no ponga la tarjeta de red en modo promiscuo:",
    opts: ["Opción –n.", "Opción –p.", "Opción –x.", "Opción –a."],
    ans: 1
  },
  {
    id: 103,
    q: "Indica si existe alguna relación entre Wireshark y TCPdump:",
    opts: [
      "No existe ninguna relación.",
      "Sí existe pero son incompatibles.",
      "Sí existe y se pueden intercambiar las salidas (.pcap).",
      "Son herramientas con objetivos diferenciados."
    ],
    ans: 2
  },
  {
    id: 104,
    q: "Los servicios de seguridad de las redes sirven para:",
    opts: [
      "Defender a los internautas de fallos de computadores remotos.",
      "Proteger a las redes frente a posibles fallos del software.",
      "Asegurarse de que los atacantes no intenten uso indebido.",
      "Proteger las comunicaciones frente a atacantes que pretendan uso indebido."
    ],
    ans: 3
  },
  {
    id: 105,
    q: "Ante el riesgo de ataques dentro de una red telemática:",
    opts: [
      "Se pueden establecer protecciones de seguridad total.",
      "Se pueden establecer protecciones de seguridad total de la información.",
      "No hay seguridad total, pero sí medidas satisfactorias frente a riesgos.",
      "No hay seguridad total, pero sí servicios totalmente seguros."
    ],
    ans: 2
  },
  {
    id: 106,
    q: "Los mecanismos criptográficos:",
    opts: [
      "Sirven para construir protocolos de seguridad.",
      "No tienen nada que ver con los mecanismos de seguridad.",
      "Constituyen la mayoría de los servicios y no influyen en seguridad.",
      "Sirven para construir protocolos y no tienen que ver con mecanismos."
    ],
    ans: 0
  },
  {
    id: 107,
    q: "Señala la opción correcta respecto a la seguridad en redes:",
    opts: [
      "Es un conjunto de técnicas para minimizar la vulnerabilidad.",
      "Trata de que el coste de acceso indebido sea inferior a su valor.",
      "Diseñada para prestar servicios generales a los usuarios.",
      "Ninguna de las anteriores."
    ],
    ans: 0
  },
  {
    id: 108,
    q: "Señala la opción correcta respecto a los mecanismos criptográficos:",
    opts: [
      "La criptografía es la base de apoyo de los servicios de seguridad.",
      "Intercambian información entre los sistemas conectados.",
      "Protegen las comunicaciones de los usuarios frente a ataques.",
      "Todas las anteriores."
    ],
    ans: 0
  },
  {
    id: 109,
    q: "¿Cuál de los siguientes es un modo de funcionamiento de WPA?",
    opts: ["Con clave inicial compartida (WPA-PSK).", "Con clave inicial no compartida.", "Sin autenticación.", "Con vectores de inicialización de 24 bits."],
    ans: 0
  },
  {
    id: 110,
    q: "¿Cuál de las siguientes NO es una ventaja de la utilización de portales cautivos?",
    opts: [
      "Que la seguridad está basada en identidades.",
      "Que pueden utilizar autenticación centralizada.",
      "Que permite aplicar políticas por usuario.",
      "Que utilizan el navegador (sin software cliente)."
    ],
    ans: 0
  },
  {
    id: 111,
    q: "Señala la afirmación correcta respecto a WPA2:",
    opts: [
      "Utiliza la norma de seguridad IEEE 802.2.",
      "No siempre utiliza autenticación con clave compartida (PSK).",
      "Utiliza vectores de inicialización de 36 bits.",
      "Utiliza claves estáticas (TKIP)."
    ],
    ans: 1
  },
  {
    id: 112,
    q: "Señala la afirmación correcta respecto a un servidor RADIUS:",
    opts: [
      "No es necesario que esté en la red local del dispositivo.",
      "Es imprescindible WPA para poder utilizarlo.",
      "Es imprescindible WEP para poder utilizarlo.",
      "Es el responsable de la existencia de portales cautivos."
    ],
    ans: 0
  },
  {
    id: 113,
    q: "Indica cuál no es una buena solución de seguridad para redes inalámbricas:",
    opts: ["Filtrado de direcciones MAC.", "Creación de VPN.", "WPA-PSK.", "Estándar 802.1X y servidores RADIUS."],
    ans: 0
  },
  {
    id: 114,
    q: "Indica cuál de las siguientes afirmaciones es correcta respecto al ARP Spoofing.",
    opts: [
      "Provoca que el switch actúe como un HUB.",
      "Representa un problema de autenticación.",
      "Es una técnica que permite modificar el tráfico (MitM).",
      "Permite activar filtros en el router."
    ],
    ans: 2
  },
  {
    id: 115,
    q: "Indica cuál de las siguientes afirmaciones es incorrecta respecto al servicio DNS.",
    opts: [
      "Es muy sensible a los ataques DoS.",
      "El servidor responde con la IP del dominio solicitado.",
      "Es sensible a ataques de suplantación.",
      "Requiere la autenticación del usuario."
    ],
    ans: 3
  },
  {
    id: 116,
    q: "Indica cuál de las siguientes afirmaciones es correcta en relación con el servicio Telnet.",
    opts: [
      "Es un servicio completamente seguro.",
      "Requiere la autenticación del usuario en el equipo remoto.",
      "Requiere la autenticación del usuario en el equipo local.",
      "Las credenciales se envían encriptadas."
    ],
    ans: 1
  },
  {
    id: 117,
    q: "Indica la afirmación correcta en relación con el servicio de correo electrónico.",
    opts: [
      "El servidor de correo (MTA) ejecuta el protocolo SMTP.",
      "El servidor de correo ejecuta el protocolo SNMP.",
      "El cliente de correo ejecuta el agente MTA.",
      "El comando VRFY se ejecuta desde el cliente de correo."
    ],
    ans: 0
  },
  {
    id: 118,
    q: "Indica cuál de las siguientes afirmaciones es falsa respecto al protocolo DHCP.",
    opts: [
      "Es un protocolo completamente seguro.",
      "Trabaja sobre el protocolo IP y UDP.",
      "Debe controlar que equipos no autorizados no accedan.",
      "Asigna parámetros de red."
    ],
    ans: 0
  },
  {
    id: 119,
    q: "¿A cuál de los siguientes vegetales se podría asimilar la defensa en profundidad?",
    opts: ["Repollo.", "Cebolla.", "Lechuga.", "Alcachofa."],
    ans: 1
  },
  {
    id: 120,
    q: "Indica cuál NO es una buena práctica de seguridad en servidores.",
    opts: [
      "Establecer políticas de contraseña.",
      "Tener los sistemas actualizados.",
      "Deshabilitar o desinstalar servicios no usados.",
      "Usar cuentas con privilegios administrativos para todo."
    ],
    ans: 3
  },
  {
    id: 121,
    q: "De las siguientes, indica cuál NO es una capa técnica de la defensa en profundidad.",
    opts: ["Seguridad física.", "Defensa de red.", "Defensa de datos.", "Defensa de usuarios."],
    ans: 3
  },
  {
    id: 122,
    q: "Indica cuál de ellas se identifica con el concepto de hardening (bastionado).",
    opts: [
      "Proceso de reducción de vulnerabilidades en el sistema.",
      "Proceso de reducción de la seguridad.",
      "Proceso de reducción de la funcionalidad.",
      "Proceso de reducción de los recursos."
    ],
    ans: 0
  },
  {
    id: 123,
    q: "En relación a la herramienta Fwsnort, indica cuál es correcta.",
    opts: [
      "Es un cortafuegos.",
      "Implementa la técnica port knocking.",
      "Se combina con el cortafuegos traduciendo reglas de Snort.",
      "Implementa la técnica de SPA."
    ],
    ans: 2
  },
  {
    id: 124,
    q: "Indica cuál de los siguientes protocolos no transmite los datos en texto plano:",
    opts: ["SMTP.", "FTP.", "Telnet.", "SSH."],
    ans: 3
  },
  {
    id: 125,
    q: "Indica cuál de las siguientes combinaciones Wi-Fi es la más segura:",
    opts: ["WPA + AES.", "WPA2 + AES.", "WPA2 + TKIP.", "WPA + TKIP."],
    ans: 1
  },
  {
    id: 126,
    q: "Indica cuál de los siguientes métodos se utiliza para asegurar la integridad en WPA2:",
    opts: ["TKIP.", "AES.", "CCMP.", "RC4."],
    ans: 2
  },
  {
    id: 127,
    q: "La defensa en profundidad:",
    opts: [
      "Intensifica la seguridad en la DMZ.",
      "Solo protege el router frontera.",
      "Establece medidas multicapa para reducir éxito de ataques.",
      "Protege el interior de la LAN exclusivamente."
    ],
    ans: 2
  },
  {
    id: 128,
    q: "Si se falsifica el origen de los correos electrónicos, se ha producido un:",
    opts: ["DHCP Spoofing.", "SMTP Spoofing.", "IP Spoofing.", "DNS Spoofing."],
    ans: 1
  },
  {
    id: 129,
    q: "De las siguientes afirmaciones, indica cuál se corresponde con red corporativa:",
    opts: [
      "Es una red local.",
      "Utiliza siempre Internet.",
      "Puede utilizar varias tecnologías (LAN, WAN, VPN, Intranet).",
      "No necesita nunca conexión a Internet."
    ],
    ans: 2
  },
  {
    id: 130,
    q: "En relación con las políticas de seguridad, indica la respuesta correcta:",
    opts: [
      "Debe ser conocido por todos los usuarios del sistema.",
      "Lo debe confeccionar solamente el administrador.",
      "Es lo mismo que un plan de contingencia.",
      "Son normas generales universales externas."
    ],
    ans: 0
  },
  {
    id: 131,
    q: "El ARP spoofing es un ataque de seguridad en:",
    opts: ["La capa de transporte.", "La capa de aplicación.", "La capa de red.", "La capa de enlace de datos."],
    ans: 3
  },
  {
    id: 132,
    q: "Para proteger las redes contra ataques de suplantación de identidad deben usarse:",
    opts: ["Servicios de autenticación.", "Servicios de integridad.", "Servicios de confidencialidad.", "Servicios de control de acceso."],
    ans: 0
  },
  {
    id: 133,
    q: "Ante el riesgo de recibir determinados ataques dentro de una red telemática:",
    opts: [
      "Se pueden establecer protecciones de seguridad total.",
      "No hay seguridad total, pero sí servicios totalmente seguros.",
      "No hay seguridad total, pero sí medidas satisfactorias frente a riesgos.",
      "Se pueden establecer protecciones de seguridad total de los sistemas."
    ],
    ans: 2
  },
  {
    id: 134,
    q: "De las siguientes opciones, indica cuál de ellas es una función del cortafuegos.",
    opts: ["Denegar conexiones.", "Permitir conexiones.", "Filtrar el tráfico.", "Impedir la entrada de virus."],
    ans: 2
  },
  {
    id: 135,
    q: "De las siguientes afirmaciones, ¿cuál corresponde a la seguridad perimetral?",
    opts: ["Es una medida de software.", "Es proporcionada solo por hardware.", "Se establece mediante software y/o hardware.", "Es la establecida por nuestro ISP."],
    ans: 2
  },
  {
    id: 136,
    q: "Indica cuál se corresponde con una función del router frontera.",
    opts: [
      "Separa la DMZ de la LAN.",
      "Es el dispositivo que separa la red corporativa del exterior.",
      "Está dentro de la DMZ.",
      "Está dentro de la LAN."
    ],
    ans: 1
  },
  {
    id: 137,
    q: "¿Cuál es la afirmación correcta respecto al cortafuegos?",
    opts: ["Está siempre fuera de la LAN.", "Está siempre dentro de la LAN.", "Está en la DMZ.", "Puede ser un router."],
    ans: 3
  },
  {
    id: 138,
    q: "Señala la opción correcta respecto a la ubicación de las zonas DMZ.",
    opts: [
      "Están dentro de la LAN.",
      "Están dentro del perímetro de red (entre interna y externa).",
      "Están entre el perímetro de red y el router frontera.",
      "Están fuera del perímetro de red."
    ],
    ans: 1
  },
  {
    id: 139,
    q: "El filtrado de paquetes está sujeto a las reglas básicas (cadenas):",
    opts: ["INPUT, OUTPUT.", "INPUT, OUTPUT, FORWARD.", "INPUT, EXIT, IPTABLES.", "IPTABLES, INPUT, OUTPUT, FORWARD."],
    ans: 1
  },
  {
    id: 140,
    q: "Los paquetes que atraviesan un cortafuegos pueden ser filtrados:",
    opts: [
      "Por los dominios de destino.",
      "Por los datos de la cabecera del paquete.",
      "Solamente por las direcciones IP.",
      "Solamente por las direcciones IPv4 destino."
    ],
    ans: 1
  },
  {
    id: 141,
    q: "Cuando un paquete no llega a su destino y se informa al emisor de las causas:",
    opts: ["El paquete se ha aceptado.", "El paquete se ha denegado.", "El paquete se ha rechazado.", "El paquete se ha bloqueado."],
    ans: 2
  },
  {
    id: 142,
    q: "Un cortafuegos se puede clasificar según su área de influencia en:",
    opts: ["De filtrado de paquetes.", "Libre o propietario.", "Personal o SOHO.", "De nivel aplicación o corporativo."],
    ans: 2
  },
  {
    id: 143,
    q: "Regla IPTABLES para denegar entrada por eth1 de paquetes spoofeados desde 192.168.1.0/24:",
    opts: [
      "iptables -D INPUT -i eth1 -s 192.168.1.0/24 -j DROP.",
      "iptables -A INPUT -i eth1 -s 192.168.1.0/24 -j DROP.",
      "iptables -D INPUT -i eth1 -d 192.168.1.0/24 -j DROP.",
      "iptables -A INPUT -i eth1 -d 192.168.1.0/24 -j DROP."
    ],
    ans: 1
  },
  {
    id: 144,
    q: "De las siguientes afirmaciones, indica cuál es una de las ventajas de hping3:",
    opts: ["Es software libre.", "Puede especificar puerto o tipo de protocolo.", "Se puede utilizar desde la terminal.", "Es más sencillo de manejar que ping."],
    ans: 1
  },
  {
    id: 145,
    q: "En referencia a los mensajes recogidos por el log de IPtables, indica la opción correcta:",
    opts: [
      "Los emite el kernel de GNU/Linux.",
      "Solo se graban si perjudican al sistema.",
      "Siempre se graban en iptables.txt.",
      "Siempre se graban en iptables.log."
    ],
    ans: 0
  },
  {
    id: 146,
    q: "Función de: iptables -t nat -A POSTROUTING -o eth0 -s 192.168.0.0/24 -j SNAT --to-source 172.28.0.254",
    opts: [
      "Traduce la dirección de origen a 172.28.0.254.",
      "Traduce la dirección de destino a 172.28.0.254.",
      "No puede dar salida a toda la red 192.168.0.0/24.",
      "No permite el uso de MASQUERADE."
    ],
    ans: 0
  },
  {
    id: 147,
    q: "¿Cuáles de las siguientes son las cadenas principales de la tabla nat?",
    opts: ["NAT, INPUT y OUTPUT.", "MANGLE, PREROUTING y POSTROUTING.", "INPUT, OUTPUT y FORWARD.", "PREROUTING y POSTROUTING."],
    ans: 3
  },
  {
    id: 148,
    q: "Indica cuál es la afirmación correcta:",
    opts: [
      "SNAT es un objetivo (target) de la tabla nat.",
      "DNAT es una cadena de la tabla nat.",
      "SNAT da acceso a clientes externos a servicios internos.",
      "DNAT se utiliza para clientes internos hacia externos."
    ],
    ans: 0
  },
  {
    id: 149,
    q: "En relación con el protocolo L2TP, indica cuál es la respuesta correcta:",
    opts: ["De nivel 3.", "De nivel 2.", "Más antiguo que PPTP.", "De nivel de red."],
    ans: 1
  },
  {
    id: 150,
    q: "¿Cuál de los siguientes no es un modo de conexión de una VPN?",
    opts: ["Acceso remoto.", "Interconexión de redes (Site-to-Site).", "Nivel de aplicación.", "Punto a punto."],
    ans: 2
  },
  {
    id: 151,
    q: "Selecciona la respuesta correcta para un usuario inexperto en VPNs:",
    opts: [
      "Las VPN con IPsec son más sencillas de utilizar.",
      "Las VPN con SSL son más sencillas de utilizar.",
      "SSL implica instalar un software cliente complejo.",
      "IPsec posibilita conexión desde cualquier equipo sin software."
    ],
    ans: 1
  },
  {
    id: 152,
    q: "Indica la respuesta correcta respecto a una red privada virtual VPN:",
    opts: ["Encapsula la información.", "Se da en las LAN.", "Atraviesa los routers sin dificultad.", "Utiliza el protocolo PTP."],
    ans: 0
  },
  {
    id: 153,
    q: "Para comunicación segura y autenticada con SSH...",
    opts: [
      "El receptor debe tener la clave privada del emisor.",
      "El servidor debe conocer la clave pública del cliente.",
      "El emisor debe conocer la clave privada del receptor.",
      "El receptor debe conocer clave privada y pública del emisor."
    ],
    ans: 1
  },
  {
    id: 154,
    q: "Un servidor RADIUS...",
    opts: [
      "Es un cliente de autenticación.",
      "Es un servidor de autenticación para acceso remoto (AAA).",
      "Es un servicio de Ubuntu exclusivo.",
      "Es un servidor Windows exclusivo."
    ],
    ans: 1
  },
  {
    id: 155,
    q: "En relación con el acceso remoto, indica cuál es correcta:",
    opts: [
      "Utiliza diferentes aplicaciones en el servidor.",
      "Permite iniciar a distancia diversas sesiones en diferentes equipos.",
      "Al ejecutar programas utiliza los recursos del servidor.",
      "Todas las respuestas son correctas."
    ],
    ans: 3
  },
  {
    id: 156,
    q: "¿Cuál es la función del certificado digital del servidor al conectar remotamente?",
    opts: [
      "Permite que los datos se envíen cifrados.",
      "Permite la autenticación del usuario.",
      "Permite que el usuario reciba la firma y confíe en la identidad del servidor.",
      "No hay ninguna respuesta correcta."
    ],
    ans: 2
  },
  {
    id: 157,
    q: "De las siguientes afirmaciones, indica cuál se identifica con el protocolo CHAP:",
    opts: [
      "Es un protocolo inseguro.",
      "Verifica periódicamente la identidad del cliente remoto.",
      "Es un protocolo de tipo AAA.",
      "Es un protocolo de autenticación extensible."
    ],
    ans: 1
  },
  {
    id: 158,
    q: "Indica cuál de ellas NO se identifica con el protocolo RADIUS:",
    opts: [
      "Utiliza una contraseña cifrada con algoritmo bidireccional.",
      "Es un protocolo de tipo AAA.",
      "Es capaz de manejar sesiones.",
      "Se utiliza en combinación con protocolos como PAP o CHAP."
    ],
    ans: 0
  },
  {
    id: 159,
    q: "Selecciona la frase correcta:",
    opts: [
      "La seguridad perimetral la establecen los ISP.",
      "La seguridad perimetral determina la política de seguridad.",
      "La seguridad perimetral no depende de la política.",
      "La política de seguridad corporativa determina la seguridad perimetral."
    ],
    ans: 3
  },
  {
    id: 160,
    q: "Crear una red privada sobre una red pública es:",
    opts: ["Solo inalámbrico.", "Una VLAN.", "Una VPN.", "No se puede realizar."],
    ans: 2
  },
  {
    id: 161,
    q: "Instalación de un servidor web público, ubicación correcta:",
    opts: ["En el router frontera.", "En la zona desmilitarizada (DMZ).", "Fuera del perímetro de red.", "En la LAN."],
    ans: 1
  },
  {
    id: 162,
    q: "¿Cuál de las siguientes afirmaciones define una subred protegida débil?",
    opts: [
      "Sitúa a la DMZ entre dos cortafuegos.",
      "Sitúa a la DMZ detrás de un cortafuegos.",
      "No tiene equipo bastión.",
      "Tiene un equipo bastión sin proteger."
    ],
    ans: 1
  },
  {
    id: 163,
    q: "En relación con los IDS, indica cuál de las siguientes es correcta:",
    opts: [
      "Solamente se emplean en la LAN.",
      "Se emplean dentro de la LAN de forma exclusiva.",
      "Se emplean habitualmente en la defensa perimetral.",
      "Solamente se emplean en la DMZ."
    ],
    ans: 2
  },
  {
    id: 164,
    q: "En relación con una VPN, indica cuál de las siguientes es correcta:",
    opts: [
      "Hace lo mismo que una VLAN.",
      "Crea dominios dentro de una LAN de manera virtual.",
      "Cifra y firma la información transmitida.",
      "Es la manera de acceder al escritorio remoto."
    ],
    ans: 2
  },
  {
    id: 165,
    q: "En relación con el protocolo L2TP, indica cuál es correcta:",
    opts: ["Crea conexiones punto a punto.", "Crea conexiones multipunto como MPLS.", "Crea conexiones multipunto.", "Crea conexiones como VPLS."],
    ans: 0
  },
  {
    id: 166,
    q: "¿Cuál es el mejor protocolo a nivel 3 para el acceso remoto en VPNs?",
    opts: ["SSH.", "SSL.", "L2TP.", "IPSec."],
    ans: 3
  },
  {
    id: 167,
    q: "En relación con SSHFS, ¿cuál se ajusta a su definición?",
    opts: [
      "Sistema de archivos proporcionado por SSH.",
      "Protocolo seguro de SSH.",
      "Lo mismo que HTTPS.",
      "Protocolo de nivel 2."
    ],
    ans: 0
  },
  {
    id: 168,
    q: "Indica cómo se puede acceder vía SSH:",
    opts: [
      "A un servidor SSH en el que tengamos autorización.",
      "A cualquier equipo GNU/Linux con la cuenta root.",
      "A cualquier equipo utilizando PuTTY sin servidor.",
      "A cualquier equipo si se tiene instalado un cliente SSH."
    ],
    ans: 0
  }
];