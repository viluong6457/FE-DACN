import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Pagination,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import SuspenseLoader from 'src/components/SuspenseLoader';
import SmallJobCard from 'src/modules/jobs/components/SmallJobCard';
import useQueryFollowJobs from 'src/modules/jobs/hooks/useQueryFollowJobs';

export default function JobFollow() {
  const { jobFollow, isLoading } = useQueryFollowJobs();
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const newList = jobFollow?.map((job) => {
      return {
        maxSalary: job?.maxSalary,
        minSalary: job?.minSalary,
        postId: job?.postId,
        workAddress: job?.workAddress,
        jobTitle: job?.jobTitle,
        employer: {
          companyName: job?.companyName,
          logo: job?.logo
        }
      };
    });
    setJobList(() => newList);
  }, [jobFollow]);

  if (isLoading) return <SuspenseLoader />;
  if (!jobFollow?.length) {
    return (
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography fontSize={18} fontStyle="italic" color="#9999">
          Bạn chưa theo dõi tin tuyển dụng nào cả
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ p: 3 }}>
      <Typography mb={2} fontSize={22} fontWeight={700}>
        Việc làm đã theo dõi
      </Typography>
      <Grid container spacing={2}>
        {jobList?.map((job, index) => (
          <Grid key={job.postId} item xs={12} sm={6} md={4}>
            <SmallJobCard key={index} job={job} />
          </Grid>
        ))}
      </Grid>
      {/* <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      /> */}
    </Container>
  );
}
