import React, { useState } from 'react';
import { createFolderAPI } from './api';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const PastaForm = () => {
  const [folderName, setFolderName] = useState('');

  const handleCreateFolder = async () => {
    try {
      await createFolderAPI(folderName);
      alert('Pasta criada com sucesso!');
    } catch (error) {
      alert('Erro ao criar a pasta: ' + error.message);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 2 }}>
      <TextField
        label="Nome da Pasta"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleCreateFolder}>
        Criar Pasta
      </Button>
    </Box>
  );
};

export default PastaForm;

