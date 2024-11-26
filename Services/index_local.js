import { put } from '@vercel/blob';

async function uploadFile(filePath, fileName) {
    const fs = require('fs');
    const fileData = fs.readFileSync(filePath);

    const { url } = await put(fileName, fileData, {
        access: 'public',
        token: process.env.VERCEL_TOKEN, // Use your access token
    });

    console.log('Uploaded to:', url);
    return url;
}

// Example usage:
uploadFile('./bundle/addressable.bundle', `bundle.${Date.now()}.bundle`);
