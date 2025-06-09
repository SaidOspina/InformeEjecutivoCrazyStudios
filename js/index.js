// Add interactive functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Add click handlers for resource links
            const resourceButtons = document.querySelectorAll('.resource-link');
            resourceButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const input = this.parentElement.querySelector('input[type="url"], input[type="file"]');
                    if (input && input.type === 'url' && input.value) {
                        window.open(input.value, '_blank');
                    } else if (input && input.type === 'file') {
                        input.click();
                    }
                });
            });

            // Animate progress bars on load
            setTimeout(() => {
                const progressBars = document.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    bar.style.animation = 'none';
                    bar.offsetHeight; // Trigger reflow
                    bar.style.animation = 'pulse 2s infinite';
                });
            }, 1000);

            // Add file change handlers
            const fileInputs = document.querySelectorAll('input[type="file"]');
            fileInputs.forEach(input => {
                input.addEventListener('change', function() {
                    const button = this.parentElement.querySelector('.resource-link');
                    if (this.files.length > 0) {
                        button.textContent = '✓ Archivo Cargado';
                        button.style.background = 'linear-gradient(45deg, #00ff88, #00cc66)';
                    }
                });
            });
        });

        // Add custom CSS for pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { box-shadow: 0 0 15px rgba(0, 162, 255, 0.4); }
                50% { box-shadow: 0 0 25px rgba(0, 162, 255, 0.6); }
                100% { box-shadow: 0 0 15px rgba(0, 162, 255, 0.4); }
            }
        `;
        document.head.appendChild(style);