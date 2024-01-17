import React, { useState, useEffect } from 'react';
import GeneralForm from '../GeneralForm';
import { AttachedDocument } from '../model';
import { useApp } from 'src/modules/app/hooks';
import useQueryAttachedDocument from './hooks/useQueryAttachedDocument';
import useMutateAttachedDocument from './hooks/useMutateAttachedDocument';
import useMutateUpdateAttachedDocument from './hooks/useMutateUpdateAttachedDocument';
import {
  EXPERIENCE,
  POSITION_LEVEL,
  WORKING_FORM,
  DEGREE,
  PROFESSION,
  WORK_AT
} from 'src/constants/option';
import { GetFileByUserId, DocumentType } from 'src/common/firebaseService';
import { convertStringToObjectList } from 'src/utils/inputOutputFormat';

function AttachedGeneral() {
  console.log('CVGen');
  const { user } = useApp();
  const { attachedDocument, isLoading } = useQueryAttachedDocument();
  const { onSaveData } = useMutateAttachedDocument();
  const { onUpdateData } = useMutateUpdateAttachedDocument();
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
    const newData = { ...data, CV: employeeCV };
    if (attachedDocument?.userId) onUpdateData(newData);
    else onSaveData(newData);
  };

  const formattedData = (data: AttachedDocument) => ({
    ...data,
    profession: convertStringToObjectList(data?.profession, options.profession),
    workAddress: convertStringToObjectList(
      data?.workAddress,
      options.workAddress
    )
  });

  const handleGetFileCV = async () => {
    debugger;
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
    <GeneralForm
      // isLoading={isLoading}
      data={newData}
      options={options}
      onSubmit={handleSaveProfile}
    />
  );
}

export default React.memo(AttachedGeneral);