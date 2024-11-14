/**En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su nombre y sexo (F
- M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne el porcentaje de profesores de un sexo y una categoría dada.
Función: porcProfesSexoEnCategoria.
Parámetros: profesores (array de objetos profesor), categoria (un número), sexo (una
letra).
Retorno: el porcentaje de profesores de un sexo dado en la categoría indicada.
Condiciones: debe usarse la función profesoresCategoria del ejercicio anterior.
 * */ 

let profesores = [
    { categoria: 1, nombre: "ana", sexo: "F" },
    { categoria: 2, nombre: "sofia", sexo: "F" },
    { categoria: 2, nombre: "loy", sexo: "M" },
    { categoria: 3, nombre: "ricardo", sexo: "M" },
    { categoria: 4, nombre: "jose", sexo: "M" },
    { categoria: 5, nombre: "natalia", sexo: "F" },
    { categoria: 5, nombre: "luis", sexo: "M" },
];

let profesoresCategoria = (profesores, categoria) => {
    return profesores.filter((profesor) => profesor.categoria === categoria);
};

let porcProfesSexoEnCategoria = (profesores, categoria, sexo) => {
    let profesoresDeCategoria = profesoresCategoria(profesores, categoria);
    let contSexo = profesoresDeCategoria.filter(profesor => profesor.sexo === sexo).length;
    let porcentaje = (contSexo / profesoresDeCategoria.length) * 100;
    return porcentaje.toFixed(2);
};

let salida = document.getElementById("salida");
let prof1 = porcProfesSexoEnCategoria(profesores, 1, "F");
let prof2 = porcProfesSexoEnCategoria(profesores, 2, "F");
let prof3 = porcProfesSexoEnCategoria(profesores, 3, "M");
let prof4 = porcProfesSexoEnCategoria(profesores, 4, "M");
let prof5 = porcProfesSexoEnCategoria(profesores, 5, "F");

salida.innerHTML += `Porcentaje de profesores de categoría 1: ${prof1}%<br>`;
salida.innerHTML += `Porcentaje de profesores de categoría 2: ${prof2}%<br>`;
salida.innerHTML += `Porcentaje de profesores de categoría 3: ${prof3}%<br>`;
salida.innerHTML += `Porcentaje de profesores de categoría 4: ${prof4}%<br>`;
salida.innerHTML += `Porcentaje de profesores de categoría 5: ${prof5}%<br>`;