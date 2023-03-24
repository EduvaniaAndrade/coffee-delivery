import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
import { Address, Coffee } from '../reducers/Coffees/reducer'

interface CoffeesContextType {
  coffees: Coffee[]
  address: Address
  itemNumbers: number
  valueTotalItem: number
  coffeesNumbers: string
  shadow: string
  numero: string
  rua: string
  bairro: string
  cidade: string
  complemento: string
  tipoPagamento: string
  incrementItem: (coffee: Coffee) => void
  decrementItem: (coffee: Coffee) => void
  decrementItemAndRemove: (coffee: Coffee) => void
  setRemoteCoffees: (coffees: Coffee[]) => void
  removeFromList: (coffees: Coffee) => void
  addUserAddress: (e: any) => void
  addAddressData: (address: Address) => void

  setNumero: (e: any) => void
  setRua: (e: any) => void
  setBairro: (e: any) => void
  setComplemento: (e: any) => void
  setCidade: (e: any) => void
  setTipoPagamento: (e: any) => void
}

type CoffeeProps = {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeesContextType)

export function CoffeeContextProvider({ children }: CoffeeProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [address, setAddress] = useState<Address>({} as Address)
  const [itemNumbers, setItemNumbers] = useState(0)
  const [valueTotalItem, setValueTotalItem] = useState(0)
  const [coffeesNumbers, setCoffeesNumbers] = useState('hide')
  const [shadow, setShadow] = useState('boxShadow')

  const [numero, setNumero] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [complemento, setComplemento] = useState('')
  const [tipoPagamento, setTipoPagamento] = useState('')

  function addUserAddress(e: any) {
    e.preventDefault()
    const converted = parseInt(numero)
    const data = { converted, rua, bairro, cidade, complemento, tipoPagamento }
    localStorage.setItem('@coffee-delivery:userAddress', JSON.stringify(data))
  }

  function addAddressData(address: Address) {
    setAddress(address)
  }

  function setRemoteCoffees(coffees: Coffee[]) {
    setCoffees(coffees)
  }

  function incrementItem(coffee: Coffee) {
    const newCoffee = coffees.map((item) => {
      if (item.id === coffee.id) {
        const qtd = item.qtd + 1
        return {
          ...item,
          qtd,
        }
      }
      return item
    })
    setCoffees(newCoffee)
  }

  function removeItem(coffee: Coffee) {
    const newCoffee = coffees.map((item) => {
      if (item.id === coffee.id && item.qtd > 0) {
        const qtd = item.qtd - 1
        return {
          ...item,
          qtd,
        }
      }
      return item
    })
    return newCoffee
  }

  function decrementItem(coffee: Coffee) {
    setCoffees(removeItem(coffee))
  }

  function decrementItemAndRemove(coffee: Coffee) {
    const selectedCoffees = coffees.filter((item) => item.qtd > 0)
    const count = coffee.qtd - 1
    if (count === 0 && selectedCoffees.length === 1) {
      localStorage.clear()
      window.location.pathname = '/'
    } else if (count === 0) {
      const newCoffee = coffees.filter((item) => item.id !== coffee.id)
      setCoffees(newCoffee)
      return
    }
    setCoffees(removeItem(coffee))
  }

  function removeFromList(coffee: Coffee) {
    const selectedCoffees = coffees.filter((item) => item.qtd > 0)
    const count = coffee.qtd - coffee.qtd
    if (count === 0 && selectedCoffees.length === 1) {
      localStorage.clear()
      window.location.pathname = '/'
    } else if (count === 0) {
      const newCoffee = coffees.filter((item) => item.id !== coffee.id)
      setCoffees(newCoffee)
      return
    }
  }

  useEffect(() => {
    const selectedCoffees = coffees.filter((item) => item.qtd > 0)
    if (selectedCoffees.length > 0) {
      const ValueByCoffee = selectedCoffees.map((item) => {
        const value = item.preco * item.qtd
        return value
      })
      var totalForCoffee = ValueByCoffee.reduce(function (totalForCoffee, i) {
        return Math.round((totalForCoffee + i + Number.EPSILON) * 100) / 100
      })
      const mapingItem = selectedCoffees.map((itens) => {
        const itensQtd = itens.qtd
        return itensQtd
      })
      const itemNumbers = mapingItem.reduce(function (mapingFinal, i) {
        return mapingFinal + i
      })
      localStorage.setItem(
        '@coffee-delivery:coffees',
        JSON.stringify([selectedCoffees, totalForCoffee]),
      )
      setValueTotalItem(totalForCoffee)
      setItemNumbers(itemNumbers)

      if (itemNumbers > 0) {
        setCoffeesNumbers('show')
      }
    }

    {
      window.location.pathname !== '/'
        ? setShadow('removeShadow')
        : setShadow('boxShadow')
    }
  }, [coffees])

  return (
    <CoffeeContext.Provider
      value={{
        incrementItem,
        decrementItem,
        coffees,
        address,
        valueTotalItem,
        itemNumbers,
        coffeesNumbers,
        shadow,
        numero,
        rua,
        bairro,
        cidade,
        complemento,
        tipoPagamento,
        setRemoteCoffees,
        decrementItemAndRemove,
        removeFromList,
        addUserAddress,
        setNumero,
        setRua,
        setBairro,
        setCidade,
        setComplemento,
        setTipoPagamento,
        addAddressData,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
