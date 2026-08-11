# Personal Profile Site

This is a static portfolio website you can deploy anywhere that serves HTML files, including GitHub Pages, Netlify, Vercel, Cloudflare Pages, or cPanel hosting.

## Edit Your Content

Open `data.js` and replace the placeholder values:

- `name`, `role`, `summary`, `about`, `email`, `github`, and `linkedin`
- `skills`
- `projects`
- `blogPosts`
- `certificates`
- `documents`

## Add Your Files

Place your real files in these folders:

- Profile photo: `assets/images/profile.jpg`
- Project videos: `assets/videos/project-one.mp4`, `project-two.mp4`, etc.
- Blog images and videos: `assets/images/` and `assets/videos/`
- Certificates: `assets/certificates/`
- CV and application documents: `assets/documents/`

Then update the matching paths in `data.js`.

## Recommended File Names

- `assets/images/profile.jpg`
- `assets/documents/cv.pdf`
- `assets/documents/cover-letter.pdf`
- `assets/documents/transcript.pdf`
- `assets/certificates/aws-certificate.pdf`
- `assets/videos/inventory-system-demo.mp4`

## Deploy

For GitHub Pages:

1. Put these files in a GitHub repository.
2. Go to repository settings.
3. Open Pages.
4. Select the branch and folder that contain `index.html`.
5. Save, then open the published URL.

For Netlify or Vercel:

1. Upload this folder or connect the GitHub repository.
2. No build command is required.
3. The publish directory is the folder containing `index.html`.
