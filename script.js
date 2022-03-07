let ulClass=document.getElementById("add-task");

function addElement(){
    let task=document.getElementById("task-input").value;
    let date=document.getElementById("task-date").value;
    let newLi=document.createElement('li');
    newLi.innerHTML=`<span style="margin:.5rem">${date}</span>
                    <span style="margin:.5rem">${task}</span>
                    <button onclick="removeItem(event)" style="margin:.5rem;background-color: red;border-radius: 50%;height:2.5rem ;width: 2.5rem;cursor:pointer">X</button>
                    <button onclick="edittask(event)" style="margin:.5rem;background-color: blue;height:2.5rem ;width: 4rem;cursor:pointer;border-radius: 16%;color:white">Edit</button>
                    <input type="checkbox" class="checked-item" style="width: 1.5rem;height: 1.5rem;padding:auto 2rem;">`;

    newLi.style.margin=".3rem";
    newLi.style.background="#ffc93c"
    newLi.style.borderRadius=".5rem"
    newLi.style.paddingLeft=".6rem"
    ulClass.appendChild(newLi);
};

function removeItem(event){
    let getlistTask=event.target.parentNode;
    console.log(getlistTask)
    if(getlistTask){
        getlistTask.remove();
    }
}

function edittask(event){
    let currentItem=event.target.parentNode;
    let currentItemTaskName=currentItem.children[0];
    let currentItemTaskDate=currentItem.children[1];

    currentItem.innerHTML=`<span style="margin:.5rem">${currentItem.children[0].innerText}</span>
                    <span style="margin:.5rem">${currentItem.children[1].innerText}</span>
                    <input type="date"  
                           style="background:transparent;border:none;outline:none;margin:1rem;font-size:2rem;color:white" >
                    <input type="text" placeholder="Enter Text" 
                            style="background:transparent;border:none;outline:none;margin:1rem;font-size:2rem;color:white" >
                    <button onclick="removeItem(event)" style="margin:.5rem;background-color: red;border-radius: 50%;height:2.5rem ;width: 2.5rem;cursor:pointer">X</button>
                    <button onclick="saveItem(event)" style="margin:.5rem;background-color: blue;height:2.5rem ;width: 4rem;cursor:pointer;border-radius: 16%;color:white">Save</button>`;
    
    currentItemTaskDate=currentItem.children[0];
    currentItemTaskName=currentItem.children[1];
    currentItemTaskDate.style.display="none";
    currentItemTaskName.style.display="none";
};

function saveItem(event){
    let currentItem=event.target.parentNode;
    let currentItemTaskDate=currentItem.children[0];
    let currentItemTaskName=currentItem.children[1];

    let editedDate=currentItem.children[2];
    let editedName=currentItem.children[3];

    currentItemTaskDate.innerText=editedDate.value;
    currentItemTaskName.innerText=editedName.value;

    editedDate.remove();
    editedName.remove();

    currentItemTaskDate.style.display="inline";
    currentItemTaskName.style.display="inline";

    currentItem.children[3].setAttribute("onclick","edittask(event)");
    currentItem.children[3].innerText="Edit";


};

function deleteitems(){
    let checkedItems=document.querySelectorAll(".checked-item");
    checkedItems.forEach(element=>{
        if(element.checked){
            element.parentNode.remove();
        }
    })
}