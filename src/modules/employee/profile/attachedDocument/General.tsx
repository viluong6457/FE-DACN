import React, { useState, useEffect } from 'react';
import GeneralForm from '../GeneralForm'; // Đảm bảo đường dẫn tới GeneralForm là chính xác
import { AttachedDocument } from '../../model';
import { Box, Backdrop } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { useApp } from 'src/modules/app/hooks';
import CircularProgress from '@mui/material/CircularProgress';
import useQueryAttachedDocument from './hooks/useQueryAttachedDocument';
import useMutateAttachedDocument from './hooks/useMutateAttachedDocument';
import useUpdateAttachedDocument from './hooks/useMutateAttachedDocumentUpdate';
import {
  EXPERIENCE,
  POSITION_LEVEL,
  WORKING_FORM,
  DEGREE,
  PROFESSION,
  WORK_AT
} from 'src/constants/option';
import { GetFileByUserId, DocumentType } from 'src/common/firebaseService';

export default function AttachedGeneral(props) {
  const { user } = useApp();
  const { attachedDocument, isLoading } = useQueryAttachedDocument();
  const { onSaveData } = useMutateAttachedDocument();
  const { onUpdateData } = useUpdateAttachedDocument();
  const [newData, setNewData] = useState(null);
  const [employeeCV, setEmployeeCV] = useState('');

  const options = {
    profession: PROFESSION,
    workAddress: WORK_AT,
    positionLevel: POSITION_LEVEL,
    degree: DEGREE,
    experience: EXPERIENCE,
    workingForm: WORKING_FORM
  };

  const handleSaveProfile = (data: AttachedDocument) => {
    debugger;
    const newData = { ...data, CV: employeeCV };
    if (attachedDocument?.userId) onUpdateData(newData);
    else onSaveData(newData);
  };

  const formattedData = (data: AttachedDocument) => ({
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

  const handleGetFileCV = async () => {
    const fileUrl = await GetFileByUserId(
      user?.userId,
      DocumentType.cvType
    ).catch(() => '');
    setEmployeeCV(fileUrl);
  };

  useEffect(() => {
    setNewData(formattedData(attachedDocument));
    handleGetFileCV();
  }, [attachedDocument]);

  useEffect(() => {
    handleGetFileCV();
  }, [user]);

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