import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Footer() {

  return (
    <Paper sx={{
      marginTop: '10px',
      position: 'sticky',
      width: '100%',
      backgroundColor: '#333',
      color: '#fff',
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
            mt: 2,
          }}
        >
          <Typography  variant="body2">
            Copyright © 2023 Crazy.io || All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
