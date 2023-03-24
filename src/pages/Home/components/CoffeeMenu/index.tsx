import {
  BuyContent,
  CoffeeCard,
  CoffeeContainer,
  CoffeeContent,
  IconCarAffect,
  IconContent,
  Title,
} from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import { Minus, Plus } from 'phosphor-react'
import { coffeeData } from '../../../../data'
import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../../../context/CoffeesContext'

export function CoffeeMenu() {
  const {
    coffees,
    setRemoteCoffees,
    decrementItem,
    incrementItem,
  } = useContext(CoffeeContext)

  useEffect(() => {
    setRemoteCoffees(coffeeData)
  }, [])

  return (
    <CoffeeContainer>
      <h1>Nossos Cafés</h1>
      <CoffeeContent>
        {coffees?.map((coffee) => {
          return (
            <CoffeeCard key={coffee.id}>
              <img src={coffee.src} alt="coffee" />
              <Title>{coffee.nome}</Title>
              <h3>{coffee.tipo}</h3>
              <p>{coffee.descricao}</p>
              <BuyContent>
                <strong>R${coffee.preco}</strong>
                <div>
                  <IconCarAffect onClick={() => decrementItem(coffee)}>
                    <Minus />
                  </IconCarAffect>
                  <span>{coffee.qtd}</span>
                  <IconCarAffect onClick={() => incrementItem(coffee)}>
                    <Plus />
                  </IconCarAffect>
                </div>
                <IconContent onClick={() => (location.href = '/request')}>
                  <FaShoppingCart />
                </IconContent>
              </BuyContent>
            </CoffeeCard>
          )
        })}
      </CoffeeContent>
    </CoffeeContainer>
  )
}
