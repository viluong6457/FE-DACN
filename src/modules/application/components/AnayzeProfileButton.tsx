import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ApplicationType } from 'src/constants/enum';
import { useApp } from 'src/modules/app/hooks';
import GradeIcon from '@mui/icons-material/Grade';
import {
  ProfileApplicationType,
  LOW_SCORE,
  NORMAL_SCORE,
  HIGH_SCORE,
  review,
  firstRoundForGeneralInfo,
  preprocessJobData,
  preprocessProfileData
} from 'src/utils/reviewProfile';

export default function AnayzeProfileButton(props) {
  const {
    selectedProfile,
    job,
    profileType,
    setShowResult,
    showResult,
    fileUrl,
    setHintsMessage
  } = props;
  const { user } = useApp();
  const [start, setStart] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzedProfile, setAnalyzedProfile] =
    useState<ProfileApplicationType>(null);
  const [passRoundProfiles, setPassOneProfiles] = useState<
    ProfileApplicationType[]
  >([]);
  const [roundOneFinished, setRoundOneFinished] = useState(false);
  const [roundTwoFinished, setRoundTwoFinished] = useState(false);
  const [roundThreeFinished, setRoundThreeFinished] = useState(false);
  const [analyzeResult, setAnalyzeResult] = useState<number>(null);
  const [goToAnalyzeResult, setGoToAnalyzeResult] = useState({
    signal: false,
    resultData: null
  });
  const [hints, setHints] = useState('');

  const finishedAll = () => {
    setHintsMessage(hints);
    setStart(false);
    setRoundOneFinished(false);
    setRoundTwoFinished(false);
    setRoundThreeFinished(false);
    setShowResult(true);
    setIsAnalyzing(false);
    setPassOneProfiles([]);
    setGoToAnalyzeResult({ signal: false, resultData: null });
  };

  const handleSetAnalyzedProfile = async (data: ProfileApplicationType[]) => {
    setAnalyzedProfile(data[0]);
  };

  const handleIsAnalyzing = (data: boolean) => {
    setIsAnalyzing(data);
  };

  const handleGoToAnalyzeResult = (signal: boolean, resultData) => {
    setGoToAnalyzeResult({ signal: signal, resultData: resultData });
  };

  const handleAnalyzeResult = async (result: any[]) => {
    console.log('result', result);

    if (!result || !result[0]) {
      if (
        analyzedProfile?.employee_Profile?.online_profile ||
        analyzedProfile?.employee_Profile?.attached_document
      ) {
        const matchingScore = firstRoundForGeneralInfo(
          analyzedProfile?.employer_Requirement,
          analyzedProfile?.employee_Profile
        );

        console.log('matchingScore', matchingScore);
        setAnalyzeResult(() => matchingScore);
        if (matchingScore >= LOW_SCORE)
          setPassOneProfiles(() => [analyzedProfile]);
        else {
          setHints(
            'Hồ sơ của bạn có vẻ chưa đáp ứng các yêu cầu cơ bản như: Giới tính, độ tuổi ngành nghề, trình độ, kinh nghiệm'
          );
          setIsAnalyzing(false);
        }
      }
    } else {
      const response = JSON.parse(result[0]);
      const matchingScore: number = response?.result;
      setHints(response?.hints);
      setAnalyzeResult((prev) => prev + matchingScore);
    }

    if (start) {
      if (!roundOneFinished) setRoundOneFinished(true);
      else if (!roundTwoFinished) setRoundTwoFinished(true);
      else if (!roundThreeFinished) setRoundThreeFinished(true);
    }
  };

  const handleReviewProfile = () => {
    review({
      round: 1,
      handleAnalyzeResult: handleAnalyzeResult,
      setIsAnalyzing: handleIsAnalyzing,
      setAnalyzedProfile: handleSetAnalyzedProfile,
      resetMatchingScoreList: [analyzedProfile],
      handleGoToAnalyzeResult: handleGoToAnalyzeResult
    });
  };

  useEffect(() => {
    console.log('analyzedProfile', analyzedProfile);

    if (goToAnalyzeResult.signal)
      start && handleAnalyzeResult(goToAnalyzeResult.resultData);
  }, [goToAnalyzeResult.signal]);

  useEffect(() => {
    let profileData;
    if (profileType === ApplicationType.online_profile) {
      profileData = {
        personal_information: user,
        online_profile: selectedProfile
      };
    } else if (profileType === ApplicationType.attached_document) {
      profileData = {
        personal_information: user,
        attached_document: selectedProfile
      };
    } else {
      profileData = {
        application: {
          id: 1,
          CV: fileUrl,
          applicationType: 'Nộp nhanh'
        }
      };
    }
    const data: ProfileApplicationType = {
      id: 1,
      employee_Profile: preprocessProfileData(profileData),
      employer_Requirement: preprocessJobData(job)
    };
    setAnalyzedProfile(() => data);
    console.log('data', data, profileType, profileData);

    if (
      data?.employee_Profile?.online_profile ||
      data?.employee_Profile?.attached_document
    ) {
      const keywords =
        data?.employee_Profile?.online_profile?.keywords ||
        data?.employee_Profile?.attached_document?.keywords;
      const analyzeResultData: ProfileApplicationType = {
        ...data,
        employee_Profile: {
          ...data.employee_Profile,

          application: {
            id: 1,
            keywords: keywords,
            applicationType: profileType,
            matchingScore: null
          }
        }
      };
      setAnalyzedProfile(() => analyzeResultData);
      console.log(analyzeResultData);
    }
  }, [JSON.stringify(job), selectedProfile, fileUrl]);

  // go to round 1
  useEffect(() => {
    console.log(analyzedProfile);
    if (start && selectedProfile) {
      setAnalyzeResult(null);
      setShowResult(false);
      handleReviewProfile();
    }
  }, [start]);

  // go to round 2 and 3
  useEffect(() => {
    if (!start) return;
    if (roundOneFinished && !roundTwoFinished) {
      console.log('passRoundProfiles', passRoundProfiles);

      // go to round 2
      if (passRoundProfiles.length > 0)
        review({
          round: 2,
          handleAnalyzeResult: handleAnalyzeResult,
          setIsAnalyzing: handleIsAnalyzing,
          passRoundProfiles: passRoundProfiles
        });
      else {
        finishedAll();
        console.log('Finised All');
      }
    } else if (roundTwoFinished && !roundThreeFinished) {
      console.log('Round 2 finished');

      // go to round 3
      review({
        round: 3,
        handleAnalyzeResult: handleAnalyzeResult,
        setIsAnalyzing: handleIsAnalyzing,
        passRoundProfiles: passRoundProfiles
      });
    } else if (roundThreeFinished) {
      console.log('Round 3 finished');
      finishedAll();
      console.log('Finised All');
    }
  }, [roundOneFinished, roundTwoFinished, roundThreeFinished]);

  useEffect(() => {
    console.log(analyzeResult);
  }, [analyzeResult]);

  return (
    <Box display="flex" sx={{ alignItems: 'center', gap: 1 }}>
      <Button
        onClick={() => {
          setStart(true);
        }}
        variant="contained"
        color="primary"
        sx={{
          minWidth: 200
        }}
        disabled={showResult || isAnalyzing}
      >
        <GradeIcon fontSize="small" />
        Phân tích độ phù hợp
      </Button>
      {isAnalyzing && <CircularProgress />}
      {showResult && (
        <Box
          sx={{
            width: 150,
            borderRadius: 3,
            p: 1,
            bgcolor:
              analyzeResult >= HIGH_SCORE
                ? '#ffc107'
                : analyzeResult >= NORMAL_SCORE
                ? '#4caf50'
                : analyzeResult >= LOW_SCORE
                ? '#b5b5b5'
                : '#efefef',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {analyzeResult >= HIGH_SCORE
            ? 'Cao'
            : analyzeResult >= NORMAL_SCORE
            ? 'Trung bình'
            : analyzeResult >= LOW_SCORE
            ? 'Thấp'
            : 'Không phù hợp'}
        </Box>
      )}
    </Box>
  );
}