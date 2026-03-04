import docx

def extract_text_from_docx(docx_path):
    doc = docx.Document(docx_path)
    full_text = []
    for para in doc.paragraphs:
        full_text.append(para.text)
    return '\n'.join(full_text)

if __name__ == "__main__":
    text = extract_text_from_docx("/home/admin/.openclaw/workspace/lobster-warehouse/撕歌APP官方音乐人认证活动详细执行流程.docx")
    with open("/home/admin/.openclaw/workspace/extracted_content.txt", "w") as f:
        f.write(text)