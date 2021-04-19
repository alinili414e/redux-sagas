import React, { useState } from 'react'
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
function NewEntryForm({ addEntry }) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

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
            <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} />
        </Form>
    )
}

export default NewEntryForm
