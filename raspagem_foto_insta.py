import instaloader
loader = instaloader.Instaloader()
user = "kaliuchis" #nome da conta do iinstagram
posts = instaloader.Profile.from_username(loader.context, user).get_posts()
downloaded = 0

for post in posts:
    if (downloaded > 15):
        break
    if (post.is_video != True):
        loader.download_post(post, user)
        downloaded += post.mediacount
print("Downloaded 15 images.")