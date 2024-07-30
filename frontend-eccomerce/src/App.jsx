
import ProductOptions from './components/ProductOptions';
import ReactDOM from 'react-dom';

const optionsText = ["39", "41", "42", "44"];
const optionsColor = ["#ee9595", "#d28de4", "#a7dfc5", "#e4e295"];

const App = () => {
  return (
    <div>
      <h3 color='#8F8F8F'>Tamanhos</h3>
      <ProductOptions
        options={optionsText}
        radius="8px"
        shape="square"
        type="text"
      />
      
      <h3 color='#8F8F8F'>Cores</h3>
      <ProductOptions
        options={optionsColor}
        shape="circle"
        type="color"
      />
    </div>
  );
};



ReactDOM.render(<App />, document.getElementById('root'));
export default App