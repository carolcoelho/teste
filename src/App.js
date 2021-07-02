import './App.css';
import Header from './components/header';
import Categories from './components/categories';
import Content from './components/content';

function App() {
  return (
    <div className="App">

      <Header />
      <div className="container">
        <Categories />
        <Content />
      </div>
    </div>
  )
}

export default App;
