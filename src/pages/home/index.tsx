import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import JobOpeningsTab from './JobOpeningsTab';
import ProfessionType from './ProfessionType';
import Casousel from './Casousel';
import SearchBar from 'src/components/SearchBar/SearchBar';
import CompanyList from 'src/modules/company/components/CompanyList';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import useQueryCompanyListByUser from 'src/modules/company/hook/useQueryCompanyListByUser';
import Company from './CompanyTab';
import { checkIsTablet } from 'src/utils/responsive';
import { useTheme } from '@emotion/react';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);
const Home = () => {
  const theme = useTheme();
  const isTablet = checkIsTablet(theme);
  return (
    <OverviewWrapper pb={2}>
      <Casousel />
      <Container>
        <SearchBar to="profession" />
        <ProfessionType />
        <JobOpeningsTab />
        <Company
          pageTitle="Công ty đang tuyển dụng"
          queryCompanys={useQueryCompanyListByUser}
        />
      </Container>
    </OverviewWrapper>
  );
};

export default Home;
