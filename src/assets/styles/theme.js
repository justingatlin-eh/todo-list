import styled from "styled-components";

const customTheme = {
  font: {
    sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif'
  }
};

const Section = styled.section`
  font-family: ${customTheme.font.sansSerif};
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;

export { Button, customTheme, Section };
