function myBook() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function sort() {
  
    var book_list, i, run, li, stop;
    
    book_list = document.getElementById("myUL");

    run = true;
    
    while (run) {
        run = false;
        li = book_list.getElementsByTagName("li");

        
        for (i = 0; i < (li.length - 1); i++) {
            stop = false;
            if (li[i].innerHTML.toLowerCase() > 
                li[i + 1].innerHTML.toLowerCase()) {
                stop = true;
                break;
            }
        }

        if (stop) {
            li[i].parentNode.insertBefore(
                    li[i + 1], li[i]);

            run = true;
        }
    }
}
