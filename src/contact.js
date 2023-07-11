const form = document.getElementById('myForm');
const errorMessage = document.getElementById('errorMessage');
const modal = document.getElementById("myModal");
const closeButton = document.getElementsByClassName("close")[0];

      
        form.addEventListener("submit", function (event) {
         
          event.preventDefault();

      
          modal.style.display = "block";
          form.reset();
        });

        closeButton.addEventListener("click", function () {
  
          modal.style.display = "none";
        });



