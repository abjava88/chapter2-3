const add = function(x, y){
    return x + y
  }
  
  async function calculate(a, b) {
      try {
        const response = await add(a,b) 
        console.log(response)
      } catch (error) {
        console.error(error)
      }
  }
  
  calculate(20,50)