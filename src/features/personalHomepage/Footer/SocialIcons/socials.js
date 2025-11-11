import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon} from "./icons/Github.svg";
import { ReactComponent as FacebookIcon } from "./icons/Facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/LinkedIn.svg";

export const socials = [
    {
        name: "GitHub",
        url: "http://github.com",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "http://facebook.com",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "LinkedIn",
        url: "http://linkedin.com",
        Icon: styleIcon(LinkedInIcon),
    },
];