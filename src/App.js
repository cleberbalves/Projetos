import React from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import PastaForm from './PastaForm';
import DocumentoScanner from './DocumentoScanner';
import EnviarEmail from './EnviarEmail';

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Aplicativo de Scanner
        </Typography>
        <PastaForm />
        <DocumentoScanner />
        <EnviarEmail />
      </div>
    </Container>
  );
}

export default App;
