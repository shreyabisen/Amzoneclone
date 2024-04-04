

const showSidebar = () => {
    var leftSidebar = document.getElementById('leftsidebar')
    leftSidebar.style.display = 'block'

}
const hideSidebar = () => {
    var leftSidebar = document.getElementById('leftSidebar')
    leftSidebar.style.display = 'none'

}
// fetch("https://dummyjson.com/products")
//     .then(res => res.json())
//     .then(data => console.log(data.prouduct))
//     .catch(err => console.log(err))

$.ajax({
    url: 'https://dummyjson.com/products',
    type: 'get',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        for (let i = 0; i < data.products.length; i++) {

            const oneproduct = `
                <div class="oneproducts">
                    <p>${data.products[i].category}</p>

                    <img src="${data.products[i].images[0]}"

                    <h1>${data.products[i].title}</h1>

                    <h3>${data.products[i].description}</h3>

                    <div class="priceNRating">
                        <h2>${data.products[i].price}</h2>

                        <h4$star${data.products[i].rating}</h4>
                    </div>
                
                    <button>add to cart</button>
                </div>
                `

            $('#allProducts').append(oneproduct)

        }

    },
    error: function (error) {
        console.log(error)
    },
    always: function () {
    }
})