import { MapPinLine } from 'phosphor-react'
import { useForm, useFormContext } from 'react-hook-form'
import { Title } from '../../styles'
import { Container, Content } from './styles'
import { useState, useContext } from 'react'
import { CoffeeContext } from '../../../../context/CoffeesContext'

export function RequestForm() {
  const {
    numero,
    setNumero,
    rua,
    setRua,
    setBairro,
    setCidade,
    setComplemento,
    bairro,
    cidade,
    complemento,
  } = useContext(CoffeeContext)

  return (
    <Container>
      <Title>
        <MapPinLine />
        <div>
          <h2>Endereço de Entrega</h2>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </Title>
      <Content>
        <input
          placeholder="Rua"
          type="text"
          name="rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
        <div>
          <input
            placeholder="Número"
            type="number"
            name="numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <input
            placeholder="Bairro"
            type="text"
            name="bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Cidade"
            type="text"
            name="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <input
            placeholder="Complemento"
            type="text"
            name="complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </div>
      </Content>
    </Container>
  )
}
