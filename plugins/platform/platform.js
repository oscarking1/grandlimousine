import { STORAGE_URL } from '../../config';
function getImageUrlUsingPlatform(image, isIOS = false, fromServer = true) {
    return fromServer ? `${STORAGE_URL}/${image}` : `/${image}`;
    if (!isIOS) {
        let img = image.split('.');
        if (img.length == 2) {
            return fromServer ? `${STORAGE_URL}/${img[0]}.webp` : `/${img[0]}.webp`;
        }  
    } else {
        return fromServer ? `${STORAGE_URL}/${image}` : `/${image}`;
    }
}
function replaceImageExtentionUsingPlatform(content, isIOS = false) {
    // if (content) {
    //     if (!isIOS) {
    //         content = content.replace(/.jpeg/g, '.webp');
    //         return content.replace(/.jpg/g, '.webp');
    //     } else {
    //         return content.replace(/.webp/g,'.jpeg');
    //     } 
    // } 
    return content;
}
export {getImageUrlUsingPlatform,replaceImageExtentionUsingPlatform };