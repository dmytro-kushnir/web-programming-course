import './App.css';

import {
  Routes, Route, Outlet,
} from 'react-router-dom';

import * as React from 'react';

import TopBar from '../../components/topbar/topbar.tsx';
import Header from '../../components/header/header.tsx';
import HomePage from '../../components/home-page/homePage.tsx';
import Footer from '../../components/footer/footer.tsx';
import Lab from '../../components/lab/lab.tsx';
import Lectures from '../../components/lecture/lectures.tsx';
import Lecture from '../../components/lecture/lecture.tsx';
import Journals from '../../components/journals/journals.tsx';
import SelfWork from '../../components/self-work/selfWork.tsx';

import NoMatch from '../../components/no-match/index.tsx';
import useConfig from '../../components/config/useConfig.ts';
import AppNameProvider from '../../components/context/appName.tsx';
import { AppNames } from '../../components/config/configMapping.ts';
import Banner from '../../components/banner/banner.tsx';

// const NoMatch = React.lazy(() => import('../../components/no-match/index.tsx'));
// const SelfWork = React.lazy(() => import('../../components/self-work/selfWork.tsx'));
// const Journals = React.lazy(() => import('../../components/journals/journals.tsx'));
// const Lecture = React.lazy(() => import('../../components/lecture/lecture.tsx'));
// const Lectures = React.lazy(() => import('../../components/lecture/lectures.tsx'));
// const Lab = React.lazy(() => import('../../components/lab/lab.tsx'));

interface Props {
    appName: AppNames;
}

function Layout() {
  return (
    <div>
      <TopBar />
      <Header />
      <Banner />

      <Outlet />

      <Footer />
    </div>
  );
}

export default function WebProgrammingApp({ appName }: Props) {
  const { labList, lecturesList } = useConfig(appName);

  return (
    <AppNameProvider appName={appName}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<HomePage />}
          />
          {lecturesList.map((lecture) => (
            <React.Fragment key={lecture.id}>
              <Route path={`/lectures/${lecture.id}`} element={<Lecture lecture={lecture} />} />
              {lecture.subLectures && lecture.subLectures.map((subLecture) => (
                <Route key={subLecture.id} path={`/lectures/${subLecture.id}`} element={<Lecture lecture={subLecture} />} />
              ))}
            </React.Fragment>
          ))}
          <Route path="/lectures" element={<Lectures />} />
          {labList.map((lab) => (
            <Route key={lab.id} path={`labs/${lab.id}`} element={<Lab lab={lab} />} />
          ))}
          <Route path="self-work" element={<SelfWork />} />
          <Route path="grades" element={<Journals />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AppNameProvider>
  );
}
