

let burgerTab = document.querySelector('.burger'); // тут визивається кнопка бургера меню
let burgerMenu = document.querySelector('.burder-menu'); // тут визивається меню бургера

// burgerTab задаємо функцію нажаття для того щоб при натисненні burgerTab добавляв клас active і также з burgerMenu. При повторном натиснені клас active стирається
burgerTab.addEventListener('click', () => {
    burgerTab.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})


// функція app() для фільтрації крточки з розкладом вибраной групи нажавши на main-content-grup-title
function app() {
    const buttons = document.querySelectorAll('.main-content-tab'); // визов кнопки
    const cards = document.querySelectorAll('.main-content-grups'); // визов карточки
    const cards2 = document.querySelectorAll('.main-content-card'); // визов карточки яка находиться в карточці яка зверху
    
     // функція filter() стоврює цикл пробігаючись по всім елементам перевіряючи чи не співпадає data-grup з елементом. Якшо ні то додається клас hide який ховає всі блоки які не містять потрібної категорії а в іншому випадку hide віднімається
    function filter (category, items, items2) {
        items.forEach((item) => {
            const isItemFiltered = item.classList.contains(category)
            if (isItemFiltered) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        })
        items2.forEach((item2) => {
            const isItemFiltered2 = item2.classList.contains(category)
            if (isItemFiltered2) {
                item2.classList.remove('hide');
            } else {
                item2.classList.add('hide');
            }
        })
    }


    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards, cards2)
        })
    })
    
}

app();

// функція app такж сама що і в файлі grups.js

