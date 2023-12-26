import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
  const {image, live, source, title, description} = props;
    return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={'40px'} width={'300px'}>
        <Box component={'img'} src={image} alt={'mockup'}/>
          <h1 style={{fontSize: '1.8rem'}}>{title}</h1>
          <Box 
      display={'flex'} 
      flexDirection={'column'} 
      justifyContent={'center'} 
      alignItems={'center'} 
      width={'100%'}
      maxWidth={'500px'}  // Puedes ajustar este valor según lo que necesites
    >
      <h1 
        style={{ 
          fontSize: '1rem',     // Divide el texto en dos columnas
          columnGap: '20px',  // Espacio entre las columnas
          width: '100%',      // Asegura que tome todo el ancho disponible
          overflowWrap: 'break-word'  // Evita que palabras largas rompan el diseño
        }}
      >
        {description}
      </h1>
    </Box>
        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.2rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'1rem'}>
            {/* <Box p={1} border={'1.5px solid black'} borderRadius={'10px'} width={'10rem'}>
              <IconLink link={live} title={'Demo'} icon={'fa fa-safari'}/>
            </Box> */}
            <Box p={1} border={'1.5px solid black'} borderRadius={'10px'}width={'10rem'}>
              <IconLink link={source} title={'GitHub'} icon={'fa fa-code'}/>
            </Box>
        </Box>
      </Box>
);
}

export default PortfolioBlock;