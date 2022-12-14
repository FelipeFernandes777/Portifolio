import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { AboutContainer, AboutFooter, Description, Icons, Title } from "../../styles/Styles";

export default function AboutMe(){
  return(
    <AboutContainer>
    <Title>Sobre Mim</Title>
    <Description>
      Olá me chamo Felipe. <br />
      Tenho 20 anos.Moro em uma cidade no interior de Minas Gerais, chamada Coronel Fabriciano. <br/>
      Atualmente estou cursando um curso Tecnologo em: Analise e Desenvolvimento de Sistemas. <br/>
      Hobbies: <br/>
      Gosto bastante de ler, fazer amigos e tocar violão.
    </Description>
    <AboutFooter>
    <ul>
        <li>
        <a href="https://github.com/FelipeFernandes777?tab=repositories">
          <Icons>
            <FiGithub />
          </Icons>
        </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/felipe-fernandes-ab7a3622a/">
          <Icons>
            <FiLinkedin />
          </Icons>
        </a>
        </li>
        <li>
          <a href="">
          <Icons>
            <FiInstagram />
          </Icons>
          </a>
        </li>
      </ul>
    </AboutFooter>
    </AboutContainer>
  )
}
