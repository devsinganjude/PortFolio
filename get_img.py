import urllib.request
import ssl

ssl._create_default_https_context = ssl._create_unverified_context
url = 'https://image.thum.io/get/width/1200/crop/800/wait/4/https://studev-theta.vercel.app/'
path = r'c:\Users\devsi\OneDrive\사진\문서\GitHub\PortFolio\assets\images\project_studev.png'
print("Downloading image...")
try:
    urllib.request.urlretrieve(url, path)
    print("Downloaded project_studev.png successfully!")
except Exception as e:
    print(f"Failed to download image: {e}")
