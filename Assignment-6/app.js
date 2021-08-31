

const input=document.querySelector('input');

const ul=document.querySelector('ul');
let arr=[];


input.addEventListener('keypress',(e)=>{
    add(e.keyCode);
});


function add(a){

    if(a==13){
        arr.push(input.value)
        input.value=" ";
    }


    print();
    
}

function print(){
    ul.innerHTML=" ";


for(var i=0;i<arr.length;i++){

        var li_item =arr[i];

        var li=document.createElement("li");
      
        li.value=i;
      
      
        li.innerHTML=`

        <div class="box">
        
        <div class="div-out">


        <div class="item">

            <span> ${li_item}</span>
        </div>

        <div class="icon">

<button onclick="update(${i})" ><i class="fas fa-edit"></i></button>

<button onclick="dlte(${i})" ><i class="fas fa-trash-alt"></i></button>

<button onclick="up(${i})" ><i class="far fa-arrow-alt-circle-up"></i></button>

<button onclick="down(${i})" ><i class="far fa-arrow-alt-circle-down"></i></button>


                </div>
            </div>

            </div>
        `;




    ul.appendChild(li);

    }
}


function update(a){
    var person = prompt("Please enter new value", `${arr[a]}`);
    if (person != null) {
        arr[a]=person;
        print();
    }
}


function dlte(a){
    if(a==arr.length){
        arr.pop();
    }
    else{
        arr.splice(a,1);
    }
    print();
        
}




function up(a){
    if(a>0){
        let temp=arr[a];
        arr[a]=arr[a-1];
        arr[a-1]=temp;
        print();
    }
    
    
}
function down(a){
    if(a<arr.length-1){
        let temp=arr[a];
        arr[a]=arr[a+1];
        arr[a+1]=temp;
        print();
    }
}


