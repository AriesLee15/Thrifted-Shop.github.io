const product = [
    {
        id: 0,
        image: 'images/1img.png',
        title: 'The North Face Big Puffer',
        price: 2000,
    },
    {
        id: 1,
        image: 'images/2img.png',
        title:  'The North Face Medium Puffer',
        price: 2500,
    },
    {
        id: 2,
        image: 'images/3img.png',
        title:  'The North Face WindStopper',
        price: 600,
    },
    {
        id: 3,
        image: 'images/4img.png',
        title: 'The North Face Wind Breaker',
        price: 1300,
    },
    {
        id: 4,
        image: 'images/4img.png',
        title: 'The North Face Wind Breaker',
        price: 1300,
    }
];

const rootElement = document.getElementById('root');

rootElement.innerHTML = product.map((items) => {
    const { id, image, title, price } = items;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}' alt='${title}' />
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${price}.00</h2>
                <button onclick='addtocart(${id})'>Add to cart</button>
            </div>
        </div>
    `;
}).join('');

var cart = [];

function addtocart(a){
    cart.push({...product[a]});
    displaycart();
}
function delElement(index){
    cart.splice(index, 1);
    displaycart();
}

    function displaycart(a){
        let j = 0; total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your Cart is empty";
            document.getElementById("total").innerHTML = "$ "+0+" .00";
        }
        else{
            document.getElementById('cartItem').innerHTML = cart.map((items, index)=>
            {
            var {id, image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+" .00";
            return(
                `<div class='cart-items'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style = 'font-size:12px;'>${title}</p>
                <h2 style = 'font-size: 15px;'>$ ${price}.00</h2>`+
                "<img class='basket' onclick='delElement("+ (j++) +")'/><</div>"
            );
            }).join('');
        }
    }
    