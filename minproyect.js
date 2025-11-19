const tareasInput = document.getElementById("tareas");
const boton = document.getElementById("interactivo");
const borrarBoton = document.getElementById("interactivo1");
const lista = document.getElementById("lista");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea;
    lista.appendChild(li);
});

boton.addEventListener("click", () => {
    const valor = tareasInput.value;
    if (!valor) return; 

    const li = document.createElement("li");
    li.textContent = valor;
    lista.appendChild(li);

    tareas.push(valor);

    localStorage.setItem("tareas", JSON.stringify(tareas));

    tareasInput.value = "";
});

borrarBoton.addEventListener("click", () => {
    localStorage.removeItem("tareas");
    lista.innerHTML = "";
    tareas = []; 
});
