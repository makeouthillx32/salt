document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('hero2');
    if (container) {
        console.log('3D container found:', container);

        const modelViewerContainer = document.createElement('div');
        modelViewerContainer.className = 'model-viewer-container';

        const modelViewer = document.createElement('model-viewer');
        modelViewer.src = 'images/unenterlogom.glb'; // Path to the GLB file
        modelViewer.setAttribute('alt', '3D model of an object');
        modelViewer.setAttribute('auto-rotate', '');
        modelViewer.setAttribute('camera-controls', '');
        modelViewer.setAttribute('shadow-intensity', '1');
        modelViewer.setAttribute('environment-image', 'https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr');
        modelViewer.setAttribute('exposure', '1'); // Adjust exposure for better lighting
        modelViewer.setAttribute('auto-rotate-delay', '2000'); // Delay before auto-rotation starts
        modelViewer.setAttribute('interaction-prompt', 'when-focused'); // Show interaction prompt when focused
        modelViewer.setAttribute('interaction-prompt-threshold', '3000'); // Delay for interaction prompt

        // Add background color and other properties to the model viewer
        modelViewer.style.backgroundColor = 'white'; // Set viewport background color to black
        modelViewer.style.borderRadius = '10px';
        modelViewer.style.transition = 'transform 0.5s ease, opacity 0.5s ease';

        // Modify shadow to be white
        const shadowElement = document.createElement('div');
        shadowElement.className = 'model-shadow';
        modelViewer.appendChild(shadowElement);

        // Add event listeners for interactivity
        modelViewer.addEventListener('load', () => {
            console.log('3D model loaded');
        });

        modelViewer.addEventListener('model-visibility', (event) => {
            console.log('Model visibility changed:', event.detail.visible);
        });

        modelViewer.addEventListener('camera-change', () => {
            console.log('Camera angle changed');
        });

        modelViewerContainer.appendChild(modelViewer);
        container.appendChild(modelViewerContainer);
    } else {
        console.error('3D container not found');
    }
});

