import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVPage from '.';
import { Button } from '@mui/material';
export default function PDFview() {
  return (
    <div>
      <PDFDownloadLink document={<CVPage />} fileName="my-cv.pdf">
        {({ blob, url, loading, error }) =>
          loading ? (
            <Button>Loading document...</Button>
          ) : (
            <Button>Download CV</Button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}
