import React, { useRef, useCallback, useState } from 'react'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import api from '../../services/api'
import getValidationErrors from '../../utils/getValidationErrors'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container } from './styles'

interface NewsletterFormData {
  name: string
  email: string
}

const Newsletter: React.FC = () => {
  const [success, setSuccess] = useState(false)
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: NewsletterFormData) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Preencha com seu e-mail')
          .email('Digite um e-mail válido'),
        name: Yup.string().required('Preencha seu nome completo')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      await api.post('/newsletter', {
        name: data.name,
        email: data.email
      })

      setSuccess(true)
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }
    }
  }, [])

  return (
    <Container>
      {success ? (
        <div className="success">
          <h1>Seu e-mail foi cadastrado com sucesso!</h1>
          <p>
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </p>
          <Button onClick={() => setSuccess(false)}>
            Cadastrar novo e-mail
          </Button>
        </div>
      ) : (
        <>
          <h1>Participe de nossas news com promoções e novidades!</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Digite seu nome" />
            <Input name="email" placeholder="Digite seu e-mail" />

            <Button type="submit">Eu quero!</Button>
          </Form>
        </>
      )}
    </Container>
  )
}

export default Newsletter
