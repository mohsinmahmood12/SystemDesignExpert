const httpRequest = {
     host : 'localhost',
     port : 8080,
     method : 'POST', // GET,PUT,DELETE etc
     path : '/payments',
     headers : {
            'content-type' : 'application/json',
            'content-length' : 51,

     },
     body : '{"data": "This is the piece of data in json format."}'
    
}


const httpResponse = {
    statusCode : 200,
    headers : {
        'access-control-allow-origin':'https://mohsinmahmood12.github.io/',
        'content-type' : 'application/json',
    }, 
    body : '{}'
}