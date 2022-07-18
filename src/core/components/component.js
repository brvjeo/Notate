export const component = {
    applyStyles(styles) {
        for (let style in styles) {
            this.style[style] = styles[style];
        }
    }
}