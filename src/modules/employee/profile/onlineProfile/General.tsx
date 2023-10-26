import { useState, useEffect } from 'react';
import { Box, Backdrop } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import GeneralForm from '../GeneralForm';
import { OnlineProfile } from '../../model';
import useMutateOnlineProfile from './hooks/useMutateOnlineProfile';
import useUpdateOnlineProfile from './hooks/useMutateOnlineProfileUpdate';
import useQueryOnlineProfile from './hooks/useQueryOnlineProfile';
import {
  EXPERIENCE,
  POSITION_LEVEL,
  WORKING_FORM,
  DEGREE,
  PROFESSION,
  WORK_AT
} from 'src/constants/option';

export default function OnlineGeneral() {
  const { onlineProfile, isLoading } = useQueryOnlineProfile();
  const { onSaveData } = useMutateOnlineProfile();
  const { onUpdateData } = useUpdateOnlineProfile();
  const [newData, setNewData] = useState(null);

  const options = {
    profession: PROFESSION,
    workAddress: WORK_AT,
    positionLevel: POSITION_LEVEL,
    degree: DEGREE,
    experience: EXPERIENCE,
    workingForm: WORKING_FORM
  };

  const handleSaveProfile = (data: OnlineProfile) => {
    if (onlineProfile?.userId) onUpdateData(data);
    else onSaveData(data);
  };

  const formattedData = (data: OnlineProfile) => ({
    ...data,
    profession: (data?.profession || '')
      .split(', ')
      .map((label) =>
        options.profession.find((option) => option.label === label)
      ),
    workAddress: (data?.workAddress || '')
      .split(', ')
      .map((label) =>
        options.workAddress.find((option) => option.label === label)
      )
  });

  useEffect(() => {
    setNewData(formattedData(onlineProfile));
  }, [onlineProfile]);

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="primary" />
      </Backdrop>
      {!isLoading ? (
        <GeneralForm
          isLoading={isLoading}
          data={newData}
          options={options}
          onSubmit={handleSaveProfile}
        />
      ) : null}
    </>
  );
}
