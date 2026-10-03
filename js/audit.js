// ==========================================
// 30-MINUTE GROWTH AUDIT & DIAGNOSTIC FORM
// Section: sections/audit.html
// ==========================================

// Diagnostic Checklist Toggle
function toggleAuditItem(el) {
    el.classList.toggle('selected');
}

// Diagnostic Form Submit handler
function handleAuditSubmit(e) {
    e.preventDefault();
    const brand = document.getElementById('brandName').value;
    const email = document.getElementById('workEmail').value;
    const spend = document.getElementById('spendRange').value;
    const feedback = document.getElementById('formFeedback');
    
    if (feedback) {
        feedback.style.display = 'block';
        feedback.textContent = `✓ Audit requested for ${brand}! We have sent confirmation to ${email}.`;
        setTimeout(() => {
            feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}
