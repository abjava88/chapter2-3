const add = function(x, y){
    return x + y
  }
  
  async function calculate(a, b) {
      try {
        console.log("inside calculate")
        const response = await add(a,b)  // appelle service web 
        console.log(response)
      } catch (error) {
        console.error(error)
      }
  }
  
  calculate(20,50)

  console.log(add(30,60))