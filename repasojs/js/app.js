//Promises con AJAX

const descargaUsuarios = cantidad => new Promise((resolve, reject)=> {

    const api= `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamando ajax

    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open('GET', api, true);

    // on load
    xhr.onload= () =>{
        if(xhr.status === 200){
 resolve( JSON.parse(xhr.responseText).results);
        }else{
reject(Error(xhr.statusText));
        }
    }

    //opcioanl on error
    xhr.onerror= (error) => reject(error);

    //send
    xhr.send();
});

descargaUsuarios(30).then(
    miembros => imprimir(miembros),
    error => console.error(
        new Error('Hubo un error' + error)
    )
)

function imprimir(usuarios){
    let html='';

    usuarios.forEach(element => {
        html+= `
        <li>
             Nombre: ${element.name.first}
             Image:
              <img src="${element.picture.medium}"
        </li>
        `;
    });

    const contenedor = document.querySelector('#app');
    contenedor.innerHTML= html;
}