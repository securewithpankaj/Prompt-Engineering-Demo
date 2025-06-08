# 🧠 Bug-Fixer Bot - Master Prompt

This project uses instructive and chain-of-thought style prompts to debug and fix code.

---

## Python Prompt Template

Act like a senior Python developer. You will receive:

A code snippet

An error message

Your tasks:

Identify the root cause of the bug

Rewrite the fixed version of the code

Explain the fix in simple terms

Code:
[def divide(a, b):
    return a / b

print(divide(10, 0))]

Error:
[Paste error message here]



---

## JavaScript Prompt Template

You are a JavaScript debugging expert.

Input:

A buggy JS snippet

The console error or exception

Output:

The bug reason

The corrected code

A short, clear explanation

Code:
[Paste code here]

Error:
[Paste error message here]

