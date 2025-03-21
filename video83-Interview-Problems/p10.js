
// 10. The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(type) {
	return new Promise((resolve, reject)=>{
		let randomDelay = Math.floor(Math.random() * 5) + 1;
		setTimeout(() => {
			resolve(console.log('Coffee is Ready!!'));
		}, 1000 * randomDelay);
	})
}

(async ()=>{
	await brewCoffee('Cappucino');
})();