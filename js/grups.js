

// функція grups() для відобреження списку груп нажавши на .main-content-grup-title
function grups() {
    let grupsTubs = document.querySelectorAll('.main-content-grup-title');
    let grupsMenus = document.querySelectorAll('.main-content-grup-box');


    grupsTubs.forEach((grupsTub) => {
        grupsTub.addEventListener('click', () => {
            grupsMenus.forEach((grupsMenu) => {
                grupsMenu.classList.toggle('show');
            })
        })
    })
}
// закривається функція
grups();

// функція rozcl() для фільтрації крточки з розкладом вибраной групи нажавши на main-content-grup-title
function rozcl() {
    let tabGrups = document.querySelectorAll('.main-content-grup'); //тут визивається слас групи
    let rozclCards = document.querySelectorAll('.main-content-card-rozklad'); //тут визивається сама область на якій буде розміщений розклад

    // функція grup() стоврює цикл пробігаючись по всім елементам перевіряючи чи не співпадає data-grup з елементом. Якшо ні то додається клас hide який ховає всі блоки які не містять потрібної категорії а в іншому випадку hide віднімається
    function grup (category, cards) {
        cards.forEach((item) => {
            const isItemFiltered = item.classList.contains(category)
            if (isItemFiltered) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        })
    }

    // Тут ми пробігаємось по всім кнопакам добавляючи їм функцію взаємодії з dataset.grup
    tabGrups.forEach((tabGrup) => {
        tabGrup.addEventListener('click', () => {
            const currentCategory = tabGrup.dataset.grup
            grup(currentCategory, rozclCards)
        })
    })
}

// закривається функція
rozcl();