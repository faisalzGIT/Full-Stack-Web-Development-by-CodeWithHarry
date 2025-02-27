//9. The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder() {
	return new Promise((resolve, reject) => {
		let randomDelay = Math.floor(Math.random() * 5) + 1;
		setTimeout(()=>{
			console.log(`Order Confirmed\n Order Confirmed after ${randomDelay} seconds`);
			
			
		},1000 * randomDelay);
	})
}

(async ()=>{
	placeOrder();
})();
