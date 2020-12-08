import qs from 'qs';

export const toTitleCase = (str: string) => {
    return str.replace(
        /\w\S*/g,
        (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

export const extendSearchParams = (extendedParams = {}) => qs.stringify({
    ...getSearchParams(),
    ...extendedParams
}, { addQueryPrefix: true })


export const getSearchParams = () => {
    if (window)
        return qs.parse(window.location.search, { ignoreQueryPrefix: true, decoder: (c: string) => c.replace(/amp;/, "").replace(/&/, "") })
    return {};
}

export const removeSearchParamByKey = (key: string = ""): string => {
    let parsed = getSearchParams();
    const parsedKeys = Object.keys(parsed)
    if (parsedKeys.length == 0) {
        return "";
    }
    // if string is passed
    if (typeof key == "string" && parsedKeys.includes(key)) {
        delete parsed[key];
    }

    // if array is passed
    if (Array.isArray(key)) {
        key.forEach((v) => {
            if (parsedKeys.includes(v)) {
                delete parsed[v];
            }
        })
    }

    return qs.stringify(parsed, { addQueryPrefix: true })
}