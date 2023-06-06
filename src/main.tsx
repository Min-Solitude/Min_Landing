import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Container } from './app/Container.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
)
