import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import {format} from 'date-fns';

export const Footer = ({ className,...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                Next.js Portfolio {(format(new Date(), 'yyyy'))}
            </div>
            <a href="https://rostov.hh.ru/resume/d9a59d50ff093bfd830039ed1f6376464d7833" target='_blank'>Head Hunter</a>
            <a href="https://github.com/AnatoliyKlimov" target='_blank'>Github</a>
        </footer>
    );
};