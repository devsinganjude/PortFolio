import shutil
import os

src_dir = r"C:\Users\devsi\.gemini\antigravity\brain\7f6713a7-cfb7-4a4d-b794-6c8bc8864ceb"
dest_dir = r"c:\Users\devsi\OneDrive\사진\문서\GitHub\PortFolio\assets\images"

images = {
    "project_portfolio_1771775968811.png": "project_portfolio.png",
    "project_habit_tracker_1771775991046.png": "project_habit_tracker.png",
    "project_devboat_1771776012645.png": "project_devboat.png"
}

os.makedirs(dest_dir, exist_ok=True)

for src_name, dest_name in images.items():
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied {src_name} to {dest_path}")
    else:
        print(f"Source not found: {src_path}")

# Newly generated AI mockup for StuDev project
src_studev = r"C:\Users\devsi\.gemini\antigravity\brain\415fc078-6003-46fa-9836-7b96cca07a15\studev_project_mockup_1774188406485.png"
dest_studev = os.path.join(dest_dir, "project_studev.png")
if os.path.exists(src_studev):
    shutil.copy2(src_studev, dest_studev)
    print("Copied StuDev Mockup to assets")
