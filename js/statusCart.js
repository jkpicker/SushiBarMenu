 const statusCart = () => {
 	const cartWrap = document.querySelector('.cart-wrap');
 	const cartEmpty = document.querySelector('.cart-empty');
 	const order = document.querySelector('.order');
 	const cardTotal = document.querySelector('.cart-total');
 	if (cartWrap.children.length > 0) {
 		cartEmpty.classList.add('none');
 		order.classList.remove('none');
 		cardTotal.classList.remove('none');
 	} else{
 		cartEmpty.classList.remove('none');
     order.classList.add('none');
     cardTotal.classList.add('none');
 	}
 }