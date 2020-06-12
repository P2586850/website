document.addEventListener("click", showDate);

function showDate() 
{
    let d = new Date();
    alert(d.toDateString());
}