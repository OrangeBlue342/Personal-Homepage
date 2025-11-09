import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight} from "./theme";
import { selectIsDarkTheme } from "../../common/themeSlice";



function App() {
  

  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
