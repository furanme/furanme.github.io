document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');


    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            const activeTab = document.querySelector('.tab-button.active');
            const activeContent = document.querySelector('.tab-content.fade-in');

            if (activeTab) {
                activeTab.classList.remove('active');
            }
            if (activeContent) {
                activeContent.classList.add('fade-out');
                setTimeout(() => {
                    activeContent.style.display = 'none';
                    activeContent.classList.remove('fade-in', 'fade-out');
                }, 100);
            }

            const targetTab = event.currentTarget;
            const targetContentId = targetTab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetContentId);

            targetTab.classList.add('active');
            targetContent.style.display = 'block';
            targetContent.classList.add('fade-in');
        });
    });
});
document.getElementById('messagebutton').addEventListener('click', function() {
    alert('I might be retarded. Add 835o on discord for messages.');
  });

