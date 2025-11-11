import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import { Address, EmailLink, EmailWrapper, LetsTalk, Paragraph, Wrapper } from "./styled";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's Talk!</LetsTalk>
        <Address>
            <EmailWrapper>
                <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </EmailWrapper>
            <Paragraph>
             I am always open to new projects. If you have a project, dashboard, mobile app or webiste, 
             and looking for Frontend Developer, I hereby offer my services.
            </Paragraph>
            <SocialIcons />
        </Address>
    </Wrapper>
);