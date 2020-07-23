import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

function NewEntryForm() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 centered">
                    <Form>
                        <FormGroup>
                            <Label for="entry-data"></Label>
                            <Input type="textarea" name="newentry" id="entry-data" placeholder="What would you like to remember about today?"/>
                        </FormGroup>
                        <Button>Save The Day</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default NewEntryForm;