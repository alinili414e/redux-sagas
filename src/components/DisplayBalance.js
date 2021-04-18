import React from 'react'
import { Statistic } from 'semantic-ui-react';

export default function DisplayBalance({ color = 'black', title, value, size = 'tiny' }) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{ textAlign: 'left' }}>
                {title}
            </Statistic.Label>
            <Statistic.Value >
                {value}
            </Statistic.Value>
        </Statistic>
    )
}
