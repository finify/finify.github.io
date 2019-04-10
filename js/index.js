

function addtolist(){
    var addtolist_val = document.getElementById("addtolist").value;
    var list_item = document.getElementById("list-items");
    var newli = document.createElement("li");
    var texttoadd = document.createTextNode(addtolist_val);
    newli.className = "listitems";
    newli.appendChild(texttoadd);
    list_item.appendChild(newli);

    alert(addtolist_val);
}

function generatelist(){
    var prefix_val = document.getElementById("prefix").value;
    var from_val = document.getElementById("from").value;
    var to_val = document.getElementById("to").value;

    var range = +to_val - +from_val;
    for(i=from_val; i<range+2; i++ ){
        
        var addtolist_val = prefix_val + from_val; 

        var list_item = document.getElementById("list-items");
        var newli = document.createElement("li");
        var texttoadd = document.createTextNode(addtolist_val);
        newli.className = "listitems";
        newli.appendChild(texttoadd);
        list_item.appendChild(newli);
        from_val++;
    }
}

function generategroup(){
    var group_item = document.getElementById("groups");
    var groupnum = document.getElementById("groupno").value; 

    for(i=1; i<=groupnum; i++ ){
        var newdivcover = document.createElement("div");
        var headertext = "GROUP" + i;
        var newdivhead = document.createElement("div");
        var newdivbody= document.createElement("div");
        var newdivul= document.createElement("ul");
        var headtexttoadd = document.createTextNode(headertext);
        //assigning atribute
        newdivcover.id = "group_container";
        newdivhead.id = "group_head";
        newdivbody.id = "group_body";
        newdivul.className = "listul";
        newdivbody.className = "grouplist";

        newdivhead.appendChild(headtexttoadd);
        newdivbody.appendChild(newdivul);
        newdivcover.appendChild(newdivhead);
        newdivcover.appendChild(newdivbody);
        group_item.appendChild(newdivcover);
    }
}
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}




function group(){
    var groups = document.getElementsByClassName("grouplist");
    var grouplistul = document.getElementsByClassName("listul");
    
    
    
    
    var sequential = document.getElementById("sq").checked;
    var random = document.getElementById("rd").checked;
    if(sequential){
        var listitems = document.getElementsByClassName("listitems");
        var innerloop = listitems.length/groups.length;
        
            if(Number.isInteger(innerloop)){
                j= 0;
                for(i=0; i<groups.length; i++){
                   
                    for(k=j; k<innerloop+j; k++){
                        var listtexttoadd = listitems[k].innerHTML;
                        var newlist= document.createElement("li");
                        var texttoadd = document.createTextNode(listtexttoadd);
                        newlist.appendChild(texttoadd);
                        grouplistul[i].appendChild(newlist);
            
                    }
                    j=k;
                }
            }else{
                var innerloop = Math.floor(listitems.length/groups.length)
                j= 0;
                for(i=0; i<groups.length; i++){
                   
                    for(k=j; k<=innerloop+j; k++){
                        var listtexttoadd = listitems[k].innerHTML;
                        var newlist= document.createElement("li");
                        var texttoadd = document.createTextNode(listtexttoadd);
                        newlist.appendChild(texttoadd);
                        grouplistul[i].appendChild(newlist);
            
                    }
                    j=k;
                }
                
            }
    }
    if(random){
        var listitems = document.getElementsByClassName("listitems");
        var list_item = document.getElementById("list-items");
        for (var i = list_item.children.length; i >= 0; i--) {
            list_item.appendChild(list_item.children[Math.random() * i | 0]);
        }
        var innerloop = listitems.length/groups.length;
        
            if(Number.isInteger(innerloop)){
                j= 0;
                for(i=0; i<groups.length; i++){
                   
                    for(k=j; k<innerloop+j; k++){
                        var listtexttoadd = listitems[k].innerHTML;
                        var newlist= document.createElement("li");
                        var texttoadd = document.createTextNode(listtexttoadd);
                        newlist.appendChild(texttoadd);
                        grouplistul[i].appendChild(newlist);
            
                    }
                    j=k;
                }
            }else{
                var innerloop = Math.floor(listitems.length/groups.length)
                j= 0;
                for(i=0; i<groups.length; i++){
                   
                    for(k=j; k<=innerloop+j; k++){
                        var listtexttoadd = listitems[k].innerHTML;
                        var newlist= document.createElement("li");
                        var texttoadd = document.createTextNode(listtexttoadd);
                        newlist.appendChild(texttoadd);
                        grouplistul[i].appendChild(newlist);
            
                    }
                    j=k;
                }
                
            }
    }
    



    

    

}

