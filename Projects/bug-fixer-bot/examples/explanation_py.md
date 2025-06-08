The code was trying to divide a number by zero, which causes a ZeroDivisionError in Python.

I added a simple check: if `b == 0`, return a friendly message instead of dividing. This prevents the error.
