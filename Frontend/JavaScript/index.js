
var form=document.querySelector("#form-content");

var chatResult = document.getElementById('chat-result');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the search query from the input field
    const query = document.getElementById('propmt-text').value;

    // Send the search query to the backend

    fetch("/Search",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({query})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the response from the backend
      
        displayResult(data)
        console.log("Data",JSON.stringify(data));
        // You can update the UI or perform any other actions here
    })
    .catch(error => {
        console.error("There was a problem with your fetch operation:", error);
    });
});

document.querySelector("#abt").addEventListener("onclick",function (event) {
    console.log("Abt Btn Clicked");
    event.preventDefault();
    
    fetch("/About.html",{
        method:"GET",
    })
})


document.querySelector("#hp").addEventListener("onclick",function (event) {
    console.log("help Btn Clicked");
    event.preventDefault();
    
    fetch("/Help.html",{
        method:"GET",
    })
})

document.querySelector("#feed").addEventListener("onclick",function (event) {
    console.log("Feed Btn Clicked");
    event.preventDefault();
    
    fetch("/feedback.html",{
        method:"GET",
    })
})

function displayResult(result) {
    const message = JSON.stringify(result.data); // Assuming the response contains a message property
    // Update the chat area with the result
    chatResult.value+= message + '\n'+"-------------------------------------\n"; // Set value instead of appending
    // Optionally, scroll the chat area to the bottom
    chatResult.scrollTop = chatResult.scrollHeight;
}