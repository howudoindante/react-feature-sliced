import { type ButtonHTMLAttributes, type FC } from 'react';
import s from './Button.module.scss';
import classClue from '../../lib/classclue';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}
export const Button: FC<ButtonProps> = (props) => {
    const { className, children, ...otherProps } = props;
    return (
        <button {...otherProps} className={classClue([s.button, className])}>
            {children}
        </button>
    );
};
