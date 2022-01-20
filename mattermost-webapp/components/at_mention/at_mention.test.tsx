// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {RefObject} from 'react';
import {shallow} from 'enzyme';

import AtMention from 'components/at_mention/at_mention';

import {General} from 'mattermost-redux/constants';

import {TestHelper} from 'utils/test_helper';

/* eslint-disable global-require */

describe('components/AtMention', () => {
    const baseProps = {
        currentUserId: 'abc1',
        teammateNameDisplay: General.TEAMMATE_NAME_DISPLAY.SHOW_NICKNAME_FULLNAME,
        usersByUsername: {
            currentuser: TestHelper.getUserMock(
                {id: 'abc1', username: 'currentuser', first_name: 'First', last_name: 'Last'},
            ),
            user1: TestHelper.getUserMock({id: 'abc2', username: 'user1', first_name: 'Other', last_name: 'User', nickname: 'Nick'}),
            'userdot.': TestHelper.getUserMock({id: 'abc3', username: 'userdot.', first_name: 'Dot', last_name: 'Matrix'}),
        },
        groupsByName: {
            developers: TestHelper.getGroupMock({id: 'qwerty1', name: 'developers', allow_reference: true}),
            marketing: TestHelper.getGroupMock({id: 'qwerty2', name: 'marketing', allow_reference: false}),
            accounting: TestHelper.getGroupMock({id: 'qwerty3', name: 'accounting', allow_reference: true}),
        },
    };

    test('should match snapshot when mentioning user', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='user1'
            >
                {'(at)-user1'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when mentioning user with different teammate name display setting', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='user1'
                teammateNameDisplay={General.TEAMMATE_NAME_DISPLAY.SHOW_USERNAME}
            >
                {'(at)-user1'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when mentioning user followed by punctuation', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='user1...'
            >
                {'(at)-user1'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when mentioning user containing punctuation', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='userdot.'
            >
                {'(at)-userdot.'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when mentioning user containing and followed by punctuation', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='userdot..'
            >
                {'(at)-userdot..'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when mentioning user with mixed case', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='USeR1'
            >
                {'(at)-USeR1'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when mentioning current user', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='currentUser'
            >
                {'(at)-currentUser'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when mentioning all', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='all'
            >
                {'(at)-all'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when mentioning all with mixed case', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='aLL'
            >
                {'(at)-aLL'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when not mentioning a user', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='notauser'
            >
                {'(at)-notauser'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when not mentioning a user with mixed case', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='NOTAuser'
            >
                {'(at)-NOTAuser'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when mentioning a group that is allowed reference', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='developers'
            >
                {'(at)-developers'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when mentioning a group that is allowed reference with group highlight disabled', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='developers'
                disableGroupHighlight={true}
            >
                {'(at)-developers'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when mentioning a group that is not allowed reference', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName='marketing'
            >
                {'(at)-marketing'}
            </AtMention>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should have placement state based on ref position of click handler', () => {
        const wrapper = shallow<AtMention>(
            <AtMention
                {...baseProps}
                mentionName={'user1'}
            >
                {'(at)-user1'}
            </AtMention>,
        );

        const instance = wrapper.instance();

        instance.overlayRef = {
            current: {
                getBoundingClientRect: () => ({
                    top: 400,
                }),
            },
        }as RefObject<HTMLAnchorElement>;

        wrapper.instance().handleClick({preventDefault: jest.fn(), target: AtMention} as any);
        expect(wrapper.state('placement')).toEqual('top');

        instance.overlayRef = {
            current: {
                getBoundingClientRect: () => ({
                    top: 200,
                    bottom: 400,
                }),
            },
        }as RefObject<HTMLAnchorElement>;

        wrapper.instance().handleClick({preventDefault: jest.fn(), target: AtMention} as any);
        expect(wrapper.state('placement')).toEqual('bottom');

        instance.overlayRef = {
            current: {
                getBoundingClientRect: () => ({
                    top: 200,
                    bottom: 1000,
                }),
            },
        } as RefObject<HTMLAnchorElement>;

        wrapper.instance().handleClick({preventDefault: jest.fn(), target: AtMention} as any);
        expect(wrapper.state('placement')).toEqual('left');
    });
});
