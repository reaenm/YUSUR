// Function to toggle between forms
function showForm(formId) {
    // Hide all forms
    var forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.classList.remove('active'));

    // Show the selected form
    document.getElementById(formId).classList.add('active');
    
    // Update active tab button
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}