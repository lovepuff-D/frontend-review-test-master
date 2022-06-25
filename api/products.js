const SLEEP_TIME = 200;

function sleep(fn) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fn());
        }, SLEEP_TIME);
    });
}

let products = [
    {
        id: 'potato',
        title: 'Картошка',
        price: 49.99,
        image: '/products/potato.jpg',
    },
    {
        id: 'carrot',
        title: 'Морковка',
        price: 55.00,
        image: '/products/carrot.jpg',
    },
    {
        id: 'cabbage',
        title: 'Капуста',
        price: 28.50,
        image: '/products/cabbage.jpg',
    },
];

const dataService = {
    getProductsList(data) {
        //Вынес список товаров хранящийся на сервере в переменную вне функцию, чтобы она не пересоздавалась при каждом вызове
        if (data) {
            products.push(data)
        }
        return products;
    },
};

//Добавляем товар
setTimeout(function () {
    dataService.getProductsList({
        id: 'beef',
        title: 'Мясо',
        price: 99.99,
        image: '/products/beef.jpg',
    })
}, 1500)

const productsApi = {
    getProductsList() {
        return sleep(dataService.getProductsList);
    },
};

export default productsApi;
