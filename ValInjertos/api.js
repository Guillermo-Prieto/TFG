export const getInjertos = async () =>{
    const res = await fetch('http://localhost:8000/injertos', {method: 'GET'});
    return await res.json();
    
}
