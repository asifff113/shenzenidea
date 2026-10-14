"""Audit which components use the language context."""
from pathlib import Path

ROOT = Path(r"D:\projects\shenzenpresentation\app\src")
for f in sorted(ROOT.rglob("*.tsx")) + sorted(ROOT.rglob("*.ts")):
    if f.name == "LanguageContext.tsx":
        continue
    text = f.read_text(encoding="utf-8")
    uses_lang = "useLang" in text
    uses_t = bool([line for line in text.splitlines() if "t(" in line and "useLang" not in line])
    rel = str(f.relative_to(ROOT.parent))
    print(f"{'YES' if uses_lang else 'no ':3s} useLang={uses_lang!s:5s}  {rel}")
