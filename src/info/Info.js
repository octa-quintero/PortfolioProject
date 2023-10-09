import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import logo from "../img/logo.png"

export let colors= [ "#9700f7", "#4400ff"];

export const info = {
    firstName: "Octavio",
    lastName: "Quintero",
    initials: <img src={logo} alt="Logo" width={"100px"} style={{ marginTop: "20px" }} />,
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
            label: 'Baterista en tiempo libre =]',
            emoji: '🥁'
        },
        {
            label: 'Viajar!',
            emoji: '🌴'
        }
    ],
    portfolio: [
        {
            title: "Portfolio Project",
            // live: "https://octavioquintero.vercel.app/", 
            source: "https://github.com/octa-quintero/PortfolioProject",
            image: mock1
        },
        {
          title: "PixelGaming",
          source: "https://github.com/octa-quintero/PixelGaming",
          image: mock2
        },
        {
          title: "CountryAPP",
          source: "https://github.com/octa-quintero/CountryAPP",
          image: mock3
        }
    ]
}