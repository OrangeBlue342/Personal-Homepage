import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight} from "./theme";
import { selectIsDarkTheme } from "../../common/themeSlice";
import { PersonalHomepage } from "../../features/personalHomepage";



export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
    <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
