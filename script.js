// Fetch and display XML data
fetch('data.xml')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'application/xml');
        const items = xmlDoc.querySelectorAll('item');

        const xmlDataList = document.getElementById('xml-data');
        items.forEach(item => {
            const name = item.querySelector('name').textContent;
            const price = item.querySelector('price').textContent;
            const listItem = document.createElement('li');
            listItem.textContent = `${name}: $${price}`;
            xmlDataList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching XML data:', error));

// Fetch and display JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const jsonItems = data.items;

        const jsonDataList = document.getElementById('json-data');
        jsonItems.forEach(item => {
            const name = item.name;
            const price = item.price;
            const listItem = document.createElement('li');
            listItem.textContent = `${name}: $${price}`;
            jsonDataList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching JSON data:', error));
