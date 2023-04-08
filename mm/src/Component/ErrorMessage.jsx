import React, { useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorMEssage() {
    useEffect(() => {
        const validPaths = ['/admin', '/teacher', '/student'];
        const currentPath = window.location.pathname;
        if (!validPaths.includes(currentPath)) {
          const response = prompt(`Invalid path: ${currentPath}. Please enter a valid path`);
          if (response) {
            window.location.pathname = response;
          }
        }
      }, []);
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="error">
      <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry, but we couldn't find the page you were looking for.</p>
      <p>Please check that you've entered the correct URL and try again.
         If you continue to experience issues,
          please contact us at support@example.com for assistance.</p>
    </div>
      </Alert>
    </Stack>
  );
}