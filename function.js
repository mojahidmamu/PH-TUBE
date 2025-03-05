function changePage(clickedButton, pageUrl) {
    // Remove 'active' class from all buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('bg-red-500', 'text-white');
        button.classList.add('bg-gray-300', 'text-black');
    });

    // Add 'active' class to the clicked button
    clickedButton.classList.remove('bg-gray-300', 'text-black');
    clickedButton.classList.add('bg-red-500', 'text-white');

    // Redirect to the selected page
    window.location.href = pageUrl;
}