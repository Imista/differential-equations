import Header from "@templates/Header.template";
import Footer from "@templates/Footer.template";
import Lorem from "@articles/Lorem.article";
import Error404 from "@templates/Error404.template";
import getHash from "@utils/getHash.utils";
import Home from "@pages/Home.pages";

const routes = {
    '/': Home,
    'pg-lorem': Lorem,
}

const router = async () => {
    const header = null || document.querySelector('header');
    const main = null || document.querySelector('main');
    const footer = null || document.querySelector('footer');

    header.innerHTML = await Header();

    let hash = getHash();
    if(hash.includes('pg') || hash === '/'){
        // let route;
        // if(hash === '/'){
        //     route = hash;
        // }else{
        //     route = hash.split('-')[1];
        // }
        let render = routes[hash] ? routes[hash] : Error404;
        main.innerHTML = await render();
    }else{
        main.innerHTML = await Error404()   ;
    }


    footer.innerHTML = await Footer();
}

export default router;