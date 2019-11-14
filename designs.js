const submit = document.querySelector('#submit_button');  //  submit button defined

var table = document.querySelector('#pixelCanvas');  // table defined
    
const color_picker = document.querySelector('#colorPicker');  //color picker defined

submit.style.color = 'blue';   // sumbit button colored

submit.addEventListener('click', makeGrid)   // adding event listener for the submit button 
  
  function makeGrid(event) {  // create the function

    console.log('A table was created: ' + event.target);  // use event delegation 

    if (table.firstElementChild){   // if a table is already created 
        table.firstElementChild.remove();  // remove it 
    }
    var height = document.querySelector('#inputHeight').value;  // get the height entered by user
    var width = document.querySelector('#inputWidth').value;    // get the width entered by user
    var tbdy = document.createElement('tbody');  // create table body
    for (var i = 0; i < height; i++) {   // nested for loops 
        var tr = document.createElement('tr');
        for (var j = 0; j < width; j++) {
            var td = document.createElement('td');
          tr.appendChild(td) 
      }
      tbdy.appendChild(tr);  // append rows to table body
    }
    table.appendChild(tbdy);        // append table body to table element
  }

table.addEventListener('click', function () {  // table event listener
    console.log('A cell was selected!'); 
    chosen_color = color_picker.value   // assign the chosen color
    event.target.bgColor = chosen_color  // allow the chosen color to the cell chosen 
  })

