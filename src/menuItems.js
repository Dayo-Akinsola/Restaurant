class MenuItem {

    constructor(name, description, price, favourite){
        this.name = name;
        this.description = description;
        this.price = price;
        this.favourite = favourite;
    }
}

const akara = new MenuItem('&#193;k&#224;r&#224;', 'Black Eyed Peas Fritters', '&#163;5.00', false);
const okroSoup = new MenuItem('Okro Soup', 'Edible Green Seeds Mixed With Stew', '&#163;4.00', false);
const dodo = new MenuItem('Dodo', 'Fried Plantain', '&#163;4.00', false);
const pepperSoup = new MenuItem('Pepper Soup', 'Spicy Meat Soup', '&#163;6.00', false);

const jollofRice = new MenuItem('Jollof Rice', 'Rice Served With Chicken', '&#163;10.00', true);
const suya = new MenuItem('Suya', 'Grilled And Spiced Beef', '&#163;9.00', false);
const amala = new MenuItem('Amala and Ewedu', 'Made From Yam And Garnished With Meat', '&#163;8.00', false);
const friedRice = new MenuItem('Fried Rice', 'Rice Mixed With Vegetables, Spices And Meat', '&#163;10.00', false);

const chinChin = new MenuItem('Chin Chin', 'Fried Crunchy Snack', '&#163;5.00', false);
const puffPuff = new MenuItem('Puff Puff', 'Deep Fried Doughy Dessert', '&#163;6.00', true);
const shukuShuku = new MenuItem('Shuku Shuku', 'Made With Coconut Flakes, Egg Yolk, And Sugar', '&#163;4.00', false);
const datePalms = new MenuItem('Date Palms', 'Healthy dates Harvested From Palm Trees', '&#163;4.00', false);

const starters = [akara, okroSoup, dodo, pepperSoup];
const main = [jollofRice, suya, amala, friedRice];
const desserts = [chinChin, puffPuff, shukuShuku, datePalms];

export { starters, main, desserts };