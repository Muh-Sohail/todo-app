
var myul = document.getElementById('ulist')
function add () {
    var myinput = document.getElementById('inputid')
    var myli = document.createElement('p')
    var mylitext = document.createTextNode(myinput.value)
    myli.appendChild(mylitext)
    myul.appendChild(myli)
    myinput.value=''

    var mydelbtn = document.createElement('button')
    var mydeltext = document.createTextNode('Delete')
    mydelbtn.appendChild(mydeltext)
    myli.appendChild(mydelbtn)
    mydelbtn.setAttribute('id','btn2')
    mydelbtn.setAttribute('onClick','del(this)')
    
    myebtn=document.createElement('button')
    myeidt=document.createTextNode('Edit')
    myebtn.setAttribute('id','btn2')
    myebtn.appendChild(myeidt)
    myli.appendChild(myebtn)
    myebtn.setAttribute('onClick','edit(this)')
}


function del(soh) {
    console.log('sdd;fsf;skf;sdkf;');
    console.log(soh);
    soh.parentNode.remove()
}

function delall() {
    myul.innerHTML=''
}

function edit(xyz) {
    var editvalue= xyz.parentNode.firstChild.nodeValue
    var edit=prompt('Enter Edit',editvalue)
    xyz.parentNode.firstChild.nodeValue=edit
}