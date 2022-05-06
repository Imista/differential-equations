import '@styles/reset.css';
import '@styles/global.css';
import '@styles/header.css';
import '@styles/footer.css';
import '@styles/main.css';
import '@styles/error.css';
import router from '@router/index.router';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);