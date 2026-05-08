// src/components/red.js

export const redQuestions = [
  {
    id: 1,
    q: "Un dominio tiene un nombre, y todos sus miembros comparten el mismo.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 2,
    q: "Señala la afirmación correcta sobre un FQDN (Nombre de Dominio Completo):",
    opts: [
      "Puede tener un máximo de 63 caracteres.",
      "No se puede utilizar la letra ñ en ningún dominio actual.",
      "Después del nombre de equipo, podemos tener el TLD separado por un punto.",
      "Siempre termina en un punto implícito que hace referencia al dominio raíz."
    ],
    ans: 3
  },
  {
    id: 3,
    q: "El elemento más a la izquierda del nombre de dominio completo representa siempre el nombre del equipo o un alias.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 4,
    q: "Los dominios y sus subdominios se separan exclusivamente con guiones.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 5,
    q: "La jerarquía de dominios es descendente, del nivel superior hacia los inferiores, pero el nombre de dominio completo se lee al revés, de izquierda a derecha.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 6,
    q: "Podemos tener dos nombres de dominio completos que se llamen igual.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 7,
    q: "Podemos crear alias de nombres sobre los equipos de máquinas.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 8,
    q: "Si tenemos un servidor que resuelve en el dominio mheducation.com, la dirección IP de ese servidor se encuentra almacenada...",
    opts: [
      "Solo en el servidor de mheducation.com.",
      "En mheducation.com y en los servidores TLD de .com.",
      "Solo en los servidores de primer nivel para el dominio .com.",
      "En los servidores TLD de .com y en los servidores raíz."
    ],
    ans: 0
  },
  {
    id: 9,
    q: "El dominio de primer nivel .net es un dominio de tipo sTLD.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 10,
    q: "Los clientes DNS realizan sus consultas a través del resolutor (resolver).",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 11,
    q: "En un proceso de resolución de www.mheducation.com, un servidor de .com le envía a un servidor raíz la IP. ¿Qué resolución es?",
    opts: ["No existe este tipo de resolución.", "Resolución iterativa.", "Resolución recursiva.", "Resolución inversa."],
    ans: 0
  },
  {
    id: 12,
    q: "En un proceso de resolución de www.mheducation.com, un servidor de .com envía directamente la IP a nuestro servidor DNS.",
    opts: ["No existe este tipo de resolución.", "Resolución iterativa.", "Resolución recursiva.", "Resolución inversa."],
    ans: 0
  },
  {
    id: 13,
    q: "El puerto 53 es donde están escuchando los servidores las peticiones DNS de los clientes.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 14,
    q: "En la resolución directa, se busca por cierta IP para averiguar su nombre DNS.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 15,
    q: "Existen cuatro tipos diferentes de servidores DNS: primario, secundario, caché y reenviador.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 16,
    q: "Podemos realizar modificaciones en una zona secundaria.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 17,
    q: "Una zona primaria contiene una copia del contenido de una zona secundaria.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 18,
    q: "Una zona secundaria se puede usar para resolver nombres.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 19,
    q: "Las zonas sirven para resoluciones directas, pero también para resoluciones inversas.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 20,
    q: "Una zona slave es una zona secundaria.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 21,
    q: "Un servidor DNS es autoritario sobre zonas primarias, pero no sobre las secundarias.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 22,
    q: "¿Qué podemos hacer si tenemos un servidor DNS con la zona correspondiente a un dominio dividido en subdominios?",
    opts: [
      "Que el servidor use zona del servidor de nivel superior.",
      "Que el servidor delegue en otras zonas la resolución de los subdominios.",
      "Que el servidor tenga una sola zona para resolver todo el dominio.",
      "Que el servidor delegue la gestión en servidores de terceros."
    ],
    ans: 1
  },
  {
    id: 23,
    q: "En los registros de recursos, el campo de marca de tiempo de vida (TTL) es un campo obligatorio.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 24,
    q: "El tipo de registro PTR de la clase IN sirve para las búsquedas inversas.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 25,
    q: "Para instalar el servidor DNS en GNU/Linux ejecutaremos $ sudo apt install named.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 26,
    q: "Los archivos de configuración del servidor DNS BIND en GNU/Linux están en /etc/bind.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 27,
    q: "Respecto a los archivos de configuración de BIND, señala la correcta:",
    opts: [
      "named.conf.default-zones contiene información de zonas del espacio de nombres.",
      "named.conf.local contiene zonas creadas por defecto al instalar.",
      "named.conf.options contiene opciones globales del servidor.",
      "named.conf incluye en su configuración el contenido de los tres anteriores."
    ],
    ans: 3
  },
  {
    id: 28,
    q: "En BIND podemos definir tantas acl de listas de direcciones IP como necesitemos.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 29,
    q: "En BIND podemos utilizar cinco tipos de zonas: master, slave, hint, forward y view.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 30,
    q: "El servicio DDNS surge por la escasez de IPv4.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 31,
    q: "Solo podremos montarnos un servidor web en nuestro equipo con DDNS.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 32,
    q: "¿Qué servicio DDNS permite ser reutilizado por otros servicios DDNS?",
    opts: ["DynDNS.org.", "DtDNS.com.", "dnsomatic.com.", "no-ip.com."],
    ans: 2
  },
  {
    id: 33,
    q: "El servicio DDNS también se utiliza para sincronizar el servicio DNS y el servicio DHCP entre ellos.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 34,
    q: "El servicio DuckDNS funciona mediante una API HTTP con un certificado SSL de 128 bits válido.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 35,
    q: "Un ordenador tiene la IP 170.10.30.5, y máscara 255.255.0.0. Su ID de red es...",
    opts: ["5.", "34.5.", "170.10.", "170.10.30."],
    ans: 2
  },
  {
    id: 36,
    q: "En la configuración manual de red, indica cuál de estos no se configura.",
    opts: ["IPv4.", "IPv6.", "Servidor DNS.", "Servidor DHCP."],
    ans: 3
  },
  {
    id: 37,
    q: "Adaptador con IP 170.10.30.1 y máscara 255.255.0.0. Indica el ID del host.",
    opts: ["170.10", "170.10.30", "1", "30.1"],
    ans: 3
  },
  {
    id: 38,
    q: "Es obligatorio que puerta de enlace y DNS estén en la misma red que el ordenador para trabajar en Internet.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 39,
    q: "En Ubuntu/Netplan, para asignar IP por DHCP, ¿qué valor debe tener 'renderer'?",
    opts: ["networkd", "NetworkManager", "dhcp", "false"],
    ans: 0
  },
  {
    id: 40,
    q: "De los siguientes mensajes DHCP, indica cuál no es enviado de cliente a servidor.",
    opts: ["DHCP_ACK.", "DHCP_RELEASE.", "DHCP_DISCOVER.", "DHCP_REQUEST."],
    ans: 0
  },
  {
    id: 41,
    q: "Cuando un cliente solicita renovar una concesión DHCP, el primer mensaje es...",
    opts: ["DHCP_DISCOVER.", "DHCP_OFFER.", "DHCP_REQUEST.", "DHCP_RELEASE."],
    ans: 2
  },
  {
    id: 42,
    q: "Orden normal de mensajes DHCP para asignación de IP:",
    opts: ["DISCOVER, OFFER, REQUEST, ACK.", "DISCOVER, REQUEST, OFFER, ACK.", "OFFER, DISCOVER, REQUEST, ACCEPT.", "OFFER, REQUEST, DISCOVER, ACCEPT."],
    ans: 0
  },
  {
    id: 43,
    q: "Parámetro que NO se considera obligatorio entregar por DHCP.",
    opts: ["IPs de servidores DNS.", "Direcciones IP clientes.", "Tiempo de concesión.", "Tiempo de renovación."],
    ans: 0
  },
  {
    id: 44,
    q: "Método DHCP donde un adaptador no puede recibir diferentes IPs de un mismo servidor.",
    opts: ["Asignación manual.", "Asignación automática.", "Asignación dinámica.", "Ninguna."],
    ans: 0
  },
  {
    id: 45,
    q: "Directorio del archivo dhcpd.conf en Ubuntu.",
    opts: ["/etc/", "/etc/dhcp/", "/etc/init.d/", "/var/lib/dhcp/"],
    ans: 1
  },
  {
    id: 46,
    q: "Declaración en dhcpd.conf para especificar rangos de IPs dinámicas.",
    opts: ["subnet.", "shared-network.", "host.", "group."],
    ans: 0
  },
  {
    id: 47,
    q: "Comando obsoleto en Ubuntu frente a Netplan/iproute2.",
    opts: ["route.", "ip.", "dhclient.", "ifup."],
    ans: 3
  },
  {
    id: 48,
    q: "Comando para detener el servicio DHCP en Ubuntu.",
    opts: ["/etc/init.d/dhcp3-server start", "/etc/init.d/dhcp3-server", "service dns-server start", "service dhcp3-server stop"],
    ans: 3
  },
  {
    id: 49,
    q: "Paquete para instalar el servidor DHCP de ISC en Ubuntu.",
    opts: ["dhcp.", "isc-dhcp-server.", "dhcpd.", "dhcpd-isc-server."],
    ans: 1
  },
  {
    id: 50,
    q: "Parámetro para enviar DHCPNack si la configuración no es permitida.",
    opts: ["range.", "group.", "authoritative.", "param."],
    ans: 2
  },
  {
    id: 51,
    q: "Indica cuál de las siguientes afirmaciones es verdadera.",
    opts: [
      "El servidor DHCP mantiene base de datos con conexiones activas.",
      "El servidor DHCP detecta clientes no autorizados.",
      "No puede ofrecer parámetros a varias subredes a la vez.",
      "El servidor DHCP no permite auditorías."
    ],
    ans: 0
  },
  {
    id: 52,
    q: "Situación que NO se resuelve mediante servidor DHCP.",
    opts: [
      "Equipo no autorizado con IP válida accede a la red.",
      "Equipo reubicado en otra subred.",
      "Errores por configuración manual.",
      "Configuración manual tediosa."
    ],
    ans: 0
  },
  {
    id: 53,
    q: "Indica cuál de las siguientes es falsa:",
    opts: [
      "DHCP snooping se configura en el switch.",
      "Rogue DHCP busca ataques MitM.",
      "Se indican puertos para servidores DHCP autorizados.",
      "Snooping bloquea DISCOVER desde puertos no autorizados."
    ],
    ans: 3
  },
  {
    id: 54,
    q: "Función del mensaje DHCPNack en servidor autoritativo.",
    opts: [
      "Reconocer configuración de otro servidor.",
      "Rechazar configuración autoasignada por cliente.",
      "Aceptar configuración autoasignada.",
      "Impedir recibir parámetros de otro servidor."
    ],
    ans: 1
  },
  {
    id: 55,
    q: "Protocolo HTTP es de transferencia de ___. Por defecto puerto ___. Cliente envía ___ y servidor ___.",
    opts: ["hipertexto, 80, respuesta, petición.", "hipertexto, 80, petición, respuesta.", "HTTP, 80, petición, respuesta.", "hipertexto, 443, petición, respuesta."],
    ans: 1
  },
  {
    id: 56,
    q: "¿Qué dato NO forma parte de la línea de petición HTTP?",
    opts: ["Versión protocolo.", "Método.", "URI.", "Descripción de estado."],
    ans: 3
  },
  {
    id: 57,
    q: "¿Qué dato forma parte de la línea de respuesta HTTP?",
    opts: ["Versión protocolo.", "Método.", "Cuerpo.", "Servidor."],
    ans: 0
  },
  {
    id: 58,
    q: "MIME permite transmitir multitud de archivos mediante:",
    opts: ["HTTP.", "FTP.", "Correo electrónico.", "DNS."],
    ans: 2
  },
  {
    id: 59,
    q: "Elemento de un documento web que enlaza con otro.",
    opts: ["Hipertexto.", "Hipermedio.", "Hipervínculo.", "HTML."],
    ans: 2
  },
  {
    id: 60,
    q: "Carpeta raíz del sitio web por defecto en Apache.",
    opts: ["/var/www/html", "/var/lib/apache2", "/etc/apache2", "/etc/init.d/apache2"],
    ans: 0
  },
  {
    id: 61,
    q: "Archivo principal de configuración de Apache en Ubuntu.",
    opts: ["/etc/apache/httpd.conf", "/etc/apache2/apache2.conf", "/etc/apache/apache2.conf", "/var/www"],
    ans: 1
  },
  {
    id: 62,
    q: "Archivo para resolución del servidor web en equipo local.",
    opts: ["httpd.conf", "apache2.conf", "/etc/hosts", "apache.conf"],
    ans: 2
  },
  {
    id: 63,
    q: "Comando para reiniciar el servicio Apache.",
    opts: ["systemctl apache2 restart", "systemctl restart apache2", "service restart apache2", "/etc/init.d/apache restart"],
    ans: 1
  },
  {
    id: 64,
    q: "Servidor web con mayor implantación global actual.",
    opts: ["Apache.", "IIS.", "Google.", "Nginx."],
    ans: 3
  },
  {
    id: 65,
    q: "Directorio de archivos de carga de módulos instalados en Apache.",
    opts: ["/usr/lib/modules", "/etc/apache2/modules", "mods-enabled", "/etc/apache2/mods-available"],
    ans: 3
  },
  {
    id: 66,
    q: "Ubicación de DocumentRoot en configuración de servidor virtual.",
    opts: ["Dentro de VirtualHost.", "Antes de VirtualHost.", "Después de VirtualHost.", "Antes de NameVirtualHost."],
    ans: 0
  },
  {
    id: 67,
    q: "Directiva ServerRoot /apache indica...",
    opts: ["Configuración en /apache.", "Raíz web en /apache.", "Páginas en /apache.", "Servidor instalado en /apache."],
    ans: 3
  },
  {
    id: 68,
    q: "Indica la opción verdadera sobre Apache.",
    opts: [
      "Registro similar al de Windows.",
      "Deja activados por defecto sus mecanismos de registro.",
      "No almacena actividad del servidor.",
      "No almacena información de accesos."
    ],
    ans: 1
  },
  {
    id: 69,
    q: "Respecto al módulo mod_userdir, indica la opción correcta.",
    opts: [
      "Cualquier usuario puede tener espacio web en su home.",
      "Usuario dueño de su home.",
      "Todos los usuarios pueden tener web propia por defecto.",
      "Dueño del dominio."
    ],
    ans: 2
  },
  {
    id: 70,
    q: "Respecto a la directiva Satisfy, indica la opción correcta.",
    opts: [
      "Selecciona usuarios autenticados.",
      "Parámetros allow y deny.",
      "Puede requerir autenticación HTTP e IP.",
      "Opciones a y b."
    ],
    ans: 2
  },
  {
    id: 71,
    q: "Indica cuál de las siguientes afirmaciones es falsa.",
    opts: [
      "Autenticación mediante mod_auth.",
      "Autorización controlada por sección Directory.",
      "Básicamente tipos básica y digest.",
      "Autenticación IP equivale a control de acceso."
    ],
    ans: 1
  },
  {
    id: 72,
    q: "La autenticación es un mecanismo de...",
    opts: ["Verificar existencia usuario.", "Comprobación permisos.", "Comprobación credenciales.", "Sustituto certificados."],
    ans: 2
  },
  {
    id: 73,
    q: "La utilización del control de acceso o autenticación por IP...",
    opts: [
      "Requiere Order y Require.",
      "Utiliza Satisfy para combinar con HTTP.",
      "No permite autenticación desde dominios.",
      "Devuelve error 403 y reintento."
    ],
    ans: 1
  },
  {
    id: 74,
    q: "Indica cuál de las siguientes afirmaciones es cierta.",
    opts: [
      "Autenticación IP equivale a control de acceso.",
      "Autenticación genérica mediante mod_auth.",
      "Location no permite control de acceso.",
      "Autorización mediante VirtualHost."
    ],
    ans: 0
  },
  {
    id: 75,
    q: "Archivos indicados en comando para certificado autofirmado en Ubuntu.",
    opts: ["Certificado y petición firma.", "Clave y petición firma.", "Certificado y clave.", "Certificado, petición y clave."],
    ans: 2
  },
  {
    id: 76,
    q: "En el certificado digital aparece la identidad de la CA.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 77,
    q: "Verificar validez requiere comprobar firma de CA con clave pública de la CA.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 78,
    q: "Objetivo de CA es acreditar correspondencia entre clave y propietario.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 79,
    q: "Una autoridad certificadora puede tener certificado emitido por otra.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 80,
    q: "La CA se encarga de firmar digitalmente...",
    opts: ["Certificados de RA.", "Clave pública e identidad de usuarios.", "Claves privadas de usuarios.", "Claves simétricas."],
    ans: 1
  },
  {
    id: 81,
    q: "Sobre la firma digital, indica la correcta.",
    opts: [
      "Asegura confidencialidad del mensaje.",
      "Receptor verifica con su clave pública.",
      "Opciones a y b.",
      "No requiere cifrar todo el mensaje con clave privada."
    ],
    ans: 3
  },
  {
    id: 82,
    q: "El módulo ssl requiere la desactivación del puerto 80.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 83,
    q: "La directiva SSLEngine no requiere ningún parámetro.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 84,
    q: "El módulo ssl requiere la utilización del archivo httpd-ssl.conf.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 85,
    q: "La directiva SSLRequireSSL se debe poner a On para soporte SSL.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 86,
    q: "Respecto a SHA-1, indica la correcta.",
    opts: [
      "Algoritmo hash para trazabilidad evidencia.",
      "Cifrar evidencia para trazabilidad.",
      "Cifrar evidencia para integridad.",
      "Algoritmo hash para integridad de evidencia."
    ],
    ans: 3
  },
  {
    id: 87,
    q: "Secuencia correcta de fases de análisis forense.",
    opts: ["Evaluar, analizar, adquirir, informar.", "Informar, evaluar, adquirir, analizar.", "Evaluar, adquirir, analizar, informar.", "Adquirir, analizar, evaluar, informar."],
    ans: 2
  },
  {
    id: 88,
    q: "Normativa ISO/IEC 27042 se aplica a...",
    opts: ["Analizar e interpretar evidencias.", "Evaluar, adquirir, analizar.", "Evaluar y adquirir.", "Evaluar, adquirir, informar."],
    ans: 0
  },
  {
    id: 89,
    q: "Indica cuál no es una fase del análisis forense.",
    opts: ["Identificación incidente.", "Análisis nube.", "Captura evidencias.", "Preservación evidencias."],
    ans: 1
  },
  {
    id: 90,
    q: "Regla de oro del análisis forense.",
    opts: ["Proteger metadatos.", "Proteger original evidencia.", "Proteger cookies.", "Proteger procesos ejecución."],
    ans: 1
  },
  {
    id: 91,
    q: "FTP se creó después del servicio WWW.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 92,
    q: "Objetivos FTP: útil, distribuido, multiplataforma y eficiente.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 93,
    q: "NO es un tipo de usuario real de FTP.",
    opts: ["Usuario local.", "Usuario anónimo.", "Usuario virtual.", "Usuario FTP con clave maestra."],
    ans: 3
  },
  {
    id: 94,
    q: "Tanto modo activo como pasivo transmiten datos por puerto 20.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 95,
    q: "En modo standalone, el servidor gestiona los puertos FTP.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 96,
    q: "vsftpd crea el usuario FTP con home en /srv/ftp.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 97,
    q: "FileZilla Server puede trabajar con FTP, FTPS o SFTP.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 98,
    q: "Afirmación correcta sobre FTP, FTPS o SFTP.",
    opts: [
      "Canal seguro cifrado en los tres.",
      "Solo FTP envía datos en texto claro.",
      "SFTP encripta usando TLS/SSL.",
      "FTPES no requiere certificado."
    ],
    ans: 1
  },
  {
    id: 99,
    q: "Al instalar open-sftp-server instalamos sshd.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 100,
    q: "Para no activar un servicio al arrancar: $ systemctl enable <servicio>.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 101,
    q: "Solo existe un modo para conectar a FTP: cliente GUI.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 102,
    q: "Podemos conectar a servidor FTP desde gestor de archivos como unidad de red.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 103,
    q: "Afirmación correcta sobre cliente FileZilla.",
    opts: ["Diez zonas de trabajo.", "Ventana solo archivos.", "Familias FTP, SFTP y Nube.", "Transferir solo arrastrando."],
    ans: 2
  },
  {
    id: 104,
    q: "FileZilla permite continuar descargas interrumpidas.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 105,
    q: "Sin programa cliente FTP, podemos conectar desde terminal a cualquier servidor FTP y transferir.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 106,
    q: "En configuración vsftpd solo comentarios o directivas.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 107,
    q: "Grupos globales pueden contener usuarios locales y universales de otros dominios.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 108,
    q: "Nombre login (pre-W2000) máximo 20 caracteres.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 109,
    q: "Cambio de nombre equipo obligatorio para integrar en dominio.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 110,
    q: "Usuario anónimo entra en /srv/ftp y es su raíz por jaula chroot.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 111,
    q: "Opciones vsftpd para anónimos: mkdir, write, etc.",
    opts: ["Carga desactivada por defecto.", "anon_other_write permite modificar.", "anon_mkdir permite crear carpetas.", "Todas correctas."],
    ans: 3
  },
  {
    id: 112,
    q: "Servidor FileZilla guarda configuración en XML.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 113,
    q: "Servidor FileZilla permite nivel de registro en cinco niveles.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 114,
    q: "Clientes de correo también denominados...",
    opts: ["SMTP.", "MUA.", "MTA.", "MDA."],
    ans: 1
  },
  {
    id: 115,
    q: "Protocolos para descargar correos desde MDA.",
    opts: ["MTA y MDA.", "POP3 e IMAP4.", "POP3 y SMTP.", "IMAP4 y SMTP."],
    ans: 1
  },
  {
    id: 116,
    q: "Correos electrónicos permiten enviar...",
    opts: ["Solo texto.", "Solo multimedia.", "Texto y multimedia.", "Solo mensajes cortos."],
    ans: 2
  },
  {
    id: 117,
    q: "MTA que delega en otro MTA el envío.",
    opts: ["Smartphone.", "Middleware.", "Middle host.", "Relay host."],
    ans: 3
  },
  {
    id: 118,
    q: "Comando para averiguar el MTA de un dominio.",
    opts: ["dig A", "mta-find", "dig MX", "host"],
    ans: 2
  },
  {
    id: 119,
    q: "Registro DNS que identifica al MTA.",
    opts: ["A.", "MX.", "TX.", "PTR."],
    ans: 1
  },
  {
    id: 120,
    q: "Comando SMTP para destinatario.",
    opts: ["HELO.", "MAIL FROM.", "RCPT TO.", "DATA."],
    ans: 2
  },
  {
    id: 121,
    q: "Recibir correos sin MX configurado (usa registro A).",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 122,
    q: "Varios MX, ¿cuál se usa primero?",
    opts: ["Primero en archivo.", "Menor prioridad (número bajo).", "Último en zona.", "Ilegal tener varios."],
    ans: 1
  },
  {
    id: 123,
    q: "MUA para terminal de Linux.",
    opts: ["Thunderbird.", "Gmail.", "Hotmail.", "Alpine."],
    ans: 3
  },
  {
    id: 124,
    q: "Puertos POP3 texto plano y cifrado SSL.",
    opts: ["110 y 995.", "252 y 8080.", "230 y 500.", "995 y 110."],
    ans: 0
  },
  {
    id: 125,
    q: "Servidor encargado de entregar correo al MUA.",
    opts: ["POP3.", "MTA.", "MDA.", "MUA."],
    ans: 2
  },
  {
    id: 126,
    q: "MUA utiliza ___ o ___ para descargar desde MDA.",
    opts: ["SMTP o IMAP4.", "POP3 o IMAP4.", "POP2 o FTP.", "IMAF o SSH."],
    ans: 1
  },
  {
    id: 127,
    q: "Puertos IMAP4 plano y cifrado.",
    opts: ["110 y 25.", "143 y 993.", "112 y 800.", "25 y 995."],
    ans: 1
  },
  {
    id: 128,
    q: "Cifrado recomendado para POP3.",
    opts: ["TLS 1.1.", "SSL 2.0.", "SSL 3.0.", "TLS 1.2 o superior."],
    ans: 3
  },
  {
    id: 129,
    q: "Puerto submission (587) para MUA y puerto relay (25) para MTA.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 130,
    q: "Tres técnicas autenticación contra spam.",
    opts: ["SFP, DMIK, MARC.", "SPF, DKIM, DMARC.", "SSH, MARC, DCRAC.", "SPF, DKIM, MARC."],
    ans: 1
  },
  {
    id: 131,
    q: "Cerrar puerto 25 para evitar ataques DoS permite recibir correos externos igual.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 132,
    q: "Organización pequeña mejor correo en nube que propio.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 133,
    q: "Garantía opcional en TLS.",
    opts: ["Confidencialidad.", "Autenticación servidor.", "Integridad.", "Autenticación cliente."],
    ans: 3
  },
  {
    id: 134,
    q: "Listas de correo únicamente privadas.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 135,
    q: "Suscripción lista pública pulsando enlace.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 136,
    q: "Mensajería instantánea en red local sin servidor.",
    opts: ["IP Messenger.", "Slack.", "Discord.", "MS Teams."],
    ans: 0
  },
  {
    id: 137,
    q: "Mensajes de listas se almacenan para consulta web.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 138,
    q: "Para evitar spam, listas públicas deben...",
    opts: ["Confirmar suscripción y enlace baja.", "Direcciones sin confirmar.", "Solo confirmar.", "Solo indicaciones baja."],
    ans: 0
  },
  {
    id: 139,
    q: "Mayor amplitud señal sonido = mayor volumen.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 140,
    q: "Mide separación horizontal entre picos de señal en Hz.",
    opts: ["Latencia.", "Sonoridad.", "Amplitud.", "Frecuencia."],
    ans: 3
  },
  {
    id: 141,
    q: "Frecuencias bajas = tonos agudos y picos juntos.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 142,
    q: "Analógico a digital = pérdida información.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 143,
    q: "Ajustar ganancia evita clipping.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 144,
    q: "Formatos compresión siempre con pérdidas.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 145,
    q: "Guardar Opus o PCM en contenedor M4A.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 146,
    q: "Extensión archivo indica códec utilizado.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 147,
    q: "Códecs reproducen bloque antes de recibirlo entero.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 148,
    q: "Mecanismo de almacenar bloques antes de reproducir.",
    opts: ["Aprovisionamiento.", "Buffering.", "Descarga.", "Acumulación."],
    ans: 1
  },
  {
    id: 149,
    q: "Número columnas y filas de imagen.",
    opts: ["Píxeles.", "Relación aspecto.", "Resolución.", "ADC."],
    ans: 2
  },
  {
    id: 150,
    q: "Existen resoluciones estandarizadas con nombres comerciales.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 151,
    q: "Sistema entrelazado envía fotograma entero.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 152,
    q: "Montar vídeo: misma cantidad de fps en fuentes.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 153,
    q: "Reproductor más utilizado actualmente.",
    opts: ["Winamp.", "VLC Media Player.", "SM Player.", "Media Monkey."],
    ans: 1
  },
  {
    id: 154,
    q: "Compresión imágenes aprovecha redundancias.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 155,
    q: "Todos los formatos compresión permiten o no pérdidas.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 156,
    q: "Artefacto característico de compresión JPEG.",
    opts: ["Efecto peine.", "Aparición de bloques.", "Color nítido."],
    ans: 1
  },
  {
    id: 157,
    q: "Fotograma codificado por cambios respecto al anterior.",
    opts: ["Fotograma P.", "Fotograma I.", "Fotograma B."],
    ans: 0
  },
  {
    id: 158,
    q: "GUI sencillo multiplataforma para convertir archivos.",
    opts: ["FFmpeg.", "YouTube.", "Handbrake.", "CRF."],
    ans: 2
  },
  {
    id: 159,
    q: "Streaming requiere ancho banda proporcional a espectadores.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 160,
    q: "¿Cuál es un protocolo de streaming?",
    opts: ["SMTP.", "HTTP.", "RTSP.", "ASP."],
    ans: 2
  },
  {
    id: 161,
    q: "Plataforma para hospedar pódcast.",
    opts: ["Anchor.fm.", "Twitch.", "Google Play Music."],
    ans: 0
  },
  {
    id: 162,
    q: "Aplicación para generar contenido múltiples fuentes (stream/local).",
    opts: ["OBK.", "OBS.", "HLS.", "Content Generator."],
    ans: 1
  },
  {
    id: 163,
    q: "Formato streaming incompatible con navegadores Apple.",
    opts: ["RTSP.", "RTMP.", "HLS.", "DASH."],
    ans: 3
  },
  {
    id: 164,
    q: "Desventaja paneles administración.",
    opts: ["Migración difícil.", "No recomendado reventa.", "Dificulta actualización.", "Dependencia entorno (lock-in)."],
    ans: 3
  },
  {
    id: 165,
    q: "Sobre elegir panel administración.",
    opts: ["Webmin comercial robusto.", "Plesk solo frontend.", "Aislamiento no crítico.", "Plesk comercial robusto."],
    ans: 3
  },
  {
    id: 166,
    q: "HestiaCP libre y seguro, limitado a Debian/Ubuntu.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 167,
    q: "HestiaCP estructura no estándar, no extrapolable.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 168,
    q: "HestiaCP: Apache escucha directamente en 80 y 443.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 169,
    q: "HestiaCP implementa DKIM y SSL Let's Encrypt.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 170,
    q: "Cambiar opciones web manualmente en ficheros HestiaCP.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 171,
    q: "HestiaCP incorpora ASP, PHP y JSP.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 172,
    q: "Opción FALSA sobre HestiaCP.",
    opts: ["Ofrece chroot jail.", "Soporte multiplataforma Windows/Linux.", "Certificados Let's Encrypt.", "Arquitectura reverse proxy."],
    ans: 1
  },
  {
    id: 173,
    q: "Servicios que ofrece HestiaCP.",
    opts: ["Reverse proxy Apache/Nginx.", "Email (Exim/Dovecot).", "DNS Bind.", "Todas correctas."],
    ans: 3
  },
  {
    id: 174,
    q: "Servicios DNS en la nube.",
    opts: [
      "No se usan tradicionales.",
      "Sustituidos por balanceadores.",
      "Monitorización sustituyó resolución.",
      "Funcionalidades extendidas para escala global."
    ],
    ans: 3
  },
  {
    id: 175,
    q: "Enrutamiento peticiones DNS Cloud según...",
    opts: [
      "Latencia, ubicación, ponderación, temperatura.",
      "Latencia, ubicación, ponderación, fallo.",
      "Fallo, latencia, carga cada nodo.",
      "Latencia, ubicación, fallo, VPC."
    ],
    ans: 1
  },
  {
    id: 176,
    q: "Normalmente no posible lanzar propio DHCP en nube pública.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 177,
    q: "Opción correcta red Cloud.",
    opts: [
      "Azure automático = Traffic Manager.",
      "Sustituido por IaC.",
      "NetBIOS incluido en DHCP AWS.",
      "Azure: especificar DNS de cada VNet."
    ],
    ans: 3
  },
  {
    id: 178,
    q: "Sobre Infraestructura como Código (IaC).",
    opts: ["Mantenimiento mediante scripting.", "Terraform lenguaje unificado.", "Todas correctas.", "Editor gráfico en AWS."],
    ans: 2
  },
  {
    id: 179,
    q: "AWS S3 sirve contenido estático sin servidores.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 180,
    q: "Contenido estático mejor en Apache + PHP que en S3.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 181,
    q: "S3/Blob puede procesar PHP, ASP o JSP.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 182,
    q: "S3/Blob solo multimedia, no HTML/JS.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 183,
    q: "CDN sirve copias caché desde ubicaciones cercanas al visitante.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 184,
    q: "CDN ofrece protección contra phishing.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 185,
    q: "Opción INCORRECTA esquema aplicación moderna.",
    opts: [
      "Peticiones dinámicas servidores clónicos.",
      "Servidores con código fuente propio cada uno.",
      "Multimedia servida por almacenamiento masivo.",
      "Base de datos escalable clúster."
    ],
    ans: 1
  },
  {
    id: 186,
    q: "Opción INCORRECTA sobre SPA.",
    opts: ["Ejemplo Gmail.", "Usa formularios clásicos recargando todo.", "Peticiones asíncronas.", "Carga inicial estática."],
    ans: 1
  },
  {
    id: 187,
    q: "Esquema aplicación moderna en AWS.",
    opts: ["Route 53 y CloudFront dividen estático/dinámico.", "Base datos RDS.", "Estáticas S3, dinámicas balanceador.", "Todas correctas."],
    ans: 3
  },
  {
    id: 188,
    q: "Opción INCORRECTA servicios AWS.",
    opts: ["Autoescalado servidores dinámicos.", "CloudFlare es la CDN de AWS.", "Código compartido en EFS.", "Route 53 interviene."],
    ans: 1
  },
  {
    id: 189,
    q: "Sobre red telefónica conmutada (RTC).",
    opts: ["Conmutación paquetes.", "Capacidad ilimitada.", "Establecía un circuito entre emisor/receptor.", "Conmutación circuitos s.XX."],
    ans: 2
  },
  {
    id: 190,
    q: "Opción INCORRECTA transición telefonía IP.",
    opts: ["Teléfonos convencionales por IP.", "Sustituir por softphones conectando troncales.", "PBX IP sustituyen PBX.", "Troncales SIP."],
    ans: 1
  },
  {
    id: 191,
    q: "Telefonía IP encapsula voz como paquetes IP.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 192,
    q: "Imposible encontrar gateways VoIP para teléfonos convencionales hoy.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 193,
    q: "PBX IP reemplazo de PBX convencionales.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 194,
    q: "PBX IP conocidas como troncales SIP.",
    opts: ["Verdadero.", "Falso."],
    ans: 1
  },
  {
    id: 195,
    q: "DID e IVR características deseables en PBX IP.",
    opts: ["Verdadero.", "Falso."],
    ans: 0
  },
  {
    id: 196,
    q: "Sobre transición telefonía IP.",
    opts: [
      "WebRTC tecnología unificadora.",
      "WebRTC intento RTC en navegadores.",
      "Desventaja plugins.",
      "WebRTC no coordinada con W3C."
    ],
    ans: 0
  },
  {
    id: 197,
    q: "Sobre protocolos telefonía IP.",
    opts: ["SIP usa SDP y STUN/TURN.", "WebRTC usa SDP y STUN/TURN.", "WebRTC usa SRTP y DTLS.", "Todas ciertas."],
    ans: 3
  }
];