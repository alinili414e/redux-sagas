
import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
function App() {
  return (
    <Container>
      <DisplayBalances />
      <MainHeader title="Budget" />
      <DisplayBalance size='small' title="Your Balance:" value="2,550.53" />
      <MainHeader type="h3" title="History" />
      <EntryLines desc="Income" value="$10,000" />
      <EntryLines desc="Expense" value="$10,000" isExpense />
      <MainHeader type="h3" title="Add new Transaction" />
      <NewEntryForm />
    </Container>
  );
}
export default App;
