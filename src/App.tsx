import './App.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Fruits from './components/Container'

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <section>
          <Fruits />
        </section>
      </DndProvider>
    </>
  )
}

export default App
