controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        5 
        4 
        2 
        `, mySprite, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.ashes, 500)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.ashes, 500)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
let mySprite3: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . 1 4 4 . . . . 4 4 4 1 . . . 
    . 1 5 5 5 e . . e 5 5 5 4 1 . . 
    1 5 5 5 5 5 e e 5 5 5 5 5 4 1 . 
    1 5 5 4 4 5 5 5 5 4 4 5 5 4 . 1 
    1 5 4 4 5 5 5 5 5 5 4 4 5 e . 1 
    1 e e 5 5 5 5 5 5 5 5 e e . . 1 
    1 . e 5 f 5 5 5 5 f 5 e . . . 1 
    1 . f 5 5 5 4 4 5 5 5 f . f f 1 
    1 . . 4 5 5 f f 5 5 6 f f 5 f 1 
    . 1 . f 6 6 6 6 6 6 4 f 5 5 f 1 
    . 1 . f 5 5 5 5 5 5 5 4 5 f 1 . 
    . . 1 . f 5 4 5 f 5 f f f 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(84, 0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    mySprite3 = sprites.create(img`
        . . 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 c . . c d d c 1 1 . . 
        1 1 b c f f d d b c . 1 1 . 
        1 c 3 b d b d b 3 c . . 1 . 
        1 c b 3 d d d 3 b f . . 1 1 
        1 d d d d d d d d e . . 1 1 
        1 d d d d d d d d e . b f 1 
        1 d d f d d f d d f . f d 1 
        1 b d d f f d d 2 f . f d 1 
        1 f 2 2 2 2 2 2 b b f f d 1 
        1 f b d d d d d d b b d 1 . 
        . 1 d d d d d b d d f f 1 . 
        . . 1 f f f d f f d 1 1 . . 
        . . . 1 1 1 1 1 1 1 . . . . 
        `, SpriteKind.Enemy)
    mySprite3.setPosition(randint(0, 160), 0)
    mySprite3.follow(mySprite, 45)
})
