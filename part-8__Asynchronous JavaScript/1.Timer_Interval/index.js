/* 
setTimeout(() => {
	alert('Hello')
}, 2000)
 */

const interval = setInterval(() => {
	alert('Hello')
}, 2000)

setTimeout(() => {
	clearInterval(interval)
}, 5000);