import React, { useState } from 'react';
import { scanDocumentAPI } from './api';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const DocumentoScanner = () => {
  const [scannedDocument, setScannedDocument] = useState('');

  const handleScanDocument = async () => {
    try {
      await scanDocumentAPI(scannedDocument);
      alert('Documento escaneado com sucesso!');
    } catch (error) {
      alert('Erro ao escanear o documento: ' + error.message);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 2 }}>
      <Button variant="contained" color="primary" onClick={handleScanDocument}>
        Escanear Documento
      </Button>
    </Box>
  );
};

export default DocumentoScanner;

