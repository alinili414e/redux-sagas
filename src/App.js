
import { Container, Grid, GridColumn, Header, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <GridColumn>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: 'left' }}>Incoming:</Statistic.Label>
                <Statistic.Value >1045.50</Statistic.Value>
              </Statistic>
            </GridColumn>
            <GridColumn>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: 'left' }}>Expenses</Statistic.Label>
                <Statistic.Value >623.50</Statistic.Value>
              </Statistic>
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
}
export default App;
