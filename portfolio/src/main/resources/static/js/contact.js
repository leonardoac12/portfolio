// Función principal del formulario
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        this.reset();
        sendContactForm(formData);
    });
}

// Envío de datos y notificación
async function sendContactForm(data) {
    try {
        const response = await fetch('/api/crear', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            showNotification('Mensaje enviado.');
        } else {
            throw new Error('Error en el servidor');
        }
    } catch (error) {
        showNotification('Error, mensaje no enviado.', true);
    }
}

// Notificación mejorada
function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    if (!notification) return;

    const icon = document.createElement('i');
    icon.className = isError ? 
        'notification-icon fas fa-exclamation-circle' : 
        'notification-icon fas fa-check-circle';

    notification.innerHTML = '';
    notification.appendChild(icon);
    notification.appendChild(document.createTextNode(message));
    
    notification.className = 'notification';
    if (isError) notification.classList.add('notification-error');
    else notification.classList.add('notification-success');
    
    notification.classList.add('notification-visible');
    
    setTimeout(() => {
        notification.classList.remove('notification-visible');
    }, 3000);
}