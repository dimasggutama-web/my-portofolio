import re

# Try different encodings
for enc in ['utf-8', 'utf-16', 'latin-1', 'cp1252']:
    try:
        with open('original_full.js', 'r', encoding=enc) as f:
            content = f.read()
        # Look for full base64 string (not truncated)
        # The full one is after the desktop sidebar img tag
        m = re.search(r'src="(data:image/jpeg;base64,[^"]+)"[^>]*className="w-32', content)
        if m:
            full_src = m.group(1)
            b64_data = full_src.replace('data:image/jpeg;base64,', '')
            print(f'Found with {enc}! B64 length: {len(b64_data)}')
            with open('src/assets/profile_photo_b64.txt', 'w') as out:
                out.write(full_src)
            break
        else:
            # Try any base64 that's long enough
            matches = re.findall(r'data:image/jpeg;base64,([A-Za-z0-9+/=]{100,})', content)
            if matches:
                longest = max(matches, key=len)
                print(f'Found via fallback with {enc}! Length: {len(longest)}')
                with open('src/assets/profile_photo_b64.txt', 'w') as out:
                    out.write('data:image/jpeg;base64,' + longest)
                break
            else:
                print(f'No match with {enc}')
    except Exception as e:
        print(f'Error with {enc}: {e}')
