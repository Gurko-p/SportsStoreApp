import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_PROTOCOL}://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/`
});

//Добавляем интерсептор запроса
axiosInstance.interceptors.request.use(
  (config) => {
      console.log("Сработал интерсептор");
      const token = localStorage.getItem('token'); // Получаем токен из localStorage
      if (token) {
          config.headers.Authorization = `Bearer ${token}`; // Добавляем заголовок Authorization
      }
      return config; // Возвращаем измененный конфиг
  },
  (error) => {
      return Promise.reject(error); // Обработка ошибок
  }
);

// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Обработка успешного ответа
//     console.log('Ответ получен:', response);
//     return response.data; // Возвращаем только данные ответа
//   },
//   (error) => {

//     console.log('Ошибка:', error);
//     //Обработка ошибок ответа
//     if (error.response) {
//       console.error('Ошибка ответа:', error.response);
//       // Здесь можно добавить обработку различных кодов состояния
//       if (error.response.status === 403) {
//         // Например, если не авторизован, можно перенаправить на страницу входа
//         console.error('Необходима авторизация. Перенаправление на страницу входа...');
//       }
//     } else {
//       console.error('Ошибка сети или сервер недоступен:', error);
//     }
//     return Promise.reject(error); // Возвращаем ошибку
//   }
// );

export default axiosInstance;