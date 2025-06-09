document.addEventListener('DOMContentLoaded', function() {
            // Animate progress bars on load
            setTimeout(() => {
                const progressBars = document.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    bar.style.animation = 'none';
                    bar.offsetHeight; // Trigger reflow
                    bar.style.animation = 'pulse 2s infinite';
                });
            }, 1000);
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