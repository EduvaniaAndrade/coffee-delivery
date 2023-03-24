import CoffeeDelivery from '../../assets/Imagem.svg'
import { CoffeeMenu } from './components/CoffeeMenu'
import { Container, Content, ContentMain, IconContent } from './style'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Home() {
  return (
    <Container>
      <section>
        <div>
          <ContentMain>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>
          </ContentMain>
          <div>
            <Content>
              <div>
                <IconContent statusColor="dark_yellow">
                  <ShoppingCart />
                </IconContent>
                <span>Compra simples e segura</span>
              </div>
              <div>
                <IconContent statusColor="gray">
                  <Package />
                </IconContent>
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <IconContent statusColor="yellow">
                  <Timer />
                </IconContent>
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <IconContent statusColor="purple">
                  <Coffee />
                </IconContent>
                <span>O café chega fresquinho até você</span>
              </div>
            </Content>
          </div>
        </div>
        <div>
          <img src={CoffeeDelivery} alt="Coffee Delivery" />
        </div>
      </section>

      <CoffeeMenu />
    </Container>
  )
}
