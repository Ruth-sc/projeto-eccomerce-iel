
import ReactDOM from 'react-dom';
import Section from './components/Section';

const App = () => {
  return (
    <div>
      
      <Section title="Seção 2" titleAlign="center" link={{ href: '', text: '' }}>
        <p>Este é o conteúdo da seção 2.</p>
      </Section>
      
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
export default App