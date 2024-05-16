import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from 'src/modules/app';
import { jobReducer } from 'src/modules/jobs';
import { docReduce } from 'src/modules/jobProfile/attachedDocument/documentSlice';
import { onlineProfileReduce } from 'src/modules/jobProfile/onlineProfile/profileSlice';
import { workExperienceReduce } from 'src/modules/jobProfile/onlineProfile/workExperienceSlice';
import { applicationReducer } from 'src/modules/application/applicationSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    job: jobReducer,
    document: docReduce,
    onlineProfile: onlineProfileReduce,
    workExperiences: workExperienceReduce,
    applicationList: applicationReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
