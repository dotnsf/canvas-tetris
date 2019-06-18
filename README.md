# canvas-tetris

TETRIS with HTML5 Canvas, with [Obniz](https://obniz.io/) switch controls.


## Overview

**canvas-tetris** is originally developed with **Dionysis Zindros**, and I have forked and customized with Obniz switch control feature.

See following link for original codes:

https://github.com/dionyziz/canvas-tetris


## How to play TETRIS(original)

You can play TETRIS with just loading index.html, which does **NOT** has to be uploaded on HTTP server(You can open local index.html file with your browser).

- Left: left

- Right: right

- Up: rotate

- Down: down

- Space: drop


## How to play TETRIS with Obniz

At first, your Obniz need to be connected to internet with WiFi.

Before playing with Obniz, you can edit and save **js/controller.js** with your own Obniz ID:

```
  :
//. obniz
var obniz = new Obniz("XXXX-XXXX"); //. <-- Edit with your own Obniz ID
  :
```

Or even when you didn't edit and start it, you will be asked Obniz ID first.

Then you can control TETRIS not only with keyboards, but also with your Obniz switch:

- Left: left

- Right: right

- Push: rotate


## Licensing

This code is licensed under MIT.

https://github.com/dotnsf/canvas-tetris/blob/master/MIT-LICENSE.txt


## Copyright

2019 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.


## Original License

This software was originally developed by [Dionysis Zindros](https://github.com/dionyziz) in 2012 with [MIT license](https://github.com/dionyziz/canvas-tetris/blob/master/LICENSE.md).

https://github.com/dionyziz/canvas-tetris


This versions of software was forked and customized by [K.Kimura @ Juge.Me](https://github.com/dotnsf) in 2019 with [MIT license](https://github.com/dotnsf/canvas-tetris/blob/master/MIT-LICENSE.txt).


I appreciate for your distribution, Dionysis.
