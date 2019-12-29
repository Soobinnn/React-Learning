import React from 'react';
import {mount} from 'enzyme';
import Profile from '../components/Profile';

describe('<Profile/>', () => {
    it('matches snapshot',() => {
        const wrapper = mount(<Profile username="soobinnn" name="임수빈"/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders username and name', () => {
        const wrapper = mount(<Profile username="soobinnn" name="임수빈" />);
        expect(wrapper.props().username).toBe('soobinnn');
        expect(wrapper.props().name).toBe('임수빈');

        const boldElement = wrapper.find('b');
        expect(boldElement.contains('soobinnn')).toBe(true);
        const spanElement = wrapper.find('span');
        expect(spanElement.text()).toBe('(임수빈)');
    });
});