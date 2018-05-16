import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { customTheme, Section } from "assets/styles/theme";
import Header from "components/Header";
import Wrapper from "containers";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <Section className="App">
          <Header />
          <Wrapper />
        </Section>
      </ThemeProvider>
    );
  }
}

export default App;
