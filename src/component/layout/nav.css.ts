import { style } from '@vanilla-extract/css';
import { layout } from '~/.style/common.css';
import { sprinkles } from '~/.style/sprinkles.css';

export const root = style([
    layout,
    sprinkles({
        backgroundColor: {
            default: 'pink',
            medium: 'darkcyan',
            large: 'cornflowerblue',
        },
    }),
    {
        gridAutoFlow: 'column',
        // backgroundColor: 'pink',
    }
]);