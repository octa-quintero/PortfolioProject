import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBook, faRocket} from '@fortawesome/free-solid-svg-icons';


const links = [
    {
        name: 'Inicio ',
        to: '/',
        icon: faHouse,
        active: 'home'
    },
    {
      name: 'Sobre mi',
      to: '/about',
      icon: faBook,
      active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        icon: faRocket,
        active: 'portfolio'
    }
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
    const breakpoint = 768;

    return (
        <Box component={'nav'} width={'100%'}>
            <Box  component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                  gap={{xs: '1.2rem', md: '10rem'}}
                  textTransform={'lowercase'} fontSize={'1.2rem'} fontWeight={{xs:'bold', md: 'bold'}}>
                  {links.map((link, index) => (
                    <Box  key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                          sx={{borderImageSource: info.gradient}}>
                      <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link} style={{ display: 'flex', alignItems: 'center' }}>
                        {link.icon && <FontAwesomeIcon icon={link.icon} className={Style.icon} />}
                        {!link.type && <p style={{ padding: '0.8rem 0', marginLeft: link.icon ? '0.5rem' : '0' }}>{link.name}</p>}
                        {link.type && <h1>{link.name}</h1>}
                      </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
            </Box>
        </Box>
    )
}