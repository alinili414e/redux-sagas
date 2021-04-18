import React from 'react'
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
function NewEntryForm() {
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    label='Description'
                    width={12}
                    icon='tags'
                    placeholder="New Shinny" />
                <Form.Input
                    label='Value'
                    width={4}
                    icon='tags'
                    placeholder="100.00"
                    icon="dollar" iconPosition='left'
                />

            </Form.Group>
            <ButtonSaveOrCancel />
        </Form>
    )
}

export default NewEntryForm
