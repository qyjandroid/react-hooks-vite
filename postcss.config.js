

import autoprefixer from "autoprefixer";
import postcssFlexBugs from "postcss-flexbugs-fixes";
import pxtoRem from "postcss-pxtorem";

const config = {
    plugins: [
        autoprefixer,
        postcssFlexBugs,
        pxtoRem({
            rootValue: 100,
            unitPrecision: 5,
            minPixelValue: 2, // 设置要替换的最小像素值
            propWhiteList: ['*'], // Enables converting of all properties – default is just font sizes.
            selectorBlackList: ['.ig-'], // 忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
        }),
    ],
};

export default config;