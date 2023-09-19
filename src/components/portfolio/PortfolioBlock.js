import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
  const {image, live, source, title} = props;
    return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={'40px'}>
        <Box component={'img'} src={image} alt={'mockup'}/>
          <h1 style={{fontSize: '1.8rem'}}>{title}</h1>
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