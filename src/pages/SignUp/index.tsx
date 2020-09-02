import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErros from '../../utils/getValidationErrors';

/** importar tudo que esta dentro do yup em uma variavel chamado YUP */

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  /** recebe dados do unform/form e passa e retorna os dados */
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        /** validar um objeto */
        const schema = Yup.object().shape({
          name: Yup.string().required('nome obrigatorio'),
          email: Yup.string()
            .required('e-mail obrigatorio')
            .email('digite um email valido'),
          password: Yup.string().min(6, 'no minimo 6 digito'),
        });
        /** verificando se os dados do input sao validos  */
        await schema.validate(data, {
          /** retorna todos os erros de um só vez */
          abortEarly: false,
        });
        await api.post('users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro Realizado',
          description: 'Voce ja pode fazer o seu logon no GoBarber!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);

          formRef.current?.setErrors(errors);

          return;
        }
        /** disparar um toast */
        addToast({
          type: 'error',
          title: 'Error no cadastro',
          description: 'ocorreu um erro ao fazer cadastro tente novamente',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Gobarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
