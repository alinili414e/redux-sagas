import React, { useState } from "react";
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';

function App() {
  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  };
  const addEntry = (desc, value) => {
    const result = entries.concat({
      id: entries.length + 1 + desc.length,
      desc,
      value,
    });
    setEntries(result);
  }
  const [entries, setEntries] = useState(initialEntries)
  return (
    <Container>

      <MainHeader title="Budget" />
      <DisplayBalance size='small' title="Your Balance:" value="2,550.53" />
      <DisplayBalances />
      <MainHeader type="h3" title="History" />

      <EntryLines entries={entries} deleteEntry={deleteEntry} />
      <MainHeader type="h3" title="Add new Transaction" />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}
export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work Income",
    value: "$100,000",
    isExpense: false
  },
  {
    id: 2,
    description: "Water Bill",
    value: "$20",
    isExpense: true

  },
  {
    id: 3,
    description: "Rent",
    value: "$3000",
    isExpense: true
  },
  {
    id: 4,
    description: "Power Bill",
    value: "$55",
    isExpense: true
  }

]
