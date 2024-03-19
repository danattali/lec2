import './App.css'
import Header from './components/Header'
import Counter from './components/Counter/Counter'
import About from './components/About/About'
import Spinners from './components/Spinners/Spinners'
import Button from './components/Button/Buttons'
import Card from './components/Card/Card'
import FlexRow from './components/Flex/FlexRow'
import Input from './components/Input/Input'



function App() {


  return (

    <div>


      <Header />
      <About />
      <Counter />
      <Spinners />
      <Button variant='primary' onClick={() => alert("hi")} text="HI" color="red" />
      <h1> Hello world</h1>
      <Card>
        <FlexRow>
          <p>Jack Of Spades</p>
          <p>Jack Of Spades</p>
          <p>Jack Of Spades</p>
          <p>Jack Of Spades</p>
        </FlexRow>
      </Card>
      <Card>
        <p>Jack Of Spades</p>
        <p>Jack Of Spades</p>
        <p>Jack Of Spades</p>
        <p>Jack Of Spades</p>
      </Card>

      <Input label="Name" placeholder="Enter your name" />
    </div >
  )
}

export default App
