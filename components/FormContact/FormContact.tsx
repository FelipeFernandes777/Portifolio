import {
  ContactInfo,
  ContactSubTitle,
  ContactTitle,
  Description,
  IconsContact
} from "../../styles/Styles"

import { FiPhone } from "react-icons/fi"
import { MdOutlineEmail } from "react-icons/md"

export default function FormContato() {
  return (
    <ContactInfo>
      <ContactTitle>Contato</ContactTitle>
      <ContactSubTitle>
        <IconsContact>
          <MdOutlineEmail />
        </IconsContact>
        Email
      </ContactSubTitle>
      <Description>felipe524.fernandes@gmail.com</Description>
      <ContactSubTitle>
        <IconsContact>
          <FiPhone />
        </IconsContact>
        Telefone
      </ContactSubTitle>
      <Description>(31) 98621-2400</Description>
    </ContactInfo>
  )
}
