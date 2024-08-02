// Sepet verileri (örnek)
const cartItems = [
    { photo: 'path/to/photo1.jpg', price: 100, quantity: 2 },
    { photo: 'path/to/photo2.jpg', price: 50, quantity: 1 },
];

function updateCartTable() {
    const tableBody = document.querySelector('#cartTable tbody');
    tableBody.innerHTML = ''; // Tabloyu temizle

    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');

        // Fotoğraf
        const photoCell = document.createElement('td');
        const photoImg = document.createElement('img');
        photoImg.src = item.photo;
        photoImg.alt = 'Ürün Fotoğrafı';
        photoImg.style.width = '100px';
        photoCell.appendChild(photoImg);
        row.appendChild(photoCell);

        // Fiyat
        const priceCell = document.createElement('td');
        priceCell.textContent = item.price.toFixed(2) + ' TL';
        row.appendChild(priceCell);

        // Tane Sayısı
        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        // Toplam Fiyat
        const totalPriceCell = document.createElement('td');
        const itemTotal = (item.price * item.quantity).toFixed(2);
        totalPriceCell.textContent = itemTotal + ' TL';
        row.appendChild(totalPriceCell);

        // Sil düğmesi
        const deleteCell = document.createElement('td');
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'Sil';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => deleteItem(index);
        deleteCell.appendChild(deleteBtn);
        row.appendChild(deleteCell);

        tableBody.appendChild(row);

        totalPrice += item.price * item.quantity;
    });

    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2) + ' TL';
}

function deleteItem(index) {
    cartItems.splice(index, 1);
    updateCartTable();
}

// Sayfa yüklendiğinde tabloyu güncelle
updateCartTable();
