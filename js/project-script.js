document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Button Hover Ripple / Magnet Effect (Optional Polish)
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Subtle movement of button content
            btn.style.transform = `translateY(-2px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translateY(0)`;
        });
    });

    // 2. Mobile Video Stack Logic (Resize Observer)
    // Ensures video fits perfectly on resize
    const videoFrame = document.querySelector('.video-frame');
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            // Logic to pause video if hidden could go here if using local video
            // Currently utilizing CSS Flexbox to handle the stacking
        }
    });
    resizeObserver.observe(document.body);

    console.log("Project View Loaded: Split Layout Active");
});