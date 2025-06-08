# 🧠 Article Summarizer (Multiple Modes)

This project showcases a powerful prompt engineering technique that summarizes long-form text (articles/blogs) in **multiple modes**, using different prompt styles.

## 📌 Features

- 📋 Summarize articles into **bullet points**
- 👶 Explain like a **5th grader**
- 🐦 Condense to **280 characters** for X (Twitter)
- 🎭 Summarize in **different tones**: formal, humorous, sarcastic, etc.

## 🧪 Prompt Styles Used

- Few-shot prompting
- Format control
- Style/tone conditioning


## 🚀 How to Use

1. Pick a long article and paste it into `sample_article.txt`.
2. Choose the mode and use the corresponding prompt in `modes/`.
3. Input both into your preferred LLM (like GPT-4 or Claude).
4. Save the output into the `examples/` folder.

## 🗂️ File Structure

article-summarizer/
├── prompt.md # Master prompt guide
├── README.md # Project description
├── examples/ # Input + Output examples
│ ├── sample_article.txt
│ ├── summary_bullets.txt
│ ├── summary_5thgrader.txt
│ ├── summary_tweet.txt
└── modes/ # Prompts for each summarization mode
├── bullet_summary_prompt.txt
├── simple_summary_prompt.txt
├── tweet_summary_prompt.txt
└── tone_variations_prompt.txt




## 📜 License

MIT License
