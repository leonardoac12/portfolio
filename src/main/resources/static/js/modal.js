function initModal() {
    const modal = document.getElementById('certification-modal');
    const modalImg = document.getElementById('modal-image');

    if (!modal) return;

    document.querySelectorAll('.certification-thumbnail').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.dataset.full;
        });
    });

    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
}