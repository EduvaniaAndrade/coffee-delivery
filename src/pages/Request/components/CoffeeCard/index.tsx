import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CoffeeSelected,
  CoffeeValueDetails,
  CoffeeValueInfo,
  Container,
  ContainerScroll,
  Counter,
  Details,
  InfoSelectedCoffee,
  Separator,
} from './styles'
import { useContext, useEffect, Fragment } from 'react'
import { CoffeeContext } from '../../../../context/CoffeesContext'

export function CoffeeCard() {
  const {
    coffees,
    valueTotalItem,
    setRemoteCoffees,
    decrementItemAndRemove,
    incrementItem,
    removeFromList,
  } = useContext(CoffeeContext)

  useEffect(() => {
    const data = localStorage.getItem('@coffee-delivery:coffees')
    const dataInString = JSON.parse(data as string)[0]
    setRemoteCoffees(dataInString)
  }, [])

  const total = valueTotalItem + 3.5

  return (
    <Container>
      <ContainerScroll>
        {coffees?.map((item) => (
          <Fragment key={item.id}>
            <CoffeeSelected>
              <InfoSelectedCoffee>
                <img src={item.src} alt="coffee" />
                <div>
                  <h2>{item.tipo}</h2>
                  <Details>
                    <Counter>
                      <Minus
                        className="icon"
                        onClick={() => decrementItemAndRemove(item)}
                      />
                      {item.qtd}
                      <Plus
                        className="icon"
                        onClick={() => incrementItem(item)}
                      />
                    </Counter>
                    <button onClick={() => removeFromList(item)} type="button">
                      <Trash />
                      <span>Remover</span>
                    </button>
                  </Details>
                </div>
              </InfoSelectedCoffee>
              <span>R$ {item.preco}</span>
            </CoffeeSelected>
            <Separator />
          </Fragment>
        ))}
      </ContainerScroll>

      <CoffeeValueInfo>
        <CoffeeValueDetails>
          <span>Total de items</span>
          <span>R$ {valueTotalItem}</span>
        </CoffeeValueDetails>
        <CoffeeValueDetails>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </CoffeeValueDetails>
        <CoffeeValueDetails>
          <h3>Total</h3>
          <h3>R$ {total}</h3>
        </CoffeeValueDetails>
      </CoffeeValueInfo>
      <button type="submit" onClick={() => (location.href = '/sucess')}>
        Confirmar pedido
      </button>
    </Container>
  )
}
