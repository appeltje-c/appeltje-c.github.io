# Baking a scene

## Process

1 Create the scene, keep amount of vertices and complexity in mind

2 Optimize by removing all faces that will be out of view

3 Fix any incorrect face orientation

4 Check 'Face orientation' in the viewport overlay menu
    - This makes everything blue or red depending on the direction of the normals
    - The outside has to be blue
    - Select the red object, go into edit mode, select all vertices that are red
    - Use the search (F3) and look for flip
    - This flips the normals and make the object blue

5 Normalize scales (make sure all scales are correctly applied)
    - Select all objects in the scene
    - Ctrl+A to get the 'Apply' context menu
    - Choose scale

6 UV Unwrapping
    - Open the UV editor in a viewport
    - Select an object to unwrap and switch to edit mode
    - Select all vertices
    - Select 'Live Unwrap' from the viewport options menu  
    - Select 'U' for the unwrap menu
    - U+M is mark a side as seam
    - U+C is clear a seam
    - Make an unfold that makes sense to represent the whole object nicely flat
    - Resize to fit all on the on UV map

7 Bake Image
    - In the UV Editor select new image
    - Give it a name
    - Size 4096x4096
    - Color white
    - No Alpha
    - Generated type Blank
    - Check 32-bit float
    - Uncheck tiled

8 Save the texture
    - Click save as and select same folder as the blend file
    - Select file format Radiance HDR
    - Color RGB
    - Color space Linear

9 Set Bake image on each material
    - Open the shader editor
    - Go over all objects
    - For each material on an object we need to add an Image texture node
    - Shift+A - search - image texture
    - In the image texture node select the Baked image we created
    - Repeat for all materials in use by the objects

10 Baking settings
    - In the Render section choose 128 samples (higher is more qualirty but takes longer and more file size)
    - In the Bake section select Bake type combined
    - Select View from : Active Camera
    - 