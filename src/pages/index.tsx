import Head from 'next/head';

import { LeftContainer, MainContainer } from "../AppStyles";
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
        <LeftContainer>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </LeftContainer>
        <div>

        </div>
      </section>
    </MainContainer>
  )
}
