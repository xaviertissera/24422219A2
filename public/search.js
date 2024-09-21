// Fetch categories
function fetchCategories() {
    fetch('/api/concertsx/categories')
        .then(response => response.json())
        .then(categories => {
            const categorySelect = document.getElementById('category');
            categorySelect.innerHTML = '<option value="">Select Category</option>'; // Default option

            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.CATEGORY_ID;
                option.text = category.NAME;
                categorySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
}
