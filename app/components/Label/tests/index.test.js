import Label from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Label />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Label name="label" text={children} />
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
