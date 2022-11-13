import { globalStyle, style } from "@vanilla-extract/css";
import { root as nav } from '~/component/layout/nav.css';
import { layout } from "./.style/common.css";
import { containerName, sprinkles } from "./.style/sprinkles.css";

export const html = style({
    container: `${containerName} / inline-size`,
})

export const body = style([
    layout,
    {
        margin: '0',
        padding: '0',
    },
]);

globalStyle(`${body} > *`, {
    gridColumn: 'main',
});

globalStyle(`${body} > ${nav}`, {
    gridColumn: 'full',
});

export const container = sprinkles({
    display: 'grid',
    gridColumn: 'main'
});