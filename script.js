const items = [
    { title: "Пять пуль", explanation: "Я думал мы в ролевые понарошку", image: "five.jpg" },
    { title: "Сергей Разумовский", explanation: "Единственная моя мотивация учиться", image: "ISKUSSTVO.jpg" },
    { title: "Чумной доктор", explanation: "Самая адекватная тут", image: "adekvatish.png" },
    { title: "Волчья преданность", explanation: "Между ними пять пуль и много недопониманий, но они такие няняня, взросли обнимающиеся мужики", image: "cerovolki.png" },
    { title: "Главный любитель Леди Гаги", explanation: "Одной рукой писать не удобно", image: "HEARMYOUT.PNG" },
    { title: "Души Меня Олег Волков", explanation: "Поросятки, волк сдует этот домик", image: "Dushi_menia_Oleg.png" }
];

const vvod = document.getElementById('vvod'); 
const vyvod = document.getElementById('vyvod'); 

const displayItems = (filteredItems) => { 
    vyvod.innerHTML = ""; // Очистить перед добавлением новых элементов 
    filteredItems.forEach(item => { 
        const div = document.createElement('div'); 
        div.classList.add('square'); // Добавляем класс для стилей 
        
        // Создаем заголовок
        const title = document.createElement('h4');
        title.innerText = item.title;

        // Создаем пояснение
        const explanation = document.createElement('p');
        explanation.innerText = item.explanation;

        // Создаем изображение
        const img = document.createElement('img');
        img.src = item.image; // Замените на актуальные ссылки на изображения
        img.alt = item.title;

        // Добавляем элементы в див
        div.appendChild(title);
        div.appendChild(explanation);
        div.appendChild(img);
        
        vyvod.appendChild(div); 
    }); 
}; 

displayItems(items); // Отображаем начальный массив 

vvod.addEventListener('input', () => { 
    const filteredItems = items.filter(item => 
        item.title.toLowerCase().includes(vvod.value.toLowerCase()) 
    ); 
 
    displayItems(filteredItems); // Отображаем отфильтрованные элементы 
});


