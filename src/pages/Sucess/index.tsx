import illustration from '../../assets/Illustration.svg'
import { Content, ContentInfo, IconContent, SucessContainer } from './styles'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useEffect, useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeesContext'

export function Sucess() {
  const { itemNumbers, address, addAddressData, setItemNumbers } = useContext(
    CoffeeContext,
  )

  useEffect(() => {
    const data = localStorage.getItem('@coffee-delivery:userAddress')
    const dataString = JSON.parse(data as string)
    const dataItem = localStorage.getItem('@coffee-delivery:coffees')
    const item = JSON.parse(dataItem as string)
    setItemNumbers(item[2])
    addAddressData(dataString)
    console.log(itemNumbers)
  }, [])

  return (
    <SucessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <Content>
        <ContentInfo>
          <div>
            <IconContent iconsColors="purple">
              <MapPin />
            </IconContent>
            <p>
              Entrega em{' '}
              <strong>
                Rua {address.rua}, {address.numero}
              </strong>{' '}
              {address.bairro}- {address.cidade}, {address.complemento}
            </p>
          </div>
          <div>
            <IconContent iconsColors="yellow">
              <Timer />
            </IconContent>
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </div>
          <div>
            <IconContent iconsColors="dark_yellow">
              <CurrencyDollar />
            </IconContent>
            <p>
              Pagamento na entrega <br />
              <strong>{address.tipoPagamento}</strong>
            </p>
          </div>
        </ContentInfo>

        <div>
          <img src={illustration} alt="Illustration" />
        </div>
      </Content>
    </SucessContainer>
  )
}
