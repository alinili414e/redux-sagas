import React from 'react';
import DisplayBalance from './DisplayBalance';
import { Segment, Grid, GridColumn } from 'semantic-ui-react';
function DisplayBalances() {
    return (
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
    )
}

export default DisplayBalances
