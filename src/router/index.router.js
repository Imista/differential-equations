import Header from "@templates/Header.template";
import Footer from "@templates/Footer.template";
import Lorem from "@articles/Lorem.article";
import Error404 from "@templates/Error404.template";
import getHash from "@utils/getHash.utils";
import Home from "@pages/Home.pages";
import Ecuaciones from "@articles/Ecuaciones.articles";
import Diferenciales from "@articles/Diferenciales.articles";
import Homogeneas from "@articles/Homogeneas.articles";
import NoHomogeneas from "@articles/NoHomogeneas.articles";
import Parametros from "@articles/Parametros.articles";
import Transcendentes from "@articles/Transcendentes.articles";
import Integrales from "@articles/Integrales.articles";

const routes = {
    '/': Home,
    'pg-lorem': Lorem,
    'pg-ecuaciones': Ecuaciones,
    'pg-transcendentes': Transcendentes,
    'pg-integrales': Integrales,
    'pg-diferenciales': Diferenciales,
    'pg-homogeneas': Homogeneas,
    'pg-nohomogeneas': NoHomogeneas,
    'pg-vara': Parametros
}

const router = async () => {
    const header = null || document.querySelector('header');
    const main = null || document.querySelector('main');
    const footer = null || document.querySelector('footer');

    header.innerHTML = await Header();

    let hash = getHash();
    if(hash.includes('pg') || hash === '/'){
        console.log(hash);
        let render = routes[hash] ? routes[hash] : Error404;
        main.innerHTML = await render();
    }else{
        main.innerHTML = await Error404()   ;
    }


    footer.innerHTML = await Footer();
}

export default router;