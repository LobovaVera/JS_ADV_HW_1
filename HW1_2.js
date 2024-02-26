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
    // this.orderNumber = ++orderNumber;
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
  listOfOrders.set(++orderNumber, newOrder);
  client.listOfOrders.push(newOrder);
  console.log(
    `Создан заказ номер ${newOrder.orderNumber}. ${client.name}: ${[...meals]}`
  );
}
// • Отслеживать, какой повар готовит какое блюдо.
function getMealsToCookByChief(chief) {
    for (const [key, value] of listOfOrders) {
        console.log(value.meals);
    }
}
// • Записывать, какие блюда заказал каждый клиент.
function getClientOrders(client) {
  console.log(`Список заказов ${client.name}: `);
  for (const order of client.listOfOrders) {
    console.log(`${order.date} ${order.meals}`);
  }
}
//удаляем завершенный заказ из списка текущих заказов, архив закахов можно посмотреть в карточке клиента
function closeOrder(orderNumberToDelete) {
  for (const [key, value] of listOfOrders) {
    if (key == orderNumberToDelete) {
      listOfOrders.delete(key);
    }
  }
}

//test

makeOrder(client1, "Пепперони", "Тирамису");
makeOrder(client2, "Калифорния", "Маргарита");
makeOrder(client3, "Чизкейк");
makeOrder(client1, "Чизкейк");

getClientOrders(client1);

closeOrder(1);

getMealsToCookByChief("Виктор");

// console.log(listOfMealsToCook);
// closeOrder(1);
// console.log(listOfMealsToCook)

// let orderClient = new Map();
// // class Client {
// //     constructo
// // }
// let orders = {};
// let client = {};

// // let order = new Map();

// // сделаем заказ

// let meals = new Map();
// meals.set("Маргарита", "Пицца");
// meals.set("Пепперони", "Пицца");
// meals.set("Филадельфия", "Суши");
// meals.set("Калифорния", "Суши");
// meals.set("Тирамису", "Десерты");
// meals.set("Чизкейк", "Десерты");
// console.log(cook);
// console.log(cook.get("Десерты"));

// makeOrder("Алексей", "Пепперони", "Тирамису");
// makeOrder("Мария", "Калифорния", "Маргарита");
// makeOrder("Ирина", "Чизкейк");
// orderClient.set(client, )
// // setCooks();
// // console.log(orders);
// // • Отслеживать, какой повар готовит какое блюдо.
// function makeOrder(client, ...orderedMeal) {
//     orders[client] = orderedMeal;
//     console.log(`Клиент ${client} заказал:`);
//     for (const meal of orderedMeal) {
//       console.log(` ${meals.get(meal)} ${meal}`);
//     }
//     console.log(`Клиент ${client} заказал: ${meals.get(orderedMeal[0])} ${[...clients.get(client)]}`);
//     for (const [key, value] of Object.entries(orders)) {
//         for (const onemeal of value) {
//         // console.log(meals.get(onemeal)); //

//         listOfMealsToCook[cook.get(meals.get(onemeal))] = onemeal;
//         }
//       }
//   }
// //   function setCooks() {

// //      console.log(listOfMealsToCook);
// //   }

// // • Записывать, какие блюда заказал каждый клиент.
