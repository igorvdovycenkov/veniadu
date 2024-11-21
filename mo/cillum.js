// Assuming 'gl' is your WebGL context
const gl = canvas.getContext('webgl');

// Create a new texture
const newTexture = gl.createTexture();

// Typically, you would configure the texture and load image data into it next
gl.bindTexture(gl.TEXTURE_2D, newTexture);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, someImageElement);

// Set texture parameters (optional)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

// Optionally generate mipmaps (if needed)
gl.generateMipmap(gl.TEXTURE_2D);

// After setting up the texture, you would typically bind it to a shader program and render it

