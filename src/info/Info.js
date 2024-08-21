import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import logo from "../img/logo.png"

export let colors= [ "#9700f7", "#4400ff"];

export const info = {
    firstName: "Octavio",
    lastName: "Quintero",
    initials: <img src={logo} alt="Logo" width={"60px"} style={{ marginTop: "10px" }} />,
    position: " Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
        emoji: '🌎',
        text: 'Soy de Argentina.'
        },
        {
            emoji: '🚀',
            text: 'Autodidacta con ganas de crecer y adquirir nuevas habilidades.'
        },
        {
          emoji: '💻',
          text: 'Desarrollador versátil.'
      },
        {
          emoji: '🥁',
          text: 'Baterista en tiempos libres'
      },
        {
            emoji: "💾",
            text: "Mi contacto octa.quinteroo@gmail.com"
        }
    ],
    socials: [
      {
          link: "https://github.com/octa-quintero",
          icon: "fa fa-github",
          label: 'github',
          className: 'github-icon'
      },
      {
          link: "https://linkedin.com/in/octavio-quintero",
          icon: "fa fa-linkedin",
          label: 'linkedin',
          className: 'linkedin-icon'
      },

    ],
    bio: "Hola!! Soy Octavio👾 Actualmente, me estoy desarrollando como programador FullStack en proyectos independientes, donde implemento mi capacidad para crear aplicaciones web completas, desde la conceptualización hasta la ejecución. Encontrar soluciones a posibles problemas tanto en el frontend como en el backend me ha permitido comprender el ciclo de vida de una app, convirtiéndome en un desarrollador versátil. Tuve la suerte de tener amigos que me impulsaron a estudiar desarrollo web, donde pude acercarme a ese vasto espacio de 11001001010. Uno de mis desafíos personales fue generar perseverancia y disciplina por la exigencia del trayecto. Este recorrido me motiva a superar constantes desafíos, mejorándome continuamente y avanzando en mi profesionalización",
    skills:
        {
            proficientWith: ['JavaScript','TypeScript', 'React', 'PostgreSQL','Node.JS', 'Docker', 'Docker-Compose', 'GitHub', 'HTML5', 'CSS3', 'SCSS', 'Express','Redux', 'Sequelize'],
            exposedTo: []
        }
    ,
    hobbies: [
        {
            label: 'Baterista en tiempo libre =]',
            emoji: '🥁'
        },
        {
            label: 'Viajar.',
            emoji: '🌴'
        }
    ],
    portfolio: [
        {
            title: "Talent Place",
            live: "https://talent-place.netlify.app/", 
            source: "https://github.com/octa-quintero/i002-talentplace-back",
            image: mock1,
            description: "Talent Place🚀 fue creada con el objetivo principal de crear una plataforma que satisfaga las necesidades de empresas, startups y desarrolladores IT juniors.Mi participación fue en el equipo de Backend, donde desarrollé una API RESTful usando Node.js, Express y TypeScript. La elección de TypeScript nos permitió escribir código más limpio y tener un mejor control de tipos, mejorando así sucalidad y facilidad de mantenimiento. La arquitectura de la API se basó en microservicios, por lo que permitió una mayor escalabilidad y flexibilidad en el desarrollo. Usamos TypeORM para interactuar con la base de datos y ayudar a crear un sistema de gestión para esquemas de bases de datos de entidades. Para la DB, optamos por PostgreSQL para manejar las consultas en la base de datos. Usamos Docker para el despliegue, lo que nos permitió empaquetar nuestras aplicaciones y dependencias en contenedores aislados. ",
        },
        {
            title: "PixelGaming",
            source: "https://github.com/octa-quintero/PixelGaming",
            image: mock2,
          description: "Esta aplicación web se desarrolló utilizando React, Java Script,Node.js y Express. Utiliza una base de datos PostgreSQL con Sequelize para gestionar datos de usuarios y elementos de la biblioteca. En conjunto, ofrece una experiencia completa para los amantes de los videojuegos. Proyecto desarrollado pensando en el usuario, con una interfaz intuitiva y amigable que facilita a los amantes de los videojuegos buscar, catalogar y gestionar su colección personal de manera sencilla y efectiva. Incorporé funciones que permiten a los usuarios crear perfiles y tener su propia biblioteca de juegos personalizada, además de compartir reseñas y calificaciones. También implementé un método de pago para elegir entre diferentes membresías y así acceder a diversas características.",
        },
        {
            title: "Portfolio Project",
            live: "https://octavioquintero.vercel.app/", 
            source: "https://github.com/octa-quintero/PortfolioProject",
            image: mock3,
            description: "Con un enfoque en la simplicidad, este portafolio presenta una interfaz minimalista que permite a los visitantes acceder de manera sencilla a secciones como experiencia, proyectos e información general, garantizando una experiencia intuitiva. En mi aplicación de portafolio, optimicé la organización del proyecto utilizando React.js, JavaScript y SCSS para estilos. Implementé una estructura modular que simplifica el acceso al código y mejora la comprensión, permitiendo una gestión eficiente de componentes, estilos y funcionalidad.",
        },
        {
          title: "CountryAPP",
          source: "https://github.com/octa-quintero/CountryAPP",
          image: mock4,
          description: "CountryAPP es una aplicación diseñada para los amantes de los viajes y la exploración. Su objetivo principal es proporcionar a los usuarios una plataforma donde puedan buscar información sobre países, descubrir actividades turísticas de cada destino y compartir sus propias recomendaciones de actividades. Esta app fue desarrollada aprovechando tecnologías esenciales como React, JavaScript, Node.js y Express. La creatividad desempeñó un papel fundamental en la forma en que utilicé estas tecnologías para brindar a los usuarios una experiencia única y fácil de usar.",
      },
        {
          title: "SpaBrillante",
          source: "https://github.com/octa-quintero/SpaBrillante",
          image: mock5,
          description: "La aplicación Spa-Brillante es una plataforma de gestión de turnos diseñada como proyecto de práctica para aplicar. Esta herramienta está diseñada para facilitar el agendamiento y la administración de citas en diferentes contextos. Utiliza tecnologías modernas como React, Redux, Material UI, SCSS y JavaScript para ofrecer una experiencia de usuario intuitiva, responsive y eficiente. Permite a los usuarios reservar, modificar y cancelar turnos de manera sencilla y organizada, adaptándose a las necesidades específicas de spas y salones de belleza.",
        }
    ]
}