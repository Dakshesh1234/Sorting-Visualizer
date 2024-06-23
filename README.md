# Sorting_Visualizer
Just download and run the index file and there you go, you can see 10 sorting visuzlizations, change the size of array or change the visualization speed for better understanding
or click on this link https://dakshesh1234.github.io/Sorting-Visualizer/



Implemented algorithms:
 1) Bubble sort
 2) Selection sort
 3) Insertion sort
 4) Merge sort
 5) Quick sort
 6) Heap sort
 7) Cycle Sort
 8) Counting Sort
 9) Bucket Sort
10) Radix Sort

Features:
1) Colored representation of step being executed (For Comparison Based Algorithm).
     1.1) rgb(7, 178, 171):default
     1.2) Yellow: Being compared.
     1.3) Red: Identified as in incorrect position and to be moved
     1.4) Green: In correct position with respect to some partitions (in Case of Merge and Quick Sort)
     1.5) Green: In Final Correct Position.
   
*** Bucket Sort is between the counting Sort and Comparing Sort so for initially all the elements are copied to the bucket and from that it copied back to the original array - lightgreen, after that normal insertion sort performed for each bucket partitions in the original array ***

2) Colored representation of step being executed (For Counting Based Algorithm.
      2.1) rgb(7, 178, 171) : default
      2.2) lightblue: being counted
      2.3) lightgreen: being copied to other array in correct right position
      2.4) green: in correct position (for radix it will be green also when the corresponding digits are in correct position)

3) 3 Controls for visualizations
      3.1) Speed of visualization (6 speed levels)
      3.2) Data size ()
      3.3) Generation of new data (Randomly generate new data).

4) Time and Space complexity of algorithm being visualized.

Acknowledgement
I took inspirations from the following source for some of the segments.

Sorting Visualizer : https://www.youtube.com/watch?v=pFXYym4Wbkc

