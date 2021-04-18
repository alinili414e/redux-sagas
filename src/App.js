
import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
function App() {
  return (
    <Container>
      <DisplayBalances />
      <MainHeader title="Budget" />
      <DisplayBalance size='small' title="Your Balance:" value="2,550.53" />
      <MainHeader type="h3" title="History" />
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Something</Grid.Column>
            <Grid.Column width={3} textAlign="right">$10,000</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Something Else</Grid.Column>
            <Grid.Column width={3} textAlign="right">$100,000</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Something</Grid.Column>
            <Grid.Column width={3} textAlign="right">$20,000</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader type="h3" title="Add new Transaction" />
      <NewEntryForm />
    </Container>
  );
}
export default App;
