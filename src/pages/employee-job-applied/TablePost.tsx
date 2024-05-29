import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import LinkText from 'src/components/LinkText';
import TableData from 'src/components/TableData';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Chip, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import { APPROVAL_STATUS } from 'src/constants';
import { TypographyEllipsis } from 'src/components/Typography';
import dayjs from 'dayjs';
import { rewriteUrl } from 'src/utils/rewriteUrl';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import detailsModal from 'src/utils/detailsModal';
import { isMobile } from 'src/constants/reponsive';
import { useMemo, useState } from 'react';
import useQueryJobAppliedByEmployee from 'src/modules/application/hooks/useQueryJobAppliedByEmployee';
import Pagination from 'src/components/Pagination';

const renderJobTitle = (data) => {
  const jobTitle = rewriteUrl(data?.row?.jobTitle);
  const handleOpenDetailModal = () => {
    const detailsData = {
      'Tên tin đăng': data?.row?.jobTitle,
      'Tên công ty': data?.row?.companyName,
      'Ngày đăng tin': dayjs(data?.row?.createdAt).format('DD/MM/YYYY'),
      'Hạn nộp hồ sơ': dayjs(data?.row?.applicationDeadline).format(
        'DD/MM/YYYY'
      ),
      'Trạng thái': data?.row?.status
    };
    detailsModal(detailsData);
  };
  return (
    <Grid container alignItems={'center'}>
      <Grid item xs={10.5} sm={12}>
        <LinkText to={`/job/${jobTitle}?id=${btoa(data?.row?.postId)}`}>
          <TypographyEllipsis> {data.value}</TypographyEllipsis>
        </LinkText>
      </Grid>
      <Grid item xs={1.5} sm={0} sx={{ display: { sm: 'none', xs: 'inline' } }}>
        <Tooltip title="Chi tiết">
          <IconButton size="small" onClick={handleOpenDetailModal}>
            <ReadMoreIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

const renderCompanyName = (data) => {
  return <TypographyEllipsis>{data.value}</TypographyEllipsis>;
};

const renderStatus = (data) => {
  const color = APPROVAL_STATUS.find((item) => item.label === data.value).color;
  return (
    <Chip label={data.value} size="small" color={color} variant="outlined" />
  );
};

const rederDate = (data) => {
  const date = dayjs(data?.value).format('DD/MM/YYYY');
  return <>{date}</>;
};

const columns: GridColDef[] = [
  {
    field: 'jobTitle',
    headerName: 'Tên tin đăng',
    minWidth: isMobile ? 190 : 400,
    headerAlign: 'center',
    renderCell: renderJobTitle
  },
  {
    field: 'companyName',
    headerName: 'Tên công ty',
    minWidth: 300,
    headerAlign: 'center',
    renderCell: renderCompanyName
  },
  {
    field: 'createAt',
    headerName: 'Ngày nộp',
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: rederDate
  },
  {
    field: 'applicationDeadline',
    headerName: 'Hạn nộp',
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: rederDate
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    minWidth: isMobile ? 50 : 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: renderStatus
  }
];

export default function TablePost(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const { data, isLoading, totalPages } = useQueryJobAppliedByEmployee({
    page: currentPage,
    num: pageSize
  });

  const flattenedApplications = useMemo(
    () =>
      data.map((app) => ({
        ...app,
        postId: app.jobPosting.postId,
        jobTitle: app.jobPosting.jobTitle,
        applicationDeadline: app.jobPosting.applicationDeadline,
        companyName: app.jobPosting.employer.companyName
      })),
    [data]
  );
  return (
    <Box>
      <TableData
        sx={{ minHeight: '72vh', width: '100%' }}
        rows={flattenedApplications}
        columns={columns}
        initialState={{
          columns: {
            columnVisibilityModel: {
              companyName: !isMobile,
              createAt: !isMobile,
              applicationDeadline: !isMobile
            }
          }
        }}
        hideFooter
        loading={isLoading}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={setCurrentPage}
      />
    </Box>
  );
}