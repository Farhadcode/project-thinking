// use locaLstorage as youre data Base for now

const addToDb = (id) => {

    const exists = getDb();
    let shopping_cart = {};
    if (!exists) {
        shopping_cart[id] = 1;

    }
    else {
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else {
            shopping_cart[id] = 1;
        }
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shopping_cart));
};

const getDb = () => localStorage.getItem('shopping-cart');

const removeData = (id) => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shopping_cart));
    }
}
export { addToDb, removeData };