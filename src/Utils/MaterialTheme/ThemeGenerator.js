import RalewayWoff2 from 'assets/fonts/Ralisto.ttf.woff';
import {createMuiTheme} from "@material-ui/core";

/**
 * font face a font
 * @type {{fontFamily: string, fontStyle: string, fontDisplay: string, fontWeight: number, src: string, unicodeRange: string}}
 */
const raleway = {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayWoff2}) format('woff2')
  `,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
/**
 * generate Material-ui Theme
 * @type {Theme}
 */
export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Raleway',
            '-apple-system',
        ].join(','),
        useNextVariants: true,
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [raleway],
            },
        },
    },
});
