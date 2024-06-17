import './App.css';
import ProductList from './Components/ProductList';
import ProductForm from './Components/ProductForm';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <div className='container'>
      <Navbar/>
      <div className='row'>
        <div className='col-md-6'><ProductForm/></div>
        <div className='col-md-6'><ProductList/></div>
      </div>
    </div>
    </>

  );
}

export default App;
