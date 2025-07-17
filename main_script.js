window.onload = function() {
    localStorage.clear()
}
const info = new XMLHttpRequest();
const continueShoppingBtn = document.getElementById("continue-shopping");
const backtoproductsBtn = document.getElementById("back-to-products");
const backtocartBtn = document.getElementById("back-to-cart");
const addToCartBtns = document.querySelectorAll(".add-to-cart");
const cartitems = document.querySelector(".cart-items");
const carttotal = document.querySelector(".cart-total");
const totalprice = document.getElementById('total-price');
const submit = document.getElementById('submit');
const cform = document.querySelector('.form');
info.open('GET', 'info.json');
info.send();
info.onreadystatechange = () => {
    if (info.readyState == 4 && info.status == 200) {
        const data = JSON.parse(info.responseText);
        const glasses = data[0];
        const tshirt = data[1];
        const desk = data[2];
        const monitor = data[3];
        const keyboard = data[4];
        const joysticks = data[5];
        const book = data[6];
        const headphone = data[7];
        const shoes = data[8];
        const addglasses = document.getElementById("add-to-cart-glasses");
        const addtshirt = document.getElementById("add-to-cart-tshirt");
        const adddesk = document.getElementById("add-to-cart-desk");
        const addmonitor = document.getElementById("add-to-cart-monitor");
        const addkeyboard = document.getElementById("add-to-cart-keyboard");
        const addjoysticks = document.getElementById("add-to-cart-joysticks");
        const addbook = document.getElementById("add-to-cart-book");
        const addheadphone = document.getElementById("add-to-cart-headphone");
        const addshoes = document.getElementById("add-to-cart-shoes");
        addglasses.addEventListener("click", function(event) {
            event.preventDefault();
            localStorage.setItem('glasses-quantity', document.getElementById('glasses-quantity').value);
            const li = document.createElement('li');
            li.innerHTML = `<img src=${glasses.img} alt="">  ${localStorage.getItem('glasses-quantity')}  ${glasses.name} - $${glasses.price} ${glasses.description} `;
            cartitems.appendChild(li);
            updatecart();
            alert(`Added ${localStorage.getItem('glasses-quantity')} ${glasses.name} to cart.`);
        });
        addtshirt.addEventListener("click", function(event) {
            event.preventDefault();
            localStorage.setItem('tshirt-quantity', document.getElementById('tshirt-quantity').value);
            const li = document.createElement('li');
            li.innerHTML = `<img src=${tshirt.img} alt="">  ${localStorage.getItem('tshirt-quantity')}  ${tshirt.name} - $${tshirt.price} ${tshirt.description} `;
            cartitems.appendChild(li);
            updatecart();
            alert(`Added ${localStorage.getItem('tshirt-quantity')} ${tshirt.name} to cart.`);
        });
        adddesk.addEventListener("click", function(event) {
            event.preventDefault();
            localStorage.setItem('desk-quantity', document.getElementById('desk-quantity').value);
            const li = document.createElement('li');
            li.innerHTML = `<img src=${desk.img} alt="">  ${localStorage.getItem('desk-quantity')}  ${desk.name} - $${desk.price} ${desk.description} `;
            cartitems.appendChild(li);
            updatecart();
            alert(`Added ${localStorage.getItem('desk-quantity')} ${desk.name} to cart.`);
        });
        addmonitor.addEventListener("click", function(event) {
            event.preventDefault();
            localStorage.setItem('monitor-quantity', document.getElementById('monitor-quantity').value);
            const li = document.createElement('li');
            li.innerHTML = `<img src=${monitor.img} alt="">  ${localStorage.getItem('monitor-quantity')}  ${monitor.name} - $${monitor.price} ${monitor.description} `;
            cartitems.appendChild(li);
            updatecart();
            alert(`Added ${localStorage.getItem('monitor-quantity')} ${monitor.name} to cart.`);
        });
        addkeyboard.addEventListener("click", function(event) {
            event.preventDefault();
            localStorage.setItem('keyboard-quantity', document.getElementById('keyboard-quantity').value);
            const li = document.createElement('li');
            li.innerHTML = `<img src=${keyboard.img} alt="">  ${localStorage.getItem('keyboard-quantity')}  ${keyboard.name} - $${keyboard.price} ${keyboard.description} `;
            cartitems.appendChild(li);
            updatecart();
            alert(`Added ${localStorage.getItem('keyboard-quantity')} ${keyboard.name} to cart.`);
        });
        addjoysticks.addEventListener("click", function(event) {
            event.preventDefault();
            localStorage.setItem('joysticks-quantity', document.getElementById('joysticks-quantity').value);
            const li = document.createElement('li');
            li.innerHTML = `<img src=${joysticks.img} alt="">  ${localStorage.getItem('joysticks-quantity')}  ${joysticks.name} - $${joysticks.price} ${joysticks.description} `;
            cartitems.appendChild(li);
            updatecart();
            alert(`Added ${localStorage.getItem('joysticks-quantity')} ${joysticks.name} to cart.`);
        });
        addbook.addEventListener("click", function(event) {
            event.preventDefault();
            localStorage.setItem('book-quantity', document.getElementById('book-quantity').value);
            const li = document.createElement('li');
            li.innerHTML = `<img src=${book.img} alt="">  ${localStorage.getItem('book-quantity')}  ${book.name} - $${book.price} ${book.description} `;
            cartitems.appendChild(li);
            updatecart();
            alert(`Added ${localStorage.getItem('book-quantity')} ${book.name} to cart.`);
        });
        addheadphone.addEventListener("click", function(event) {
            event.preventDefault();
            localStorage.setItem('headphone-quantity', document.getElementById('headphone-quantity').value);
            const li = document.createElement('li');
            li.innerHTML = `<img src=${headphone.img} alt="">  ${localStorage.getItem('headphone-quantity')}  ${headphone.name} - $${headphone.price} ${headphone.description} `;
            cartitems.appendChild(li);
            updatecart();
            alert(`Added ${localStorage.getItem('headphone-quantity')} ${headphone.name} to cart.`);
        });
        addshoes.addEventListener("click", function(event) {
            event.preventDefault();
            localStorage.setItem('shoes-quantity', document.getElementById('shoes-quantity').value);
            const li = document.createElement('li');
            li.innerHTML = `<img src=${shoes.img} alt="">  ${localStorage.getItem('shoes-quantity')}  ${shoes.name} - $${shoes.price} ${shoes.description} `;
            cartitems.appendChild(li);
            updatecart();
            alert(`Added ${localStorage.getItem('shoes-quantity')} ${shoes.name} to cart.`);
        });
        function updatecart(){
            let total = 0;
            const items = cartitems.querySelectorAll('li');
            items.forEach(item => {
                const parts = item.innerText.split(' ');
                const quantity = parseInt(parts[2], 10); 
                const price = parseFloat(item.innerText.split('$')[1]);
                if (!isNaN(quantity) && !isNaN(price)) {
                    total += quantity * price;
                }
                console.log(parts);
                totalprice.innerText = total.toFixed(2);
                localStorage.setItem('total', total.toFixed(2));
            });
};
        };
    }

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
submit.addEventListener("click", function(event) {
    event.preventDefault();
    if (name.value == '' || email.value == '' || phone.value == '') {
        alert("Please fill in all fields.");
    } else {
        while (cartitems.firstChild) {
            cartitems.removeChild(cartitems.firstChild);
        }
        carttotal.innerText = '0.00';
        [
            'glasses-quantity',
            'tshirt-quantity',
            'desk-quantity',
            'monitor-quantity',
            'keyboard-quantity',
            'joysticks-quantity',
            'book-quantity',
            'headphone-quantity',
            'shoes-quantity',
            'total'
        ].forEach(key => localStorage.removeItem(key));
        document.querySelector(".cart").style.display = "none";
        document.querySelector(".main").style.display = "block";
        alert("Thank you for your purchase!");
    }
});

continueShoppingBtn.addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".empty-cart").style.display = "none";
    document.querySelector(".main").style.display = "block";
});

backtoproductsBtn.addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".cart").style.display = "none";
    document.querySelector(".main").style.display = "block";
});

backtocartBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const cartItemsContainer = cartitems;
    const hasItems = cartItemsContainer && cartItemsContainer.children.length > 0;
    document.querySelector(".main").style.display = "none";
    if (hasItems) {
        document.querySelector(".empty-cart").style.display = "none";
        document.querySelector(".cart").style.display = "block";
    } else {
        document.querySelector(".cart").style.display = "none";
        document.querySelector(".empty-cart").style.display = "block";
    }
});



