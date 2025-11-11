import { useEffect } from "react";
import { Content } from "./Content";
import { StyledGithubIcon, Header, Section, MyRecentProjects } from "./styled";
import { SubHeader } from "../Subheader";
import { githubUserName } from "./githubUserName";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomepageSlice";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(githubUserName));
    }, [dispatch]);

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio</SubHeader>
                <MyRecentProjects>My Recent Projects</MyRecentProjects>
            </Header>

            < Content 
               status={repositoriesStatus}
               repositories={repositories}
            />

        </Section>
    );
};