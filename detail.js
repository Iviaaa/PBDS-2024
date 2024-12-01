const url = "https://script.googleusercontent.com/a/macros/yale.edu/echo?user_content_key=RljEB1xgIE3KTTmT2PjYvUdEwA7d8uojAcepx1C2Q9E_tMfhY40T0YHJekuftuTkJl86jxjtQmcVvQQp7svSyj2ttL1LketBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_Y3kL8lqf_Sk2DLGwV8tFz6X9rgX9eILDXa79m06p0SgaYYik7Dkp94gRq2y5IrkgbrlQnXcnUY4kZNKs_kxjyZ1dbeS6057rRjD7CLZfVZ-RqPkrcrm3fmoEBJ3qF9sE&lib=MAqYOAZeKRAW_i1KXMIU4iDGrWVy7x7rS";

const img_detail = document.getElementById("img-detail");

// // Fetch data from the URL
// fetch(url,{mode: 'no-cors'})
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();  // Parse the JSON response
//   })
//   .then(data => {
//     console.log(data);  // Handle the fetched JSON data
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

const fs = require('fs');
const path = require('path');

// Example imageList array
const imageList = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];

// Directory to save the generated HTML files
const outputDir = './img-detail';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

imageList.forEach((image, index) => {
    const fileName = path.basename(image, path.extname(image)) + '.html';
    const outputPath = path.join(outputDir, fileName);

    // HTML structure
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Detail - ${image}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            text-align: center;
        }
        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <h1>Details for ${image}</h1>
    <img src="${image}" alt="Image: ${image}">
    <p>This is a detail page for <strong>${image}</strong>.</p>
    <a href="index.html">Back to Gallery</a>
</body>
</html>
`;

    // Write HTML content to file
    fs.writeFileSync(outputPath, htmlContent, 'utf-8');
    console.log(`Generated ${outputPath}`);
});

