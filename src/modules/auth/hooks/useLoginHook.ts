import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from 'src/modules/app/hooks';
import { localStorage } from 'src/utils';
import { LoginService } from '../authService';
import { LoginRequest, LoginResponse } from '../model';
import { Role } from 'src/modules/users/model';

const useLogin = () => {
  const { toast } = useApp();
  const {
    setUserApp,
    setAccessTokenApp,
    user: { userId },
    isAdmin,
    isEmployer,
    isEmployee
  } = useApp();

  const navigate = useNavigate();
  const { state } = useLocation();
  const locationState = state as any;

  let defaultLocation = '';
  if (userId && isAdmin) {
    defaultLocation = '/admin/statistic-report';
  } else if (userId && isEmployer) {
    defaultLocation = '/employer/candidate/profile';
  } else if (userId && isEmployee) defaultLocation = '/';

  const { mutate: onLogin, isLoading } = useMutation<
    ResponseData<LoginResponse>,
    AxiosError<ResponseData<LoginResponse>>,
    LoginRequest
  >(LoginService.create, {
    onSuccess: (res) => {
      const { userData, access_token } = res.data;
      if (userData?.userId && res.status === 200) {
        toast.success({ massage: res.message });
        setUserApp(userData);
        setAccessTokenApp(access_token);
        localStorage.setAccessToken(access_token);
        if (userData.role === Role.ADMIN) {
          defaultLocation = '/admin/statistic-report';
        } else if (userData.role === Role.EMPLOYER) {
          defaultLocation = '/employer/candidate/profile';
        } else defaultLocation = '/';
        navigate(locationState?.from || defaultLocation, {
          state: state,
          replace: true
        });
      } else toast.error({ massage: res.message });
    },
    onError: (error) => {
      toast.error({ massage: error.response.data.message });
    }
  });

  return {
    onLogin,
    isLoading
  };
};

export default useLogin;
