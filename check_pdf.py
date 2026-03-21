import sys

def check_pdf_links(path):
    try:
        with open(path, 'rb') as f:
            data = f.read()
            has_annots = b'/Annots' in data
            has_link = b'/Link' in data
            has_uri = b'/URI' in data
            print(f"Has /Annots: {has_annots}")
            print(f"Has /Link: {has_link}")
            print(f"Has /URI: {has_uri}")
    except Exception as e:
        print(f"Error: {e}")

check_pdf_links('c:/Users/devsi/OneDrive/사진/문서/GitHub/PortFolio/assets/resume.pdf')
