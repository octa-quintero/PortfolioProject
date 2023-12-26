import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
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
        text: 'Soy de Argentina'
        },
        {
            emoji: '💻',
            text: 'Trabajo en proyectos de programación continuamente'
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
    bio: "Esa sensación de acostarte y soñar con la solución del código a las 3 de la mañana, no tiene precio. Programar es mucho más que una simple ocupación. No cualquiera puede superar la frustración de que el código no compile por un simple punto y coma o que un proyecto que funcionaba ayer deje de hacerlo mágicamente. Personalmente, me ha ayudado a ser más perseverante, disciplinado y motivado. Ahora si, me voy a programar en HTML(CHISTE)",
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
            image: mock1,
            description: "asasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdd",
        },
        {
          title: "PixelGaming",
          source: "https://github.com/octa-quintero/PixelGaming",
          image: mock2,
          description: "asasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdd",
        },
        {
          title: "CountryAPP",
          source: "https://github.com/octa-quintero/CountryAPP",
          image: mock3,
          description: "asasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdd",
        }
    ]
}