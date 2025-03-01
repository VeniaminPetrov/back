//==========================================ещё рабочая версия========================================
const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/magshow");
async function run() {
    try {
        // Подключаемся к серверу
        await mongoClient.connect();
        console.log("Подключение установлено");
        // взаимодействие с базой данных
    }catch(err) {
        console.log(err);
    } finally {
        // Закрываем подключение при завершении работы или при ошибке
        await mongoClient.close();
        console.log("Подключение закрыто");
    }
}
run().catch(console.log);

// //=====================рабочая версия=======================
// const MongoClient = require("mongodb").MongoClient;
//
// const url = "mongodb://127.0.0.1:27017/magshow";
// const mongoClient = new MongoClient(url);
// async function run() {
//     try {
//         // Подключаемся к серверу
//         await mongoClient.connect();
//         // обращаемся к базе данных admin
//         const db = mongoClient.db("admin");
//         // выполняем пинг для проверки подключения
//         const result = await db.command({ ping: 1 });
//         console.log("Подключение с сервером успешно установлено");
//         console.log(result);
//     }catch(err) {
//         console.log("Возникла ошибка");
//         console.log(err);
//     } finally {
//         // Закрываем подключение при завершении работы или при ошибке
//         await mongoClient.close();
//         console.log("Подключение закрыто");
//     }
// }
// run().catch(console.error);
// //====================





