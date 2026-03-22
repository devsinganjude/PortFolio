# -*- coding: utf-8 -*-
import shutil

src = r"C:\Users\devsi\.gemini\antigravity\brain\415fc078-6003-46fa-9836-7b96cca07a15\studev_project_mockup_1774188406485.png"
dst = r"c:\Users\devsi\OneDrive\사진\문서\GitHub\PortFolio\assets\images\project_studev.png"

try:
    shutil.copyfile(src, dst)
    print("Copied successfully!")
except Exception as e:
    print("Failed: " + str(e))
