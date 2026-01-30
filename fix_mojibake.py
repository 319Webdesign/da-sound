from pathlib import Path
path = Path('app/produkte/[id]/page.tsx')
text = path.read_text()
text = text.encode('latin-1').decode('utf-8')
path.write_text(text)
