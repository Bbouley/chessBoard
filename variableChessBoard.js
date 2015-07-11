var size = 10
var string = ''

for (var i = 1; i <= size; i++)
  if (i%2 != 0){
    for (var y = 1; y <= size+1; y++)
      if (y === size+1){
        string += '\n'
      } else if(y%2 != 0){
          string += ' '
        } else if (y%2 === 0) {
          string += '#'
        }
          } else {
            for (var z= 1; z <= size+1; z++) {
              if (z === size+1){
                string += '\n'
              }
              else if (z%2 != 0) {
                string += '#'
              } else if (z%2 === 0) {
                string += ' '
                  }
            }
          }console.log (string)
