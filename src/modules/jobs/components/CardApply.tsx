import { Avatar, Box, Card, CardContent, Grid, Button } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PaidIcon from '@mui/icons-material/Paid';
import SendIcon from '@mui/icons-material/Send';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';
import { Job } from '../model';

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  objectFit: 'contain'
}));
const SubTitle = styled('h3')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 16,
  color: theme.colors.alpha.black[70]
}));
const Title = styled('h3')(() => ({
  fontWeight: 600,
  fontSize: 18
}));
const LabelText = styled('span')(({ theme }) => ({
  color: theme.colors.alpha.black[70]
}));
const ValueText = styled('span')(({ theme }) => ({
  color: theme.colors.alpha.black[100],
  marginLeft: 5
}));
type Props = {
  data: Partial<Job>;
};
const CardApply: React.FC<Props> = ({ data }) => {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <AvatarWrapper src="https://cdn1.vieclam24h.vn/images/default/2023/10/02/Logo%20ISO-1_169621842571.jpg" />
          <Box>
            <SubTitle>{data?.employer?.companyName}</SubTitle>
            <Title>{data.jobTitle}</Title>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Grid container alignItems={'center'}>
                  <PaidIcon color="primary" sx={{ margin: '0 5px' }} />
                  <LabelText> Mức lương : </LabelText>
                  <ValueText>
                    {data.minSalary} - {data.maxSalary} triệu
                  </ValueText>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container alignItems={'center'}>
                  <DateRangeIcon color="primary" sx={{ margin: '0 5px' }} />
                  <LabelText> Hạn nộp hồ sơ : </LabelText>
                  <ValueText> {data.applicationDeadline}</ValueText>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container alignItems={'center'}>
                  <AccessibilityIcon color="primary" sx={{ margin: '0 5px' }} />
                  <LabelText> Độ tuổi : </LabelText>
                  <ValueText>
                    {data.minAge} - {data.maxAge}
                  </ValueText>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container alignItems={'center'}>
                  <LocationOnIcon color="primary" sx={{ margin: '0 5px' }} />
                  <LabelText> Khu vực ứng tuyển : </LabelText>
                  <ValueText>{data.contactAddress}</ValueText>
                </Grid>
              </Grid>
            </Grid>
            <Box sx={{ marginTop: 2 }}>
              <Button variant="contained" startIcon={<SendIcon />} color="info">
                Nộp hồ sơ
              </Button>
            </Box>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardApply;