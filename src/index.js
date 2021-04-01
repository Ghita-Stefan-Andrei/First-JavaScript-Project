let id = 0;

//Not Finished Div
let leftBlock = document.getElementById('leftItem');

//Finished Div
let rightBlock = document.getElementById('rightItem');

//vector of check buttons
let btnVC;

//vector of delete buttons
let btnVD;

//counters
let notFinshedItemsNr = document.getElementById('lC');
let nfinr = 0;
let FinshedItemsNr = document.getElementById('rC');
let finr = 0;

let checkedElement = function(id, message)
{
    return `<div class="item" id="${id}done">
                <span class="itemp">${message}</span>
                <button class="btn btn-delete" id="delete">Delete</button>
            </div>`;
}

let checkElement = function(id, message)
{
    return `<div class="item" id="${id}">
                <span class="itemp">${message}</span>
                <button class="btn btn-check" id="${id}check">Check</button>
            </div>`;
}

//move the item from not finished to finished and add a delete button for every item
let checkEvent = function()
{
    rightBlock.innerHTML = rightBlock.innerHTML + checkedElement(id, this.parentNode.children[0].innerHTML);
    btnVD = document.getElementsByClassName('btn-delete');
    for(let i = 0; i < btnVD.length; i++)
    {
        btnVD[i].addEventListener('click',function() {this.parentNode.remove(); finr -=1; FinshedItemsNr.innerHTML = finr;});
    }
    nfinr -= 1;
    finr +=1
    id = id + 1;
    this.parentNode.remove();
    notFinshedItemsNr.innerHTML = nfinr;
    FinshedItemsNr.innerHTML = finr;
}

//add an item to not finished from input and give it a check button
let inputEnter = document.getElementById('addItem');
inputEnter.addEventListener('keypress', function(event) {
    if (event.keyCode == 13 && document.getElementById('addItem').value !=="") 
    {
        let item = document.getElementById('addItem').value;
        document.getElementById('addItem').value = "";
        leftBlock.innerHTML = leftBlock.innerHTML + checkElement(id,item);
        btnVC = document.getElementsByClassName('btn-check');
        for(let i = 0; i < btnVC.length; i++)
        {
            btnVC[i].addEventListener('click',checkEvent);
        }
        nfinr = nfinr + 1;
        notFinshedItemsNr.innerHTML = String(nfinr);
        id = id + 1;
    }
})