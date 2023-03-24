import logotipo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'
import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../context/CoffeesContext'

export function Header() {
  const { itemNumbers, shadow, coffeesNumbers } = useContext(CoffeeContext)

  return (
    <>
      <HeaderContainer className={shadow}>
        <img src={logotipo} alt="Logotipo" />
        <nav>
          <span>
            <FaMapMarkerAlt />
            Luanda, Angola
          </span>
          <span className="carIcon">
            <FaShoppingCart />
            <span className={coffeesNumbers}>{itemNumbers}</span>
          </span>
        </nav>
      </HeaderContainer>
    </>
  )
}
