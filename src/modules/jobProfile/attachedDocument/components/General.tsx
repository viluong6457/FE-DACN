import React, { useState, useEffect } from 'react';
import GeneralForm from '../../GeneralForm';
import { AttachedDocument } from '../../model';
import {
  EXPERIENCE,
  POSITION_LEVEL,
  WORKING_FORM,
  DEGREE,
  PROFESSION,
  WORK_AT
} from 'src/constants/option';
import { convertStringToObjectList } from 'src/utils/formatData';
import useDocumentHook from '../hooks/useDocumentHook';
import { Degree } from 'src/constants/enum';
function AttachedGeneral() {
  const { setProfile, profile } = useDocumentHook();
  const [newData, setNewData] = useState(null);

  const options = {
    profession: PROFESSION,
    workAddress: WORK_AT,
    positionLevel: POSITION_LEVEL,
    degree: DEGREE,
    experience: EXPERIENCE,
    workingForm: WORKING_FORM
  };

  const handleSaveProfile = (data: AttachedDocument) => {
    setProfile({ ...data });
  };

  const formattedData = (data: AttachedDocument) => ({
    ...data,
    profession: convertStringToObjectList(data?.profession, options.profession),
    workAddress: convertStringToObjectList(
      data?.workAddress,
      options.workAddress
    )
  });

  useEffect(() => {
    setNewData(formattedData(profile as AttachedDocument));
  }, [profile]);

  return (
    <GeneralForm
      data={newData}
      options={options}
      onSubmit={handleSaveProfile}
    />
  );
}

export default React.memo(AttachedGeneral);
