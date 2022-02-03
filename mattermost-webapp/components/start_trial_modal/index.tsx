// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import {FormattedMessage, useIntl} from 'react-intl';

import {isModalOpen} from 'selectors/views/modals';
import {GlobalState} from 'mattermost-redux/types/store';
import {ModalIdentifiers} from 'utils/constants';
import {closeModal, openModal} from 'actions/views/modals';
import {getLicenseConfig} from 'mattermost-redux/actions/general';
import {requestTrialLicense} from 'actions/admin_actions';
import {getStandardAnalytics} from 'mattermost-redux/actions/admin';
import {DispatchFunc} from 'mattermost-redux/types/actions';
import FormattedMarkdownMessage from 'components/formatted_markdown_message';
import TrialBenefitsModal from 'components/trial_benefits_modal/trial_benefits_modal';

import StartTrialModalSvg from './start_trial_modal_svg';

import './start_trial_modal.scss';

enum TrialLoadStatus {
    NotStarted = 'NOT_STARTED',
    Started = 'STARTED',
    Success = 'SUCCESS',
    Failed = 'FAILED'
}

type Props = {
    onClose?: () => void;
}

function StartTrialModal(props: Props): JSX.Element | null {
}

export default StartTrialModal;
