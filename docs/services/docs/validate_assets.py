#!/usr/bin/env python3
"""Sanity check for the STROY services asset handoff; no third-party packages."""
from pathlib import Path
import json
root = Path(__file__).resolve().parents[1]
items = json.loads((root / 'services.json').read_text(encoding='utf-8'))
assert len(items) == 8 and len({i['id'] for i in items}) == 8
for i, item in enumerate(items, start=1):
    assert item['displayOrder'] == i, item
    for key in ('image', 'imageSmall'):
        assert (root / item[key].lstrip('/')).is_file(), item[key]
    if item.get('imageMobile'):
        assert (root / item['imageMobile'].lstrip('/')).is_file()
for name in ('house-outline','foliage-top-left','foliage-top-right','arrow-right','arrow-left'):
    assert (root / 'assets' / 'decorative' / (name+'.svg')).is_file()
print('OK: 8 services, image paths and all decorative SVGs are present.')
