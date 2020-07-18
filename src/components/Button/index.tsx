import React from 'react';
import classNames from 'classnames';
import './index.scss';

interface Props {
    image?: string;
    buttonClass?: string;
    round?: boolean;
    plain?: boolean;
    purple?: boolean;
    label?: string;
    onclick?: () => void;
    testId?: string;
}

const Button: React.FC<Props> = ({
                                     image,
                                     buttonClass = '',
                                     round,
                                     plain,
                                     purple,
                                     label,
                                     onclick,
                                     testId
                                 }) => (
    <button
        type="button"
        onClick={onclick}
        className={classNames('btn', {
            [buttonClass]: true,
            round,
            plain,
            purple
        })}
        data-test={testId}
    >
        {label && <strong>{label}</strong>}
    </button>
);

export default Button;