const Homogeneas = () => (
    `<div class="main-sections">
        <h1>Ecuaciones Diferenciales Homogeneas</h1>
        <div class="section-data">
            <p>13 de marzo del 2022</p>
            <p>Ecuaciones/Diferenciales/Homogeneas</p>
        </div>
        <section>
            <h2>Definición</h2>
            <p>Más allá de las ecuaciones diferenciales que conocemos, encontramos dos subtipos de esta: las homogéneas y las no homogéneas.
            Podemos saber cuando una ecuación diferencial puede ser homogénea en dos diferentes situaciones: cuando encontramos que los coeficientes de los términos diferenciales de primer orden son funciones homogéneas de las variables; o para el caso lineal de cualquier orden donde no hay términos constantes.</p>
            <div class="main-image">
                <img src="../assets/images/Homogeneas.jpeg" alt="Imagen">
            </div>
        </section>
        <section>
            <h2>Ecuacion caracteristica</h2>
            <p>Para una ecuacion diferencial del tipo:<br></p>
            <p>ay'' + by' + cy = 0<br><br></p>
            <p>Se le da una ecuacion caracteristica con la siguiente estructura:<br></p>
            <p>am<sup>2</sup> + bm + c = 0<br><br></p>
            <p>Posibles soluciones de la ecuacion:</p>
            <div class="main-image">
                <img src="../assets/images/Homogeneas-2.jpeg" alt="Imagen">
            </div>
        </section>
        <section>
            <h2>Solución cuando son diferentes</h2>
            <p>Sean m<sub>1</sub> y m<sub>2</sub> diferentes y pertenezcan al conjunto de numeros reales.<br></p>
            <p>Las soluciones son:<br><br></p>
            <p>y<sub>1</sub>: e<sup>m<sub>1</sub>x</sup><br><br></p>
            <p>y<sub>2</sub>: e<sup>m<sub>2</sub>x</sup></p>
        </section>
        <section>
            <h2>Solución cuando son iguales</h2>
            <p>Sean m<sub>1</sub> y m<sub>2</sub> iguales y pertenezcan al conjunto de numeros reales.<br></p>
            <p>Las soluciones son:<br><br></p>
            <p>y<sub>1</sub>: e<sup>m<sub>1</sub>x</sup><br><br></p>
            <p>y<sub>2</sub>: <b>x</b>e<sup>m<sub>2</sub>x</sup></p>
            </section>
            <section>
            <h2>Solución cuando son complejas</h2>
            <p>Sean m<sub>1</sub> y m<sub>2</sub> diferentes y pertenezcan al conjunto de numeros complejos.<br></p>
            <p>Las soluciones para m = a ± bi:<br><br></p>
            <p>y<sub>1</sub>: e<sup>ax</sup> * cos(bx)<br><br></p>
            <p>y<sub>2</sub>: e<sup>ax</sup> * sin(bx)</sup></p>
        </section>
    </div>
    <aside>
        <h2>Contenido:</h2>
        <a>Definición</a>
        <a>Ecuacion caracteristica</a>
        <a>Solución cuando son diferentes</a>
        <a>Solución cuando son iguales</a>
        <a>Solución cuando son complejas</a>
    </aside>`
)

export default Homogeneas;