document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;
    const size = document.getElementById('size').value;
    const type = document.getElementById('type').value;

    fetch('/rooms')
        .then(response => response.json())
        .then(results => {
            const filteredResults = results.filter(room => {
                return (!location || room.location.toLowerCase().includes(location.toLowerCase())) &&
                    (!price || room.price <= price) &&
                    (!size || room.size >= size) &&
                    (!type || room.type.toLowerCase() === type.toLowerCase());
            });

            const roomList = document.getElementById('room-list');
            roomList.innerHTML = '';
            filteredResults.forEach(room => {
                const roomItem = document.createElement('div');
                roomItem.className = 'room-item';
                roomItem.innerHTML = `
                    <h3>${room.location}</h3>
                    <p>Price: ${room.price}</p>
                    <p>Size: ${room.size} sqft</p>
                    <p>Type: ${room.type}</p>
                `;
                roomList.appendChild(roomItem);
            });
        });
});
