import JoannaCzubProfile from "./PersonalPhoto.jpg";
import {Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper } from "./styled";
import { email } from "../email";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={JoannaCzubProfile} alt="Joanna Czub" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Joanna Czub</Name>
            <Summary>
                👩‍🦰💻 I am enthusiastic Frontend Developer with React, currently looking for new job opportunities.
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);