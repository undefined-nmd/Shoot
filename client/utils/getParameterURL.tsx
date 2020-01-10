
let getParameterURL = (urlString, parameter, defaultValue = "0") => {

    let parameterValue = defaultValue

    let url = new URL(urlString);
    parameterValue = url.searchParams.get(parameter);



    return parameterValue

}

export default getParameterURL