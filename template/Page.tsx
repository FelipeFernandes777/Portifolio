import { About, PhotoContainer, TecnologiesContainer } from '../components/index';

import { Line, Project, ProjectCard, StartPageSection, Title } from "../styles/Styles";


export default function StartPage(){
  return(
    <StartPageSection>
      <PhotoContainer />
      <About/>
      <TecnologiesContainer />
      <Project>
        <Title> Projetos </Title>
        <Line />
        <ProjectCard>
        </ProjectCard>
        <ProjectCard>
        </ProjectCard>
        <ProjectCard>
        </ProjectCard>
      </Project>
    </StartPageSection>
  )
}
