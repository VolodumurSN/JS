document.querySelector('#alert').addEventListener('click', function() {
    alert('click!')
  })
  
  document.querySelector('#confirm').addEventListener('click', function() {
    var decision = confirm('Are you ready?')
  
    if (decision) {
      alert('ok!')
    }
  })
  
  document.querySelector('#prompt').addEventListener('click', function() {
    var age = prompt('Enter your age:', 18)
  
    if (age >= 18) {
      alert('Ok')
    } else {
      alert('Stop')
    }
  })
  
  console.error('Console.error')
  
  console.log('Console.log')
  console.warn('Console.warn')
  console.info('Console.info')
  
  
  