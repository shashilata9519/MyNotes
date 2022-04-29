console.log("welcome to magic notes");
showNotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) 
{
    let addtxt = document.getElementById("addtxt");
    let addtitle = document.getElementById("addtitle");
    let notes = localStorage.getItem("notes");
    let notesObj = [];
   
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myobj={
        title:addtitle.value,
        text:addtxt.value
    }
    ob = addtxt.value;
    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = " ";
    addtitle.value=" ";
    // console.log(notesObj);

    showNotes();
});
function Display()
{

}




//for showing any notes

function showNotes() 
{
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let magic = "";
    notesObj.forEach(function(element, index) 
    {
        magic += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"> ${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Notes</button>
                </div>
        </div>`;
    });
    
    let notesElm = document.getElementById("notes");
   
    if (notesObj.length !=0) 
    {
        notesElm.innerHTML=magic;
    }
    else
    {
        notesElm.innerHTML=`Nothing to show! Use "Add a Note" section about to add notes.`;
    }
}
// for deleting any notes

function deleteNotes(index)
{
    // console.log("i am deleting",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// for searching any notes
let search=document.getElementById('searchtxt');
search.addEventListener("input",function()
{   let inputval=search.value.toLowerCase();
    // console.log('input event fired',inputval);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval))
        {
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })

})