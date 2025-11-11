import { ButtonLink } from "../../../ButtonLink";
import { githubUserName } from "../../githubUserName";
import { Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as WarningIcon } from "./warning.svg";

export const ErrorBox = () => (
    <Wrapper>
        <WarningIcon />
        <Header>Ooops! Something went wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github&nbsp;projects. <br />
            You can check them directly&nbsp;on&nbsp;Github.
        </Paragraph>
        <ButtonLink href={`https://github.com/${githubUserName}`} target="_blank">Go to Github</ButtonLink>
    </Wrapper>
);