import './index.html';
import './css/style.css';

const modal = () => {

        const callbackBtn = document.querySelector('.callback-btn');
        const modal = document.querySelector('.modal');


        const openModel = (event) => {
            console.log(event);
            const target = event.target;
            document.addEventListener('keydown', escapeHandler)
            modal.classList.add('open');
        }


        const closeModel = () => {
            modal.classList.remove('open');
            document.removeEventListener('keydown', escapeHandler)
        }

        const escapeHandler = (event) => {
            
            if (event.code === "Escape") {
                closeModel();
            }
        }

        modal.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('modal__close') || target === modal) {
                closeModel();
            }
        })

        callbackBtn.addEventListener('click', openModel);
    }


modal();