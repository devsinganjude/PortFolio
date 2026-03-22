# -*- coding: utf-8 -*-
import urllib.request

path = r"c:\Users\devsi\OneDrive\사진\문서\GitHub\PortFolio\assets\images\project_studev.png"
url = "https://image.thum.io/get/width/1200/crop/800/wait/4/https://studev-theta.vercel.app/"

req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        with open(path, 'wb') as out:
            out.write(response.read())
    print("Downloaded successfully to", path)
except Exception as e:
    print("Download failed:", e)
