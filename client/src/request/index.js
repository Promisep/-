const request =(params)=>{
    return new Promise((resolve,reject)=>{
        const baseUrl='http://localhost:3000';
        $.ajax({
            ...params,
            url:baseUrl+params.url,
            success(res){
                resolve(res.data)
            },
            error(err){
                reject(err)
            }
        })
    })
}
