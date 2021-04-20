import React, { useState } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
function NewEntryForm({ addEntry }) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    label='Description'
                    width={12}
                    icon='tags'
                    placeholder="New Shinny"
                    value={description}
                    onChange={(e => setDescription(e.target.value))}
                />
                <Form.Input
                    label='Value'
                    width={4}
                    icon='tags'
                    placeholder="100.00"
                    icon="dollar" iconPosition='left'
                    value={value}
                    onChange={(e => setValue(e.target.value))}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox toggle
                    label="Is Expense ?"
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)} />
            </Segment>
            <ButtonSaveOrCancel
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense} />
        </Form>
    )
}

export default NewEntryForm
