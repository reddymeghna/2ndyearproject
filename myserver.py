from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForCausalLM
# from peft import PeftModel, PeftConfig
# import torch

app = Flask(__name__)

# Load model directly
tokenizer = AutoTokenizer.from_pretrained("shailja/fine-tuned-codegen-16B-Verilog")
model = AutoModelForCausalLM.from_pretrained("shailja/fine-tuned-codegen-16B-Verilog")
@app.route('/generate-verilog', methods=['POST'])
def generate_verilog():
    data = request.get_json()
    prompt = data.get('prompt', '')

    inputs = tokenizer.encode(prompt, return_tensors='pt')
    outputs = model.generate(inputs, max_length=150, num_return_sequences=1)

    generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return jsonify({"generated_text": generated_text})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
