const tareasInput = document.getElementById("tareas");
const boton = document.getElementById("interactivo");
const borrarBoton = document.getElementById("interactivo1");
const lista = document.getElementById("lista");

// 1. Cargar tareas guardadas al iniciar
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// 2. Mostrar todas las tareas guardadas
tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea;
    lista.appendChild(li);
});

// 3. Agregar nueva tarea
boton.addEventListener("click", () => {
    const valor = tareasInput.value;
    if (!valor) return; // Evita tareas vacías

    // Mostrar en pantalla
    const li = document.createElement("li");
    li.textContent = valor;
    lista.appendChild(li);

    // Guardar en array
    tareas.push(valor);

    // Guardar en localStorage
    localStorage.setItem("tareas", JSON.stringify(tareas));

    tareasInput.value = "";
});

// 4. Borrar todas las tareas
borrarBoton.addEventListener("click", () => {
    localStorage.removeItem("tareas");
    lista.innerHTML = "";
    tareas = []; // Vaciar array también
});
