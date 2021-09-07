function total(frm) 
{
    var tot = 0;
    for (var i = 0; i < frm.elements.length; i++) {
        if (frm.elements[i].type == "checkbox") {
            if (frm.elements[i].checked) tot += 
                Number(frm.elements[i].value) * Number(frm.elements[i+1].value);
        }
    }
    document.getElementById("totalDiv").firstChild.data = "$" + tot.toFixed(2);
}