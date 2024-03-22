import Header from './components/Header';
import Cards from './components/Cards';
import { data } from './data.jsx';
import Footer from './components/Footer';
import './App.css';

function App() {
    const mappedData = data.map((item) => {
        return <Cards key={item.id} item={item} />;
    });
    return (
        <div className="App">
            <Header />
            {mappedData}
            <Footer />
        </div>
    );
}

export default App;
