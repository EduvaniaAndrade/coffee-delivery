import logotipo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'
import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../context/CoffeesContext'

export function Header() {
  const {
    itemNumbers,
    setItemNumbers,
    shadow,
    coffeesNumbers,
    setCoffeesNumbers,
  } = useContext(CoffeeContext)

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
            <span className={itemNumbers === 0 ? 'hide' : 'show'}>
              {itemNumbers}
            </span>
          </span>
        </nav>
      </HeaderContainer>
    </>
  )
}
