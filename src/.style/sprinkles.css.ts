import { createContainer } from '@vanilla-extract/css';
import {
    defineProperties,
    createSprinkles,
} from '@vanilla-extract/sprinkles';

const gridColumn = {
    full: 'full',
    main: 'main',
    left: 'left',
    right: 'right',
    indented: 'indented',
};

const placement = [
    'stretch',
    'start',
    'center',
    'end',
    'space-around',
    'space-between',
    'space-evenly',
];

export const containerName = createContainer();
const containerProperties = defineProperties({ 
    conditions: {
        default: {},
        hover: { selector: '&:hover' },
        focus: { selector: '&:focus' },
        // medium: { '@container': `${containerName} (inline-size > 768px)` },
        // large: { '@container': `${containerName} (inline-size > 1024px)` },
        medium: { '@container': `${containerName} (min-width: 768px)` },
        large: { '@container': `${containerName} (min-width: 1306px)` },
    },
    defaultCondition: 'default',
    responsiveArray: [ 'default', 'medium', 'large' ],
    properties: {
        display: [ 'block', 'flex', 'grid' ],
        gridColumn,
        layout: {
            single: {
                display: 'grid',
                gridTemplateColumns: '[full-start main-start left-start rigth-start indented-start] 100% [indented-end left-end right-end main-end full-end]',
            },
            double: {
                display: 'grid',
                gridTemplateColumns: '[full-start main-start left-start indented-start] 1fr [left-end rigth-start] 1fr [indented-end right-end main-end full-end]',
            },
            triple: {
                display: 'grid',
                gridTemplateColumns: '[full-start main-start left-start indented-start] 1fr [left-end] 1fr [rigth-start] 1fr [indented-end right-end main-end full-end]',
            },
            
            mobile: {
                display: 'grid',
                gridTemplateColumns: '[full-start] 2cqi [main-start left-start rigth-start indented-start] 100% [indented-end left-end right-end main-end] 2cqi [full-end]',
            },
            page: {
                display: 'grid',
                gridTemplateColumns: '[full-start] 5cqi [main-start left-start] 1fr [indented-start] repeat(5, 1fr) [left-end right-start] repeat(5, 1fr) [indented-end] 1fr [right-end main-end] 5cqi [full-end]',
            },
        },
        backgroundColor: [ 'pink', 'darkcyan', 'cornflowerblue' ],
        justifyContent: placement,
        alignItems: placement,
    },
});

export const sprinkles = createSprinkles(containerProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];