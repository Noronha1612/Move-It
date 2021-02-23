import { LeftContainer, MainContainer } from "../AppStyles";

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <MainContainer>
      <ExperienceBar />

      <section>
        <LeftContainer>
          <Profile />
        </LeftContainer>
        <div>

        </div>
      </section>
    </MainContainer>
  )
}
