const theme = {
    backgroundColor: {
        primary: "#EC174D",
        secondary: "#C81443",
        success: "#32A852",
        info: "#4DECE7",
        warning: "#EC8D17",
        danger: "#9C0932",
        light: "#FFB7C5",
        dark: "#760624",
        link: "#0A86FF",
    },
    get borderColor() {
        return this.backgroundColor;
    },
    get outlineColor() {
        return this.backgroundColor;
    },
    get textColor() {
        return this.backgroundColor;
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    }
}
export default theme;