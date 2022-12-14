import styled from 'styled-components';
/*
  backgroundDark = #ECEAB4
  backgroundLight = #F0EEB9
  colorFont = #1A190A
  */

/* Contact Styles */

const ContactPageSection = styled.section`
  border-top: 1px solid #1A190A;
  height: 100vh;
  width: 100%;
  background-color: #F0EEB9;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  flex-wrap: wrap;
  `

const ContactInfo = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 25px;
  background-color: #ECEAB4;

  margin: 0 auto;

  @media screen and (max-width: 550px){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const ContactTitle = styled.h2`
margin-bottom: 2.5rem;
font-size: 32px;
font-weight: 500;
font-weight: 300;
line-height: 48px;

@media screen and (max-width: 550px){
  font-size: 30px;
  line-height: 30px;
}
@media screen and (max-width: 550px){
    font-size: 27px;
    line-height: 28px;
  }
@media screen and (max-width: 360px){
  font-size: 25px;
  line-height: 25px;
}
`

const ContactSubTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 550px){
    font-size: 22px;
    line-height: 28px;
  }
  @media screen and (max-width: 460px){
    font-size: 19px;
    line-height: 28px;
  }
  @media screen and (max-width: 360px){
    font-size: 18px;
    line-height: 25px;
  }
`

const IconsContact = styled.span`
  margin-right: 12px;
  width: 24px;
  height: 24px;
`

const ContactFooter = styled.footer`
  margin-top: 27.5%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  ul{
    text-decoration: none;
    list-style: none;
  }

  li{
    justify-content: center;
    align-items: center;
    padding: 25px;
    display: inline;
  }

  a{
    text-decoration: none;
    color: #1A190A;
  }
`



/* Others Styles */

const StartPageSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #F0EEB9;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const PhotoContainer = styled.div`
  width: 32vw;
  height: 33vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  background-color: #ECEAB4;
  border-bottom: 1px solid #1A190A;

  @media screen and (max-width: 550px){
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    img{
      width: 86%;
      height: 50%;
    }
    h3{
      font-size: 15px;
      line-height: 28px;
    }
  }
`

const Photo = styled.img`
  width: 200px;
  height: 200px;
  gap: 15px;
  border: 1px solid #1A190A;
  border-radius: 50%;
  margin-bottom: 24px;
`
const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: #1A190A;

  @media screen and (max-width: 800px){
    font-size: 18px;
    margin-left: -3;
  }

  @media screen and (max-width: 550px){
    font-size: 17px;
    margin-left: -3;
  }
`

const AboutContainer = styled.div`
  width: 32vw;
  height: 67vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  line-height: 24px;
  gap: 38px;

  background-color: #ECEAB4;

  h3{
    margin-bottom: 26px;
  }

  @media screen and (max-width: 500px){

    li{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
    }
    span {
      display: flex;
      justify-content: center;
      font-size: 13px;
      flex-wrap: wrap;
      flex-direction: row;
    }
  }
`

const AboutFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
  ul{
    text-decoration: none;
    list-style: none;
  }

  li{
    justify-content: center;
    align-items: center;
    padding: 25px;
    display: inline;
  }

  a{
    text-decoration: none;
    color: #1A190A;
  }

  @media screen and (max-width: 650px){
    margin: 0 auto;
    width: 100%;
    span{
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
  @media screen and (max-width: 380px){
    width: auto !important;

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: initial;
    align-items: center;
    ul{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 0;
      width: auto !important;
    }
    li{
      width: auto !important;
    }
    span{
      font-size: 9px;
    }
  }
`

const Description = styled.p`
  margin: 0 auto;
  font-weight: 300;
  font-size: 16px;
  margin: 0 40px;
  line-height: 24px;
  color: #1A190A;

  @media screen and (max-width: 850px){
    font-size: 15px;
    line-height: 19px;
  }

  @media screen and (max-width: 550px){
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (max-width: 460px){
    font-size: 11px;
    line-height: 13px;
  }
  @media screen and (max-width: 360px){
    font-size: 10px;
    line-height: 11px;
  }
`

const Icons = styled.span`
  font-size: 19px;

  :hover{
    color: white !important;
  }

  @media screen and (max-width: 550px){
    flex-direction: row;
    font-size: 14px;
  }
`

const TecnologiesContainer = styled.div`
  width: 67vw;
  height: 33vh;
  flex-wrap: wrap;
  display: flex;
  gap: 9px;
`

const Line = styled.span`
  margin-top: 16px;
  width: 87%;
  display: flex;
  position: relative;
  height: 1px;
  border-bottom: 1px solid #1A190A;

  @media screen and (max-width: 1510px){
    width: 78%;
  }

  @media screen and (max-width: 892px){
    width: 68%;
  }

  @media screen and (max-width: 614px){
    width: 60%;
  }

  @media screen and (max-width: 550px){
    width: 50%;
  }
`

const ImgContainer = styled.div`
  width: 100%;
  height: 28vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: 880px){
    margin-bottom: 40px;
  }

  @media screen and (max-width: 400px){
    margin-bottom: px;
  }
`

const ImgTecnologies = styled.img`
  margin-left: 22px;
  width: 125px;
  height: 125px;

  @media screen  and (max-width: 880px){
    margin-left: 15px;
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 550px){
    width: 60px;
    height: 60px;
    margin-left: 14px;
  }

  @media screen and (max-width: 460px){
    width: 40px;
    height: 40px;
  }
`

const Project = styled.div`
  width: 67.2vw;
  height: 67vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  h3{
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    margin-right: 13px;
  }
`

const ProjectCard = styled.div`

`
const TitleCard = styled.h4`

`

const DescriptionCard = styled.p`

`

/* Exports */

export {
  Title,
  Description,
  ContactTitle,
  ContactPageSection,
  ContactInfo,
  ContactSubTitle,
  ContactFooter,
  IconsContact,
  Icons,
  StartPageSection,
  PhotoContainer,
  Photo,
  AboutContainer,
  AboutFooter,
  TecnologiesContainer,
  Line,
  ImgTecnologies,
  ImgContainer,
  DescriptionCard,
  TitleCard,
  Project,
  ProjectCard,
};
