import { ParentProps } from 'solid-js';
import * as style from './nav.css';

export default function Nav({ children }: ParentProps)
{
    return <nav class={style.root}>
        {children}
    </nav>;
}