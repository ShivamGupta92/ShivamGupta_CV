// (function () {
//     "use strict";
  
//     let forms = document.querySelectorAll('.contactMeForm');
  
//     forms.forEach(function (e) {
//       e.addEventListener('submit', function (event) {
//         event.preventDefault();
  
//         let thisForm = this;
  
//         let action = URL;
        
//         thisForm.querySelector('.loading').classList.add('d-block');
//         thisForm.querySelector('.error-message').classList.remove('d-block');
//         thisForm.querySelector('.sent-message').classList.remove('d-block');
  
//         let formData = new FormData(thisForm);
  
//         fetch(action, {
//           method: 'POST',
//           body: formData,
//         //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         })
//           .then(response => {
//             if (response.ok) {
//               return response.json();
//             } else {
//               throw new Error(`${response.status} ${response.statusText} ${response.url}`);
//             }
//           })
//           .then(data => {
//             thisForm.querySelector('.loading').classList.remove('d-block');
//             if (data.result === 'success') {
//               thisForm.querySelector('.sent-message').classList.add('d-block');
//               thisForm.reset();
//             } else {
//               throw new Error(data ? data.result : 'Form submission failed and no error message returned from: ' + action);
//             }
//           })
//           .catch((error) => {
//             displayError(thisForm, error);
//           });
//       });
//     });
  
//     function displayError(thisForm, error) {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       thisForm.querySelector('.error-message').innerHTML = error;
//       thisForm.querySelector('.error-message').classList.add('d-block');
//     }
//   })();


(function () {
    "use strict";
    let form = document.querySelector('.contactMeForm');
  
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        // Store a reference to the current form in the 'thisForm' variable
        let thisForm = this;
        // let action = process.env.GOOGLE_SCRIPT_URL;
        let action = "https://script.google.com/macros/s/AKfycbxITdweM4ReGodmudKFNx4sFpvhS4sRyVaLzRPMqdp9muNQWk6RykOEKw5YshnQ9AQ/exec";
        thisForm.action = action;

        // Show the loading indicator, and hide any error or success messages
        thisForm.querySelector('.loading').classList.add('d-block');
        thisForm.querySelector('.error-message').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.remove('d-block');
  
        // Create a FormData object from the current form
        let formData = new FormData(thisForm);
  
        // Perform a fetch request to the specified 'action' URL
        fetch(action, {
            method: 'POST',
            body: formData,
            // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then(response => {
            // Check if the response status is ok (200-299)
            if (response.ok) {
                // Parse the response as JSON and return it
                return response.json();
            } else {
                // Throw an error with information about the response status, status text, and URL
                throw new Error(`${response.status} ${response.statusText} ${response.url}`);
            }
        })
        .then(data => {
            
            thisForm.querySelector('.loading').classList.remove('d-block');
            if (data.result === 'success') {
                thisForm.querySelector('.sent-message').classList.add('d-block');
                thisForm.reset();
            } else {
                throw new Error(data ? data.result : 'Form submission failed and no error message returned from: ' + action);
            }
        })
        .catch((error) => {
            displayError(thisForm, error);
        });
    });
  
    function displayError(thisForm, error) {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.error-message').innerHTML = error;
        thisForm.querySelector('.error-message').classList.add('d-block');
    }
})();
