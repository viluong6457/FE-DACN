import {
  Box,
  Card,
  Grid,
  Typography,
  useTheme
} from '@mui/material';
import  { useState } from 'react';
import Link from 'src/components/Link';
import Pagination from 'src/components/Pagination';
import CompanyCard from 'src/modules/company/components/CompanyCard';
import BusinessIcon from '@mui/icons-material/Business';
import {
  useResponsive
} from 'src/utils/responsive';
import { isMobile } from 'src/constants/reponsive';

export default function CompanyTab(props) {
  const { queryCompanys } = props;
  const { isDesktop, isTablet } = useResponsive();
  const pageSize = isMobile ? 1 : isTablet ? 2 : isDesktop ? 3 : 2;

  const [currentPage, setCurrentPage] = useState(1);
  const { companyList, totalPages } = queryCompanys({
    num: pageSize,
    page: currentPage
  });

  return (
    <Card
      sx={{
        borderColor: '#98E4FF',
        borderRadius: '5px',
        mt: 2
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ bgcolor: '#f0e9fe', borderTopRadius: 1, px: 3, py: 2 }}
      >
        <Box display="flex" justifyContent="space-between">
          <BusinessIcon color="secondary" sx={{ fontSize: 35 }} />
          <Typography fontWeight={700} fontSize={20} alignSelf="end">
            Danh sách công ty
          </Typography>
        </Box>
        <Link
          to="/company"
          sx={{
            fontSize: 16,
            fontWeight: 700
          }}
        >
          Xem thêm
        </Link>
      </Box>
      <Box p={3}>
        <Grid container spacing={1} height={400} mb={2}>
          {companyList?.length ? (
            companyList.map((company) => (
              <Grid key={company?.userId} item xs={12} sm={6} md={4} lg={3}>
                <CompanyCard company={company} employerId={company?.userId} />
              </Grid>
            ))
          ) : (
            <Typography
              fontStyle={'italic'}
              textAlign={'center'}
              color={'gray'}
              width={'100%'}
              lineHeight={10}
            >
              Chưa có công ty
            </Typography>
          )}
        </Grid>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={setCurrentPage}
        />
      </Box>
    </Card>
  );
}