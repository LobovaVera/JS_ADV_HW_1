// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.



// создаем необходимые объекты
let orderNumber = 0;
class Cook {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
class Meal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
class Order {
    constructor(client, ...meals) {
        this.orderNumber = ++orderNumber;
        this.date = new Date();
        this.client = client;
        this.meals = meals;
        this.cooking = true;
    }
}
class Client {
    constructor(name) {
        this.name = name;
        this.listOfOrders = [];
    }
}

//заполняем данные
let listOfOrders = new Map();
let listOfClients = new Map();
let listOfCooks = [];
let listOfmeals = [];
let listOfMealsToCook = [];

const cook1 = new Cook("Виктор", "Пицца");
const cook2 = new Cook("Ольга", "Суши");
const cook3 = new Cook("Дмитрий", "Десерты");
listOfCooks.push(cook1);
listOfCooks.push(cook2);
listOfCooks.push(cook3);

const meal1 = new Meal("Маргарита", "Пицца");
const meal2 = new Meal("Пепперони", "Пицца");
const meal3 = new Meal("Филадельфия", "Суши");
const meal4 = new Meal("Калифорния", "Суши");
const meal5 = new Meal("Тирамису", "Десерты");
const meal6 = new Meal("Чизкейк", "Десерты");
listOfmeals.push(meal1);
listOfmeals.push(meal2);
listOfmeals.push(meal3);
listOfmeals.push(meal4);
listOfmeals.push(meal5);
listOfmeals.push(meal6);

const client1 = new Client("Алексей");
const client2 = new Client("Марина");
const client3 = new Client("Ирина");
listOfClients.set("Алексей", "client1");
listOfClients.set("Марина", "client2");
listOfClients.set("Ирина", "client3");

//создаем функции для работы с данными
function makeOrder(client, ...meals) {
    let newOrder = new Order(client, meals);
    listOfOrders.set(orderNumber, meals);
    client.listOfOrders.push(orderNumber);
    console.log(
        `Создан заказ номер ${newOrder.orderNumber}. ${client.name}: `
    );
    for (const meal of meals) {
        console.log(meal.name);
        listOfMealsToCook.push([meal.name, meal.type]);
    }
}

// • Отслеживать, какой повар готовит какое блюдо.
function getMealsToCookByChief(chief) {
    console.log(` Повар ${chief.name} готовит: `);
    for (const clientOrder of listOfMealsToCook) {
        if (chief.type == clientOrder[1])
            console.log(`${clientOrder[0]} `);
    }
}


// • Записывать, какие блюда заказал каждый клиент.
function getClientOrders(client) {

    console.log(`Клиент ${client.name} заказал: `);
    for (const orderMeals of client.listOfOrders) {
        let ourMeals = listOfOrders.get(orderMeals);
        for (const meal of ourMeals) {
            console.log(`${meal.type} ${meal.name}`);
        }
    }
}
//удаляем завершенный заказ из списка текущих заказов, архив закахов можно посмотреть в карточке клиента - на разработке
// function closeOrder(orderNumberToDelete) {
//   for (const [key, value] of listOfOrders) {
//     if (key == orderNumberToDelete) {
//       listOfOrders.delete(key);
//       listOfMealsToCook.delete(value);
//     }
//   }
// }

//test
makeOrder(client1, meal2, meal5);
makeOrder(client2, meal4, meal1);
makeOrder(client3, meal6);
makeOrder(client1, meal6, meal2);
makeOrder(client3, meal4, meal1);
makeOrder(client3, meal6);

getClientOrders(client1);

// closeOrder(1);
getMealsToCookByChief(cook1);
getMealsToCookByChief(cook2);
getMealsToCookByChief(cook3);