
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






