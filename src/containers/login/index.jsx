import Logo from '../../assets/logo.svg';
import {
  Button,
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles.js';

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo-devburguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha</span>
        </Title>
        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" />
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </InputContainer>
          <Button>Entrar</Button>
          <p>
            Não possui conta? <a>Clique aqui</a>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
