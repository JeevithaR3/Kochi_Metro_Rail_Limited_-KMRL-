import fitz  # PyMuPDF
import pytesseract
from PIL import Image
import pandas as pd
from docx import Document
import json
import os

# Path to Tesseract OCR
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

class MultiFormatExtractor:
    def __init__(self):
        os.makedirs("outputs", exist_ok=True)

    def extract_pdf(self, filepath):
        """Extract text from a text-based PDF"""
        doc = fitz.open(filepath)
        text = ""
        for page in doc:
            text += page.get_text()
        return text

    def extract_image(self, filepath):
        """Extract text from image using OCR (English + Malayalam)"""
        return pytesseract.image_to_string(Image.open(filepath), lang="eng+mal")

    def extract_docx(self, filepath):
        """Extract text from Word file"""
        doc = Document(filepath)
        return "\n".join([p.text for p in doc.paragraphs])

    def extract_excel(self, filepath):
        """Extract text from Excel file"""
        df = pd.read_excel(filepath)
        return df.to_string()

    def save_output(self, filename, text):
        """Save extracted text into JSON"""
        with open(f"outputs/{filename}.json", "w", encoding="utf-8") as f:
            json.dump({"text": text}, f, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    extractor = MultiFormatExtractor()

    # Extract PDF
    pdf_text = extractor.extract_pdf("data/sample.pdf")
    extractor.save_output("sample_pdf", pdf_text)

    # Extract Image
    img_text = extractor.extract_image("data/sample.png")
    extractor.save_output("sample_img", img_text)

    # Extract Word DOCX
    docx_text = extractor.extract_docx("data/sample.docx")
    extractor.save_output("sample_docx", docx_text)

    # Extract Excel XLSX
    xlsx_text = extractor.extract_excel("data/sample.xlsx")
    extractor.save_output("sample_xlsx", xlsx_text)

    print("Extraction complete! Check the outputs/ folder.")
