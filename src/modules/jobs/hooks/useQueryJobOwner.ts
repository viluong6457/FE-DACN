import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { JobService } from '../jobService';
import { Job } from '../model';

const useQueryJobOwner = (params?) => {
  const { data, isLoading } = useQuery<
    ResponseData<Job[]>,
    AxiosError<ResponseData<Job[]>>
  >(['jobOwner-getList'], () => JobService.get({ params }), {
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    jobs: data?.data?.map((item) => ({ ...item, id: item.postId })) || [],
    isLoading
  };
};

export default useQueryJobOwner;
