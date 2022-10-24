let counter = 2;

function like(){
    counter = counter += 1;
    document.getElementById("likes")
    .innerHTML = counter +  " likes";
}

function deslike(){
    counter = counter -= 1;
    document.getElementById("likes")
    .innerHTML = counter + " likes";
}
