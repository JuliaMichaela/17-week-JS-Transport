const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

class Transport {
    constructor(type, price, brand, image) {
    this.type = type;
    this.price = price;
    this.brand = brand;
    this.image = image;
}
    getInfo() {
        return `Information:\nTransport - ${this.type}.\nBrand - ${this.brand}.`
    }
    getPrice() {
        return `Price: ${this.price}$`
    }
}

class Car extends Transport {
    constructor (price, brand, doors, image){
        super ('car', price, brand, image);
        this.doors = doors;
    }
    getInfo() {
        return `${super.getInfo()}\n${this.getDoorsCount()}`;
    }
    getDoorsCount() {
        return `Door\`s count: ${this.doors}.`;
    }
}

class Bike extends Transport {
    constructor (price, brand, maxSpeed, image){
    super ('bike', price, brand, image);
    this.maxSpeed = maxSpeed;
    }
    getInfo() {
        return `${super.getInfo()}; ${this.getMaxSpeed()}`;
}
    getMaxSpeed() {
        return `Max speed: ${this.maxSpeed}km/h`;
    }
}
  
const transportData = data.map((item) => {
    switch (item.type) {
        case 'car':
            return new Car(item.price, item.brand, item.doors, item.image);
        case 'bike':
            return new Bike(item.price, item.brand, item.maxSpeed, item.image);
    }
});

const container = document.querySelector('.container');

transportData.forEach((transport) => {
    const containerCard = document.createElement('div');
    containerCard.classList.add('containerCard');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');

    const image = document.createElement('img');
    image.setAttribute('src', transport.image);

    image.classList.add('image');
    imageContainer.appendChild(image);
    containerCard.appendChild(imageContainer);

    const info = document.createElement('p');
    info.textContent = transport.getInfo();

    const price = document.createElement('p');
    price.textContent = transport.getPrice();

    containerCard.append(info, price);
    container.appendChild(containerCard);
});