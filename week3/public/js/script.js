const clickMe = () =>{
    alert("Thanks for clicking, have a nice day")
}

$(document).ready(function(){

$('#clickMeButton').click(()=>{
    clickMe();
})

});

