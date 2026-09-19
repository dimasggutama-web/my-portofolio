import base64

with open('src/assets/profile_photo_b64.txt', 'r') as f:
    data_url = f.read().strip()

# Remove the data URL prefix
b64_str = data_url.replace('data:image/jpeg;base64,', '')

# Decode and save as JPG
img_data = base64.b64decode(b64_str)
with open('src/assets/profile-photo.jpg', 'wb') as f:
    f.write(img_data)

print(f'Saved profile-photo.jpg, size: {len(img_data)} bytes')
