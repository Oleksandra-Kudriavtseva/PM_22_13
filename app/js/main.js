document.querySelector('body')
function myFunction() {
    //document.getElementById("overview").style.backgroundColor = "red";
    alert("Text");
}
function addProject(){
    var addproject=document.getElementById("addproject");
    if (addproject.style.display=="none"){
        addproject.style.display="block";
    }
    else {
        var list= document.getElementById("projectlist");

        var projectname= addproject.getElementsByTagName("input")[0].value;
        var isExist =false;
        list.querySelectorAll("li").forEach(element=>{
            if (element.textContent==projectname) {
                isExist = true;
            }
        });
        if (!isExist){
            var newelement= document.createElement("li");
            newelement.textContent=projectname;
            newelement.classList.add("list-group-item");
            list.appendChild(newelement);
            addproject.style.display="none";
        }else {
            alert("project is already exist");
        }

    }
}