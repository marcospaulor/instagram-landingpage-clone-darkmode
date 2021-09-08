const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');
const imgChange = document.querySelector('.instagram-logo')


const getStyles = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
    bg: getStyles(html, '--bg'),
    bgGroup: getStyles(html, '--bg-group'),
    bgBorder: getStyles(html, '--bg-border'),
    bgLabel: getStyles(html, '--bg-label'),
    bgButton: getStyles(html, '--bg-button'),
    accountColor: getStyles(html, '--account-color'),
}

const darkMode = {
    bg: "#333333",
    bgGroup: "#434343",
    bgBorder: "#FFFFFF",
    bgLabel: "#0000F0",
    bgButton: "#f600f6fa",
    accountColor: "#FFFFFF",
}

const transformKey = key =>
    "--"+key.replace(/([A-Z])/,"-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
            html.style.setProperty(transformKey(key), colors[key])
        )
}

checkbox.addEventListener('change', ({target}) => {
    if(target.checked){
        changeColors(darkMode)
        imgChange.src = "./img/instagram-logo-white.png"
    }else{
        changeColors(initialColors)
        imgChange.src = "./img/instagram-logo.png"
    }
})
