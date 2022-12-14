import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { ContactFooter, Icons } from '../../styles/Styles';

export default function FooterContact() {
  return(
    <div>
      <ContactFooter>
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
      </ContactFooter>
    </div>
  )
}
