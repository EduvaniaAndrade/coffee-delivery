import {
  CoffeeSelectedContainer,
  RequestContainer,
  RequestContent,
} from './styles'
import { RequestForm } from './components/RequestForm'
import { PaymentMode } from './components/PaymentMode'
import { CoffeeCard } from './components/CoffeeCard'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { CoffeeContext } from '../../context/CoffeesContext'
import { useContext } from 'react'

export function Request() {
  const { addUserAddress } = useContext(CoffeeContext)

  return (
    <RequestContainer>
      <form onSubmit={addUserAddress}>
        <RequestContent>
          <h1>Complete seu pedido</h1>

          <RequestForm />
          <PaymentMode />
        </RequestContent>

        <CoffeeSelectedContainer>
          <h1>Cafés selecionados</h1>
          <CoffeeCard />
        </CoffeeSelectedContainer>
      </form>
    </RequestContainer>
  )
}
