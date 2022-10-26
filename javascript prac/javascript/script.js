window.onload = function()
{
    var myForm = document.getElementById("myForm");
    var submitButton = document.getElementById("myForm").submitButton;

    var info = document.getElementById("info");
    
    submitButton.onclick = function(e)
    {
        var tmpString = "";
        for (var i = 0; i < myForm.courseName.length; i++)
        {
            if (myForm.courseName[i].checked)
            tmpString += myForm.courseName[i].value + " ";
        }

        info.innerHTML += tmpString + "<br>";
        
        e.preventDefault();
    };

    myForm.acceptationOfToS[0].onclick = function()
    {
        submitButton.disabled = false;
    };
    myForm.acceptationOfToS[1].onclick = function()
    {
        submitButton.disabled = true;
    };
}; 