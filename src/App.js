
import { Container, Grid, GridColumn, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance size='small' title="Your Balance:" value="2,550.53" />
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <GridColumn>
              <DisplayBalance tite="Income" value="1253.24" color="green" />
            </GridColumn>
            <GridColumn>

              <DisplayBalance tite="Expenses" value="623.50" color="red" />

            </GridColumn>
          </Grid.Row>
        </Grid>
      </Segment>
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
