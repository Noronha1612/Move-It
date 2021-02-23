import { LeftContainer, MainContainer } from "../AppStyles";
import CompletedChallenges from "../components/CompletedChallenges";

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <MainContainer>
      <ExperienceBar />

      <section>
        <LeftContainer>
          <Profile />
          <CompletedChallenges />
        </LeftContainer>
        <div>

        </div>
      </section>
    </MainContainer>
  )
}
