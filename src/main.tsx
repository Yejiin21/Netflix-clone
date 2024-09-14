import { createRoot } from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <HelmetProvider>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </HelmetProvider>
);
