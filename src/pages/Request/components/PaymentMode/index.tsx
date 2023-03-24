import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { Title } from '../../styles'
import { Container, PaymentForms, PaymentContainer } from './styles'
import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CoffeeContext } from '../../../../context/CoffeesContext'

export function PaymentMode() {
  const { setTipoPagamento } = useContext(CoffeeContext)
  const [index, setIndex] = useState(1)

  const handleSelectedPayment = (index: number) => {
    setIndex(index)

    if (index === 1) {
      setTipoPagamento('Cartão de crédito')
    } else if (index === 2) {
      setTipoPagamento('Cartão de débito')
    } else if (index === 3) {
      setTipoPagamento('Dinheiro')
    }
  }

  return (
    <Container>
      <Title>
        <CurrencyDollar />
        <div>
          <h2>Pagamento</h2>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </Title>
      <PaymentForms>
        <PaymentContainer
          className={index === 1 ? 'selected' : 'notSelected'}
          onClick={() => handleSelectedPayment(1)}
        >
          <CreditCard />
          <input
            type="text"
            value="Cartão de crédito"
            name="tipoPagamento"
            readOnly
          />
        </PaymentContainer>
        <PaymentContainer
          className={index === 2 ? 'selected' : 'notSelected'}
          onClick={() => handleSelectedPayment(2)}
        >
          <Bank />
          <input
            type="text"
            name="tipoPagamento"
            value="Cartão de débito"
            readOnly
          />
        </PaymentContainer>
        <PaymentContainer
          className={index === 3 ? 'selected' : 'notSelected'}
          onClick={() => handleSelectedPayment(3)}
        >
          <Money />
          <input type="text" value="Dinheiro" name="tipoPagamento" readOnly />
        </PaymentContainer>
      </PaymentForms>
    </Container>
  )
}
