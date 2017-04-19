import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';
import assert from 'assert';
import Editable from '../app/components/Editable.jsx';

describe('Editable', () => {
  it('renders value', () => {
    const value = 'value';
    const component = renderIntoDocument( <Editable value={value} /> );
    const valueComponent = findRenderedDOMComponentWithClass(component, 'value');
    assert.equal(valueComponent.textContent, value);
  });
});