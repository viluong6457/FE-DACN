import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import FormControl from 'src/components/FormControl';
import TextField from 'src/components/TextField';
import UploadButton from 'src/components/UploadButton';
import AddIcon from '@mui/icons-material/Add';
import useMutateApplyJob from '../hooks/useMutateApplyJob';
import { ApplicationType } from 'src/constants/enum';

const Title = styled('h3')(() => ({
  fontWeight: 600,
  fontSize: 18,
  margin: '5px 0'
}));
const SubTitle = styled('div')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 12,
  color: theme.colors.alpha.black[70]
}));

type Props = {
  postId: number;
  open: boolean;
  position: string;
  company?: string;
  onClose: () => void;
};

export default function ModalApply(props: Props) {
  const { onSaveData } = useMutateApplyJob();
  const { open, onClose, position, company, postId } = props;

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {}
  });

  const handleClose = () => {
    onClose();
  };
  const handleApply = (data) => {
    onSaveData({
      ...data,
      postId,
      applicationType: ApplicationType.cv_enclosed
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <SubTitle> Vị trí ứng tuyển</SubTitle>
          <Title>{position}</Title>
          <SubTitle>{company}</SubTitle>
        </DialogTitle>

        <DialogContent>
          <Grid container marginBottom={3} spacing={2}>
            <Grid item>
              <FormControl
                control={control}
                errors={errors}
                required
                id="CV"
                name="CV"
                label="Tải lên hồ sơ có sẵn"
              >
                <UploadButton />
              </FormControl>
            </Grid>
            <Grid item>
              <Button startIcon={<AddIcon />} variant="outlined">
                Tạo hồ sơ trực tuyến
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                required
                id="name"
                label="Họ và tên"
                name="name"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                required
                id="email"
                label="Email"
                name="email"
                pattern="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                required
                id="phone"
                label="Số điện thoại"
                name="phone"
                pattern="phone"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Hủy
          </Button>
          <Button onClick={handleSubmit(handleApply)} variant="outlined">
            Nộp hồ sơ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
