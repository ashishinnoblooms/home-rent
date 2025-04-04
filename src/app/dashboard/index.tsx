import { Container } from '@mui/material'
import React from 'react'
import Hero from '../component/hero'
import PropertyTypes from '../component/propertyTypes'
import PropertyList from '../component/propertyList'
import Agent from '../component/Agent'
import Client from '../component/Client'
import About from '../component/about'



export default function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor:'white',}}>
      <Hero/>
      <PropertyList/>
      <PropertyTypes/>
      <About/>
      <Agent/>
      <Client/>
    </Container>
  )
}
