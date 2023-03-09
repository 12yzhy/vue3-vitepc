import Color from 'color'
// "@setCustomTheme" 是 themePreprocessorPlugin 提供的模块，setCustomTheme的参数必须提供Color模块，至于为什么不把 Color 直接依赖进去是有原因的
import setCustomTheme from '@setCustomTheme'

/**
 * @desc 设置主题色
 * @param val 颜色
 * @returns promise
 */
export function setTheme(val: string) {
  return new Promise((resolve) => {
    // local[PRIMARY_COLOR] = val
    setCustomTheme({
      Color,
      primaryColor: val
      //gradientReplacer:{},
      //targetValueReplacer:{}
    })
    resolve({})
  })
}
