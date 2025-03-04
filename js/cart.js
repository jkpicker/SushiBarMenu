const cartWrap =  document.querySelector('.cart-wrap');
window.addEventListener('click', e => {
	if(e.target.hasAttribute('data-cart')){
		const card = e.target.closest('.card');
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			info: card.querySelector('.pinfo').innerText,
			price: card.querySelector('.price').innerText,
      counter: card.querySelector('[data-count]').innerText
		}
		const itemCart = cartWrap.querySelector(`[data-id="${productInfo.id}"]`)
    if (itemCart) {
      const counterEl = itemCart.querySelector('[data-count]')
			counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
    } else {
			const cartItemHTML = `<div class="card cardmargin" data-id="${productInfo.id}">
                  <div class="upper">
                    <img src="${productInfo.imgSrc}" alt="" class="product-img" />
                  </div>
                  <div class="lower">
                    <h3 class="item-title">${productInfo.title}</h3>
                    <p class="pinfo">${productInfo.info}</p>
                    <div class="thirdrow">
                      <p class="price">${productInfo.price}</p>
                      <div class='addnumber'>
                        <button class='remove smallbtn' data-action="minus">-</i>
                        </button>
                        <div class="number" data-count>${productInfo.counter}</div>
                        <button class='add smallbtn' data-action="plus">+</i>
                        </button>
                      </div>
                    </div>
                    <button data-cart-delete class="btn btn-primary btn-delete btnor">ВИДАЛИТИ</button>
                  </div>
                </div>
							`
							cartWrap.insertAdjacentHTML('beforeend', cartItemHTML);
		}
		card.querySelector('[data-count]').innerText = '1'
		statusCart()
	}
	if (e.target.hasAttribute('data-cart-delete')){
		const parentNode = e.target.closest('.card')
		if (parentNode){
			parentNode.remove()
      statusCart()
		}
	}
})



/* <div class="card" data-id="${productInfo.id}">
                <img src="${productInfo.imgSrc}" alt="" class="product-img" />
                <h3 class="item-title">${productInfo.title}</h3>
                <p class="text-count">1 шт</p>
                <div class="wrap">
                  <div class="item count-wrap">
                    <div class="item-control" data-action="minus">-</div>
                    <div class="item-count" data-count>${productInfo.counter}</div>
                    <div class="item-control" data-action="plus">+</div>
                  </div>
                  <div class="price">
                    <div class="price-weight">${productInfo.weight}</div>
                    <div class="price-cost">${productInfo.price}</div>
                  </div>
                </div>
								<button data-cart-delete class="btn btn-primary">Видалити</button>
              </div> */