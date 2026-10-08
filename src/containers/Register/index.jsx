import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api.js';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles.js';

export function Register() {

  const schema = yup
    .object({
      name: yuo.string().required('O nome é obrigatório'),
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password', 'As senhas devem ser iguais')])
        .required('Confirme a sua senha'), 
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Cadastro realizado com sucesso!',
        error: 'Ops, algo de errado! Tente novamente.',
      }
    );

    console.log(response);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo-devburguer" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <InputContainer>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register('name')}
            />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register('password')}
            />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Confirmar Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register('confirmPassword')}
            />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Criar Conta</Button>
          <p id="register">
            Já possui conta? <a>Clique aqui</a>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
