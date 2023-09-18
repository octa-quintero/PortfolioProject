import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

export let colors= [ "#cb1e1d, #c1ab4a"];

export const info = {
    firstName: "Octavio",
    lastName: "Quintero",
    initials: "Octa",
    position: " Full Stack Web Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
        emoji: '🌎',
        text: 'Soy de Argentina'
        },
        {
            emoji: '💻',
            text: 'Trabajo en proyectos de programación como freelancer.'
        },
        {
          emoji: '🥁',
          text: 'Baterista en tiempos libres.'
      },
        {
            emoji: "📧",
            text: "Mi contacto octa.quinteroo@gmail.com"
        }
    ],
    socials: [
      {
          link: "https://www.instagram.com/octa.quintero",
          icon: 'fa fa-instagram',  
          label: 'instagram',
          className: 'instagram-icon'
      },
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
    bio: "Siempre activo, buscando proyectos para seguir creciendo en lo que me gusta! Programar",
    skills:
        {
            proficientWith: ['JavaScript', 'React.JS', 'SQL','Node.JS', 'React.js', 'GitHub', 'HTML5', 'CSS3','Express','Redux','Postgres', 'Sequelize'],
            exposedTo: []
        }
    ,
    hobbies: [
        {
            label: 'Baterista en tiempo libre =)',
            emoji: '🥁'
        },
        {
            label: 'Me gusta viajar',
            emoji: '⛺'
        },
        {
            label: 'y escuchar Musica todo el dia!!',
            emoji: '🎼'
        }
    ],
    portfolio: [
        {
            title: "Portfolio Porject",
            live: "https://octavioquintero.vercel.app/", 
            source: "https://github.com/octa-quintero/PortfolioProject",
            image: mock1
        },
        {
          title: "CountryAPP",
          live: "", 
          source: "https://github.com/octa-quintero/CountryAPP",
          image: mock2
        },
        {
          title: "Pixel Gaming",
          live: "", 
          source: "https://github.com/octa-quintero",
          image: mock3
        },  
        {
          title: "Project 4",
          live: "", 
          source: "https://github.com/octa-quintero",
          image: mock4
        }
    ]
}