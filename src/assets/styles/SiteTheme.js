import styled, { injectGlobal } from "styled-components";

injectGlobal`
  html, body, div, section {
    margin: 0;
    padding: 0;
  }
`;

const customTheme = {
  font: {
    sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "16px",
    lineHeight: "24px"
  }
};

export const Container = styled.div`
  width: 80%;
  padding: 10px;
`;

export const SiteTheme = styled.div`
  font-family: ${customTheme.font.sansSerif};
  font-size: ${customTheme.font.fontSize};
  line-height: ${customTheme.font.lineHeight};
`;

export const Section = styled.section``;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;

export const FormButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #eeeeee;
  display: ${props => (props.showModal ? "flex" : "none")};
  justify-content: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  height: 25px;
  width: 25px;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Label = styled.label`
  text-transform: capitalize;
  display: inline-block;
  width: 15%;
`;

export const Input = styled.input.attrs({
  type: props => (props.type ? props.type : "text")
})`
  display: inline-block;
  width: 60%;
`;

export const Select = styled.select``;
