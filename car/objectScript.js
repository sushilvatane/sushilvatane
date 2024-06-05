const carCollection = [
  {
    name: 'Ford Mustang',
    discount: '5%',
    color: 'Red',
    engine: 'V8',
    price: '$7M',
    actualprice: '$13M',
    brand: 'Ford'
  },

  {
    name: 'Jaguar I-Pace',
    discount: '4%',
    color: 'Red',
    engine: 'V8',
    price: '$11M',
    actualprice: '$20M',
    brand: 'Jaguar'
  },
  {
    name: 'Ford F-150',
    discount: '5%',
    color: 'Black',
    engine: 'V6',
    price: '$4.5M',
    actualprice: '$8.5M',
    brand: 'Ford'
  },
  {
    name: 'Ford Explorer',
    discount: '5%',
    color: 'Silver',
    engine: 'V6',
    price: '$5.5M',
    actualprice: '$8.7M',
    brand: 'Ford'
  },
  {
    name: 'Jaguar F-Type',
    discount: '5%',
    color: 'Blue',
    engine: 'V6',
    price: '$7M',
    actualprice: '$10.5M',
    brand: 'Jaguar'
  },
  {
    name: 'Jaguar XE',
    discount: '6%',
    color: 'yellow',
    engine: 'V5',
    price: '$7M',
    actualprice: '$12M',
    brand: 'Jaguar'
  },

  {
    name: 'Jaguar XJ',
    discount: '9%',
    color: 'Silver',
    engine: 'V6',
    price: '$10M',
    actualprice: '$18M',
    brand: 'Jaguar'
  },
  {
    name: 'Jaguar F-Pace',
    discount: '5%',
    color: 'Teal',
    engine: 'V8',
    price: '$9M',
    actualprice: '$16M',
    brand: 'Jaguar'
  },
  {
    name: 'Jaguar I-Pace-V2',
    discount: '4%',
    color: 'Orange',
    engine: 'V8',
    price: '$11M',
    actualprice: '$20M',
    brand: 'Jaguar'
  }
];

function displayCars(carsToShow) {
  const carContainer = document.getElementById('carmenu');
  carContainer.innerHTML = ''; 
  carsToShow.forEach(car => {
    const carElement = document.createElement('li');
    carElement.classList.add('slide-in-down');
    carElement.innerHTML = `  
      <div class="car-menu">
        <div class="card-banner">
            <img src="imgs/${car.name}.jpg" width="300" height="300" loading="lazy" alt="${car.name}" class="w-100">
            <div class="badge">${car.discount || ''}</div>
            <button class="btn car-menu-btn">Order Now</button>
        </div>
        <div class="wrapper">
            <p class="category">${car.color}</p>
            <div class="rating-wrapper">
               ${car.engine}
            </div>
        </div>
        <h3 class="h3 card-title">${car.name}</h3>
        <div class="price-wrapper">
            <p class="price-text">Price:</p>
            <data class="price" value="${car.price}">${car.price}</data>
            <del class="del">${car.actualprice || ''}</del>
        </div>
      </div>`;
    carContainer.appendChild(carElement);

   
  });
}

function filterCars(brand) {
  const filteredCars = brand === 'All' ? carCollection : carCollection.filter(car => car.brand === brand);
  displayCars(filteredCars);
}


displayCars(carCollection);