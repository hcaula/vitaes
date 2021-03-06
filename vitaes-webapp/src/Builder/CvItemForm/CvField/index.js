import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import { translate } from 'i18n/locale';
import capitalize from 'utils/capitalize';

class CvField extends Component {
  // label, id, placeholder, mandatory, toAdd, stateChanger, addField
  render() {
    const inputField = (
      <Form.Group as={Row}>
        <Form.Label column sm={3}>
          {capitalize(this.props.label)}
          {this.props.mandatory ? ` (${translate('required')})` : ''}
          {this.props.id.endsWith('date') ? ` (${translate('date_format')})` : ''}
          :
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            as={this.props.id === 'description' ? 'textarea' : 'input'}
            name={this.props.id}
            value={
              this.props.toAdd[this.props.id] === undefined
                ? ''
                : this.props.toAdd[this.props.id]
            }
            className="Base-inputfield"
            onChange={this.props.stateChanger}
            placeholder={this.props.placeholder}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && this.props.id !== 'description') {
                this.props.addField();
              }
            }}
          />
        </Col>
      </Form.Group>
    );
    return inputField;
  }
}

export default CvField;
