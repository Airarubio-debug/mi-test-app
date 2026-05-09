// src/components/red.js

export const redQuestions = [
  // BLOQUE 1: DNS
  {
    q: "En relación con el servicio DNS, ¿cuál de estas afirmaciones es incorrecta?",
    opts: [
      "En cada zona disponemos de la información necesaria para resolver los nombres de las máquinas de tantos dominios como necesitemos, pero al menos de uno.",
      "Cada servidor DNS se debe encargar como mínimo de una zona, pero puede gestionar varias si es necesario.",
      "Se trata de una organización jerárquica en dominios y sus subdominios, por niveles.",
      "Un dominio tiene varios nombres y todos los miembros de su organización comparten ese nombre."
    ],
    ans: 3
  },
  {
    q: "¿Cómo se define un dominio?",
    opts: [
      "Un dominio son los diferentes árboles del espacio de nombres de dominio del servicio DNS.",
      "Un dominio no pertenece a los árboles del espacio de nombres de dominio del sistema DNS.",
      "Un dominio es cada uno de los subárboles del espacio de nombres de dominio del sistema DNS.",
      "Un dominio no pertenece al espacio de nombres de dominio del sistema DNS."
    ],
    ans: 2
  },
  {
    q: "¿Cómo se denominan las resoluciones de nombres de dominio en el sistema de dominios?",
    opts: [
      "Resolución iterativa y directa.",
      "Resolución directa e iterativa.",
      "Resolución directa, iterativa y recursiva.",
      "Resolución iterativa y recursiva."
    ],
    ans: 3
  },
  {
    q: "¿De qué maneras podemos solicitar información en las resoluciones?",
    opts: [
      "De manera iterativa o directa.",
      "De manera iterativa o inversa.",
      "Ninguna de las otras opciones es correcta.",
      "De manera directa o inversa."
    ],
    ans: 3
  },
  {
    q: "¿Qué tipo de zonas podemos crear?",
    opts: [
      "Inversa y secundaria.",
      "Directa e inversa.",
      "Secundaria y directa.",
      "Primaria y directa."
    ],
    ans: 1
  },
  {
    q: "¿Qué registro de recurso sirve para identificar al servidor de correo?",
    opts: ["A.", "NS.", "MX.", "PTR."],
    ans: 2
  },
  {
    q: "¿Cómo podemos saber el estado del servidor DNS?",
    opts: [
      "systemctl star named o su equivalente service bind9 star.",
      "systemctl stop named o su equivalente service bind9 stop.",
      "systemctl status named o su equivalente service bind9 status.",
      "systemctl restart named o su equivalente service bind9 restart."
    ],
    ans: 2
  },
  {
    q: "¿Cómo se llaman las cinco zonas que instala BIND?",
    opts: [
      "db.0, db.127, db.255, db.full y db.local.",
      "db.0, db.123, db.255, db.empty y db.global.",
      "db.0, db.127, db.255, db.empty y db.local.",
      "db.0, db.123, db.255, db.full y db.global."
    ],
    ans: 2
  },
  {
    q: "En GNU/Linux, el DNS dinámico permite que…",
    opts: [
      "BIND y DHCP Server puedan trabajar sincronizados.",
      "El Dnsmasq y DHCP Server puedan trabajar sincronizados.",
      "Dentro del Active Directory tengamos el servidor de DNS y DHCP de Microsoft sincronizados.",
      "Ninguna de las otras opciones es correcta."
    ],
    ans: 0
  },
  {
    q: "¿Qué permite el servicio DNS-O-Matic?",
    opts: [
      "Todas las otras son correctas.",
      "Tener la IP pública dinámica de nuestro rúter siempre actualizada.",
      "Tiene los diferentes tokens de nuestros servicios de DDNS.",
      "Poder hacer de pasarela entre nuestro rúter y diferentes servicios de DDNS."
    ],
    ans: 0
  },

  // BLOQUE 2: DHCP
  {
    q: "En el archivo de configuración dhcpd.conf se realiza una reserva de una IP para un ordenador concreto mediante una declaración...",
    opts: ["fixed-address.", "option hostname.", "shared-network.", "host."],
    ans: 3
  },
  {
    q: "Un cliente DHCP debe iniciar el proceso de renovación de la concesión cuando...",
    opts: [
      "Se ha agotado la mitad del tiempo establecido en max-lease-time.",
      "Ha finalizado la concesión anterior.",
      "Se ha agotado el tiempo de concesión por defecto.",
      "Se ha agotado la mitad del tiempo de concesión asignado."
    ],
    ans: 3
  },
  {
    q: "Para especificar en el archivo de configuración dhcpd.conf las IP de los servidores DNS que se enviarán a los clientes DHCP, se utiliza la directiva...",
    opts: [
      "option domain-name.",
      "option domain-name-servers.",
      "option dns-servers.",
      "option ip-dns-servers."
    ],
    ans: 1
  },
  {
    q: "Cuando inicia el proceso de configuración, un cliente DHCP envía un mensaje DHCP...",
    opts: [
      "A todos los equipos de la red.",
      "A los servidores DNS, para que estos las reenvíen al servidor DHCP.",
      "A la dirección IP de uno de los servidores DHCP de la red.",
      "A las direcciones IP que tiene configuradas como direcciones de servidores DHCP."
    ],
    ans: 0
  },
  {
    q: "En sistemas GNU/Linux Ubuntu se puede solicitar la renovación de una concesión DHCP con el comando...",
    opts: ["ipconfig /renew.", "dhclient.", "ifconfig /release.", "ip /renew."],
    ans: 1
  },
  {
    q: "En la declaración de una reserva DHCP en el archivo dhcpd.conf, para que se pueda identificar al cliente, se debe especificar su...",
    opts: ["Nombre DNS.", "Nombre de equipo.", "Dirección física.", "Dirección IP."],
    ans: 2
  },
  {
    q: "Indica qué puerto del servidor DHCP se utiliza para comunicarse con los clientes.",
    opts: ["UDP 67.", "TCP 68.", "TCP 67.", "UDP 68."],
    ans: 3
  },
  {
    q: "En el servidor DHCP de Windows Server, cuando se ha declarado un conjunto de direcciones IP y si queremos que algunas de ellas no se asignen a los clientes, debemos realizar...",
    opts: ["Concesiones.", "Denegaciones.", "Exclusiones.", "Reservas."],
    ans: 2
  },
  {
    q: "Indica cuál de las siguientes es la función de la declaración group.",
    opts: [
      "Aplica parámetros de forma global a un grupo para varios hosts.",
      "Agrupa las declaraciones de cada uno de los hosts en el archivo de configuración.",
      "Aplica parámetros de forma global a un grupo para varias declaraciones.",
      "Ninguna de las anteriores."
    ],
    ans: 2
  },
  {
    q: "Indica cuál de las siguientes opciones de código se utiliza para asignar una dirección estática a un equipo en el archivo dhcpd.conf.",
    opts: [
      "ip 192.168.1.1;",
      "fixed-address 192.168.1.1;",
      "address 192.168.1.1;",
      "default-ip 192.168.1.1;"
    ],
    ans: 1
  },

  // BLOQUE 3: SERVIDOR WEB APACHE Y SEGURIDAD
  {
    q: "De las siguientes afirmaciones, indica cuál está relacionada con la activación de un módulo de Apache 2.4.",
    opts: [
      "La inclusión de una directiva en el archivo /etc/apache2/apache2.conf.",
      "La creación de archivos de carga y configuración del módulo en el directorio de activados.",
      "La inclusión de una directiva en el archivo /etc/apache2/mods-available/000-default.conf.",
      "La creación de un enlace de los archivos de módulos disponibles al directorio de activados."
    ],
    ans: 3
  },
  {
    q: "Indica cuál de las siguientes afirmaciones es falsa.",
    opts: [
      "Los archivos .htaccess sobrescriben la configuración de Apache2 para un directorio.",
      "DirectoryIndex establece la lista de nombres de archivos que se pueden utilizar si no se selecciona un nombre de archivo en una URL que referencia un directorio.",
      "Alias permite mapear URL y paths del sistema de archivos local.",
      "Por defecto, UserDir indica el nombre del subdirectorio, dentro del directorio /var/www/html donde pueden alojar los usuarios sus páginas web."
    ],
    ans: 3
  },
  {
    q: "De las siguientes afirmaciones, indica cuál es correcta respecto del módulo mod_alias.",
    opts: [
      "Engloba directivas que permiten la manipulación y control de peticiones de URL.",
      "Utiliza siempre expresiones regulares para indicar a los navegadores que el documento buscado ha cambiado de localización.",
      "Marca el directorio destino como contenedor solo de fuentes.",
      "Marca el directorio destino como contenedor solo de ejecutables."
    ],
    ans: 0
  },
  {
    q: "Indica cuál de las siguientes afirmaciones es correcta respecto a la directiva SSLVerifyClient require.",
    opts: [
      "Obliga al navegador a tener un certificado.",
      "Indica que todos los usuarios locales pueden acceder sitio web seguro.",
      "Obliga al navegador a tener soporte SSL.",
      "Es de utilización opcional en la autenticación del cliente."
    ],
    ans: 0
  },
  {
    q: "Indica cuál de las siguientes afirmaciones es verdadera en relación con Apache2 en Windows.",
    opts: [
      "LoadModule no siempre está ubicada en httpd.conf.",
      "El módulo que permite el control de acceso no va incorporado en Apache2 por defecto.",
      "Los archivos .htaccess permiten a los usuarios ejercer algún control sobre el comportamiento de su parte del servidor Apache2.",
      "AllowOverride controla el comportamiento de las actualizaciones del servidor web."
    ],
    ans: 2
  },
  {
    q: "Indica cuál de las siguientes afirmaciones es verdadera respecto a hosts virtuales:",
    opts: [
      "Todos los hosts virtuales tendrán, como máximo, un ServerAlias.",
      "Todos los hosts virtuales tendrán, como máximo, una sección Directory.",
      "Todos los hosts virtuales tendrán, como máximo, un DocumentRoot.",
      "Todos los hosts virtuales tendrán, como máximo, un NameVirtualHost."
    ],
    ans: 2
  },
  {
    q: "Respecto a los hosts virtuales por IP, indica cuál es la opción falsa.",
    opts: [
      "Requieren la directiva ServerName.",
      "Puede escuchar cada uno de ellos por varias interfaces de red.",
      "Requieren disponer de varias direcciones IP.",
      "No pueden combinarse con hosts virtuales por nombre."
    ],
    ans: 3
  },
  {
    q: "De las siguientes afirmaciones, indica cuál es la correcta.",
    opts: [
      "La protección de un directorio solo se puede hacer a través de una sección Directory.",
      "Si un usuario puede acceder a un recurso que requiere autenticación, debe pertenecer a un grupo determinado.",
      "La directiva Satisfy requiere el módulo mod_access_compat.",
      "La directiva AuthName indica el nombre de la autenticación."
    ],
    ans: 3
  },
  {
    q: "Cuál de las siguientes afirmaciones es correcta respecto a la directiva AuthConfig.",
    opts: [
      "Tipo de autenticación con su archivo de configuración correspondiente.",
      "Impide la utilización de archivos .htaccess con autenticación.",
      "Permite la utilización de archivos .htaccess con autenticación.",
      "Indica la ruta hacia el archivo de autenticación."
    ],
    ans: 2
  },
  {
    q: "La autoridad certificadora (CA) se encarga de firmar digitalmente...",
    opts: [
      "Las claves privadas de los usuarios de dicha CA.",
      "Los certificados de las autoridades de registro.",
      "Las claves simétricas de los usuarios.",
      "La clave pública de los usuarios junto con otra información de la identidad."
    ],
    ans: 3
  },

  // BLOQUE 4: FTP
  {
    q: "Respecto a los protocolos de transferencia de archivos, ¿cuál de estas afirmaciones es cierta?",
    opts: [
      "FTP es un protocolo derivado de SFTP, pero no de SSH.",
      "SFTP no es un protocolo derivado de FTP ni de SSH.",
      "SFTP es una expansión de SSH.",
      "SFTP se basa en FTP, pero no en SSH."
    ],
    ans: 2
  },
  {
    q: "¿Cuál es el RFC que define del protocolo FTP?",
    opts: [
      "RFC 4918.",
      "RFC 1350.",
      "RFC 959.",
      "Ninguno: aún se encuentra en fase de borrador."
    ],
    ans: 2
  },
  {
    q: "Un servidor FTP usa el puerto 21 para enviar...",
    opts: [
      "Las respuestas al cliente.",
      "Los archivos solicitados.",
      "Las peticiones del cliente.",
      "Las respuestas al cliente y los archivos solicitados."
    ],
    ans: 0
  },
  {
    q: "Cuando un servidor FTP está en modo activo...",
    opts: [
      "El servidor establece tanto la conexión de datos como la de control.",
      "El servidor establece la conexión de datos, y el cliente, la de control.",
      "El cliente establece la conexión de datos, y el servidor, la de control.",
      "El cliente establece tanto la conexión de datos como la de control."
    ],
    ans: 2
  },
  {
    q: "¿Cuántos canales utiliza SFTP?",
    opts: ["1.", "2.", "3.", "4."],
    ans: 0
  },
  {
    q: "¿En qué protocolo envía sus credenciales SSL/TLS el servidor al cliente?",
    opts: ["FTPSE.", "FTP.", "SFTP.", "FTPS."],
    ans: 3
  },
  {
    q: "El protocolo SFTP...",
    opts: [
      "Se encarga de la transmisión y del cifrado de la información.",
      "Se encarga de la transmisión y de la autenticación.",
      "Se encarga únicamente de la transmisión.",
      "Se encarga de la transmisión, de la autenticación y del cifrado de la información."
    ],
    ans: 3
  },
  {
    q: "¿A qué carpeta puede acceder el usuario ftp del servidor vsftpd?",
    opts: ["/home/ftp.", "/ftp.", "/var/ftp.", "/srv/ftp."],
    ans: 3
  },
  {
    q: "¿Qué directiva del fichero de configuración /etc/vsftpd.conf permite enjaular al usuario local en su home?",
    opts: [
      "chroot_user_local.",
      "chroot_local_user.",
      "chroot_list_enable.",
      "chroot_list_file."
    ],
    ans: 1
  },
  {
    q: "¿Qué hace la directiva local_umask?",
    opts: [
      "Establecer los permisos del propietario del archivo subido al servidor.",
      "Establecer los permisos con los que quedará el archivo subido al cliente.",
      "Establecer los permisos con los que quedará el archivo subido al servidor.",
      "Establecer los permisos del propietario del archivo subido al cliente."
    ],
    ans: 2
  },

  // BLOQUE 5: CORREO ELECTRÓNICO Y MENSAJERÍA
  {
    q: "En un correo de Alice a Bob con copia a Carlos y copia oculta a David, ¿quién sabe que el mensaje se ha enviado a David?",
    opts: ["Alice.", "Bob.", "Carlos.", "David."],
    ans: 0
  },
  {
    q: "¿Qué puerto está designado para que los MUA envíen correos a los MTA?",
    opts: ["587.", "465.", "25.", "110."],
    ans: 0
  },
  {
    q: "Cuando un MTA recibe un correo electrónico y los dominios de origen y destino no coinciden, la entrega se hará en el propio servidor.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    q: "¿Cuál de los siguientes campos de la cabecera es obligatorio?",
    opts: ["Subject.", "To.", "Date.", "From."],
    ans: 3
  },
  {
    q: "¿Cuál es uno de los fines del puerto submission?",
    opts: [
      "Envío de correo a los MUA.",
      "Poder establecer políticas de seguridad distintas de las del puerto relay.",
      "Reenvío de correos entre MTA.",
      "Recepción de correo desde los MUA."
    ],
    ans: 3
  },
  {
    q: "El cifrado TLS está basado en criptografía de clave pública/privada, pero no necesita de un certificado emitido por una autoridad certificadora (CA) para que cualquier persona confíe en él.",
    opts: ["Falso.", "Verdadero."],
    ans: 0
  },
  {
    q: "Si estamos instalando un MDA nuevo de cero, lo recomendable sería usar solo el puerto 587 si tenemos un sistema heredado, y con clientes ya configurados, adicionalmente, deberíamos soportar el 465.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    q: "Sender policy framework es una técnica de autenticación basada en la comprobación de la IP del cliente.",
    opts: ["Falso.", "Verdadero."],
    ans: 1
  },
  {
    q: "En las listas con mucha actividad, los usuarios pueden elegir, normalmente, la frecuencia con la que reciben la información, o silenciar los mensajes.",
    opts: ["Falso.", "Verdadero."],
    ans: 1
  },
  {
    q: "Si el criterio más importante es que los datos no estén en servidores de terceros, ¿qué herramienta de mensajería instantánea podríamos usar?",
    opts: ["MatterMost.", "Slack.", "Whatsapp.", "Discord."],
    ans: 0
  },

  // BLOQUE 6: MULTIMEDIA Y STREAMING
  {
    q: "La frecuencia de las señales acústicas se mide en...",
    opts: ["Voltios.", "Hercios.", "Pascales.", "Decibelios."],
    ans: 1
  },
  {
    q: "Cuanto mayor sea el número de bits de resolución, mejores aproximaciones y mayor calidad tendrá el sonido muestreado.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    q: "¿Cuál de los siguientes códecs tiene compresión y no tiene pérdidas de calidad?",
    opts: ["Flac.", "PCM.", "Vorbis.", "MP3."],
    ans: 0
  },
  {
    q: "La suma de retardos que se produce durante las transmisiones a través de una red se llama...",
    opts: ["Retraso.", "Velocidad.", "Buffering.", "Latencia."],
    ans: 3
  },
  {
    q: "El estándar WQHD tiene una resolución...",
    opts: ["640 × 480.", "3840 × 2160.", "2560 × 1440.", "1920 × 1080."],
    ans: 2
  },
  {
    q: "¿Con qué técnica para capturar imágenes puede ocurrir el efecto peine?",
    opts: ["Captura progresiva.", "Captura entrelazada.", "Captura digital.", "Captura analógica."],
    ans: 1
  },
  {
    q: "¿Qué formato tiene compresión y nunca tiene pérdidas?",
    opts: ["HEIF.", "GIF.", "PNG.", "JPG."],
    ans: 2
  },
  {
    q: "¿Cuál es el códec más utilizado, de uso libre para usuarios finales, y con mayor calidad y tasa de compresión?",
    opts: ["AV1.", "H.264.", "H.265.", "MPEG."],
    ans: 0
  },
  {
    q: "¿Qué protocolo es utilizado por el emisor para enviar el stream al servidor?",
    opts: ["DASH.", "RTSP.", "RTMP.", "HLS."],
    ans: 2
  },
  {
    q: "Si nuestro cortafuegos está configurado para permitir únicamente conexiones al puerto 80, será necesario abrir nuevos puertos para hacer streaming RTMP.",
    opts: ["Falso.", "Verdadero."],
    ans: 1
  },

  // BLOQUE 7: ADMINISTRACIÓN Y NUBE
  {
    q: "Señala la opción correcta respecto al uso de paneles de administración.",
    opts: [
      "Sirven para instalar, actualizar y explotar distintos servicios de red de manera acompasada.",
      "Tienen la ventaja de poder realizar cambios de configuración a posteriori fuera de la estructura del panel, sin corromper su funcionamiento.",
      "Solamente se pueden encontrar dentro de proveedores de hosting, como parte de su estructura interna.",
      "Tienen la desventaja de manejar un gran número de versiones, extensiones y configuraciones virtuales."
    ],
    ans: 0
  },
  {
    q: "Indica la opción correcta respecto al panel de administración HestiaCP.",
    opts: [
      "Es un panel de pago y gran difusión, pero su precio es muy asequible.",
      "Implementa una arquitectura de reverse proxy para el servidor web, con soporte de certificados Let's Encrypt.",
      "Permite elegir entre diferentes tecnologías de scripting de servidor, tales como PHP, ASP o JSP en el momento de instalar.",
      "Tiene muchas funciones, pero no da soporte para multi-PHP o certificados SSL."
    ],
    ans: 1
  },
  {
    q: "Elige la opción correcta en lo relativo al panel de administración HestiaCP.",
    opts: [
      "Todas son correctas.",
      "Los usuarios de acceso son estándar del sistema operativo, y pueden acceder al panel mediante consola o bien con una pareja de claves, como en Putty.",
      "Gestiona límites de cuota de almacenamiento y ancho de banda para los sitios alojados de los diferentes usuarios.",
      "Por seguridad y para facilitar copias de seguridad y migraciones, compartimenta la infraestructura de cada usuario en su home."
    ],
    ans: 0
  },
  {
    q: "Señala la opción correcta respecto al DNS en la nube.",
    opts: [
      "En la nube se integra en el protocolo universal Terraform, que luego se puede traducir a cualquier proveedor específico.",
      "El protocolo DNS en la nube se sustituye por el más avanzado Traffic Flow.",
      "Tiene pleno soporte en la nube y se amplía con servicios como Route 53, que ofrecen características más avanzadas y específicas.",
      "El protocolo DNS en la nube se sustituye por servicios como Route 53 en AWS."
    ],
    ans: 2
  },
  {
    q: "Indica la opción verdadera para los servicios de configuración automática.",
    opts: [
      "Los conjuntos de opciones de DHCP en AWS implementan infraestructuras cloud, en lo que se denomina IaC o «infraestructura como código».",
      "Es habitual el lanzamiento de instancias DHCP propias para la configuración automática de los VPC/VNet.",
      "Existe la opción de crear y configurar automáticamente infraestructura mediante scripting con Terraform, lenguaje universal de IaC.",
      "En Azure existe un DHCP propio en la IP fija 168.63.129.16, que proporciona la configuración de red, DNS, NTP y NetBIOS."
    ],
    ans: 3
  },
  {
    q: "Indica la opción incorrecta para los servicios de correo en la nube.",
    opts: [
      "Si no has solicitado confirmación a los receptores de campañas o utilizas malas prácticas de seguridad en el servidor o mandas contenido peligroso, puedes acabar en una lista negra.",
      "Si buena parte de los emails vuelven retornados o no son recibidos, es muy probable que tu dominio o IP esté incluido en una lista negra.",
      "Los servicios externos de gestión de correo como Mailchimp se suelen usar tanto para campañas masivas como para el día a día con clientes y proveedores.",
      "En las pymes es habitual usar, para los correos del día a día con clientes y proveedores, un servidor de correo propio o contratado a una empresa externa."
    ],
    ans: 2
  },
  {
    q: "La diferencia principal entre una estructura de servidor monolítico y una estructura moderna en la nube es...",
    opts: [
      "El uso de tecnologías de alta disponibilidad como RAID o bases de datos en memoria.",
      "El contenido estático, como HTML, JavaScript, imágenes o vídeos, está en un único repositorio centralizado que se comparte por NFS a varias máquinas.",
      "Todas son falsas.",
      "Que disocia el tratamiento de las peticiones que entran, según sean estáticas o dinámicas."
    ],
    ans: 3
  },
  {
    q: "Los content delivery network o CDN...",
    opts: [
      "Sirven para evitar exposición a ataques de denegación de servicio distribuida o DDoS.",
      "Están implementados sobre una red de proxies inversos, denominados puntos de presencia o PoP.",
      "Sirven para reducir la latencia en el acceso a los contenidos web desde cualquier ubicación.",
      "Todas son correctas."
    ],
    ans: 3
  },
  {
    q: "Indica la opción incorrecta respecto de la telefonía IP.",
    opts: [
      "La telefonía IP supone la evolución desde la conmutación de circuitos físicos en favor de la conmutación de paquetes digitalizados.",
      "La telefonía IP supone la sustitución de todas las centralitas, troncales y teléfonos por dispositivos específicos o aplicaciones software.",
      "La telefonía IP es una digitalización y encapsulamiento de voz como datos para transmitir por Internet.",
      "Un gateway VoIP es el reemplazo de las antiguas centralitas PBX para ubicaciones privadas con la transición a telefonía IP."
    ],
    ans: 1
  },
  {
    q: "Indica la opción correcta en relación con los protocolos de la telefonía IP.",
    opts: [
      "El protocolo SIP y sus evoluciones RTP y SRTP no transmiten la multimedia en sí.",
      "El framework ICE y los protocolos STUN/TURN sirven para el establecimiento de conexiones atravesando NAT.",
      "En WebRTC los protocolos RTCP, VP8 y VP9 transmiten la multimedia con grandes ventajas de ancho de banda y compresión sobre los anteriores.",
      "Los protocolos SDP y su versión más moderna WebRTC sirven para negociar las condiciones de la sesión entre emisor y receptor."
    ],
    ans: 1
  }
];