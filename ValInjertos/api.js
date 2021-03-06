//injertos
const API = "http://localhost:8000/injertos";
export const getInjertos = async () =>{
    const res = await fetch(API, {method: 'GET', headers: {"authorization": localStorage.getItem("token")}});
    return await res.json();
    
}
export const getInjerto = async (injertoId) =>{
    const res = await fetch(`${API}/${injertoId}`, {method: 'GET', headers: {"authorization": localStorage.getItem("token")}});
    return await res.json();
    
}
export const crearInjerto = async (newInjerto) =>{
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(newInjerto),
    });
    return await res.json();
    
}

export const editarInjerto = async (injertoId, newInjerto) => {
    console.log(injertoId, newInjerto)
    const res = await fetch(`${API}/${injertoId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(newInjerto),
    });
    return res;
  };

  export const predecir = async (injertoId) =>{
    const res = await fetch(`${API}/${injertoId}/predecir`, {method: 'GET', headers: {"authorization": localStorage.getItem("token")}});
    return await res.json();
    
}


//autenticacion
export const login = async (user) => {
    const res = await fetch('http://localhost:8000/login', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    var token = res._headers.authorization //obtenemos el token del usuario que vendra en el header tras loggearse
    localStorage.setItem("token", token); //guardamos el token en el almacenamiento local
    return await res.json();
  };

export const logout = async () =>{
    const res = await fetch('http://localhost:8000/logout', {
      method: "POST", headers:{"authorization": localStorage.getItem("token")}
    });
    localStorage.removeItem("token");
    return await res.json();
    
}

//usuarios
const API2 = "http://localhost:8000/usuarios";
export const getUsuarios = async () =>{
    const res = await fetch(API2, {method: 'GET', headers: {"authorization": localStorage.getItem("token")}});
    return await res.json();
    
}
export const getUser = async (usuarioId) =>{
    const res = await fetch(`${API2}/${usuarioId}`, {method: 'GET', headers: {"authorization": localStorage.getItem("token")}});
    return await res.json();
    
}

export const crearUsuario = async (newUser) =>{
  const res = await fetch(API2, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "authorization": localStorage.getItem("token")
    },
    body: JSON.stringify(newUser),
  });
  return await res.json();
  
}

export const editarUsuario = async (usuarioId, newUser) => {
    console.log(usuarioId, newUser)
    const res = await fetch(`${API2}/${usuarioId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(newUser),
    });
    return res;
  };

  export const deleteUsuario = async (usuarioId) => {
    await fetch(`${API2}/${usuarioId}`, {
      method: "DELETE", headers:{
        "authorization": localStorage.getItem("token")
      }
    });
  };

  export const modificarContrase??a = async (usuarioId, newPassword) => {
    console.log(usuarioId, newPassword)
    const res = await fetch(`${API2}/${usuarioId}/password`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(newPassword),
    });
    return res;
  };
