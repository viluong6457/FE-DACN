import { Box, Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import DatePicker from 'src/components/DatePicker';
import FormControl from 'src/components/FormControl';
import SelectInput from 'src/components/SelectInput';
import { User } from '../../model';
import { DEGREE, GENDER, ISMARRIED } from 'src/constants/option';
import dayjs from 'dayjs';
import useMutateUserData from '../../hooks/useMutateUserHook';
import TextField from 'src/components/TextField';

export function UserForm(props) {
  const { close, user } = props;
  const { onSaveData } = useMutateUserData('Profile');
  const isEmployee = user.role === 'EMPLOYEE';

  // const degree = DEGREE.find((item) => item.label === user.degree);
  // const mappedDegree = degree ? degree.value : 'other';
  const DEGREE_OPTION = DEGREE.map((item) => ({
    value: item.label,
    label: item.label
  }));
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    defaultValues: {
      ...user,
      dob: dayjs(user.dob, 'DD-MM-YYYY').isValid()
        ? dayjs(user.dob, 'DD-MM-YYYY').toISOString()
        : null,
      sex: GENDER.find((item) => item.label === user.sex)?.value
      // degree: mappedDegree
    }
  });

  const handleSaveProfile = async (data) => {
    const formattedDob = dayjs(data.dob, 'DD-MM-YYYY').format('DD-MM-YYYY');
    const newData = { ...data, dob: formattedDob };
    onSaveData(newData);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container mb={4}>
        <Grid container item spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="name"
              label="Họ và tên"
              name="name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              disabled
              fullWidth
              id="email"
              label="Email"
              name="email"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="phone"
              label="Số điện thoại"
              name="phone"
              pattern="phone"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="address"
              label="Địa chỉ"
              name="address"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<DatePicker maxDate={dayjs()} />}
              control={control}
              errors={errors}
              fullWidth
              id="dob"
              label="Ngày sinh"
              name="dob"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<SelectInput />}
              options={GENDER}
              control={control}
              errors={errors}
              fullWidth
              id="sex"
              label="Giới tính"
              name="sex"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<SelectInput />}
              options={DEGREE_OPTION}
              control={control}
              errors={errors}
              fullWidth
              show={isEmployee}
              id="degree"
              label="Học vấn"
              name="degree"
            />
          </Grid>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" sx={{ gap: 3 }}>
        <Button
          color="success"
          onClick={handleSubmit(handleSaveProfile)}
          variant="contained"
          sx={{ width: 120 }}
        >
          Xác nhận
        </Button>
        <Button onClick={() => close()} variant="outlined" sx={{ width: 120 }}>
          Hủy
        </Button>
      </Box>
    </Box>
  );
}

export function CompanyForm(props) {
  const { close, user } = props;
  const { onSaveData } = useMutateUserData('Company');

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    defaultValues: {
      ...user
    }
  });

  const handleSaveCompany = (data) => {
    onSaveData(data);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <Box sx={{ p: 3 }}>
      <Grid container mb={4}>
        <Grid container item spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="companyName"
              label="Tên công ty"
              name="companyName"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="companyLocation"
              label="Địa chỉ"
              name="companyLocation"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="careerField"
              label="Lĩnh vực"
              name="careerField"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="taxCode"
              label="Mã số thuế"
              name="taxCode"
            />
          </Grid>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" sx={{ gap: 3 }}>
        <Button
          color="success"
          onClick={handleSubmit(handleSaveCompany)}
          variant="contained"
          sx={{ width: 120 }}
        >
          Xác nhận
        </Button>
        <Button onClick={() => close()} variant="outlined" sx={{ width: 120 }}>
          Hủy
        </Button>
      </Box>
    </Box>
  );
}
