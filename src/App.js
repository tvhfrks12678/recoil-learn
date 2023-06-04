import logo from './logo.svg';
import './App.css';
import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList';
import ProfileDisplay from './features/profiles';

function App() {
  return (
    <div className="App">
      <h1>Recoil</h1>
      <h2>Learn</h2>
      <RecoilRoot>
        <ProfileDisplay />
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
