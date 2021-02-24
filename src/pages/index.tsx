import Head from 'next/head';

import { MainContainer } from "../AppStyles";
import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <MainContainer>
      <Head>
        <title>Início | Move It</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </MainContainer>
  )
}
