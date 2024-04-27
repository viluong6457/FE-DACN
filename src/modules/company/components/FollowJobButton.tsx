import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useQueryFollowCompany from '../hook/useQueryFollowCompany';
import { Box, Button, IconButton } from '@mui/material';
// import useMutateFollowJobById from '../hooks/useMutateFollowJobById';
import { useApp } from 'src/modules/app/hooks';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { Company } from 'src/modules/users/model';
import useMutateFollowCompanyById from '../hook/useMutateFollowCompanyById';

export default function FollowCompanyButton(props) {
  const { sx, employerId } = props;
  const { companyFollow } = useQueryFollowCompany();
  const { onFollowCompanyById } = useMutateFollowCompanyById();
  const { isEmployee } = useApp();
  const [isFollow, setIsFollow] = useState(false);

  const handleToggleFollow = (id) => {
    onFollowCompanyById([id]);
    setIsFollow(!isFollow);
  };

  useEffect(() => {
    const foundItem = companyFollow?.find(
      (item) => item.employerId === employerId
    );
    foundItem && setIsFollow(true);
  }, [companyFollow, employerId]);

  if (!employerId || !isEmployee) return;

  return (
    <Box
      onClick={() => handleToggleFollow(employerId)}
      sx={{ display: 'flex', alignItem: 'center', ...sx }}
    >
      <Button
        sx={{
          display: 'flex',
          bgcolor: isFollow ? '#e5e7eb' : 'primary',
          '&:hover': {
            bgcolor: isFollow ? '#c0c2c5' : ''
          },
          width: 120
        }}
        size="small"
        variant="contained"
      >
        {isFollow ? 'Đang theo dõi' : 'Theo dõi'}
      </Button>
    </Box>
  );
}