
/**
 * author -- chenguzhen87
 * 压缩图片文件
 */

export default function compressImageFile(imageFile: File, quality = 0.9) {
  return new Promise((resolve, reject) => {
    const objectURL = URL.createObjectURL(imageFile)
    const image = new Image()
    image.src = objectURL
    image.onload = () => {
      const width = image.width
      const height = image.height
      const canvas = document.createElement('canvas')
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      ctx.drawImage(image, 0, 0, width, height);
      canvas.toBlob((blob) => {
        blob ? resolve(blob) : reject(new Error('Failed'))
      }, imageFile.type, quality)
    }

    image.onerror = (error) => {
      reject(error || new Error('Failed'))
    }

  })

}
