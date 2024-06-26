import { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  styled
} from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkText from 'src/components/LinkText';
import { defaultImage } from 'src/constants/uploadFileRule';
import { Company } from 'src/modules/users/model';
import FollowCompanyButton from './FollowCompanyButton';
import { rewriteUrl } from 'src/utils/rewriteUrl';
import { TypographyEllipsis } from 'src/components/Typography';
import LazyLoadImage from 'src/components/LazyLoadImage';
import { useResponsive } from 'src/utils/responsive';

function CompanyCard({
  company,
  employerId
}: {
  company: Company;
  employerId: number;
}) {
  const [companyAvatar, setCompanyAvatar] = useState(
    company?.logo || defaultImage.companyAvatar
  );
  const { isMobile, isTablet, isLargeDesktop } = useResponsive();

  return (
    <Card
      sx={{
        border: 1,
        borderRadius: '3px',
        borderColor: '#98E4FF',
        height: '360px'
      }}
    >
      <CardHeader
        sx={{
          py: 1,
          color: '#aa720a',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          whiteSpace: 'normal'
        }}
        title={
          <Box>
            <LazyLoadImage
              src={company?.banner || defaultImage.companyCover_sm}
              placeholderSrc={defaultImage.companyCover}
              width={'100%'}
              height={120}
              borderRadius={'5px'}
              objectFit="cover"
              borderColor="#98E4FF"
            />
            <Box display={'flex'} gap={2}>
              <LazyLoadImage
                src={company?.logo || defaultImage.companyAvatar_md}
                placeholderSrc={defaultImage.companyAvatar_sm}
                width={isTablet ? 70 : 100}
                height={isTablet ? 70 : 100}
                my={isTablet ? 'auto' : 0}
                borderRadius="5px"
                objectFit="cover"
              />
              <Box
                sx={{
                  pt: 2,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography
                  component={LinkText}
                  to={`/company/${rewriteUrl(company?.companyName)}?id=${btoa(
                    employerId.toString()
                  )}`}
                  sx={{
                    ':hover': {
                      color: '#ce8b0e'
                    },
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    lineHeight: 1.5,
                    height: 65
                  }}
                  fontWeight={700}
                >
                  {company?.companyName}
                </Typography>
                <FollowCompanyButton
                  employerId={employerId}
                  sx={{
                    display: 'flex',
                    alignSelf: 'end',
                    justifySelf: 'self-end'
                  }}
                />
              </Box>
            </Box>
          </Box>
        }
      />
      <CardContent sx={{ px: 2, py: 1 }}>
        <Box display="flex" flexDirection="column" gap={1}>
          <Box display="flex">
            <WorkHistoryIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
            <TypographyEllipsis
              sx={{
                WebkitLineClamp: 1
              }}
            >
              Lĩnh vực: {company?.careerField}
            </TypographyEllipsis>
          </Box>
          <Box display="flex" my={1}>
            <LocationOnOutlinedIcon sx={{ maxHeight: 18, color: 'grey.700' }} />
            <TypographyEllipsis>
              Địa điểm: {company?.companyLocation}
            </TypographyEllipsis>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CompanyCard;
