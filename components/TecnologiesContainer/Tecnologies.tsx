import { ImgContainer, ImgTecnologies, Line, TecnologiesContainer, Title } from "../../styles/Styles"

export default function Tecnologies(){
  return(
    <TecnologiesContainer>
    <Title>Tecnologias</Title>
    <Line />
    <ImgContainer>
    <ImgTecnologies src="https://logospng.org/download/html-5/logo-html-5-256.png" alt="Logo-HTML"/>
    <ImgTecnologies src="https://logospng.org/download/css-3/logo-css-3-256.png" alt="Logo-CSS"/>
    <ImgTecnologies src="https://logospng.org/download/javascript/logo-javascript-256.png" alt="Logo-JavaScript"/>
    <ImgTecnologies src="https://logospng.org/download/typescript/typescript-256.png" alt="Logo-TypeScript"/>
    <ImgTecnologies src="https://logospng.org/download/react/logo-react-256.png" alt= "Logo React" />
    <ImgTecnologies src="https://i.pinimg.com/favicons/e99c01086003420e78f516117d0291bc33561f8d95abcd29961f36df.png?ade12638984a3f8638c369f033ed2096" alt="Logo-Styled-Components"/>
    <ImgTecnologies src="https://pulkitgangwar.gallerycdn.vsassets.io/extensions/pulkitgangwar/nextjs-snippets/0.0.5/1627273597722/Microsoft.VisualStudio.Services.Icons.Default" alt="Logo-NextJS"/>
    <ImgTecnologies src="https://logospng.org/download/node-js/logo-node-js-256.png" alt="Logo-NodeJS"/>
    </ImgContainer>
  </TecnologiesContainer>
  )
}
