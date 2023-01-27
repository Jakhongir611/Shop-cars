let cars = [{
  ID: 1,
  Name: 'Malibu',
  Garantiya: '1-год',
  price: 25000,
  img: "https://kluz-photos.kcdn.online/webp/7f/7fa61fed-7e61-4c44-ab2a-715ec3d89d32/1-408x306.jpg",
  features: {
    engine_capacity: 'Объем 2 л Мощность 137 л. с.',
    consumption: 'Расход 8-9 л Тип топлива Бензин АИ-95.',
    seats: 'Кол-во мест 5 мест Кол-во дверей 4 двери',
    clearance: 'Клиренс 145 мм Объем багажника 155 л',
    year_of_issue: '2023',
    speed: '240',
    color: "white",
}
},{
  ID: 2,
  Name: 'Cobalt',
  Garantiya: '1-год',
  price: 14000,
  img: "https://lionmotors.uz/wp-content/uploads/2020/11/cobalt3-700x394.jpg",
  features: {
    engine_capacity: 'Объем 1.5 л Мощность 127 л. с.',
    consumption: 'Расход 7-8 л Тип топлива Бензин АИ-92.',
    seats: 'Кол-во мест 5 мест Кол-во дверей 4 двери',
    clearance: 'Клиренс 135 мм Объем багажника 170 л',
    year_of_issue: '2023',
    speed: '230',
    color: "white",
}
},{
  ID: 3,
  Name: 'Lacetti',
  Garantiya: '1-год',
  price: 15000,
  img: "https://frankfurt.apollo.olxcdn.com/v1/files/74sf7zq8fn972-UZ/image",
  features: {
    engine_capacity: 'Объем 1.5 л Мощность 110 л. с.',
    consumption: 'Расход 6,2 л Тип топлива Бензин Regular (АИ-91)',
    seats: 'Кол-во мест 4 места Кол-во дверей 5 дверей',
    clearance: 'Клиренс 145 мм Объем багажника 405 л',
    year_of_issue: 2023,
    speed: 220,
    color: "black",
}
},{
  ID: 4,
  Name: 'Onix',
  Garantiya: '1-год',
  price: 20000,
  img: "https://www.gazeta.uz/media/img/2022/10/ft8n9k16672249744928_l.jpg",
  features: {
    engine_capacity: 'Объем 1.4 л Мощность 107 л. с.',
    consumption: 'Расход 5-6 л Тип топлива Бензин АИ-92.',
    seats: 'Кол-во мест 5 мест Кол-во дверей 4 двери',
    clearance: 'Клиренс 140 мм Объем багажника 150 л',
    year_of_issue: '2023',
    speed: '200',
    color: "grey",
}
},{
  ID: 5,
  Name: 'Nexia',
  Garantiya: '1-год',
  price: 11000,
  img: "https://нексия.рф/wp-content/uploads/2018/10/maxresdefault-1.jpg",
  features: {
    engine_capacity: 'Объем 1.6 л Мощность 117 л. с.',
    consumption: 'Расход 8-9 л Тип топлива Бензин АИ-92.',
    seats: 'Кол-во мест 5 мест Кол-во дверей 4 двери',
    clearance: 'Клиренс 135 мм Объем багажника 130 л',
    year_of_issue: '2022',
    speed: '220',
    color: "grey",
}
}]

// сделать конфирм купить машину 
// если да то показать список имен 
// каждая машины будет соответсвовать номеру массива для выбора
// когда выбрали машину покажите ее характеристики и 
// спроситие хотите ли вы ее купить
// если да то вы поздравляеете и пишете вы приобрели машину и ее характеристики
// если нет то спрашиваете почему и закидываете ответ в консоль
// let prm = confirm('Хотите ли приобрести машину')




let conf = confirm('Хотите ли вы приобрести машину?')
if (conf == true) {
  let kupi = prompt('Выберите ID машины что-бы купить \n"Malibu №1" "Cobalt №2" "Lacetti №3" "Onix №4" "Nexia №5"')
  if(kupi == cars[0].ID) {
    let xaracter_mal = cars[0].features
    let xaracter_alr = Object.values(xaracter_mal)
    alert(xaracter_alr)
    let tochno = confirm('Xотите ли вы ее купить')
    if (tochno == true){
      alert('Поздравляем вас с покупкой вы купили "Malibu"')
      alert(xaracter_alr)
      let link = document.createElement('a');
      link.innerHTML = `<img src="${cars[0].img}">`;
      document.querySelector('.li').append(link);
      // document.text(cars[0].img)
    }else{
      let prichina = prompt('Почему вы передумали покупать машину')
      console.log(prichina);
    }
  }else if(kupi == cars[1].ID) {
    let xaracter_mal = cars[1].features
    let xaracter_alr = Object.values(xaracter_mal)
    alert(xaracter_alr)
    let tochno = confirm('Xотите ли вы ее купить')
    if (tochno == true){
      alert('Поздравляем вас с покупкой вы купили "Cobalt"')
      alert(xaracter_alr)
      let link = document.createElement('a');
      link.innerHTML = `<img src="${cars[1].img}">`;
      document.querySelector('.li').append(link);
      // document.write(cars[1].img)
    }else{
      let prichina = prompt('Почему вы передумали покупать машину')
      console.log(prichina);
    }
  }else if(kupi == cars[2].ID) {
    let xaracter_mal = cars[2].features
    let xaracter_alr = Object.values(xaracter_mal)
    alert(xaracter_alr)
    let tochno = confirm('Xотите ли вы ее купить')
    if (tochno == true){
      alert('Поздравляем вас с покупкой вы купили "Lacetti"')
      alert(xaracter_alr)
      let link = document.createElement('a');
      link.innerHTML = `<img src="${cars[2].img}">`;
      document.querySelector('.li').append(link);
      // document.write(cars[2].img)
    }else{
      let prichina = prompt('Почему вы передумали покупать машину')
      console.log(prichina);
    }
  }else if(kupi == cars[3].ID) {
    let xaracter_mal = cars[3].features
    let xaracter_alr = Object.values(xaracter_mal)
    alert(xaracter_alr)
    let tochno = confirm('Xотите ли вы ее купить')
    if (tochno == true){
      alert('Поздравляем вас с покупкой вы купили "Onix"')
      alert(xaracter_alr)
      let link = document.createElement('a');
      link.innerHTML = `<img src="${cars[3].img}">`;
      document.querySelector('.li').append(link);
      // document.write(cars[3].img)
    }else{
      let prichina = prompt('Почему вы передумали покупать машину')
      console.log(prichina);
    }
  }else if(kupi == cars[4].ID) {
    let xaracter_mal = cars[4].features
    let xaracter_alr = Object.values(xaracter_mal)
    alert(xaracter_alr)
    let tochno = confirm('Xотите ли вы ее купить')
    if (tochno == true){
      alert('Поздравляем вас с покупкой вы купили "Nexia"')
      alert(xaracter_alr)
      let link = document.createElement('a');
      link.innerHTML = `<img src="${cars[4].img}">`;
      document.querySelector('.li').append(link);
      // document.write(cars[4].img)
    }else{
      let prichina = prompt('Почему вы передумали покупать машину')
      console.log(prichina);
    }
  }else{
    alert('Простите но такой машины нет в нашем автосалоне')
  }
}else{
  alert('Обновите сайт если всё таки хотите купить машину')
}

















































// let massiv = [{
//     "name": "Cobalt",
//     "price": "14000",
//     "features": {
//         "speed": "240km",
//         "age": "2020",
//         "color": "white",
//         "company": "GM",
//     }
//   },{
//     "name": "Malibu",
//     "price": "25000",
//     "features": {
//         "speed": "250km",
//         "age": "2023",
//         "color": "black",
//         "company": "GM",
//     }
//   },{
//     "name": "Lacetti",
//     "price": "18000",
//     "features": {
//         "speed": "230km",
//         "age": "2023",
//         "color": "grey",
//         "company": "GM",
//     }
//   },{
//     "name": "Tahoe",
//     "price": "110000",
//     "features": {
//         "speed": "200km",
//         "age": "2023",
//         "color": "black",
//         "company": "GM",
//     }
//   },{
//     "name": "Tesla",
//     "price": "85000",
//     "features": {
//         "speed": "320km",
//         "age": "2023",
//         "color": "black",
//         "company": "GM",
//     }
//   }]

  