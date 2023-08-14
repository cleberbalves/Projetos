import React, { useState } from 'react';
import { sendEmailAPI } from './api';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const EnviarEmail = () => {
  const [email, setEmail] = useState('');

  const handleSendEmail = async () => {
    try {
      await sendEmailAPI(email, '**CAMINHO_DO_DOCUMENTO**');
      alert('Documento enviado com sucesso por e-mail.');
    } catch (error) {
      alert('Erro ao enviar o documento por e-mail: ' + error.message);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 2 }}>
      <TextField
        label="Endereço de E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSendEmail}>
        Enviar por E-mail
      </Button>
    </Box>
  );
};

export default EnviarEmail;
