import { Container } from '@mui/material'
import React from 'react'
import Hero from '../component/hero'
import PropertyTypes from '../component/propertyTypes'


export default function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{backgroundColor:'white'}}>
      <Hero/>
      <PropertyTypes/>
    </Container>
  )
}
