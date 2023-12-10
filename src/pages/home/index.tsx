import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import JobList from './JobList';
import ProfessionIntro from './ProfessionIntro';
import Casousel from './Casousel';
const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);
const Home = () => {
  return (
    <OverviewWrapper>
      <Casousel />
      <Container sx={{ pb: 3 }}>
        <ProfessionIntro />
        <JobList />
      </Container>
    </OverviewWrapper>
  );
};

export default Home;
