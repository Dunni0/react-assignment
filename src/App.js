import { Container } from "./components/Container.styled";
import Form from "./components/Form";
import { ImageContainer } from "./components/ImageContainer.styled";
import { Img } from "./components/Img.styled";

function App() {
  return (
    <Container>
     <ImageContainer>  
        <Img src="./images/undraw_authentication_re_svpt 1.png" alt="login image"/>
     </ImageContainer>
     <div>
        <Form />
     </div> 
    </Container>
  );
}

export default App;
