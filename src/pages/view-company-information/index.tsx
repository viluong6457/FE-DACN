import { Avatar, Container, Paper, Typography, styled } from '@mui/material';
import CustomContainer from 'src/components/CustomContainer';
import { defaultImage } from 'src/constants/uploadFileRule';
import JobList from 'src/modules/jobs/components/JobList';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import CompanyInfoTab from 'src/modules/jobs/components/CompanyInfoTab';
import useQueryCompanyInfoByUser from 'src/modules/company/hook/useQueryCompanyInfoById';
import { useSearchParams } from 'react-router-dom';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { useResponsive } from 'src/utils/responsive';
import LazyLoadImage from 'src/components/LazyLoadImage';

const CoverImage = styled('img')({
  width: '100%',
  height: '280px',
  objectFit: 'cover'
});

const ImagePaper = styled(Paper)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

const renderBanner = (banner: string) => {
  return (
    <ImagePaper elevation={12}>
      <LazyLoadImage
        src={banner || defaultImage.companyCover}
        placeholderSrc={defaultImage.companyCover}
        alt="cover"
        height={280}
        width="100%"
        objectFit="cover"
      />
    </ImagePaper>
  );
};

const renderLogo = (avatar: string) => (
  <Avatar
    src={avatar || defaultImage.companyAvatar_md}
    sx={{
      width: 120,
      height: 120,
      bgcolor: '#ffff',
      border: 2,
      borderColor: 'grey.300',
      mt: -5
    }}
  />
);

export default function index() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = atob(searchParams.get('id'));
  const { company, isLoading } = useQueryCompanyInfoByUser({ employerId: id });
  const { isMobile } = useResponsive();

  if (isLoading) return <SuspenseLoader />;
  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      {renderBanner(company?.banner)}
      <CustomContainer
        sx={{ flex: 1, display: 'flex', alignItems: 'center', px: 5 }}
      >
        {renderLogo(company?.logo)}
        <Typography variant={isMobile ? 'h4' : 'h3'} ml={2}>
          {company?.companyName}
        </Typography>
      </CustomContainer>
      <CompanyInfoTab company={company} companyPage={true} />
      <JobList
        pageTitle={`Việc làm đang tuyển`}
        profession={''}
        queryJobs={useQueryAllJob}
        numOfJobPerPage={5}
        employerId={id}
        sx={{ p: 0 }}
      />
    </Container>
  );
}
