import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Employee, User } from 'src/modules/users/model';
import { GetEmployeeService } from '../getEmployeeService';
import { useApp } from 'src/modules/app/hooks';
import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';
import { ProfileShowType } from '../model';

const useQueryEmployee = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<ProfileShowType[]>,
    AxiosError<ResponseData<ProfileShowType[]>>
  >(
    [
      'get-AllEmployees',
      params?.page,
      params?.profession,
      params?.experience,
      params?.degree,
      params?.employmentType,
      params?.sex,
      params?.jobTitle,
      params?.currentPosition,
      params?.positionLevel
    ],
    () => {
      for (const key in params) {
        if (params[key] === 'Tất cả' || params[key] === undefined) {
          params[key] = '';
        }
      }
      const item = { ...params, currentPosition: params?.positionLevel };
      delete item.positionLevel;
      return GetEmployeeService.get({ params: item });
    },
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isEmployer
    }
  );

  return {
    profile: data?.data || [],
    isLoading,
    refetch
  };
};

export default useQueryEmployee;