document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.hero2-section');
    if (container) {
        console.log('3D container found:', container);

        const modelViewerContainer = document.createElement('div');
        modelViewerContainer.className = 'model-viewer-container';
        const modelViewer = document.createElement('model-viewer');
        modelViewer.src = 'images/unenterlogom.glb'; // Path to the GLB file
        modelViewer.setAttribute('alt', '3D model of an object');
        modelViewer.setAttribute('auto-rotate', '');
        modelViewer.setAttribute('camera-controls', '');
        modelViewerContainer.appendChild(modelViewer);
        container.appendChild(modelViewerContainer);
    } else {
        console.error('3D container not found');
    }
});