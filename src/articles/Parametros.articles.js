const Parametros = () => (
    `<div class="main-sections">
        <h1>Variacion de parametros</h1>
        <div class="section-data">
            <p>06/05/2022</p>
            <p>Ecuaciones/Diferenciales/No homogeneas/Variacion de parametros</p>
        </div>
        <section>
            <h2>Plantemiento</h2>
            <p>Una vez obtenida la <a href="#/pg-homogeneas">Solucion homogenea</a>. <br><br>Para una ecuacion con la siguiente estructura: y'' + by' + cy = f(x)<br><br>
            La solucion particular es igual:<br><br>
            y<sub>p</sub>= u<sub>1</sub>y<sub>1</sub> + u<sub>2</sub>y<sub>2</sub> <i>Siendo y<sub>1</sub> y y<sub>2</sub> soluciones de la ecuacion diferencial.</i><br><br>
            Donde u<sub>1</sub> se obtiene de la formula:</p>
            <div class="main-image">
                <img src="../assets/images/Variacion.jpeg" alt="Imagen">
            </div>
            <p>Donde u<sub>2</sub> se obtiene de la formula:</p>
            <div class="main-image">
                <img src="../assets/images/Variacion-2.jpeg" alt="Imagen">
            </div>
            <p>Donde w se obtiene de la formula:</p>
            <div class="main-image">
            <img src="../assets/images/Variacion-3.jpeg" alt="Imagen">
            </div>
            <p>La solucion final es:<br><br>
            y = y<sub>homogenea</sub> + y<sub>particular</sub></p>
        </section>
    </div>
    <aside>
        <h2>Contenido:</h2>
        <a>Formula para u<sub>1</sub></a>
        <a>Formula para u<sub>2</sub></a>
        <a>Formula para w</a>
        <a>Solucion</a>
    </aside>`
)

export default Parametros;