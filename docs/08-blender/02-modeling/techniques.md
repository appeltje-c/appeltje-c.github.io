# Techniques

## General Modeling

G   : Move
S   : Scale

Ctrl+R      : Loopcut
CMD+SHIFT+B : Bevel

## General Viewing

0       : Camera
1       : Front
Ctrl+1  : Back
7       : Top
Ctrl+7  : Bottom
3       : Left
Ctrl+3  : Right

~3          : Focus selected
Ctrl+Space  : Full screen
/           : Hide all except selected

## General Tools

N       : Tranform
T       : Modeling tools
Alt+E   : Extrude Menu
Shift+R : Repeat last action

## Selecting

Ctrl+B      : Box select
Crtl+Click  : Select all between selected and clicked
Ctrl+L      : Select all connected
Shift+S     : Cursor placement selection menu

## Making Pipes

1. Add a plane
2. In edit mode delete vertices and keep 1
3. Model the shape of your pipe by extruding
4. Select all vertices and choose CMD+SHIFT+B (Bevel)
5. Switch to Object Mode
6. Right Click and choose convert to curve
7. In the Object Data panel on the right, change the round - depth under Bevel
8. Increase resolution as needed
9. Convert back to mesh

Voila, there you have your pipe

## Make a hose

1. Add Curve -> Path
2. Go to Object Data tab -> Geometry
3. Add rounding Depth under Bevel
4. Go into edit mode and move the vertices to shape the hose
5. E to extrude longer hose

## Make a hole in a mesh

1. Add cylinder in the mesh where you want the hole
2. Select the mesh that needs to get the hole
3. Select Boolean from the modifiers menu
4. Select in the Boolean modifier the cylinder you placed
5. Apply the modifier and move the cylinder away

## Make a grid (diagonal)

1. Add a plane
2. Go into edit mode
3. Subdivide into 10 cuts
4. Add a Subdivision Surface modifier and
5. Increase to 2 levels and choose Simple
6. Add a Decimate modifier
7. Choose Un-Subdivide and increase Iterations to 1
8. Add a Wireframe modifier

## Make a grid (Straight)

## Cut parts of a mesh

## Using repeaters

## Using curbs

## All 54 modifiers

https://www.youtube.com/watch?v=idcFMhoSdIc

-- Generate Modifiers --
1. Array - 0:53
2. Bevel - 1:03
3. Boolean - 1:12
4. Build - 1:23
5. Decimate - 1:31
6. Edge Split - 1:39
7. Geometry Nodes - 1:51
8. Mask - 2:06
9. Mirror - 2:13
10. Subdivision Surface - 2:21
11. Multiresolution - 2:37
12. Remesh - 2:47
13. Screw - 2:58
14. Skin - 3:12
15. Solidfy - 3:29
16. Triangulate - 3:33
17. Volume to Mesh - 3:40
18. Weld - 3:49
19. Wireframe - 4:05

-- Deform Modifiers --
20. Armature - 4:15
21. Cast - 4:24
22. Curve - 4:33
23. Displace - 4:40
24. Hook - 4:49
25. Laplacian Deform - 4:58
26. Lattice - 5:15
27. Mesh Deform - 5:32
28. Shrinkwrap - 5:42
29. Simple Deform - 6:00
30. Smooth - 6:11
31. Smooth Corrective - 6:22
32. Smooth Laplacian - 6:34
33. Surface Deform - 6:47
34. Warp - 6:57
35. Wave - 7:12

-- Physics Modifiers --
36. Cloth - 7:33
37. Collision - 7:39
38. Dynamic Paint - 7:49
39. Explode - 8:04
40. Fluid - 8:12
41. Ocean - 8:18
42. Particle System - 8:31
43. Particle Instance - 8:43
44. Soft Body - 8:58

-- Modify Modifiers --
45. Data Transfer - 9:10
46. Mesh Cache - 9:25
47. Mesh Seq Cache - 9:41
48. Normal Edit - 9:50
49. Weighted Normal - 9:58
50. UV Warp - 10:09
51. UV Project - 10:23
52. Vertex Weight Edit - 10:39
53. Vertex Weight Mix - 10:47
54. Vertex Weight Proximity - 10:58