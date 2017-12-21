# 绘制图形  
#### 矩形

填充的矩形

    ctx.fillRect(x, y, width, height)

矩形边框

    ctx.strokeRect(x, y, width, height)

清除矩形区域使其变透明

    ctx.clearRect(x, y, width, height)

#### 路径

新建一条路径

    beginPath()

移动到某个点再开始

    moveTo(x, y)

路径闭合

    closePath()

画线

    stroke()

填充，自动闭合路径

    fill()

#### 直线

    lineTo(x, y)

#### 圆弧

**(x, y)**为圆心，**radius**为半径，**startAngle** 和 **endAngle**为开始弧度和结束弧度，**anticlockwise**为方向，`true`是逆时针，`false`是顺时针

    arc(x, y, radius, startAngle, endAngle, anticlockwise)
eg.

    ctx.arc(10, 10, 5, 0, Math.PI * 2, true)

#### 贝塞尔曲线

二次贝塞尔曲线，**(cp1x, cp1y)**为控制点，**(x, y)**为结束点

    quadraticCurveTo(cp1x, cp1y, x, y)

三次贝塞尔曲线，**(cp1x, cp1y)**为控制点一，**(cp2x, cp2y)**为控制点二，**(x, y)**为结束点

    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

#### 矩形

    rect(x, y, width, height)

## Path2D

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);
    ctx.stroke(rectangle);

还可以克隆Path对象

    new Path2D(otherPathObj)