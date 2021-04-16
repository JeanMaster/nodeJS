const sharp = require('sharp')

sharp('originales.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png')