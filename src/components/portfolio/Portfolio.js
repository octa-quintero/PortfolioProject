import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'} alignItems={'flex-start'} width={'auto'}>
                {info.portfolio.map((project, index) => (
                  <Grid item xs={12} md={5} key={index}>
                    <PortfolioBlock image={project.image} description= {project.description} live={project.live} source={project.source} title={project.title} />
                  </Grid>
                ))}
            </Grid>
        </Box>
    );
};