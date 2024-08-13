import CustomList from "./components/list/list";
import { CustomOrderList } from "./components/list/list";



const App= ()=>{
  return(
    <div>
    <h1>hello world!</h1>
    <CustomList></CustomList>
    <CustomList></CustomList>
    <CustomList></CustomList>
    <CustomOrderList></CustomOrderList>
    </div>
  )
}
export default App;