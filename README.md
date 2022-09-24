
# simple-image-compression
Compress images in the browser


## Usage
- view example/index.html
```html
<div class="example">
    <div class="title">图片上传压缩例子</div>
    <input type="file" name="file" id="file">
    <div class="box">
        压缩前大小(b): <span id="prev" style="margin-right: 40px"></span>
        压缩后大小(b): <span id="next"></span>
    </div>
</div>
```
``` js
 import compress from simple-image-compression
  const file = document.getElementById('file');
  file.addEventListener('change', async () => {
      const prev = document.getElementById('prev')
      const next = document.getElementById('next')
      prev.innerHTML = ""
      next.innerHTML = ""
      const f = file.files[0]
      const fileSize = f.size / 1024 / 1024;
      prev.innerHTML = f.size
      const quality = 1 / (Math.ceil(fileSize) + 4);
      const compressImageFile = await compress(f, quality)
      next.innerHTML = compressImageFile.size
      file.value = ""
  })

```


