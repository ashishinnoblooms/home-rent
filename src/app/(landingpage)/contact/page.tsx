import ContactUs from '@/app/component/contactUs'
import { Container } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor:'white',}}>
      <ContactUs/>
    </Container>
  )
}