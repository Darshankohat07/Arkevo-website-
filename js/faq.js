// ==========================================
// INTERACTIVE FAQ ACCORDION CONTROLLER
// Section: sections/faq.html
// ==========================================

function toggleFaq(questionEl) {
    const item = questionEl.parentElement;
    const wasActive = item.classList.contains('active');
    
    // Close all open items
    document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('active');
    });

    // Toggle selected item
    if (!wasActive) {
        item.classList.add('active');
    }
}
