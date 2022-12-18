import {
  About,
  PhotoContainer,
  TecnologiesContainer
} from "../components/index"

import {
  Line,
  Project,
  ProjectCard,
  ProjectTitle,
  StartPageSection,
  Title
} from "../styles/Styles"

export default function StartPage() {
  return (
    <StartPageSection>
      <PhotoContainer />
      <About />
      <TecnologiesContainer />
      <Project>
        <ProjectTitle> Projetos </ProjectTitle>
        <Line />
        <ProjectCard>
          <Title> Em produção !!! </Title>
        </ProjectCard>
      </Project>
    </StartPageSection>
  )
}
