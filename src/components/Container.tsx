import Apple from './Apple'
import Basket from './Basket'

export const ItemTypes = {APPLE: 'apple'};

export const Container = () => {
  return (
    <div>
      <Basket />
      <Apple />
    </div>
  )
}

export default Container;