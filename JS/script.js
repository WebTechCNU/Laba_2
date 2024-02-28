const productsData = [
    {
        imgSrc: "фото/images1.webp",
        alt: "Product 1",
        title: "Поршень 4х-тактний",
        description: "Опис 1",
        price: "Ціна: 699 грн"
    },
    {
        imgSrc:"фото/images2.png",
        alt: "Product 2",
        title: "Двигатель",
        description: "Опис 2",
        price: "Ціна: 31500 грн"
    },
    {
        imgSrc: "фото/images3.webp",
        alt: "Product 3",
        title: "Карбюратор",
        description: "Опис 3",
        price: "Ціна: 999 грн"
    },
    {
        imgSrc: "фото/images4.webp",
        alt: "Product 4",
        title: "Ланцюг",
        description: "Опис 4",
        price: "Ціна: 1300 грн"
    },
    {
        imgSrc: "фото/images5.webp",
        alt: "Product 5",
        title: "Зірки",
        description: "Опис 5",
        price: "Ціна: 1100 грн"
    },
    {
        imgSrc: "фото/images6.jpg",
        alt: "Product 6",
        title: "Головка циліндра",
        description: "Опис 6",
        price: "Ціна: 3100 грн"
    },
    {
        imgSrc: "фото/images7.webp",
        alt: "Product 7",
        title: "Поршнева 250cc",
        description: "Опис 7",
        price: "Ціна: 2800 грн"
    },
    {
        imgSrc: "фото/images8.jpg",
        alt: "Product 8",
        title: "Свічка",
        description: "Опис 8",
        price: "Ціна: 200 грн"
    },
    {
        imgSrc: "фото/images9.webp",
        alt: "Product 9",
        title: "Амортизатори",
        description: "Опис 9",
        price: "Ціна: 1200 грн"
    },
    {
        imgSrc: "фото/images10.webp",
        alt: "Product 10",
        title: "Моноамортизатор",
        description: "Опис 10",
        price: "Ціна: 1350 грн"
    },
    {
        imgSrc: "фото/images11.jpg",
        alt: "Product 11",
        title: "Траверса",
        description: "Опис 11",
        price: "Ціна: 888 грн"
    },
    {
        imgSrc: "фото/images12.webp",
        alt: "Product 12",
        title: "Гофра",
        description: "Опис 12",
        price: "Ціна: 108 грн"
    },
];

// Отримати вузол елемента, в який будуть вставлені товари
const productsContainer = document.getElementById('products');

// Пройтися по кожному товару в масиві та вставити його в HTML
productsData.forEach(product => {
    const article = document.createElement('article');
    article.classList.add('product');

    const img = document.createElement('img');
    img.src = product.imgSrc;
    img.alt = product.alt;

    const h2 = document.createElement('h2');
    h2.textContent = product.title;

    const p1 = document.createElement('p');
    p1.textContent = product.description;

    const p2 = document.createElement('p');
    p2.textContent = product.price;

    const button = document.createElement('button');
    button.textContent = 'Додати до кошика';

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(button);

    productsContainer.appendChild(article);
});
