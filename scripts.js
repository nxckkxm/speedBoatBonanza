document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate form fields
        let valid = true;
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (!valid) {
            alert('Please fill out all fields.');
            return;
        }

        // Send email using EmailJS
        const serviceID = 'service_horhueh';
        const templateID = 'template_yiwes18';

        const templateParams = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then(response => {
                alert('Message sent successfully!');
                form.reset();
            }, error => {
                alert('Failed to send message. Please try again.');
            });
    });
});
