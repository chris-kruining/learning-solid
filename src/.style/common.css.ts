import { style } from '@vanilla-extract/css';
import { containerName, sprinkles } from './sprinkles.css';

export const layout = style([
    sprinkles({
        // gridTemplateColumns: {
        //     default: 'single',
        //     medium: 'page',
        //     large: 'page',
        // },
        layout: {
            default: 'mobile',
            medium: 'page',
            large: 'page',
        },
    }),
    {
        // container: `${containerName} / inline-size`,
    },
]);