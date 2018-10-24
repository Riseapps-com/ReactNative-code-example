import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

const enableAxiosLogger = (): void => {
    enableRequestLogger()
    enableResponseLogger()
}

const enableRequestLogger = (): void => {
    axios.interceptors.request.use(request => {
        logRequest(request)
        return request
    })
}

const enableResponseLogger = (): void => {
    axios.interceptors.response.use(response => {
        logResponse(response)
        return response
    })
}

const logRequest = (request: AxiosRequestConfig): void => {
    console.log(`
**********************************************************************
///////////////////////////////REQUEST:///////////////////////////////
**********************************************************************
url: ${request.url}
method: ${request.method}
data: 
${JSON.stringify(request.data)}
headers: 
${JSON.stringify(request.headers)}
timeout: ${request.timeout}
**********************************************************************
//////////////////////////////////////////////////////////////////////
**********************************************************************`)
}

const logResponse = (response: AxiosResponse): void => {
    console.log(`
*********************************************************************
//////////////////////////////RESPONSE://////////////////////////////
*********************************************************************
url: ${response.config.url}
status: ${response.status}
statusText: ${response.statusText}
headers: 
${JSON.stringify(response.headers)}
data: 
${JSON.stringify(response.data)}
*********************************************************************
/////////////////////////////////////////////////////////////////////
*********************************************************************`)
}

export default enableAxiosLogger