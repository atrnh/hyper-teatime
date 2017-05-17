const cursorColor = '#c5e1e3';
const foregroundColor = '#1b1b2e';
const backgroundColor = '#fff6f6';
const borderColor = '#fff';
const colors = {
  lightBlack: '#889499',
  lightRed: '#cd6868',
  lightGreen: '#48c983',
  lightYellow: '#707a9a',
  lightBlue: '#a556ad',
  lightMagenta: '#c2649f',
  lightCyan: '#4ba89d',
  lightWhite: '#1f203a',
  black: '#c5e1e3',
  red: '#f3c4c4',
  green: '#93ba84',
  yellow: '#cecce2',
  blue: '#bfa4cd',
  magenta: '#f3adcd',
  cyan: '#87e0dc',
  white: '#8ba5b3'
};

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: ${foregroundColor} !important;
      }

      .tabs_nav .tabs_title {
        color: ${foregroundColor} !important;
      }
    `
  })
};
