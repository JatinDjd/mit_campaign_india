# Campaign Readme

Welcome to the **Campaign** repository! This repository houses the codebase for our web project, focusing on streamlined design and development practices. Below, you'll find essential information on how to navigate, contribute, and maintain this repository.

## Table of Contents

- [Introduction](#introduction)
- [Folder Structure](#folder-structure)
- [CSS Structure](#css-structure)
- [Media Files](#media-files)
- [Template Folder](#template-folder)
- [Contributing](#contributing)
- [Contributing](#key-points-for-frontend-devs)
- [Contributing](#deployment-process)
- [Getting Support](#getting-support)

## Introduction

This repository contains the source code for the **Campaign** web project. It's aimed at delivering elegant and efficient web designs while maintaining consistent styling throughout the application.

## Folder Structure

The repository follows a structured organization to ensure clarity and maintainability. Here's a high-level overview:

root/ \
├── assets/ \
│&emsp;&emsp;   ├── css/ \
│&emsp;&emsp;&emsp;&emsp;       ├── common.css \
│&emsp;&emsp;&emsp;&emsp;       ├── navbar.css \
│&emsp;&emsp;&emsp;&emsp;       ├── footer.css \
│&emsp;&emsp;&emsp;&emsp;       ├── specific-page.css (e.g., web-design.css) \
│&emsp;&emsp;   ├── js/ \
│&emsp;&emsp;&emsp;&emsp;       ├── common.js \
│&emsp;&emsp;&emsp;&emsp;       ├── navbar.js \
│&emsp;&emsp;&emsp;&emsp;       ├── footer.js \
│&emsp;&emsp;&emsp;&emsp;       ├── specific-page.js (e.g., web-design.js) \
├── template/ \
│&emsp;&emsp;   ├── headers/ \
│&emsp;&emsp;&emsp;&emsp;       ├── header1/ \
│&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;           ├── header.html \
│&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;           ├── header.css \
│&emsp;&emsp;&emsp;&emsp;       ├── header2/ \
│&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;           ├── header.html \
│&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;           ├── header.js \
│&emsp;&emsp;   ├── footers/ \
│&emsp;&emsp;   ├── forms/ \
│&emsp;&emsp;   ├── validations/ \
├── web-design.html \
└── README.md 


## CSS Structure

- `common.css`: Holds common styling elements used across the entire application.
- `navbar.css`: Contains styles for the navigation bar.
- `footer.css`: Contains styles for the footer section.
- `specific-page.css`: A specific CSS file for each distinct page (e.g., `web-design.css`) to keep styles separate and organized. (CSS or JS file must be named after the page it is going to be included.)
- `footer1.css`: Use incremental numeric values if you want to have multiple versions of a specific component. Avoid using keywords like "footer-new".

### Reserved CSS Classes
Don't use below listed class names to design any specific webpage. Only use it while creating a common css for all project pages.
1. `MIC-campaign-form`
2. `MIC-error-message hide intl-error`
3. `intl-phone`
## Media Files

We avoid cluttering the repository with media files. Instead, use live URLs to include images. Developers can upload images to `upload.masterinfotech.com` and acquire the media URL for integration into the project.
`upload.masterinfotech.com` will only allow limited images extantions. Please use this software to convert image files into webp format. https://www.xnview.com/en/xnconvert/#downloads 

If you still want to use images in you local for your comfort then please add images folder to `.gitignore` file.

## Template Folder

The `template` folder is vital for maintaining consistency and reducing redundant code. Please refrain from altering its contents. Use it as a reference or copy templates when creating new elements like headers, footers, forms, and validation codes.

## Contributing

We encourage contributions from the developer community. To contribute:

1. Test before on local before commiting or pushing the code to the repository.
2. Always take git pull before starting the work on this project and before pushing the code.
3. Always push code after section is complete do not wait for the END OF THE DAY.

Please ensure your contributions adhere to our coding standards and practices.

## Key Points for Frontend Devs

1. Do not use `@import` fonts in css files. Use `<link>` tags.
2. Making images responsive. Atleast make landing image and images above 100kb size have a resposive size to it. https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images


## Deployment Process

To deploy the latest changes to the live site:

!! Don't make code changes on live server. It will result in unmerged files and Sever Admin will be required to fix it. DON'T DO IT ON LIVE.

1. Log in to `https://techbuyhelp.com/cpanel` (campgain_usa is hosted on masterinfotech.co/cpanel and campaign_uk will be auto deployed).
2. Search for "Git Version Control".
3. Inside, locate the repository named `mit_campaign_india` (`campaign_usa` in case of masterinfotech.co/cpanel) and click "Manage".
4. Click the "Pull or Deploy" tab.
5. Click the "Update from Remote" button.
6. Finally, click the "Deploy HEAD Commit" button.

If after taking pull on live, changes are not still visible then please plush the cache on CloudFlare. You can also flush it by openig the link provided to you in the group.
## Getting Support

For any queries or assistance related to this repository, feel free to contact me at `sahil@masterinfotech.com`.

Thank you for being a part of the **Campaign** development team!

---
*Note: This README serves as a basic template. Feel free to enhance and tailor it to your project's specific needs. Contact admin for making chnages in readme file. Learn markdown here https://www.markdownguide.org/basic-syntax/*
