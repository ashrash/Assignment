import https from 'https';

async function api<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject)=> {
        https.request(url, (response)=>{
            let responseData = '';
            response.on('data',  (chunk) => {
                responseData+= chunk;
            });
            response.on('end', ()=> {
                try {
                    resolve(JSON.parse(responseData));
                } catch(e) {
                    reject(e);
                }
            });
        }).end();
    });
}

export default api;