import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
  const {image, live, source, title, description} = props;
    return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={'40px'}>
        <Box component={'img'} src={image} alt={'mockup'}/>
          <h1 style={{fontSize: '1.8rem'}}>{title}</h1>
          <Box 
      display={'flex'} 
      flexDirection={'column'} 
      justifyContent={'center'} 
      alignItems={'center'} 
      width={'100%'}
    >
      <h1 
        style={{ 
          fontSize: '1rem',
          columnGap: '15px',
          width: '100%',
          overflowWrap: 'break-word',
          fontWeight: '400'
        }}
      >
        {description}
      </h1>
    </Box>
    <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'0.5rem'}
     alignItems={'center'} fontSize={'1.5rem'} py={'1rem'} width={'100%'}>
  
  <Box 
    p={0} 
    border={'2px solid gray'} 
    borderRadius={'8px'}
    width={'100%'}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <IconLink link={source} 
    title={'GitHub'} 
    icon={'fa fa-github'} 
    />
  </Box>

  {live && (
    <Box 
      p={0} 
      border={'2px solid gray'} 
      borderRadius={'8px'}
      width={'100%'}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <IconLink link={live} title={'Demo'} icon={'fa fa-safari'}/>
    </Box>
  )}
  
</Box>

      </Box>
);
}

export default PortfolioBlock;