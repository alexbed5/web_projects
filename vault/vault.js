var db = new Dexie("secret_vault");
db.version(1).stores({
    vault: 'label,data'
});

var btnAdd = document.querySelector("btnAdd");
btnAdd.addEventListener("click", function(){
    var label = document.querySelector("#label").value;
    var data = document.querySelector("#data").value;
    if (label.length<4 || data.length==1){
        alert("You need to enter label and data");
    } else {
        var object = {
            label: label,
            data: data
        }
        db.vault.put(Object).then(function() {
            updateList();
        });
    } 
});

function updateList() {
    db.vault.orderBy("label").toArray()
        .then(function(collection) {
            var html = "";
            for (var element of collection) {
                html += "<dt>" + element.label + "</dt>";
                html += "<dd>" + element.data + "</dd>";
            }
            var list = document.querySelector("#list");
            list.innerHTML = html;

            var empty = document.querySelector("#empty");
            if (collection.length==0) {
                empty.style.display = "block";
            } else {
                empty.style.display = "none";
            }
        });
}

// when the page loads I want to update the list
updateList();