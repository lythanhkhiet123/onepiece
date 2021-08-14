import ReactDOM from 'react-dom';
import GroupAll from './CardList/GroupAll';
import './style/GroupAll.css';
const App: React.FC = () => {
  return (
    <div className="App">
      <GroupAll />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
