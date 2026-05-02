import { MyFooter } from "./components/myFooter/MyFooter";
import { MyMain } from "./components/myMain/MyMain";
import { MyNav } from "./components/myNav/MyNav"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
const App = () => {

  return (
    <>
      <MyNav />
      <MyMain />
      <MyFooter />
    </>
  )
}

export default App
