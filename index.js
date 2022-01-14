/*function sortit(a,b){
    return(a-b)
}
 
function sortvalues(param){
    var inputvalues = document.sorter.sorter2.value.split(" ") // store input as array of words
    if (param == 0){ //if sort alphabetically
        inputvalues.sort()
    }
    else{ //else if sort numerically
        inputvalues.sort(sortit)
    }
    document.sorter.sorter2.value=''
    for (i=0; i<inputvalues.length-1; i++){
        document.sorter.sorter2.value = document.sorter.sorter2.value + inputvalues[i]+" "
    }
    document.sorter.sorter2.value += inputvalues[inputvalues.length-1]
}*/

function sorting(){
    var ask=prompt("Enter total number of elements: ")
    var marks=[];
    for(let i=0;i<ask;i++){
         marks[i]=prompt("Enter number: ");
    }
// Print Before Sortring Array
document.write("Original Array</br>");
document.write(marks);
     
document.write("</br>");
 
// Call sort function
marks.sort();
 
document.write("</br>After Sorting in Ascending Order</br>");

// Print Sorted Numeric Array
document.write(marks);
//let shiftinput= parseInt(document.getElementById('shiftinput').value)
//console.log(shiftinput)
}