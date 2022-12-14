import { ContactFooter, FormContact } from '../components/index'

import { ContactPageSection } from "../styles/Styles"

export default function ContactPage(){
  return(
    <ContactPageSection>
      <FormContact />
      <ContactFooter />
    </ContactPageSection>
  )
}
