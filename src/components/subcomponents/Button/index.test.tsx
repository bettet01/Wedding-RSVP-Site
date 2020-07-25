import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('<Button />', () => {
    it('renders without crashing', () => {
        const component = shallow(<Button />);
        expect(component.length).toBe(1);
    });

    it('says text on the button', () => {
        const label = 'Hello World';
        const component = shallow(<Button label={label} />);
        expect(component.find('button').text()).toEqual(label);
    });

    it(' can be `purple`, `round` and `plain` buttons', () => {
        ['purple', 'round', 'plain'].forEach((type) => {
            const prop = { [type]: true };
            const component = shallow(<Button {...prop} />);
            expect(component.find('button').hasClass(type)).toBe(true);
        });
    });

    it('supports click handler', () => {
        const callback = jest.fn();
        const component = shallow(<Button onclick={callback} />);
        component.simulate('click');
        expect(callback).toHaveBeenCalledTimes(1);
    });
});