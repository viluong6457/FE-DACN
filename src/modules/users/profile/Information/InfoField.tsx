import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  styled,
  Divider
} from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { CompanyForm, UserForm } from './EditForm';
import EditButton from 'src/components/EditButton';
import { useResponsive } from 'src/utils/responsive';

export const InputLabel = styled(Grid)(({ theme }) => {
  const { isMobile } = useResponsive();
  return {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 700,
    minHeight: isMobile ? 35 : 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'left'
  };
});

export const InputData = styled(Grid)(({ theme }) => {
  const { isMobile } = useResponsive();
  return {
    fontFamily: theme.typography.fontFamily,
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'left'
  };
});

export const InfoGrid = (props) => {
  const { item } = props; 
  const [more, setMore] = useState(false);
  return (
    <Grid container sx={{ borderTop: 1, borderColor: 'grey.300' }}>
      {item.label !== 'Giới thiệu doanh nghiệp' && (
        <>
          <InputLabel item xs={12} sm={6} md={4}>
            {item.label}
          </InputLabel>
          <InputData item xs={12} sm={6} md={8}>
            <Typography
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                lineHeight: { xs: 1.5, md: 2 }
              }}
            >
              {item.value}
            </Typography>
          </InputData>
        </>
      )}
      {item.label === 'Giới thiệu doanh nghiệp' && item.value && (
        <>
          <InputLabel item xs={12}>
            {item.label}
          </InputLabel>
          <InputData item xs={12}>
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: more ? 100 : 3,
                WebkitBoxOrient: 'vertical',
                textAlign: { xs: 'center', md: 'left' },
                lineHeight: {
                  xs: 1.5,
                  md: 2
                }
              }}
            >
              {item.value}
            </Typography>
          </InputData>
          <Button
            onClick={() => {
              setMore((prev) => !prev);
            }}
            sx={{ mx: 'auto' }}
            color="secondary"
          >
            {more ? 'Thu gọn' : 'Đọc thêm'}
          </Button>
        </>
      )}
    </Grid>
  );
};

export default function InfoField(props) {
  const { isMobile } = useResponsive();
  const { user, data, title, editIcon, openForm } = props;
  const [open, setOpen] = useState(false);

  const handleEdit = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  const myForm =
    openForm === 'User' ? (
      <UserForm close={handleClose} user={user} />
    ) : (
      <CompanyForm close={handleClose} user={user} />
    );

  return (
    <Container sx={{ paddingX: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems={'end'}>
          {editIcon}
          <Typography
            fontWeight={700}
            sx={{
              fontSize: { md: 22, xs: 18 },
              lineHeight: { md: 2, xs: 1.5 }
            }}
          >
            {title}
          </Typography>
        </Box>
        <EditButton onClick={handleEdit} />
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth={'md'}
          fullScreen={isMobile}
        >
          <DialogTitle
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              fontSize: { md: '1.3rem', xs: '1rem' }
            }}
          >
            {title}
          </DialogTitle>
          <Divider />
          <DialogContent>{myForm}</DialogContent>
        </Dialog>
      </Box>
      <Box sx={{ mt: 1 }}>
        {data.map((item, index) => (
          <InfoGrid item={item} key={index} />
        ))}
      </Box>
    </Container>
  );
}
