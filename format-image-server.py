from flask import Flask
from flask import request
import time
from PIL import Image
import numpy as np

app = Flask(__name__)

# Debug
# 启用时请确认该目录存在
# upload_dir = 'images/'


@app.route('/format_image', methods=['POST'])
def format_image():
    # 获取请求中的图片
    f = request.files['image']

    # 使用 PIL 的 Image 进行处理
    img = Image.open(f)

    # 新建白色背景，以便后续的 RGBA 合并
    background = Image.new('RGBA', img.size, (255, 255, 255))

    # Debug
    # image_new_path = upload_dir + 'L' + str(time.time()) + suffix

    # 将图片从 RGBA 模式转换成 L
    tmp = Image.alpha_composite(background, img).convert('L').resize((28, 28))

    # Debug
    # tmp.save(image_new_path)

    # 返回字符串形式的图片数据列表
    resp = str(np.array(tmp).tolist())

    return resp
