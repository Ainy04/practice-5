document.addEventListener('DOMContentLoaded', ()=>{
    const bntAdd = document.getElementById('btnAdd');
    const inputItem = document.getElementById('txtItem');
    const list = document.getElementById('itemList');

    // array of items
    let items = [
        {name: 'Laptop', purchase: false},
        {name: 'Mouse', purchase: true},
        {name: 'Keyboard', purchase: false}
    ];

    function renderList(){
        list.innerHTML = '';

        items.forEach((item, index) => {
            let li = document.createElement('li');

            // texto
            const span = document.createElement('span');
            span.textContent = item.name;

            // botón delete
            const btnDelete = document.createElement('button');
            btnDelete.textContent = "Delete";

            // evento delete con índice
            btnDelete.addEventListener("click", () => {
                items.splice(index, 1); // borra
                renderList(); // vuelve a pintar la lista
            });

            
            // botón edit
            const btnEdit = document.createElement('button');
            btnEdit.textContent = "Edit";

             // evento delete con índice
            btnEdit.addEventListener("click", () => {
                items.splice(index, 1); // borra
                renderList(); 
            });

            

            li.appendChild(span);
            li.appendChild(btnDelete);
            list.appendChild(li);
        });
    }

    // hook event add
    bntAdd.addEventListener("click", ()=>{
        let item = inputItem.value.trim();
        if(item === "") return;
        items.push({ name: item, purchase: false });
        inputItem.value = "";
        renderList();
    });

    renderList(); // initial render
});
