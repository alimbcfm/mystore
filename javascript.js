// بيانات المنتجات
let products = [];

// دالة لإضافة منتج جديد
document.getElementById('add-product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name1').value;
    const idno = parseFloat(document.getElementById('idno').value);
    const quantity = parseInt(document.getElementById('mobileno').value);
    const item1 = document.getElementById('item1').value;
    const price1 = parseInt(document.getElementById('price1').value);

    if (name && idno && quantity && item1 && price1) {
        const newProduct = { name, idno, quantity, item1, price1 };
        products.push(newProduct);
        displayProducts();
        e.target.reset();
        var sound = document.getElementById("confirmationSound");
                sound.play();
       
    }
});

// دالة لعرض المنتجات في الجدول
function displayProducts() {
    const tbody = document.querySelector('#products-table tbody');
    tbody.innerHTML = '';
    products.forEach((product) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.idno}</td>
            <td>${product.quantity}</td>
            <td>${product.item1}</td>
            <td>${product.price1}</td>


        `;
        tbody.appendChild(row);
    });
}

