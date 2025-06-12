# 🤖 Verilog Code Generator Chatbot

This project is an **AI-powered chatbot** that automatically generates **Verilog hardware description language (HDL) code** based on user queries. It combines the power of **Large Language Models (LLMs)**, a lightweight **Phi-2 model**, and a full-stack MERN web application to provide a seamless experience for developers and students in digital electronics and FPGA/ASIC design.

---

## 🛠️ Tech Stack



### Dataset / Training 
-**Trained fine-tuned phi-2:**
-**Used curated Verilog datasets from GitHub & textbooks**
-**Tokenized, cleaned, and prepared with Hugging Face’s datasets library**
-**Fine-tuned on Google Colab / local GPU**

### 🔍 Backend:
- **Python 3**
- **FastAPI** – for creating REST APIs
- Finetuning done in jupyter notebook
- **Hugging Face Transformers** – for inference using the `Phi-2` model
- **Phi-2 LLM** – for generating accurate Verilog HDL code from natural language prompts

### 🖥️ Frontend:
- **React.js**
- **Material UI (MUI)** – for modern, responsive UI components

### 🧠 Full Stack:
- **MERN Stack**:
  - **MongoDB** – stores user input and generated code
  - **Express.js** – server layer for communication
  - **React.js** – user interface
  - **Node.js** – backend logic

---

## ⚙️ Features

- 🧾 **Chat interface** to enter natural language hardware queries
- 🔁 **LLM-based Verilog code generation**
- 🧠 **Inference using Phi-2** model hosted via Hugging Face Transformers
- 📤 **FastAPI backend** for handling model requests
- 🌐 **MERN stack integration** for persistent storage and frontend interaction
- 📦 Fully containerized and deployable

---

## 💬 Example Prompts

> "Generate a Verilog module for a 4-bit ripple carry adder"  
>  
> "Create a Verilog testbench for a D flip-flop"

---

## 🚀 How It Works

1. **Frontend** (React) captures user prompt
2. **Backend** (FastAPI) routes the prompt to a locally/inference-hosted `phi-2` LLM
3. **Hugging Face Transformers** infer Verilog code
4. Generated code is returned and displayed on the frontend
5. MongoDB stores the prompt + code for history/reuse

---

## 🧪 Local Setup Instructions

1. Clone the repo:

```bash
git clone https://github.com/reddymeghna/verilog-code-generator.git
cd verilog-code-generator


![Screenshot (47)](https://github.com/user-attachments/assets/2244e7f0-7d7c-4347-ac39-fd1f0fc3031e)
![Screenshot (45)](https://github.com/user-attachments/assets/10a39432-e945-4ec6-9771-0c23bbf370cd)
![Screenshot (44)](https://github.com/user-attachments/assets/902b89b5-dc08-40eb-9508-36a756be5f80)
![Screenshot (51)](https://github.com/user-attachments/assets/bd1ebdee-3f0c-40f4-8481-4525931f6aaf)

![Screenshot (52)](https://github.com/user-attachments/assets/47bcac7d-b0e0-467d-9f0b-6a9091b0de70)
![Screenshot (53)](https://github.com/user-attachments/assets/768ef7ad-ca7c-4d07-bcde-4358542ceba8)
