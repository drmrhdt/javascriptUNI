// гость выбрал билет, сервер возвращает данные о билете
async function getTicket() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        console.log('Билет успешно выбран');
        resolve({ ticket_id: 999,
                  arrival_date: '11-11-11', 
                  departure_date: '11-11-11',
                  arrival_airport: 'arrival_airport',
                  departure_airport: 'departure_airport',
                  arrival_country: 'arrival_country',
                  departure_country: 'departure_country',
                  price: 99999 
                })} 
      else {
        reject('Ошибка получения ответа')
      }
    }, 1000)
  })
}

// на основе данных о билете (на странице показаны те гостиницы, которые подходят под выбранный билет), гость выбирает гостиницу. При выборе гостиницы данные о ней возвращаются с сервера.
async function getHotel(ticketId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        console.log('Гостиница успешно выбрана');
        resolve({ hotel_id: 999,
                  title: 'title',
                  room_type: 'room_type',
                  price: 99999,
                  food_type: 'food_type'})
      } else {
        reject('Ошибка получения ответа');
      }
    }, 1000)
  })
}

// данные о гостинице нужны для получения визы
async function getVisa(hotelId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        console.log('Виза успешно получена');
        resolve({validity_period: '11-11-11'})
      }
    }, 1000)
  })
}

// получаем все данные о заказе
async function getOrder() {
  try {
    const ticket = await getTicket();
    const hotel = await getHotel(ticket.ticket_id);
    const visa = await getVisa(hotel.hotel_id);
    return ({ ticket, hotel, visa });
  } catch (error) {
    console.log(error);
  }
}

const order = await getOrder();
console.log(order);
