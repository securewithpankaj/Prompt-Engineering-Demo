# 🐞 Bug-Fixer Bot

This project uses prompt engineering with large language models to identify and fix bugs in Python or JavaScript code. It takes **code + error message** as input and outputs:

- The **bug cause**
- The **fixed code**
- A **simple explanation** of the fix

## 🧪 Prompt Style Used

- Chain-of-thought reasoning
- Instructive role prompt ("Act as a senior software engineer")

## 🚀 Technologies

- Python 🐍
- JavaScript 💻
- LLMs like GPT-4 or Claude

## 🗂️ File Structure

bug-fixer-bot/
├── README.md
├── prompt.md
├── examples/
│ ├── sample_code.py
│ ├── error_message.txt
│ ├── output_fixed_code.py
│ ├── explanation.txt
└── modes/
├── bugfix_python_prompt.txt
├── bugfix_js_prompt.txt


## ✅ How It Works

1. Copy the code that has a bug into `sample_code.py`
2. Copy the error message into `error_message.txt`
3. Use the corresponding prompt in `modes/`
4. Feed it to an LLM
5. Save the result in `examples/`


## 📜 License

MIT License
