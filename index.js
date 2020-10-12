/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

const greet = (time) => {
  const hour = parseInt(time, 10);
  if (hour < 12) {
    return 'Good Morning'
  } else if (hour > 17) {
    return 'Good Evening'
  } else {
    return 'Good Afternoon'
  }
}

/* Write your implementation of displayMessage() */
const displayMessage = (message) => {
  let greeting = document.querySelector('body h1#greeting')
  greeting.innerText = message
}