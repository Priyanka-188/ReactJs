import './App.css'
import Butterfly from './components/Butterfly'
import Card from './components/Card'

function App() {
 
  const details ={
    name: "Fashion jacket",
    price: "500 Rs",
    inStock: "In stock",
  }

  return (
    <>
    <h1 className='bg-slate-600 rounded-xl text-white p-8'> Jai Radhe Shyam..This is Props and Component practice tutorial</h1>

    <Butterfly name="Radha Raani" color='swarn' src="https://cdn.pixabay.com/photo/2023/07/04/10/30/dragon-fly-8105990_1280.jpg"/>
    <Butterfly name='Kisori' color = "KrishnKanta" src="https://cdn.pixabay.com/photo/2016/08/24/10/43/krishna-1616702_1280.jpg"/>



    <Card name="jacket" price ="200Rs" inStock ="In Stock" url="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_1280.jpg"/>
    <Card name ={details.name} price={details.price} inStock ={details.inStock} url="https://cdn.pixabay.com/photo/2019/01/27/22/31/braids-3959201_1280.jpg"/>
    </>
  )
}

export default App
