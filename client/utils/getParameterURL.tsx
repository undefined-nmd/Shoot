
let getParameterURL = (urlString, parameter, defaultValue = "0") => {

    let parameterValue = defaultValue

    let url = new URL(urlString);



    if (url.searchParams.get(parameter) !== "undefined") {
        parameterValue = url.searchParams.get(parameter);
    }

    return parameterValue

}

export default getParameterURL