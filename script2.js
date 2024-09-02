document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var ingredientsList = document.getElementById(targetId);
        if (ingredientsList.style.display === 'none') {
            ingredientsList.style.display = 'block';
        } else {
            ingredientsList.style.display = 'none';
        }
    });
});
