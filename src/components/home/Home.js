import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';
const CV = '/CurriculumOctavioQuintero.pdf';

const Home = () => {
  const handleDownloadCV = () => {
    window.open(CV);
  };

    return (
        <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }}
                height={{ xs: '35vh', md: '40vh' }}
                borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
            <Box className={Style.Box}>
                <h1>Hola, me llamo <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
                </h1>
                <h2 className={Style.position}>{info.position}.</h2>
                <Box component={'ul'} p={'0.8rem'}>
                    {info.miniBio.map((bio, index) => (
                        <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
                    ))}
                </Box>
                <Box className={Style.customClass} onClick={handleDownloadCV}>
                    <ul>Descarga mi CV </ul><h3><FontAwesomeIcon icon={faFile} /></h3>
                </Box>
                <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
                    {info.socials.map((social, index) => (
                        <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} className={social.className} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
