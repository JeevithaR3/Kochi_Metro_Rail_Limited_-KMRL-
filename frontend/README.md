Kochi Metro Rail Limited (KMRL) – AI-Powered Document Management System

📌 Problem Statement

Kochi Metro Rail Limited (KMRL) generates thousands of multi-format, multilingual documents daily—including engineering reports, HR policies, invoices, maintenance logs, and regulatory directives.

Current challenges:

* Difficulty in quickly identifying actionable information

* Delays in communication and decision-making

* Compliance risks due to scattered and unstructured data

* Limited cross-department collaboration


💡 Proposed Solution

Our solution is an AI-powered automated document management system that:

* Ingests multi-format, multilingual documents (PDF, DOCX, TXT, etc.)

* Generates actionable, department-specific summaries

* Provides intelligent routing of insights to the right departments

* Preserves traceability and ensures compliance

* Enables cross-department collaboration without manual intervention

This system reduces delays, improves efficiency, and ensures compliance by leveraging AI to simplify document workflows.



🎉 Tech Stack 

1. Data Extraction & Processing:
PyMuPDF (fitz): Extract text from PDFs
python-docx: Read MS Word documents
openpyxl: Read Excel sheets
Tesseract OCR + pytesseract: Extract text from scanned PDFs & images (English + Malayalam)
pandas & JSON: Normalize and store data

2. Translation & Language Detection:
langdetect: Detect English/Malayalam/hybrid text
deep-translator (GoogleTranslator API): Translate content into English

3. Storage & Backend:
MongoDB: Store structured documents and summaries
Node.js + APIs: Lightweight backend for routing and processing

4. AI & NLP:
NLP-based Summarization: Generate concise, actionable summaries
Vector Embeddings: Semantic search across past documents

5. Development Environment & Tools:
Python 3.10+, VS Code, Tesseract OCR (Windows), Virtual Environment (venv)



