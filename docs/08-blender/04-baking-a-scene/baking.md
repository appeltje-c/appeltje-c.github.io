# Baking a scene

## Process

* Create the scene, keep amount of vertices and complexity in mind
* Optimize by removing all faces that will be out of view
* Fix any incorrect face orientation
    - Check 'Face orientation' in the viewport overlay menu
    - This makes everything blue or red depending on the direction of the normals
    - The outside has to be blue
    - Select the red object, go into edit mode, select all vertices that are red
    - Use the search (F3) and look for flip
    - This flips the normals and make the object blue
* Normalize scales (make sure all scales are correctly applied)
    - Select all objects in the scene
    - Ctrl+A to get the 'Apply' context menu
    - Choose scale
* UV Unwrapping
    - Open the UV editor in a viewport
    - Select an object to unwrap and switch to edit mode
    - Select all vertices
    - Select 'Live Unwrap' from the viewport options menu  
    - Select 'U' for the unwrap menu
    - U+M is mark a side as seam
    - U+C is clear a seam
    - Make an unfold that makes sense to represent the whole object nicely flat
    - Resize to fit all on the on UV map
* 