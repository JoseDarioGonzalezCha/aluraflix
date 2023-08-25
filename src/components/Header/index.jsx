//image
import logo from "../../assets/logo.png";

//Components

//Styles
import { HeaderContainer, Button, Img } from "./Header.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Img src={logo} alt="logo" />
      <Button>New Video</Button>
    </HeaderContainer>
  );
};
